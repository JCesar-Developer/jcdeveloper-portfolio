<template>

  <template v-if="innerWidth < 576">
    <Swiper :has-buttons="true">
      <SwiperSlide v-for="(image, index) of images" :key="index">
        <img :src="image" alt="Grid image"/>
      </SwiperSlide>
    </Swiper>
  </template>

  <template v-else>
    <div v-if="validInput" id="image-galery" :style="{'aspect-ratio': aspectRatio}">
      <img v-for="(image, index) in images" :key="index" class="pointer" :src="image" alt="Overlay image"  :style="{'width': imageWidth}">
    </div>

    <div v-else class="text-center">
      <p>ImageOverlay component requires 2 to 4 images as input</p>
    </div>
  </template>

</template>

<script setup lang="ts">
import { ref, computed, defineProps, PropType, onMounted } from 'vue';
import Swiper from '@/shared/swiper/swiper.vue'
import SwiperSlide from '@/shared/swiper/swiper-slide/swiper-slide.vue';

  const props = defineProps({
    images: { type: Array as PropType<Array<string>>, required: true, default: () => [] }
  })

  const innerWidth = computed(() => window.innerWidth);
  const validInput = ref<boolean>(false);
  const imageWidth = ref<string>('83%');
  const aspectRatio = ref<string>('16/8.5');

  onMounted(() => {
    validInput.value = isValidInput();

    if ( !validInput.value ) return;

    imageWidth.value = getImageWidth();
    aspectRatio.value = getAspectRatio();
  })

  const isValidInput = (): boolean => {
    if ( props.images.length < 2 || props.images.length > 4 ) return false;
    return true;
  }

  const getImageWidth = (): string => {
    switch( props.images.length ) {
      case 2:
        return '95%';
      case 3:
        return '90%';
      case 4:
        return '85%';
      default:
        return '85%';
    }
  }

  const getAspectRatio = (): string => {
    switch( props.images.length ) {
      case 2:
        return '16/7.12';
      case 3:
        return '16/7.6';
      case 4:
        return '16/8.2';
      default:
        return '16/8.2';
    }
  }
</script>

<style scoped lang="scss">
.swiper-slide {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 100%;
    object-fit: cover;
    object-position: center;
  }
}


#image-galery {
  position: relative;
  width: 100%;

  img {
    box-sizing: content-box;
    border: solid 1px black;
    transition: all 0.5s ease-in-out;
    &:hover {
      z-index: 1;
      transform: scale(1.05);
    }
  }

  :nth-child(1) {
    position: absolute;
    top: 0%;
    left: 0%;
  }

  :nth-child(2) {
    position: absolute;
    top: 10%;
    left: 5%;
  }
  :nth-child(3) {
    position: absolute;
    top: 20%;
    left: 10%;
  }
  :nth-child(4) {
    position: absolute;
    top: 30%;
    left: 15%;
  }
}
</style>