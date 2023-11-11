<template>
    <div id="hero-image" :style="{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0), rgba(133, 133, 168, 1)), url(${image})`}">
      <div class="border-img-bottom"></div>
    </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
defineProps({ image: { type: String, required: true } })
</script>

<style scoped lang="scss">
#hero-image {
  position: relative;
  width: 900px;
  height: 900px;
  background-size: cover;
  background-position: center;

  .border-img-bottom {
    position: absolute;
    box-sizing: border-box;
    width: 100%;
    bottom: 0;
    border: solid 2px #8585A8;
  }

  @media( max-width: 992px ) {
    width: 100%;
    aspect-ratio: 1/1;
    height: auto;
  }
}
</style>