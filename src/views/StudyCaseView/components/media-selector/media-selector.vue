<template>
  <SingleImage v-if="multimedia.singleImage" :image="multimedia.singleImage"/>
  <ImageGrid v-if="multimedia.imageGrid" :images="multimedia.imageGrid"/>
  <ImageOverlay v-if="multimedia.imageOverlay" :image="multimedia.imageOverlay"/>
</template>

<script setup lang="ts">
import { defineProps, PropType } from 'vue';
import { IMultimedia } from '@/interfaces/project-interface/IProject-content.interface';
import SingleImage from './single-image.vue';
import ImageGrid from './image-grid.vue';
import ImageOverlay from './image-overlay.vue';
defineProps({
  multimedia: { type: Object as PropType<IMultimedia>, required: true }
})
</script>