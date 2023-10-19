<template>
  <div class="text-container">
    <!-- titulo -->
    <p class="text-title p3-r" :class="{ uppercase }">{{ title }}</p>

    <!-- single-content -->
    <slot v-if="slots.default"></slot>
    
    <!-- multiple-content -->
    <ul v-if="items">
      <li v-for="item in items" :key="item" class="p2-r" v-html="item"></li>
    </ul>
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
.text-container {
  display: flex;
  flex-direction: column;
  gap: 10px;

  ul {
    margin: 0;
    padding: 0;
    li {
      list-style: none;
    }
  }
}
</style>