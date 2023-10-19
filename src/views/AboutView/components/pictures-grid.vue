<template>
  <div class="pictures-grid">
    <div class="image-1" style="background-color: blue;">Image 1</div>
    <div class="image-2" style="background-color: red;">Image 2</div>
    <div class="image-3" style="background-color: blue;">Image 3</div>
    <div class="image-4" style="background-color: red;">Image 4</div>
    <div class="image-5" style="background-color: blue;">Image 5</div>
    <div class="image-6" style="background-color: red;">Image 6</div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.pictures-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(5, 1fr);
  gap: 15px; 
  width: 100%;
  height: 600px;

  .image-1 {
    grid-column: 1 / 2;
    grid-row: 1 / 4;
  }

  .image-2 {
    grid-column: 2 / 3;
    grid-row: 1 / 3;
  }

  .image-3 {
    grid-column: 3 / 4;
    grid-row: 1 / 4;
  }

  .image-4 {
    grid-column: 1 / 2;
    grid-row: 4 / 6;
  }

  .image-5 {
    grid-column: 2 / 3;
    grid-row: 3 / 6;
  }

  .image-6 {
    grid-column: 3 / 4;
    grid-row: 4 / 6;
  }

}
</style>