<template>
  <div id="study-case-view">
    <div class="column-container">
      <h1>StudyCaseView</h1>
      <p>Case: {{ _case }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
const route = useRoute();
const _case = route.params.case;
</script>