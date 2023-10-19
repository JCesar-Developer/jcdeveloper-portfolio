<template>
	<div id="about-view">
		<div class="column-container">

      <!-- SECTION: PROFILE -->
      <section class="section-profile">

        <!-- Profile-img -->
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
          <div class="profile-description">
            <p class="p1-r" v-html="$t( 'about.principal_description' )"></p>

            <!-- More-description -->
            <div class="more-description">
              <SeeMoreBtn @click="toogleSeeMore" :seeMore="seeMore"/>

              <div class="text-accordion" :class="{ seeMore }">
                <TextContainer v-for="(item, index) in i18n.global.messages.value[i18n.global.locale.value].about.more_description" :key="index" :title="item.title">
                  <p class="p2-r t-gray">{{ item.description }}</p>
                </TextContainer>

                <TextContainer :title="$t( 'about.contact.title' )" uppercase :items="i18n.global.messages.value[i18n.global.locale.value].about.contact.list"/>

                <TextContainer :title="$t( 'about.links.title' )" uppercase :items="i18n.global.messages.value[i18n.global.locale.value].about.links.list"/>
              </div>
              <hr class="mt-0 mb-0" style="width: 100%">
            </div>
            
            <!-- Technology-stack -->
            <TextContainer :title="$t( 'about.stack.title' )">
              <table class="table">
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
import TextContainer from './components/text-container.vue';
import PicturesGrid from './components/pictures-grid.vue';
import SubjectSelector from './components/subject-selector.vue';
import SeeMoreBtn from './components/see-more-btn.vue';
import i18n from '@/plugins/i18n';
import { Ref, ref } from 'vue';

const seeMore: Ref<boolean> = ref(false);
const toogleSeeMore = () => seeMore.value = !seeMore.value;
</script>

<style src="./AboutView.scss" scoped lang="scss"></style>