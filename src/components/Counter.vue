<template>
  <div>
    <h2>Welcome to Counter</h2>
    <p>{{counter}}</p>

    <button @click="incrementCounter">increment counter</button>
    <button @click="decrementCounter">decrement counter</button>
  </div>
</template>

<script lang="js" src="./Counter.vue.js">
  // export default {
  //   methods: {
  //     incrementCounter () {
  //       this.$store.dispatch('incrementAction', 1)
  //     },
  //     decrementCounter() {
  //       this.$store.dispatch('decrementAction', 1)
  //     }
  //   },
  //
  //   computed: {
  //     counter () {
  //       return this.$store.getters.counter
  //     }
  //   }
  // }
</script>
