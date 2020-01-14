<template>
  <div id="app">
    <h6>----------APP 内容---------</h6>
    <h2>{{message}}</h2>
    <p>{{$store.state.counter}}</p>

    <button @click="subtraction">-</button>
    <button @click="addition">+</button>

    <button @click="addcount(10)">+10</button>
    <button @click="addcount(5)">+5</button>
    <button @click="addcount2(5)">+5 提交风格</button>
    <button @click="addStudent">添加学生</button>
    <button @click="updateInfo">修改info</button>
    <button @click="aUpdateInfo">修改info actions</button>
    <button @click="aUpdateInfo2">传递参数actions</button>
    <button @click="aCallback">actions callback</button>


    <p>{{$store.getters.moreAgestu(18)}}</p>
    <p>{{more20stus}}</p>

    <h6>----------APP getters---------</h6>
    <p>{{$store.getters.powerCount}}</p>
    <p>{{$store.getters.more20stu}}</p>
    <p>大于20的学生个数：{{$store.getters.more20stuLength}}</p>


    <p>{{$store.state.info}}</p>

    <h6>----------HelloVuex 内容---------</h6>
    <hello-vuex :counter="counter"></hello-vuex>
  </div>
</template>

<script>
import HelloVuex from '@/components/HelloVuex'
import {INCREMENT} from '@/store/mutations-types'

export default {
  name: 'App',
  data (){
    return {
      message: "我是App组件",
      counter: 0,
    }
  },
  computed : {
    more20stus(){
      // return this.$store.state.students.filter( s => {
      //   return s.age >= 20;
      // })

      return this.$store.state.students.filter( s => s.age >= 20)
    }
  },
  components: {
    HelloVuex
  },
  methods: {
    subtraction (){
      this.$store.commit(DECREMENT)
    },
    addition (){
      this.$store.commit(INCREMENT)
    },
    addcount (number){
      // payload 负载
      // 1. 普通的提交风格
      this.$store.commit('incrementCount', number)
    },
    addcount2 (number){
      // 2. 特殊的提交封装
      this.$store.commit({
        type: 'incrementCount2',
        number
      })
    },
    addStudent (){
      const stu = {id: 114, name: 'amy', age: 35};
      this.$store.commit('addStudent', stu);
    },
    updateInfo (){
      this.$store.commit('updateInfo')
    },
    aUpdateInfo (){
      this.$store.dispatch('aUpdateInfo')
    },
    aUpdateInfo2 (){
      this.$store.dispatch('aUpdateInfo2', {
        name: "ca",
        usx: "male"
      })
    },
    aCallback (){
      // this.$store.dispatch('aCallback', {
      //   msg: "我是携带的信息",
      //   success: () => {
      //     console.log("我已经修改完成了")
      //   }
      // })

      // this.$store.displatch('aCallback', "我是携带的信息")
      this.$store.dispatch('aCallback', '我是携带的信息').then(resolve => {
        console.log("完成了提交")
        console.log(resolve)
      })
    }
  }
}
</script>

<style>
</style>
