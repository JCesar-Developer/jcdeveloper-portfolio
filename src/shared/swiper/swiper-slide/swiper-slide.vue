<template>
  <div class="swiper-slide unselectable" :style="{ width: `${slideWidth}px` }">
      <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
defineProps({ slideWidth: Number });
</script>

<style scoped>
.swiper-slide {
  flex: 0 0 100%;
  cursor: grab;
  margin: 20px 0;
}
.unselectable {
  user-select: none;
}
</style>