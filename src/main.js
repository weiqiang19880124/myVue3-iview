// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import store from './store'
import $ from 'jquery'
import 'view-design/dist/styles/iview.css';
import echarts from 'echarts'
import {Message} from 'view-design'


//存在prototype中
Vue.prototype.$http = axios
Vue.prototype.$echarts = echarts
Vue.prototype.$Message =Message;

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
