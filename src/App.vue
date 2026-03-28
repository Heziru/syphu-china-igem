<script setup>
import { watch } from 'vue'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()

const HTML_LANG = {
  'zh-CN': 'zh-Hans',
  'zh-HK': 'zh-Hant-HK',
  'zh-TW': 'zh-Hant-TW',
  en: 'en',
  fr: 'fr',
}

watch(
  locale,
  (l) => {
    document.documentElement.lang = HTML_LANG[l] || 'zh-Hans'
  },
  { immediate: true },
)
</script>

<template>
  <router-view />
</template>
