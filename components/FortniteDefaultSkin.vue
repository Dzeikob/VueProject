<template>
    <div id="FortniteDefault">
      <img v-bind:class="{ dabbed: this.$store.state.isDabbed, notdabbed: !this.$store.state.isDabbed}"
           id="skin"
           @click="clickFortniteDefault" src="https://i1.wp.com/fortniteskins.net/wp-content/uploads/2018/04/dab-skin-1.png?quality=100&strip=all&ssl=1" alt="" />
    </div>
</template>

<script>
    export default {
        name: "FortniteDefaultSkin",

      methods: {
        clickFortniteDefault(){
          console.log("Skin clicked: " + this.$store.state.pointsPerClick);
          this.$store.dispatch('addPoints', this.$store.state.pointsPerClick);
          this.$store.commit('toggleDab');
        },
      }
    }
</script>

<style scoped>

  .dabbed {
    transform: scaleX(-1);
  }
  .notDabbed {
    transform: scaleX(1);
  }
  #FortniteDefault {
    background-image: url("https://screenshotscontent-t2001.xboxlive.com/xuid-2535472632285150-public/3a6fe9ea-edd8-47e0-a049-e69133d520a1_Thumbnail.PNG");
    background-size: cover;
  }

</style>
