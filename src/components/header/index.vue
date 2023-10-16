<template>
	<header class="header-container">
		<div class="header">

			<div class="logo">JC Developer</div>
			
			<nav>
				<router-link :to="{ name: 'home' }">{{ $t('header.work') }}</router-link>
				<router-link :to="{ name: 'about' }">{{ $t('header.about') }}</router-link>
				
				<p class="languages">

					<span class="language-toggler" 
					:class="{'is-active': $i18n.locale === 'en'}"
					@click="setLanguage('en')">en</span>/

					<span class="language-toggler" 
					:class="{'is-active': $i18n.locale === 'es'}"
					@click="setLanguage('es')">es</span>
					
				</p>
			</nav>

		</div>
	</header>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';

const { locale } = useI18n();
const setLanguage = ( lang: string ): void => {
  localStorage.setItem( 'lang', lang );
  locale.value = lang;
} 
</script>

<style src="./HeaderComponent.scss" lang="scss"></style>