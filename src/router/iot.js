/*
import BoxHome from '@/components/intelligentBox/boxhome'      //主页

const sound = [
  {
    name:'BoxHome',
    path:'/boxHome',
    component: resolve => require(['@/components/intelligentBox/boxhome'], resolve),
  }
]

export default sound*/



const iot = [
  {
    path: '/',
    name: 'iotHome',
    component: resolve => require(['@/components/iotHome'], resolve),
    children:[
      {path:'/',component:resolve => require(['@/components/iotGuide'], resolve)},
      {path:'iotGuide',component:resolve => require(['@/components/iotGuide'], resolve)},
      {path:'iotMy',component:resolve => require(['@/components/iotMy'], resolve)},
    ]

  },
  {
    path: '/login',
    name: 'Login',
    component: resolve => require(['@/components/login'], resolve),
  }
]

export default iot
