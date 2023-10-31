<template>
  <div id="text-container" class="d-flex flex-column">
    <!-- titulo -->
    <p class="text-title p3-r" :class="{ uppercase }">{{ title }}</p>

    <!-- single-content -->
    <slot v-if="slots.default"></slot>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineSlots } from 'vue'; 

const slots = defineSlots<{ default: string }>()
defineProps({
  title: { type: String, required: false, default: 'Title' },
  items: { type: Array as () => string[], required: false },
  uppercase: { type: Boolean, required: false, default: false },
});
</script>

<style scoped lang="scss">
#text-container {
  gap: 10px;
}
</style>