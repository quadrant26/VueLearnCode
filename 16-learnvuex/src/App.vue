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


    <p>{{more20stus}}</p>

    <h6>----------APP getters---------</h6>
    <p>{{$store.getters.powerCount}}</p>
    <p>{{$store.getters.more20stu}}</p>
    <p>大于20的学生个数：{{$store.getters.more20stuLength}}</p>
    <p>{{$store.getters.moreAgestu(18)}}</p>

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
    }
  }
}
</script>

<style>
</style>
