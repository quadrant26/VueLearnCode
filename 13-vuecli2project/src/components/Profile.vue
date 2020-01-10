<template>
  <div>
    <h3>我是Profile组件</h3>
    <p>{{queryData}}</p>
    <ol>
      <li v-for="(item, index) in queryData">{{index}} - {{item}}</li>
    </ol>
  </div>
</template>

<script>
    export default {
      name: "Profile",
      computed: {
        queryData(){
          console.log(this.$route.query);
          return this.$route.query;
        }
      }
    }
</script>

<style scoped>

</style>
