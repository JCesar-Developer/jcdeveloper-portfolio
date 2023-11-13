<template>
  <iframe id="video" :src="src"></iframe>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
defineProps({
  src: { type: String, required: true }
})
</script>

<style scoped lang="scss">
#video {
  width: 100%;
  aspect-ratio: 16/9;
  border: none;
}
</style>