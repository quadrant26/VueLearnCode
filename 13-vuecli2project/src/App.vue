<template>
  <div id="app">
    <!--<router-link to="/home" tag="button" replace>首页</router-link>-->
    <!--<router-link to="/about" tag="button" replace>关于</router-link>-->

    <!--<button @click="homeClick">首页</button>-->
    <!--<button @click="aboutClick">关于</button>-->

    <router-link to="/home">首页</router-link>
    <router-link to="/about">关于</router-link>
    <router-link v-bind:to="/user/+userId">用户</router-link>
    <router-link v-bind:to="'/user/'+userId">用户</router-link>
    <router-link v-bind:to="{path: '/profile', query: {name: 'why', age:18, height:1.88}}">档案</router-link>

    <button @click="userClick">用户</button>
    <button @click="profileClick">档案</button>

    <router-view></router-view>

    <keep-alive exclude="Profile,User">
      <router-view></router-view>
    </keep-alive>

  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
      userId: "lisi"
    }
  },
  methods: {
    homeClick (){
      // 通过代码的形式进行跳转
      // this.$router.push('/home');
      this.$router.replace('/home').catch(err => {err});
    },
    aboutClick (){
      // this.$router.push('/about');
      this.$router.replace('/about').catch(err => {err});
    },
    userClick (){
      this.$router.push('/user/' + this.userId).catch(err => {err});
    },
    profileClick (){
      this.$router.push({
        path: '/profile',
        query: {
          name: 'why',
          age: 18,
          height: 1.88
        }
      })
    },
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
