<template>
  <div id="app">
    <h6>----------APP 内容---------</h6>
    <h2>{{message}}</h2>
    <p>{{$store.state.counter}}</p>

    <button @click="subtraction">-</button>
    <button @click="addition">+</button>


    <p>{{more20stus}}</p>

    <h6>----------APP getters---------</h6>
    <p>{{$store.getters.powerCount}}</p>
    <p>{{$store.getters.more20stu}}</p>
    <p>大于20的学生个数：{{$store.getters.more20stuLength}}</p>
    <p>{{$store.getters.moreAgestu(18)}}</p>

    <h6>----------HelloVuex 内容---------</h6>
    <hello-vuex :counter="counter"></hello-vuex>
  </div>
</template>

<script>
import HelloVuex from '@/components/HelloVuex'

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
      this.$store.commit('decrement')
    },
    addition (){
      this.$store.commit('increment')
    }
  }
}
</script>

<style>
</style>
