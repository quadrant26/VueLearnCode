<template>
    <div>
      <h2>我是用户界面</h2>
      <p>赵客缦胡缨，吴钩霜雪明</p>

      <h4>{{userId}}</h4>
    </div>
</template>

<script>
    export default {
      name: "User",
      computed :{
          userId (){
            // console.log( this.$route)
            return this.$route.params.userId;
          }
      }
    }
</script>

<style scoped>

</style>
