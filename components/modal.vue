<template>
  <div class="modal" :class="{'is-active' : modal.active}">
    <div class="modal-background"></div>
    <div class="modal-content">
      <div class="box">
        <p style="color: black"><slot></slot></p>
        <button @click="modalClicked" class="modal-close is-large" aria-label="close" ></button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "modal",
    data(){
      return {

      }
    },
    methods: {
      modalClicked(){
        this.$store.dispatch('toggleModal');
      },
    },
    computed: {
      modal() {
        return this.$store.state.modal;
      }
    }
  }
</script>

<style scoped>
  .box{
    background-color: rgba(255,255,255, 0.5);
  }

</style>
