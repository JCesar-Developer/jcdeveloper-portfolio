<template>
	<div id="home-view">
		<div class="column-container">
			
			<!-- Tittle -->
			<div class="presentation">
				<span class="t-gray">{{ $t('presentation.welcome_msg') }}</span>
				<span class="h1"  style="font-style: italic;">{{ $t('presentation.introduction') }}</span>
			</div>
			
			<!-- Cards -->
      <div class="cards-container" v-if="i18n.global.messages.value[i18n.global.locale.value].cards.cardContent">
        <CardComponent v-for="(card, index) in i18n.global.messages.value[i18n.global.locale.value].cards.cardContent" :key="card.id"
        :cardData="card" :positionRight="index % 2 !== 0"/>
      </div>

		</div>
	</div>
</template>

<script setup lang="ts">
import CardComponent from './components/card/CardComponent.vue';
import i18n from '@/plugins/i18n';
</script>

<style src="./HomeView.scss" scoped lang="scss"></style>