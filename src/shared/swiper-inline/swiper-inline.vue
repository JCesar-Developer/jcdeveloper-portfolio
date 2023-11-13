<template>
  <div id="swiper-inline">
    <div class="img-container">

      <slot></slot>

    </div>
  </div>
</template>

<style scoped lang="scss">
#swiper-inline {
  max-width: 100%;
  overflow: hidden;

  .img-container {
    display: flex;
    wrap: nowrap;
    gap: 10px;
    overflow-x: auto;
  }
}
</style>