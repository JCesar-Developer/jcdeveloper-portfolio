<template>
  <div id="btn-container">
    <div class="d-flex justify-content-end">

      <transition name="fade">
        <div v-if="!seeMore" class="d-flex align-items-center g-1 fit-content pointer">
          <svg class="arrow-down" fill="white" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/></svg>
          <p class="p2-r uppercase">{{ $t( 'general.see_more' ) }}</p>
        </div>
      </transition>

      <transition name="fade">
        <div v-if="seeMore" class="see-less-btn d-flex align-items-center g-1 fit-content pointer">
          <svg class="arrow-up" style="fill: white;" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z"/></svg>
          <p class="p2-r uppercase">{{ $t( 'general.see_less' ) }}</p>
        </div>
      </transition>

    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
defineProps({
  seeMore: { type: Boolean, required: true }
});
</script>

<style scoped lang="scss">
#btn-container {
  position: relative;
  width: 100%;
  height: 25px;

  .arrow-down {
    margin-bottom: 4px;
  }
  .arrow-up {
    margin-bottom: 1px;
  }

  .see-less-btn {
    position: absolute;
    bottom: 0;
    right: 0;
  }
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s ease-out;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>