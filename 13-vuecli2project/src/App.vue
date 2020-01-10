<template>
  <div id="app">
    <!--<router-link to="/home" tag="button" replace>首页</router-link>-->
    <!--<router-link to="/about" tag="button" replace>关于</router-link>-->

    <button @click="homeClick">首页</button>
    <button @click="aboutClick">关于</button>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    homeClick (){
      // 通过代码的形式进行跳转
      // this.$router.push('/home');
      this.$router.replace('/home').catch(err => {err});
    },
    aboutClick (){
      // this.$router.push('/about');
      this.$router.replace('/about').catch(err => {err});
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
  .active{
    color: red
  }
</style>
