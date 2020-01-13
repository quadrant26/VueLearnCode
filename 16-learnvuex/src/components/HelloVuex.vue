<template>
    <div>
        <h2>{{$store.state.counter}}</h2>
    </div>
</template>

<script>
  export default {
    name: "HelloVuex",
    props: {
      counter: {
        type: Number,
        default: 0
      }
    }
  }
</script>

<style scoped>

</style>
