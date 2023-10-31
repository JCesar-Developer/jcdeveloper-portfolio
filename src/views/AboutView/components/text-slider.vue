<template>
  <div id="text-slider">

    <!-- SELECTOR -->
    <div class="text-selector d-flex flex-row align-items-center justify-content-end">
      <li v-for="{ id } in texts" :key="id" class="pointer" :class="{'active': (id == currentTextId)}" @click="onSlideChange(id)"></li>
    </div>

    <!-- SWIPPER-CONTENT -->
    <Swiper @onSlideChange="onSlideChange" :textId="currentTextId">
      <swiper-slide v-for="text in texts" :key="text.id">
        <TextContainer :title="text.title">
          <p ref="content" class="p2-r t-gray" v-html="text.description"></p>
        </TextContainer>
      </swiper-slide>
    </Swiper>
  </div>
</template>

<script setup lang="ts">
import { Ref, ref, onBeforeMount, onMounted, defineProps, PropType } from 'vue';
import SwiperSlide from '@/shared/swiper/swiper-slide/swiper-slide.vue';
import Swiper from '@/shared/swiper/swiper.vue';
import TextContainer from '@/shared/TextContainer/text-container.vue';
import { IMoreDescription } from '@/interfaces/IAbout.interface';

const props = defineProps({
  texts: { type: Array as PropType<IMoreDescription[]>, required: true }
})

const currentTextId: Ref<number|null> = ref(null);
const content = ref<HTMLElement[] | null>(null);

onBeforeMount(() => {
  if ( !props.texts ) return;
  currentTextId.value = props.texts[0].id;
})

onMounted(() => {
  formatChildren();
});

const onSlideChange = (index: number) => {
  currentTextId.value = index;
};

const formatChildren = () => {
  setTimeout(() => {
    if (content.value) {
      content.value.forEach(element => {
        element.querySelectorAll('*').forEach(child => {
          child.classList.add('p2-r');
          child.classList.add('t-gray');
        });
        element.querySelectorAll('a').forEach(ancortag => {
          ancortag.classList.add('hover-bold');
          ancortag.classList.add('hover-o-500');
        });
      });
    }
  }, 0);
};
</script>

<style scoped lang="scss">
@import '@/styles/color.scss';
#text-slider {
  .text-selector {
    li {
      background-color: rgba(153, 205, 50, 0);
      border-radius: 50%;
      border: 1px solid $t-gray;
      box-shadow: 0 0 2px #64868E;
      width: 8px;
      height: 8px;
      list-style: none;
      margin: 0 5px;
      transition: background-color .5s ease-in-out, box-shadow .5s ease-in-out;

      &.active {
        background-color: yellowgreen;
        box-shadow: 0 0 5px greenyellow;
      }
    }
  }
}
</style>