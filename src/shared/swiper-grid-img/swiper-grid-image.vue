<template >
  <div id="image-grid" :style="`--image-count: ${imageCount!}`" :class="{'even-images': images.length % 2 === 0, 'odd-images': images.length % 2 !== 0}">

    <img v-for="(image, index) in images" :key="index" :src="image" alt="Process image" class="image" />
  
  </div>
</template>

<script setup lang="ts">
import { Ref, ref, defineProps, PropType, onBeforeMount } from 'vue';

  const props = defineProps({ images: { type: Array as PropType<Array<string>>, required: true } });
  const imageCount: Ref<number> = ref(0);

  onBeforeMount(() => {
    imageCount.value = props.images.length;
  })
</script>

<style lang="scss">
#image-grid {
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  width: 100%;
  overflow-x: auto;

  &.even-images {
  grid-template-columns: repeat(calc(var(--image-count) / 2), 1fr);
  }
  &.odd-images {
    grid-template-columns: repeat(calc(var(--image-count) / 2), 1fr);
  }

  .image {
    width: 160px;
    aspect-ratio: 1/1.5;
    box-sizing: border-box;
    padding: 0px 5px 5px 0px;
    object-fit: cover;
    object-position: center;
  }
}
</style>