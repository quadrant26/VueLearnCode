import Vue from 'vue'
import Vuex from 'vuex'

// 1. 装载插件
Vue.use(Vuex)

// 2. 创建对象
const store = new Vuex.Store({
  state: {
    counter: 10,
    students: [
      {id: 110, name: 'why', age: 18},
      {id: 111, name: 'kobe', age: 24},
      {id: 112, name: 'james', age: 30},
      {id: 113, name: 'lily', age: 10},
    ]
  },
  mutations: {
    // 方法
    increment(state){
      state.counter ++;
    },
    decrement (state){
      state.counter --;
    },
    incrementCount(state, number){
      state.counter += number;
    },
    addStudent(state, stu){
      state.students.push(stu);
    }
  },
  actions: {},
  getters: {
    powerCount(state) {
      return state.counter * state.counter;
    },
    more20stu (state){
      return state.students.filter( s => s.age >= 20 )
    },
    more20stuLength(state, getters){
      // return state.students.filter( s => s.age >= 20 )
      return getters.more20stu.length;
    },
    moreAgestu (state){
      // 返回一个函数（getters 方法传递了参数）
      // 第一种写法
      return function (age){
        return state.students.filter( s => s.age >= age )
      }
      // 第二种写法
      return age => { return state.students.filter( s => s.age >= age )}
    }
  },
  modules: {}
});


// 3. 导出
export default store;
