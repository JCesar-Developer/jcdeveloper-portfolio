<template >
    <div id="link-btns" class="links d-flex flex-column align-items-end">

      <!-- HOME-BTN -->
      <router-link :to="{name: 'home'}">
        <div class="link-btn-container">
          <p class="hidden-text p2-r">Home</p>
          <HomeSvg :stroke-color="strokeColor" />
        </div>
      </router-link>
      

      <!-- DEMO-BTN -->
      <a v-if="demoUrl" :href="demoUrl" target="_blank">
        <div class="link-btn-container">
          <p class="hidden-text p2-r">Demo</p>
          <HttpSvg :stroke-color="strokeColor" />
        </div>
      </a>


      <!-- GIT-BTN -->
      <a v-if="gitUrl" :href="gitUrl" target="_blank">
        <div class="link-btn-container">
          <p class="hidden-text p2-r">GitHub</p>
          <GithubSvg :stroke-color="strokeColor" />
        </div>
      </a>

    </div>
</template>
<script setup lang="ts">
import { defineProps } from 'vue';
import HomeSvg from './home-svg.vue'
import HttpSvg from './http-svg.vue'
import GithubSvg from './github-svg.vue'
  
  defineProps({
    demoUrl: { type: String, required: false },
    gitUrl: { type: String, required: false }
  })
  const strokeColor = '#6B6C74';
</script>


<style scoped lang="scss">
#link-btns {
  position: fixed;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  gap: 12px;
  z-index: 1;

  .link-btn-container {
    box-sizing: border-box;
    padding: 7px;
    border-radius: 20px;
    cursor: pointer;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 40px;
    height: 40px;
    background-color: rgba(255, 255, 255, 0.25);
    transition: all .3s ease-in-out;

    .hidden-text {
      width: 0px;
      opacity: 0;
      padding-right: 0;
      transition: all .2s ease-in;
    }

    .link-btn {
      min-width: 25px;
      width: 25px;
      min-height: 25px;
      height: 25px;
      transition: all .3s ease-in-out;
    }

    &:hover {
      background-color: #505067;
      width: 100px;
      
      .hidden-text { 
        width: 45px;
        opacity: 1; 
        padding-right: 8px;
      }

      .link-btn{
        &.change-stroke {
          path { stroke: #fff; }
        }

        &.change-fill {
          path { fill: #fff; }
        }
      }
    }
  }
}
</style>