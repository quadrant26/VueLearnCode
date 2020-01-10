<template>
    <div>
        <h2>Home</h2>

        <router-link to="/home/news">新闻</router-link>
        <router-link to="/home/message">消息</router-link>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
      name: "Home",
      data (){
        return {
          message: "Hello, World"
        }
      },
      created (){
        console.log("created")
        document.title="首页"
      },
      mounted (){
        console.log("mounted")
      },
      update (){
        console.log("update")
      }
    }
</script>

<style scoped>

</style>
