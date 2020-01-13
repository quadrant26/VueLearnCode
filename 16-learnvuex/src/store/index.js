import Vue from 'vue'
import Vuex from 'vuex'

// 1. 装载插件
Vue.use(Vuex)

// 2. 创建对象
const store = new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  getters: {},
  modules: {}
});


// 3. 导出
export default store;
