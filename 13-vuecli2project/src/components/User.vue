<template>
    <div>
      <h2>我是用户界面</h2>
      <p>赵客缦胡缨，吴钩霜雪明</p>

      <h4>{{userId}}</h4>


      <button @click="btnClick">按钮</button>
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
      },
      methods: {
        btnClick (){
          console.log(this.$router)
          console.log(this.$route)
        }
      }
    }
</script>

<style scoped>

</style>
