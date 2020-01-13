<template>
  <div id="app">
    <h2>{{message}}</h2>
    <p>{{counter}}</p>

    <button @click="decrement">-</button>
    <button @click="increment">+</button>
  </div>
</template>

<script>

export default {
  name: 'App',
  data (){
    return {
      message: "我是App组件",
      counter: 0,
    }
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
