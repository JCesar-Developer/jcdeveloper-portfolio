<template>
  <main id="study-case-view" class="center">
    <div class="thin-container">
      <h1>StudyCaseView</h1>
      <p>Case: {{ _case }}</p>
    </div>
  </main>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";

const route = useRoute();

const _case = route.params.case;
</script>

<style lang="scss">
  
</style>