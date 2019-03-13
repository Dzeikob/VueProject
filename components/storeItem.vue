<template>
  <div>
    <div class="box">
      <div class="media-content">
        <div class="content">
          <div id="titleprice">
            <strong>
              <slot name="title"></slot>
            </strong>
            <br>
            price: {{price}} dabs
            <br><br>
            owned: {{ownedItems}}
          </div>
          <button v-on:click="itemClicked" class="button" >Buy</button>
        </div>
        <slot name="description"></slot>
      </div>
    </div>
  </div>

</template>

<script>
  import {handlePowerup} from "./powerup";

  export default {
        name: "storeItem",

        data() {
          return {
            ownedItems: 0
          }
        },

        methods: {
            itemClicked() {
              if(this.price > this.$store.state.points){
                alert("Not enough dabs");
                return;
              }
              this.$store.dispatch('addPoints', -this.price);
              this.ownedItems = this.ownedItems + 1;
              handlePowerup(this, this.powerupIdentifier)
            }
        },
        props: {
          powerupIdentifier: "",
          price: 0
        }
    }
</script>

<style scoped>
  .content{
    display: flex;
    justify-content: space-between;

  }
  #titleprice {
    line-height: 10px;
  }

</style>
