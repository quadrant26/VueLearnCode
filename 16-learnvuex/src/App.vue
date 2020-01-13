<template>
  <div id="app">
    <h2>{{message}}</h2>
    <p>{{$store.state.counter}}</p>

    <button @click="subtraction">-</button>
    <button @click="addition">+</button>

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
