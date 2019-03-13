<template>
  <div class="section">
    <div class="container">
      <div id="shop_container">
        <store-item class="item" powerup-identifier="Peely" price="10">
          <div slot="title">
            Peely skin
          </div>
          <div slot="description">
            Each click gives one more dab
          </div>
        </store-item>
        <store-item class="item" powerup-identifier="Tomato" price=30>
          <div slot="title">
            Tomato Head skin
          </div>
          <div slot="description">
            Gets one dab every 5 seconds
          </div>
        </store-item>
        <store-item class="item" powerup-identifier="Fishstick" price="1000">
          <div slot="title">
            Fishstick skin
          </div>
          <div slot="description">
            Does some more and more and more and more and dab
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
    created() {

    }
  }
</script>
<style>
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
    width: 200px;
    height: 50px;
  }

</style>
