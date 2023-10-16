<template>
	<main id="home-view" class="center">
		<div class="thin-container">

			<!-- Header -->
			<HeaderComponent />
			
			<!-- Tittle -->
			<div class="presentation">
				<span class="t-gray">{{ $t('presentation.welcome_msg') }}</span>
				<span class="h1"  style="font-style: italic;">{{ $t('presentation.introduction') }}</span>
			</div>
			
			<!-- Cards -->
      <div class="cards-container" v-if="cards">
        <CardComponent v-for="(card, index) in cards" :key="card.id"
        :cardData="card" :positionRight="index % 2 !== 0"/>
      </div>

			<!-- Footer -->
			<FooterComponent />

		</div>
	</main>
</template>

<script setup lang="ts">
import { onBeforeMount, ref, watch } from 'vue';
import { useI18n } from 'vue-i18n';

import HeaderComponent from '@/components/header/index.vue';
import CardComponent from '@/components/card/index.vue';
import FooterComponent from '@/components/footer/index.vue';

import { cards as cardsEs } from '@/assets/locales/es/cards';
import { cards as cardsEn } from '@/assets/locales/en/cards';
import { ICard } from '@/interfaces/ICard.interface';

const cards = ref<Array<ICard>| null>(null);
const { locale } = useI18n();

onBeforeMount(() => {
  setCardsLang();
});

watch( locale, () => {
  setCardsLang();
});

const setCardsLang = () => {
  if( locale.value === 'es' ) cards.value = cardsEs;
  else cards.value = cardsEn;
};
</script>

<style src="./HomeView.scss" scoped lang="scss"></style>