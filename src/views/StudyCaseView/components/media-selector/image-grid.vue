<template>
  <SwiperGridImage v-if="innerWidth < 576" :images="images" class="p-0 w"></SwiperGridImage>

  <div v-else id="grid">
    <img v-for="(image, index) of images" :key="index" :src="image" :alt="alt"/>
  </div>
</template>

<script setup lang="ts">
import { defineProps, PropType, computed } from 'vue';
import SwiperGridImage from '@/shared/swiper-grid-img/swiper-grid-image.vue';

defineProps({
  images: { type: Array as PropType<Array<string>>, required: true },
  alt: { type: String, required: false, default: 'Grid image' }
})
const innerWidth = computed(() => window.innerWidth);
</script>

<style scoped lang="scss">
#grid {
  display: grid;
  grid-template-columns: repeat(
    auto-fill,
    minmax( 200px, 1fr )
  );
  gap: 8px;

  img {
    width: 100%;
    object-fit: cover;
    object-position: center;
    aspect-ratio: 1/1.5;
  }
}
</style>