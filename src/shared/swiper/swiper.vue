<template>
  <div id="swiper" ref="swiperRef" @mousedown="startSwipe" @mousemove="swipe" @mouseup="endSwipe" @mouseleave="endSwipe" @touchstart="startSwipe" @touchmove="swipe" @touchend="endSwipe">
    <div id="swiper-wrapper" :style="{ transform: `translateX(-${currentIndex * slideWidth!}px)` }">
      
      <slot></slot>
    
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, defineEmits, defineProps, onUpdated, watch } from 'vue';
  
  const props = defineProps(['textId'])
  const emit = defineEmits(['onSlideChange']);

  const swiperRef     = ref<HTMLElement | null>(null);
  const currentIndex  = ref(0);
  const slideWidth    = ref<number | null>(null);
  const isSwapping    = ref(false);
  const startPosition = ref(0);
  const numSlides     = ref(0);

  onMounted(() => {
    getSlideWith();
    updateNumSlides();
  });

  onUpdated(() => {
    getSlideWith();
    updateNumSlides();
  });

  watch(props, () => {
    currentIndex.value = props.textId;
  });

  const getSlideWith = () => {
    if ( swiperRef.value ) {
      slideWidth.value = swiperRef.value.getBoundingClientRect().width;
    }
  }

  const updateNumSlides = () => {
    numSlides.value = swiperRef.value?.querySelectorAll('.swiper-slide').length || 0;
  };

  const startSwipe = (event: MouseEvent | TouchEvent) => {
    isSwapping.value = true;
    startPosition.value = 'touches' in event ? (event as TouchEvent).touches[0].clientX : (event as MouseEvent).clientX;
  };

  const swipe = (event: MouseEvent | TouchEvent) => {
    if (isSwapping.value) {
      const endPosition = 'touches' in event ? (event as TouchEvent).touches[0].clientX : (event as MouseEvent).clientX;
      const deltaX: number = startPosition.value - endPosition;
      if (deltaX > 20) {
        nextSlide();
        isSwapping.value = false;
      } else if (deltaX < -20) {
        prevSlide();
        isSwapping.value = false;
      }
    }
  };

  const endSwipe = () => {
    isSwapping.value = false;
  };

  const prevSlide = () => {
    if (currentIndex.value > 0) {
      currentIndex.value--;
      emitOnSlideChange();
    }
  };

  const nextSlide = () => {
    if (currentIndex.value < numSlides.value - 1) {
      currentIndex.value++;
      emitOnSlideChange();
    }
  };

  const emitOnSlideChange = () => {
    emit("onSlideChange", currentIndex.value);
  };
</script>

<style scoped>
#swiper {
  position: relative;
  overflow: hidden;
}

@media (max-width: 540px) {
  #swiper {
    max-width: 75vw;
  }
}

#swiper-wrapper {
  display: flex;
  width: 100%;
  transition: transform 0.3s;
}
</style>
