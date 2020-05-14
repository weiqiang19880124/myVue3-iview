import Vue from 'vue'
import Router from 'vue-router'
import iot from './iot'

Vue.use(Router)

const routes = [
  ...iot
]
const router = new Router({
  mode: 'history',
  routes
})

// 路由拦截
router.beforeEach((to, from, next) => {

  let token = localStorage.getItem('token')
  if (token) {
    next()
  } else {
    if (to.path === '/login') {
      next()
    }else{
      next('/login')
    }

  }
})
export default router
