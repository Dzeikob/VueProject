<template>
  <div class="box">
    <div class="points displayFlex">{{ points }} dabs</div>
     <div class="points_per_second displayFlex">Dabs per second: {{ pointsPerSecond }}</div>
  </div>

</template>

<script>
    export default {
      name: "counter",
      computed: {
          points() {
            return Math.floor(this.$store.state.points);
          },
          pointsPerSecond() {
            var value = this.$store.state.pointsPerSecond;
            if(value % 1) {
              return value.toFixed(1);
            }
            else {
              return value;
            }
          }
      }
    }

</script>

<style scoped>
  .box {
    padding: 3%;
    width: 100%;
  }
  .displayFlex{
    display: flex;
    justify-content: center;
  }
  .points_per_second{
    font-size: 20px;
  }

</style>
