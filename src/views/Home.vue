<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { IMAGES, TEAM_PHOTOS, TEAM_LOGOS_BY_YEAR } from '../assets.js'
import { yearProjectsMeta } from '../data/yearProjectsMeta.js'
import SiteNav from '../components/SiteNav.vue'
import SiteFooter from '../components/SiteFooter.vue'
import { ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, EffectFade } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/effect-fade'

const swiperModules = [Autoplay, EffectFade]
const { t } = useI18n()

const activeHeroYearIndex = ref(0)

function onHeroSlideChange(swiper) {
  activeHeroYearIndex.value = swiper.realIndex
}

function teamLogo(year) {
  return TEAM_LOGOS_BY_YEAR.find((x) => x.year === year) ?? TEAM_LOGOS_BY_YEAR[0]
}

function logoImgClass(year) {
  if (year === '2024') return 'scale-[2] object-cover object-center'
  if (year === '2023') return 'object-contain p-3 bg-white'
  return 'object-cover object-center'
}

const yearProjects = computed(() =>
  yearProjectsMeta.map((meta) => {
    const y = meta.year
    const prefix = `projects.cards.${y}`
    return {
      ...meta,
      diseaseTitle: t(`${prefix}.diseaseTitle`),
      diseaseSubtitle: t(`${prefix}.diseaseSubtitle`),
      title: t(`${prefix}.title`),
      description: t(`${prefix}.description`),
      tag: t(`projects.tags.${meta.tag}`),
      sourceRepoLabel: meta.sourceRepoUrl ? t('home.sourceRepo') : undefined,
      wikiImages: meta.wikiImages.map((img, i) => ({
        src: img.src,
        alt: t(`${prefix}.imgAlt${i}`),
        caption: t(`${prefix}.cap${i}`),
      })),
    }
  }),
)
</script>

