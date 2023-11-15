<template>
	<div id="home-view">
		<div class="column-container d-flex flex-column">
			
			<!-- Tittle -->
			<div class="presentation w-100 d-flex flex-column">
				<span class="t-gray">{{ $t('presentation.welcome_msg') }}</span>
				<span class="h1"  style="font-style: italic;">{{ $t('presentation.introduction') }}</span>
			</div>
			
			<!-- Cards -->
      <div class="cards-container d-flex flex-column w-100" v-if="cards">
        <CardComponent v-for="(card, index) in cards" :key="card.id"
        :cardData="card" :positionRight="index % 2 !== 0"/>
      </div>

		</div>
	</div>
</template>

<script setup lang="ts">
import { Ref, ref, onBeforeMount, watch } from 'vue';
import { useI18n } from 'vue-i18n';
import i18n from '@/plugins/i18n';

import CardComponent from './components/card/CardComponent.vue';
import { IProject } from '@/interfaces/project-interface/IProject.interface';

  const { locale } = useI18n();
  const cards: Ref<IProject[]> = ref([]);

  onBeforeMount(() => {
    cards.value = getCardsData();
  })

  watch(locale, () => {
    cards.value = getCardsData();
  })

  const getCardsData = (): IProject[] => {
    return i18n.global.messages.value[i18n.global.locale.value].cards.projects;
  }

</script>

<style src="./HomeView.scss" scoped lang="scss"></style>