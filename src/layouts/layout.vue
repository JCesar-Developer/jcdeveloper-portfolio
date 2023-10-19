<template>
  <div class="main-container center" :class="setBgColor( route.name )">
    <div class="thin-container">
      <!-- Header -->
      <HeaderComponent />
      <!-- Main -->
      <main>
        <router-view/>
      </main>
      <!-- Footer -->
      <FooterComponent />
    </div>
  </div>
</template>

<script setup lang="ts">
import HeaderComponent from './components/header/HeaderComponent.vue';
import FooterComponent from './components/footer/FooterComponent.vue';
import { RouteRecordName, useRoute } from 'vue-router';
import { watch } from 'vue';

const route = useRoute();

watch(() => route.name, (route) => {
  setBgColor( route );
});

const setBgColor = (route: RouteRecordName | null | undefined ) => {
  if ( route !== 'study-case' ) return 'bg-primary';
  else return 'bg-500';
}
</script>

<style lang="scss">
.thin-container {
  display: flex;
  flex-direction: column;
  gap: 150px;
}
</style>