<template>
  <div id="app">
    <h2>{{message}}</h2>
    <p>{{$store.state.counter}}</p>

    <button @click="$store.state.counter--">-</button>
    <button @click="$store.state.counter++">+</button>

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
    decrement (){
      this.counter --;
    },
    increment (){
      this.counter ++;
    }
  }
}
</script>

<style>
</style>