<template>
  <div class="min-h-screen bg-white font-sans text-gray-900 overflow-x-hidden">
    <SiteNav active="home" />

    <header
      class="relative flex min-h-[65svh] w-full flex-col bg-black sm:min-h-[72svh] md:min-h-[75vh] lg:min-h-[78vh] overflow-hidden"
    >
      <div class="absolute inset-0 z-0 min-h-[65svh] sm:min-h-[72svh] md:min-h-[75vh]">
        <swiper
          :modules="swiperModules"
          :slides-per-view="1"
          :loop="true"
          :effect="'fade'"
          :autoplay="{ delay: 4000, disableOnInteraction: false }"
          class="h-full w-full"
          @slideChange="onHeroSlideChange"
        >
          <swiper-slide v-for="(img, index) in TEAM_PHOTOS" :key="index">
            <div class="relative h-full w-full">
              <div class="absolute inset-0 bg-black/50 z-10" />
              <img :src="img" class="h-full w-full object-cover" alt="" />
            </div>
          </swiper-slide>
        </swiper>
      </div>

      <div
        class="relative z-20 flex min-h-0 flex-1 flex-col items-center justify-center px-4 py-10 text-center text-white sm:px-6 sm:py-12 md:py-14"
      >
        <div class="mb-5 flex flex-col items-center md:mb-10">
          <div
            :key="TEAM_LOGOS_BY_YEAR[activeHeroYearIndex].year"
            class="h-36 w-36 shrink-0 overflow-hidden rounded-full bg-white/15 ring-[3px] ring-white/40 shadow-2xl animate-fade-in transition-all duration-500 sm:h-40 sm:w-40 md:h-52 md:w-52"
          >
            <img
              :src="TEAM_LOGOS_BY_YEAR[activeHeroYearIndex].src"
              :alt="TEAM_LOGOS_BY_YEAR[activeHeroYearIndex].alt"
              class="h-full w-full object-cover object-center origin-center transition-transform duration-500"
              :class="TEAM_LOGOS_BY_YEAR[activeHeroYearIndex].year === '2024' ? 'scale-[2]' : 'scale-100'"
            />
          </div>
        </div>
        <h1
          class="mb-3 max-w-[min(100%,22rem)] px-1 text-[1.5rem] font-extrabold leading-tight tracking-tight text-balance drop-shadow-lg sm:max-w-none sm:mb-4 sm:text-4xl md:mb-4 md:text-5xl lg:text-6xl"
        >
          {{ t('home.heroTitle') }}
        </h1>
        <p class="text-base sm:text-lg md:text-xl lg:text-2xl font-light text-gray-200 drop-shadow-md max-w-3xl">
          {{ t('home.heroSubtitle') }}
        </p>
      </div>
    </header>

    <section id="projects" class="relative py-14 md:py-24 overflow-hidden bg-gradient-to-b from-gray-100/90 via-white to-gray-50">
      <div
        class="pointer-events-none absolute inset-0 opacity-[0.35]"
        style="background-image: radial-gradient(circle at 20% 20%, rgba(178,34,34,0.12), transparent 45%), radial-gradient(circle at 80% 10%, rgba(124,58,237,0.1), transparent 40%);"
      />
      <div class="container relative mx-auto max-w-6xl px-4 sm:px-6">
        <div class="mb-10 md:mb-16 text-center">
          <p class="text-[11px] md:text-xs font-bold tracking-[0.35em] text-[#B22222]/90 uppercase mb-2 md:mb-3">
            {{ t('home.projectsKicker') }}
          </p>
          <h2 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-gray-900 mb-3 md:mb-4">
            {{ t('home.projectsTitle') }}
          </h2>
          <i18n-t
            keypath="home.projectsIntro"
            tag="p"
            class="mx-auto max-w-2xl text-sm md:text-base text-gray-600 leading-relaxed"
          >
            <template #strong>
              <strong class="text-gray-900 font-semibold">{{ t('home.projectsIntroStrong') }}</strong>
            </template>
          </i18n-t>
          <div class="mt-5 md:mt-6 h-1.5 w-20 bg-gradient-to-r from-[#B22222] to-rose-400 mx-auto rounded-full" />
        </div>

        <div class="flex flex-col gap-12 md:gap-16">
          <article
            v-for="(p, idx) in yearProjects"
            :key="p.year"
            class="group relative overflow-hidden rounded-[1.75rem] border border-gray-200/80 bg-white/95 shadow-lg shadow-gray-900/5 transition duration-300 hover:shadow-2xl hover:shadow-[#B22222]/10"
          >
            <div class="relative px-5 py-5 md:px-8 md:py-6 text-white bg-gradient-to-r shadow-inner" :class="p.accent">
              <div class="flex flex-wrap items-end justify-between gap-4">
                <div class="min-w-0">
                  <p class="text-[11px] md:text-xs font-semibold uppercase tracking-[0.2em] text-white/80 mb-1">
                    {{ t('home.seasonFocus', { year: p.year }) }}
                  </p>
                  <h3 class="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black tracking-tight drop-shadow-sm leading-tight">
                    {{ p.diseaseTitle }}
                  </h3>
                  <p class="mt-2 max-w-2xl text-sm md:text-base text-white/90 font-medium leading-snug">
                    {{ p.diseaseSubtitle }}
                  </p>
                </div>
                <span
                  class="shrink-0 rounded-full border border-white/30 bg-white/15 px-3 py-1 text-[10px] md:text-[11px] font-bold uppercase tracking-wider backdrop-blur-sm"
                >
                  {{ p.tag }}
                </span>
              </div>
            </div>

            <div
              class="grid gap-8 p-6 sm:p-8 md:p-10 lg:grid-cols-[auto_minmax(0,1fr)] lg:gap-12 lg:items-center"
            >
              <div class="flex justify-center lg:justify-start">
                <div
                  class="relative h-40 w-40 sm:h-44 sm:w-44 md:h-48 md:w-48 shrink-0 overflow-hidden rounded-full bg-gradient-to-br from-white to-gray-100 ring-[3px] ring-white shadow-xl ring-offset-[3px] ring-offset-gray-100/90 transition group-hover:ring-[#B22222]/20"
                >
                  <img
                    :src="teamLogo(p.year).src"
                    :alt="teamLogo(p.year).alt"
                    class="h-full w-full origin-center transition-transform duration-500 group-hover:scale-[1.02]"
                    :class="logoImgClass(p.year)"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>

              <div class="min-w-0 space-y-5">
                <div class="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <h4 class="text-base md:text-lg lg:text-xl font-bold text-gray-900">{{ p.title }}</h4>
                  <span
                    class="text-3xl md:text-4xl font-black tabular-nums text-gray-100 select-none group-hover:text-gray-200 transition"
                  >
                    {{ p.year }}
                  </span>
                </div>
                <p class="text-sm md:text-[15px] leading-relaxed text-gray-600">
                  {{ p.description }}
                </p>

                <div>
                  <div
                    class="grid gap-2.5 sm:gap-3 [grid-template-columns:repeat(auto-fill,minmax(min(100%,150px),1fr))] sm:[grid-template-columns:repeat(auto-fill,minmax(min(100%,170px),1fr))]"
                  >
                    <a
                      v-for="(img, ii) in p.wikiImages"
                      :key="ii + img.src"
                      :href="p.wiki"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="group/img relative overflow-hidden rounded-xl bg-gray-100 ring-1 ring-black/5 transition hover:ring-[#B22222]/30"
                    >
                      <div class="aspect-[4/3] w-full">
                        <img
                          :src="img.src"
                          :alt="img.alt"
                          class="h-full w-full object-cover object-center transition duration-300 group-hover/img:scale-105"
                          loading="lazy"
                          decoding="async"
                        />
                      </div>
                      <p
                        class="truncate px-2 py-1.5 text-center text-[10px] font-medium text-gray-500 group-hover/img:text-[#B22222]"
                      >
                        {{ img.caption }}
                      </p>
                    </a>
                  </div>
                </div>

                <div class="flex flex-wrap items-center gap-3 pt-1">
                  <a
                    :href="p.wiki"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="inline-flex items-center gap-2 rounded-full bg-[#B22222] px-5 py-2.5 text-sm font-bold text-white shadow-md transition hover:bg-red-800"
                  >
                    {{ t('home.viewWiki') }}
                    <span aria-hidden="true">→</span>
                  </a>
                  <a
                    v-if="p.sourceRepoUrl"
                    :href="p.sourceRepoUrl"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white px-4 py-2.5 text-sm font-semibold text-gray-800 transition hover:border-[#B22222]/40 hover:text-[#B22222]"
                  >
                    {{ p.sourceRepoLabel }}
                  </a>
                </div>
                <p v-if="p.sourceRepoUrl" class="text-[11px] md:text-xs text-gray-500 leading-relaxed">
                  <i18n-t keypath="home.sourceNote2024" tag="span">
                    <template #path5270>
                      <code class="rounded bg-gray-100 px-1 py-0.5 text-[11px]">static.igem.wiki/teams/5270</code>
                    </template>
                    <template #pages>
                      <code class="rounded bg-gray-100 px-1 py-0.5 text-[11px]">pages/</code>
                    </template>
                  </i18n-t>
                </p>
              </div>
            </div>

            <div
              v-if="idx % 2 === 1"
              class="pointer-events-none absolute -right-8 top-1/2 hidden h-40 w-40 -translate-y-1/2 rounded-full bg-gradient-to-br from-[#B22222]/5 to-transparent blur-2xl md:block"
            />
          </article>
        </div>
      </div>
    </section>

    <SiteFooter />
  </div>
</template>

<style>
html {
  scroll-behavior: smooth;
}
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.animate-fade-in {
  animation: fadeIn 1.2s ease-out;
}
</style>
