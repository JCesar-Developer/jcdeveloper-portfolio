<template>
	<header id="header-component" class="center" :class="bgColor">
		<div class="header thin-container d-flex flex-column flex-md-row align-items-center justify-content-between">

      <!-- Logo -->
			<div class="logo dancing">JC Developer</div>
			
      <!-- Nav-bar -->
			<nav class="d-flex flex-row">
				<router-link :to="{ name: 'home' }">{{ $t('header.work') }}</router-link>
				<router-link :to="{ name: 'about' }">{{ $t('header.about') }}</router-link>
				
        <!-- Languages-toggler -->
				<p class="languages">
					<span class="language-toggler pointer" :class="{'is-active': $i18n.locale === 'en'}" @click="setLanguage('en')">en</span>/
					<span class="language-toggler pointer" :class="{'is-active': $i18n.locale === 'es'}" @click="setLanguage('es')">es</span>
				</p>
			</nav>

		</div>
	</header>
</template>

<script setup lang="ts">
import { Ref, ref, onBeforeMount, defineEmits, watch } from 'vue';
import { useI18n } from 'vue-i18n';
import { useRoute, RouteRecordName } from 'vue-router';

import { Background } from '@/interfaces/TBackground-colors.type';

  const emit = defineEmits(['fadePage'])
  const route = useRoute();
  const { locale } = useI18n();

  const bgColor: Ref<Background|null> = ref(null);

  onBeforeMount(() => {
    setBgColor( route.name )
  });

  watch(() => route.name, () => {
    setBgColor( route.name )
  });

  const setBgColor = (route: RouteRecordName | null | undefined ) => {  
    if ( window.innerWidth > 576 && route !== 'study-case' ) bgColor.value = Background.primary;
    if ( window.innerWidth < 576 && route !== 'study-case' ) bgColor.value = Background.primaryTransparent;
    if ( window.innerWidth > 576 && route === 'study-case' ) bgColor.value = Background.secondary;
    if ( window.innerWidth < 576 && route === 'study-case' ) bgColor.value = Background.secondaryTransparent;
  }

  const setLanguage = ( lang: string ): void => {
    localStorage.setItem( 'lang', lang );
    emit('fadePage'); 
    locale.value = lang;
  } 
</script>

<style src="./HeaderComponent.scss" lang="scss"></style>