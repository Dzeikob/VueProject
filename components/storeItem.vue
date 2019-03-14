<template>
  <div>
    <div class="box" v-bind:style="{ backgroundImage: 'url(' + imageUrl + ')' , color: textColor}">
      <div class="media-content">
        <div class="content">
          <div id="titleprice">
            <strong :style="{color: textColor}">
              <slot name="title"></slot>
            </strong>
            <br>
            Price: {{newPrice}} dabs
            <br><br>
            Owned: {{ownedItems}}
          </div>
          <button :disabled="hasEnoughMoney" v-on:click="itemClicked" class="button">Buy</button>
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
        ownedItems: 0,
        newPrice: parseInt(this.price),
      }
    },

    methods: {
      itemClicked() {
        if (this.newPrice > this.$store.state.points) {
          alert("Not enough dabs");
          return;
        }
        this.$store.dispatch('addPoints', -this.newPrice);
        const newPercentagePrice = this.newPrice * this.priceRaisePercentage / 100;
        this.newPrice = Math.round(newPercentagePrice + this.newPrice);
        this.ownedItems = this.ownedItems + 1;
        handlePowerup(this, this.powerupIdentifier);
      }
    },
    computed: {
      hasEnoughMoney() {
        return this.newPrice > this.$store.state.points
      }
    },
    props: {
      powerupIdentifier: "",
      price: 0,
      priceRaisePercentage: 0,
      imageUrl: "",
      textColor: ""
    }
  }
</script>

<style scoped>
  .content {
    display: flex;
    justify-content: space-between;

  }

  #titleprice {
    line-height: 10px;
    font-weight: bold;
  }
  .box {
    background-size: cover;
  }

</style>
