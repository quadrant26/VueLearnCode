<template>
  <div id="app">
  </div>
</template>

<script>

  import {request} from "../network/request";

  export default {
    name: 'App',
    components: {
    },
    methods:{
      requestOne (){
        request({
          url: '/home/multidata'
        }, function (res){
          console.log(res);
        }, function (err){
          console.log(err);
        })
      },
      requestTwo (){
        request({
          baseConfig: {
            url: '/home/multidata'
          },
          success: function (res){
            console.log(res);
          },
          failure: function (err){
            console.log(err);
          }
        })
      },
      requestThreee (){
        // 第三种和第四种封装是一样的， 返回的都是一个 Promise
        request({
          url: '/home/multidata'
        }).then( res => {
          console.log(res);
        }).catch( err => {
          console.log(err);
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
</style>
