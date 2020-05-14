
import * as types from '../mutations-type'
import Vue from 'vue'
const iot = {
  state: {
    curPage:9,
    nowNum:1,
    totalNum:0,
    user:'lilei'
  },
  getters: {
    getCurPage (state) {
      console.log(state.curPage, '这是从vuex里边拿到的')
      return state.curPage+1
    },
    getCurrentNum (state) {
      return state.nowNum
    },
  },
  setters: {},
  mutations: {
    [types.TOTAL_NUM] (state, data) {
      Vue.set(state,'totalNum',data)
      console.log(state.totalNum,'改变后totalNum的值')
    },
    [types.SET_USER] (state, data) {
      state.user = data
      console.log(state.user,'异步改变user的值')
    },
    [types.CURPAGE] (state, data) {
      state.curPage = data
    }

  },
  actions: {
    logout ({commit},data) {
      commit(types.SET_USER, data)
    },
    getActionTest ({commit}) {   //异步仅测试
      let res=100;
      commit(types.CURPAGE, res)
    },
  }
}
export default iot
