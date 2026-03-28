<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import SiteNav from '../components/SiteNav.vue'
import SiteFooter from '../components/SiteFooter.vue'
import { labGallery } from '../data/labGallery.js'

const { t } = useI18n()

const labIntroLinks = {
  centerLink: 'https://yxzx.syphu.edu.cn/',
}

const labIntroLocalized = computed(() => ({
  title: t('labIntro.title'),
  lead: t('labIntro.lead'),
  centerLink: labIntroLinks.centerLink,
  centerLabel: t('labIntro.centerLabel'),
}))

const labGalleryLocalized = computed(() =>
  labGallery.map((item) => ({
    ...item,
    title: t(`labGallery.${item.id}.title`),
    caption: t(`labGallery.${item.id}.caption`),
  })),
)

const kindLabel = computed(() => ({ igem: t('labs.kindLabel.igem') }))
</script>

<template>
  <div class="min-h-screen bg-[#fafafa] font-sans text-gray-900 overflow-x-hidden">
    <SiteNav active="labs" recruit-hash-contact />

    <header
      class="relative overflow-hidden bg-gradient-to-br from-[#1a0a0c] via-[#4a1518] to-[#B22222] text-white"
    >
      <div
        class="absolute inset-0 opacity-30 bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.06\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"
      />
      <div class="relative mx-auto max-w-5xl px-4 py-14 text-center sm:px-6 sm:py-16 md:py-24">
        <p class="text-[11px] md:text-sm uppercase tracking-[0.35em] text-white/70 mb-3 md:mb-4">
          {{ t('labs.heroKicker') }}
        </p>
        <h1 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight mb-5 md:mb-6">
          {{ labIntroLocalized.title }}
        </h1>
        <p class="text-sm md:text-base lg:text-lg text-white/90 leading-relaxed max-w-3xl mx-auto">
          {{ labIntroLocalized.lead }}
        </p>
        <a
          :href="labIntroLocalized.centerLink"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex mt-8 md:mt-10 items-center gap-2 px-8 py-3 rounded-full bg-white text-[#B22222] font-bold text-sm hover:bg-gray-100 transition shadow-lg"
        >
          {{ labIntroLocalized.centerLabel }}
          <span aria-hidden="true">→</span>
        </a>
      </div>
    </header>

    <section class="px-4 py-14 sm:px-6 md:py-24">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-10 md:mb-14">
          <h2 class="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900">{{ t('labs.galleryTitle') }}</h2>
          <i18n-t keypath="labs.galleryIntro" tag="p" class="mt-3 text-xs md:text-sm text-gray-500 max-w-2xl mx-auto leading-relaxed">
            <template #wiki>
              <a
                href="https://2025.igem.wiki/SYPHU-China/"
                class="text-[#B22222] underline font-medium"
                target="_blank"
                rel="noopener noreferrer"
                >{{ t('labs.wikiOfficial') }}</a
              >
            </template>
          </i18n-t>
        </div>

        <div class="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          <article
            v-for="item in labGalleryLocalized"
            :key="item.id"
            class="break-inside-avoid rounded-2xl overflow-hidden bg-white shadow-md border border-gray-100/80 hover:shadow-xl transition-shadow duration-300"
          >
            <div class="relative bg-gray-100">
              <img
                :src="item.src"
                :alt="item.title"
                class="w-full h-auto object-cover"
                loading="lazy"
                decoding="async"
              />
              <span
                class="absolute top-3 left-3 text-[10px] font-bold tracking-wider px-2.5 py-1 rounded-full bg-black/55 text-white backdrop-blur-sm"
              >
                {{ kindLabel[item.kind] || item.kind }}
              </span>
            </div>
            <div class="p-5 text-left">
              <h3 class="font-bold text-gray-900 text-sm md:text-base leading-snug">{{ item.title }}</h3>
              <p class="mt-2 text-xs md:text-sm text-gray-600 leading-relaxed">{{ item.caption }}</p>
              <a
                v-if="item.sourceUrl"
                :href="item.sourceUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-block mt-3 text-xs font-semibold text-[#B22222] hover:underline"
              >
                {{ t('labs.viewSource') }}
              </a>
            </div>
          </article>
        </div>

        <p class="mt-12 md:mt-14 text-center text-[11px] md:text-xs text-gray-400 max-w-3xl mx-auto leading-relaxed">
          <i18n-t keypath="labs.footNote" tag="span">
            <template #file>
              <code class="text-gray-500">src/data/labGallery.js</code>
            </template>
          </i18n-t>
        </p>
      </div>
    </section>

    <SiteFooter />
  </div>
</template>
