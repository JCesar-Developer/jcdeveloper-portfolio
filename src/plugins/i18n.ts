import { createI18n } from 'vue-i18n';
import locales from '@/assets/locales/locales'

const i18n = createI18n({
	legacy: false,
	globalInjection: true,
	locale: (localStorage.getItem('lang') || 'en'),
	fallbackLocale: 'en',
	availableLocales: ['en', 'es' ],
	messages: locales,
})

export default i18n;