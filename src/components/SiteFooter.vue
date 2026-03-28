<script setup>
import { useI18n } from 'vue-i18n'
import { SITE_CONTACT } from '../data/siteContact.js'

const { t } = useI18n()
</script>

<template>
  <footer
    class="bg-gray-900 pt-10 pb-[max(2.5rem,env(safe-area-inset-bottom))] text-center text-xs md:pt-12 md:pb-[max(3rem,env(safe-area-inset-bottom))] md:text-sm"
  >
    <div class="mb-5 md:mb-6 flex flex-col items-center justify-center gap-2.5 sm:flex-row sm:flex-wrap sm:gap-x-10 sm:gap-y-2">
      <a
        :href="'mailto:' + SITE_CONTACT.email"
        class="inline-flex max-w-full items-center justify-center gap-2 break-all text-gray-300 transition hover:text-white sm:break-normal"
      >
        <span class="select-none" aria-hidden="true">📫</span>
        <span>{{ SITE_CONTACT.email }}</span>
      </a>
      <a
        :href="'tel:' + SITE_CONTACT.telHref"
        class="inline-flex items-center gap-2 text-gray-300 transition hover:text-white"
      >
        <span class="select-none" aria-hidden="true">📞</span>
        <span>{{ SITE_CONTACT.phoneDisplay }}</span>
      </a>
    </div>
    <p class="text-gray-500">{{ t('footer.rights') }}</p>
    <p class="mt-2 text-gray-500 text-[11px] md:text-sm">{{ t('footer.school') }}</p>
  </footer>
</template>
