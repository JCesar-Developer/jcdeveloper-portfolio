<template>
	<div id="about-view">
		<div class="column-container d-flex flex-column">

      <!-- SECTION: PROFILE -->
      <section class="section-profile d-flex flex-column flex-md-row">

        <!-- Profile-picture -->
        <div class="profile-picture">
          <img src="@/assets/images/profile-img.jpg" alt="Profile picture" />
        </div>
        
        <!-- Profile-description -->
        <div class="profile-description-container">
          <!-- Author -->
          <div class="profile-description-title h1">
            {{ $t( 'about.author' ) }}
          </div>

          <!-- Description -->
          <div class="profile-description w-100 d-flex flex-column">
            <p class="principal-description p1-r" v-html="$t( 'about.principal_description' )"></p>

            <!-- More-description -->
            <div class="more-description d-flex flex-column">

              <SeeMoreBtn @click="toogleSeeMore" :seeMore="seeMore"/>

              <div class="text-accordion" :class="{ 'active': seeMore }">
                <TextSlider :texts="i18n.global.messages.value[i18n.global.locale.value].about.more_description"/>                
              </div>

              <hr class="mt-4 mb-0" style="width: 100%">
            </div>
            
            <!-- Technology-stack -->
            <TextContainer :title="$t( 'about.stack.title' )">
              <table class="tech-stack">
                <tbody>
                  <tr v-for="(item, index) in i18n.global.messages.value[i18n.global.locale.value].about.stack.table" :key="index">
                    <td class="p2-b">{{ item.subject }}</td>
                    <td class="p2-r t-gray">{{ item.technologies }}</td>
                  </tr>
                </tbody>
              </table>
            </TextContainer>
    
          </div>
        </div>
      </section>

      <!-- SECTION: PICTURES -->
      <section v-show="false" class="section-pictures">
        <PicturesGrid/>
      </section>

      <!-- SECTION: MORE -->
      <section class="section-more">
        <div class="h1">{{ $t( 'about.more_about.title' ) }}</div>
        <SubjectSelector :subjects="i18n.global.messages.value[i18n.global.locale.value].about.more_about.subjects" />
      </section>

		</div>
	</div>
</template>

<script setup lang="ts">
import { Ref, ref } from 'vue';
import i18n from '@/plugins/i18n';

import TextContainer from '@/shared/TextContainer/text-container.vue';
import TextSlider from './components/text-slider.vue';
import PicturesGrid from './components/pictures-grid.vue';
import SubjectSelector from './components/SubjectSelector/subject-selector.vue';
import SeeMoreBtn from './components/see-more-btn.vue';

  const seeMore: Ref<boolean> = ref(false);
  const toogleSeeMore = () => seeMore.value = !seeMore.value;
</script>

<style src="./AboutView.scss" scoped lang="scss"></style>