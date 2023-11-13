<template>

  <template v-if="innerWidth < 576">
    <SwiperInline>
      <img width="240" v-for="(image, index) of images" :key="index" :src="image" alt="Grid image"/>
    </SwiperInline>
  </template>

  <template v-else>
    <div id="grid">
      <img v-for="(image, index) of images" :key="index" :src="image" alt="Grid image"/>
    </div>
  </template>

</template>

<script setup lang="ts">
import { defineProps, PropType, computed } from 'vue';
import SwiperInline from '@/shared/swiper-inline/swiper-inline.vue';

  defineProps({
    images: { type: Array as PropType<Array<string>>, required: true }
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

#swiper-inline {
  img {
    object-fit: cover;
    object-position: center;
    aspect-ratio: 1/1.5;
  }
}
</style>