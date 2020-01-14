<template>
    <div>
      <p>{{$store.getters.moreAgestu(18)}}</p>

      <h2>{{$store.state.counter}}</h2>
      <p>{{$store.getters.powerCount}}</p>

      <p>{{$store.getters.more20stu}}</p>
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
