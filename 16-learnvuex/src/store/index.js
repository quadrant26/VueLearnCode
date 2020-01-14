import Vue from 'vue'
import Vuex from 'vuex'

import {INCREMENT, DECREMENT} from './mutations-types'

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
    ],
    info: {
      name: "mars",
      age: 123,
      height: 189
    }
  },
  mutations: {
    // 方法
    [INCREMENT](state){
      state.counter ++;
    },
    [DECREMENT] (state){
      state.counter --;
    },
    incrementCount(state, number){
      // payload 负载
      // 1. 普通的提交风格
      // state.counter += number;

      // 2. 特殊的提交封装
      console.log(number)

    },
    incrementCount2(state, payload){
      // payload 负载
      // 2. 特殊的提交封装
      state.counter += payload.number;

    },
    addStudent(state, stu){
      state.students.push(stu);
    },
    updateInfo (state){
      state.info.name = "mercury"

      // 该方法做不到响应式
      // state.info['address'] = '洛杉矶';
      // 该方法做不到响应式
      // delete state.info.age;


      // 响应式操作
      // 方式一：
      // 响应式添加新的项
      // Vue.set(state.info, "address", "洛杉矶")
      // 删除
      // Vue.delete(state.info, 'age')

      // 方式二：
      // state.info = {...state.info, 'height': '123'};

      // error 错误，不能在 mutations 进行异步操作
      // setTimeout( () => {
      //   state.info.name = "mercury"
      // }, 1000)
    },
    updateInfo2 (state){
      state.info.name = "mercury"
    }
  },
  actions: {
    aUpdateInfo (context){
      setTimeout( () => {
        // state.info.name = "mercury"
        context.commit('updateInfo')
      }, 1000)
    },
    aUpdateInfo2 (context, payload){
      console.log(payload)
    },
    aCallback (context, payload){
      // setTimeout( () => {
      //   context.commit('updateInfo')
      //   console.log(payload.msg)
      //   payload.success();
      // })

      return new Promise((resolve, reject) => {
        setTimeout( () => {
          context.commit('updateInfo2');
          console.log(payload)

          resolve('1111')
        }, 1000)
      })
    }
  },
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
