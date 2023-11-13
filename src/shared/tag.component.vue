<template>
  <div class="tag">{{ tag }}</div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
defineProps({
  tag: { type: String, required: true, default: 'tag' }
})
</script>

<style scoped lang="scss">
.tag {
  background-color: white;
  padding: 8px 12px;
  color: black;
  font-weight: 400;
  border-radius: 10px;
  font-size: 14px;
}
</style>