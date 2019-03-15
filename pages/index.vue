<template>
  <div class="section">
    <div class="container">
      <div id="shop_container">
        <store-item class="item"
                    powerup-identifier="Tomato"
                    price="10" price-raise-percentage="15"
                    image-url="https://progameguides.com/wp-content/uploads/2017/12/fortnite-outfit-tomatohead-full.jpg"
                    text-color="white">
          <div slot="title">
            Tomato Head skin
          </div>
          <div slot="description">
            Gets one dab every second
          </div>
        </store-item>
        <store-item class="item"
                    powerup-identifier="Peely"
                    price="20"
                    price-raise-percentage="15"
                    image-url="https://www.androidcentral.com/sites/androidcentral.com/files/styles/w1600h900crop/public/article_images/2019/03/fortnite-peely-skin.jpg?itok=FwlTDd9K"
                    text-color="black" >
          <div slot="title">
            Peely skin
          </div>
          <div slot="description">
            Each click gives one more dab
          </div>
        </store-item>
        <store-item class="item"
                    powerup-identifier="Fishstick"
                    price="100"
                    price-raise-percentage="20"
                    image-url="https://s3.dexerto.com/thumbnails/_thumbnailLarge/265870/Screen-Shot-2018-12-27-at-12.15.59.jpg"
                    text-color="black">
          <div slot="title">
            Fishstick skin
          </div>
          <div slot="description">
            Gives 5 dabs every second
          </div>
        </store-item>

      </div>
      <div class="ver-container">
        <div class="ver">
          <div id="points_container">
            <counter></counter>
          </div>
          <fortnite-default-skin v-model="ok" class="defaultskin"></fortnite-default-skin>
        </div>
      </div>
    </div>
    <modal>Epic fortnite victory royale</modal>
    <button @click="show">play fornite</button>
  </div>
</template>

<script>

  import Modal from "../components/modal";
  import FortniteDefaultSkin from "../components/FortniteDefaultSkin";
  import Counter from "../components/counter";
  import StoreItem from "../components/storeItem";
  import powerup, {startInterval} from "../components/powerup";

  export default {
    components: {StoreItem, Counter, FortniteDefaultSkin, Modal},
    data() {
      return {

      }
    },

    methods: {
      show(){
        this.$store.dispatch('toggleModal');
      }
    },
    computed: {

    },
    beforeMount() {

    },
    created() {
      startInterval(this)
    }
  }
</script>
<style>
  html{
    overflow: auto;
  }
  .ver{
    border: 3px solid purple;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .container {
    border: 1px solid black;
    display: flex;
  }
  #shop_container{
    margin: 10px;
    width: 500px;
  }
  .item{
    margin-bottom: 5px;
  }
  #points_container{
    justify-content: center;
    align-items: center;
    display: flex;
    font-size: 40px;
    width: 100%;
    height: 100%;
  }

</style>
