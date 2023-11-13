<template>
  <img :src="image" :alt="alt" class="w-100 col-12 col-lg-8 p-0"/>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
defineProps({
  image: { type: String, required: true },
  alt: { type: String, required: false, default: 'Single image' }
})
</script>

<style scoped lang="scss">
</style>