<template>
	<footer id="footer-component" class="w-100 center">
    <div class="footer thin-container d-flex flex-column justify-content-center align-items-center">
      <span class="garamond">julioasto.92@gmail.com</span>
		
      <nav class="nav-options d-flex flex-row">
        <a class="link" href="https://www.linkedin.com/in/julio-c%C3%A9sar-developer/" target="_blank">linked-in</a>
        <a class="link" :href="cv_url" target="_blank">{{ $t( 'footer.resume' ) }}</a>
        <a class="link" href="https://github.com/JCesar-Developer" target="_blank">github</a>
      </nav>
    </div>
	</footer>
</template>

<script setup lang="ts">
import { ref, onBeforeMount } from 'vue';
import { useI18n } from 'vue-i18n';

const { locale } = useI18n();
const cv_url = ref<string>('https://drive.google.com/file/d/1XVz6LfjzG2i1B-d_bHLOfHg1m8geF8CP/view?usp=drive_link');

onBeforeMount(() => {
  cv_url.value = locale.value === 'en' ? 'https://drive.google.com/file/d/1XVz6LfjzG2i1B-d_bHLOfHg1m8geF8CP/view?usp=drive_link' : 'https://drive.google.com/file/d/1IvkH3H4Wp0ft6NcPJxwCl8wz1OtKWI4p/view?usp=drive_link';
})
</script>

<style scoped lang="scss">
@import '@/styles/color.scss';

#footer-component {
  .footer {
    gap: 20px;
    margin-bottom: 80px;

    .garamond {
      font-size: 18px;
    }

    .nav-options {
      gap: 40px;
      a { transition: all .2s ease-in-out; }

      .link:hover {
        color: $o-500;
        transform: scale(1.1);
      }

    }
  }

}
</style>