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
          message: "Hello, World",
          path: '/home/news'
        }
      },
      created (){
        console.log("Home created");
      },
      mounted (){
        // console.log("mounted")
      },
      update (){
        // console.log("update")
      },
      destroyed (){
        console.log("home destory")
      },
      activated (){
        console.log("activated")
        this.$router.push(this.path).catch(err => {err});
      },
      deactivated (){
        console.log('deactivated');
      },
      // 组件内的导航守卫 -> 保持
      // beforeRouteLeave (to, from, next){
      //   // console.log(this.$route.path);
      //   this.path = this.$route.path;
      //   next();
      // }
    }
</script>

<style scoped>

</style>
