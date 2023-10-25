<template>
  <div id="swiper" class="w-100" ref="swiper" @mousedown="startSwipe" @mousemove="swipe" @mouseup="endSwipe" @mouseleave="endSwipe">
    <div id="swiper-wrapper" class="w-100" v-if="slideWidth" :style="{ transform: `translateX(-${currentIndex * slideWidth}px)` }">
      <div class="swiper-slide w-100" v-for="(item, index) in items" :key="index" :style="{ width: `${slideWidth}px` }">
        <div class="unselectable">{{ item }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, defineProps , defineEmits } from 'vue';

  const props = defineProps(['items'])
  const emit = defineEmits(['onSlideChange']);

  const swiper        = ref<HTMLElement | null>(null);
  const currentIndex  = ref(0);
  const slideWidth    = ref<number | null>(null);
  const isSwapping    = ref(false);
  const startPosition = ref(0);

  onMounted(() => {
    // Calculates the width of the Slide container
    if ( swiper.value ) 
    slideWidth.value = swiper.value.clientWidth;
  });

  const startSwipe = (event: MouseEvent | TouchEvent) => {
    isSwapping.value = true;
    startPosition.value = (event as MouseEvent).clientX || (event as TouchEvent).touches[0].clientX;
  };

  const swipe = (event: MouseEvent | TouchEvent) => {
    if (isSwapping.value) {
      const endPosition = (event as MouseEvent).clientX || (event as TouchEvent).touches[0].clientX;
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
    if (currentIndex.value < props.items.length - 1) {
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
}

#swiper-wrapper {
  display: flex;
  transition: transform 0.3s;
}

.swiper-slide {
  flex: 0 0 auto;
  cursor: grab;
  margin: 20px 0;
}

.unselectable {
  user-select: none;
}
</style>
