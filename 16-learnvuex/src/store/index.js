import Vue from 'vue'
import Vuex from 'vuex'

// 1. 装载插件
Vue.use(Vuex)

// 2. 创建对象
const store = new Vuex.Store({
  state: {
    counter: 10,
  },
  mutations: {
    // 方法
    increment(state){
      state.counter ++;
    },
    decrement (state){
      state.counter --;
    }
  },
  actions: {},
  getters: {},
  modules: {}
});


// 3. 导出
export default store;
