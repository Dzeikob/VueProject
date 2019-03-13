<template>
  <div>{{ points }}</div>
</template>

<script>
    export default {
      name: "counter",
      computed: {
          points() {
            return this.$store.state.points
          }
      }
    }

</script>

<style scoped>

</style>
