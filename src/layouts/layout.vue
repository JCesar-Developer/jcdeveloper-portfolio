<script setup lang="ts">
import { RouteLocationNormalizedLoaded, RouteRecordName, useRoute, useRouter } from 'vue-router';
import { watch, ref, Ref, onBeforeMount } from 'vue';

import HeaderComponent from './components/header/HeaderComponent.vue';
import FooterComponent from './components/footer/FooterComponent.vue';
import { Background } from '@/interfaces/TBackground-colors.type';

const enum SlideMode { left = 'slide-left', right = 'slide-right', up = 'slide-up' }

const route = useRoute();
const router = useRouter();

const fadePage: Ref<boolean> = ref(true);
const bgColor: Ref<Background> = ref(Background.primary);
const slideMode: Ref<SlideMode> = ref(SlideMode.left);

onBeforeMount(() => {
  setBgColor( route.name );
});

watch(() => route.name, () => {
  setBgColor( route.name );
});

const setBgColor = (route: RouteRecordName | null | undefined ) => {  
  if ( !route?.toString().includes( 'study-case' ) ) bgColor.value = Background.primary;
  else bgColor.value = Background.secondary;
}

const onFadePage = () => {
  fadePage.value = !fadePage.value;
  setTimeout(() => {
    fadePage.value = !fadePage.value;
  }, 250);
}

const onRouteEnter = (to: RouteLocationNormalizedLoaded, from: RouteLocationNormalizedLoaded, next: () => void) => {
  if( to.name === 'home' ) {
    slideMode.value = SlideMode.right;
    window.scrollTo(0, 0);
    next();
  } else if ( to.name?.toString().includes( 'study-case' )) {
    slideMode.value = SlideMode.up;
    window.scrollTo(0, 0);
    next();
  } else {
    slideMode.value = SlideMode.left;
    window.scrollTo(0, 0);
    next();
  }
};

router.beforeResolve(onRouteEnter)
</script>

<template>
  <div id="main-container" class="center" :class="bgColor">
    
    <transition name="fade">
      <div v-if="fadePage" class="main-content d-flex flex-column">

        <!-- Header -->
        <HeaderComponent @fade-page="onFadePage()" />

        <!-- Main -->
        <main class="center">
          <router-view v-slot="{ Component }">
            <transition :name="slideMode">
              <component class="thin-container" :is="Component" />
            </transition>
          </router-view>
        </main>

        <!-- Footer -->
        <FooterComponent />

      </div>
    </transition>

  </div>
</template>

<!-- STYLE -->
<style lang="scss">
#main-container {
  transition: background-color .5s ease-in;

  header {
    z-index: 1;
  }

  main {
    z-index: 0;
  }

  @media (min-width: 540px) {
    overflow-x: hidden;
  }
  
  .main-content {
    width: 100%;
    gap: 150px;
  
    @media(max-width: 992px) {
      gap: 120px;
    }
    @media(max-width: 768px) {
      gap: 100px;
    }
    @media(max-width: 576px) {
      gap:50px;
    }
  }
}


//fade-transition
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s ease-in-out;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

//slide-left-transition
.slide-left-enter-active {
  transition: opacity 1s ease-in, transform .5s ease-out;
}
.slide-left-enter-from {
  transform: translateX(100%);
  opacity: 0;
}

//slide-right-trasition
.slide-right-enter-active {
  transition: opacity 1s ease-in, transform .5s ease-out;
}
.slide-right-enter-from {
  transform: translateX(-100%);
  opacity: 0;
}

//slide-up-transition
.slide-up-enter-active {
  transition: opacity 1s ease-in, transform .5s ease-out;
}
.slide-up-enter-from {
  transform: translateY(100%);
  opacity: 0;
}
</style>