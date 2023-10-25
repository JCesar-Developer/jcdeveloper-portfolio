<template>
  <div id="text-slider">

    <!-- SELECTOR -->
    <div class="text-selector d-flex flex-row align-items-center justify-content-end">
      <li class="pointer" v-for="(content) in texts" :key="content.id" @click="setCurrentText(content)" :class="{'active': (content.id == currentText!.id)}"></li>
    </div>

    <Swiper @onSlideChange="onSlideChange" :items="texts"></Swiper>

    <!-- SWIPPER-CONTENT -->
    <!--<swiper-container class="w-100" @slidechange="onSlideChange">
      <swiper-slide class="w-100" v-for="text in texts" :key="text.id">
        <TextContainer :title="text.title">
          <p ref="content" class="p2-r t-gray" v-html="text.description"></p>
        </TextContainer>
      </swiper-slide>
    </swiper-container>-->

  </div>
</template>

<script setup lang="ts">
import { Ref, ref, onBeforeMount, onMounted, defineProps, PropType, watch } from 'vue';

import Swiper from '@/shared/swipper/swipper.vue';
import TextContainer from './text-container.vue';
import { IMoreDescription } from '@/interfaces/IAbout.interface';

const props = defineProps({
  texts: { type: Array as PropType<IMoreDescription[]>, required: true }
})
const currentText: Ref<IMoreDescription|null> = ref(null);
const content = ref<HTMLElement | null>(null);

onBeforeMount(() => {
  if ( !props.texts ) return;
  currentText.value = props.texts[0];
})

onMounted(() => {
  formatChildren();
});

watch(() => currentText.value, () => {
  formatChildren();
});

const setCurrentText = (text: IMoreDescription) => {
  currentText.value = text;

}

const onSlideChange = (e: number) => {
  console.log('slide change', e);
};

const formatChildren = () => {
  setTimeout(() => {
    if (content.value) {
      console.log(content.value);
      //const children = content.value.querySelectorAll('*');
      //children.forEach((child) => {
      //  child.classList.add('p2-r');
      //  child.classList.add('t-gray');
      //});
    }
  }, 1);
};
</script>

<style scoped lang="scss">
@import '@/styles/color.scss';

.fade-enter-active, .fade-leave-active {
  transition: opacity .25s ease-out;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

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