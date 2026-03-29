<script setup>
import { computed, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import SchoolGlobe from '../components/SchoolGlobe.vue'
import SiteNav from '../components/SiteNav.vue'
import SiteFooter from '../components/SiteFooter.vue'
import {
  campusGallerySlides,
  featuredSchoolNews,
  internationalHeroSlides,
  peonySpotlight,
  researchSpotlights,
} from '../data/partnershipCampus.js'
import {
  igemAlumniStartupsMap,
  igemStartupsPage,
  igemStartupsSpotlights,
  igemStartupsStats,
  igemStartupsTimeline,
} from '../data/igemSponsorship.js'

const { t } = useI18n()

const philosophyLines = computed(() =>
  [1, 2, 3, 4].map((i) => t(`partnership.philosophy${i}`)),
)

const galleryModules = [Autoplay]

const newsHospital = featuredSchoolNews.find((n) => n.id === 'hospitals')
const newsBelgium = featuredSchoolNews.find((n) => n.id === 'belgium')

const web3AccessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || ''

const contactName = ref('')
const contactEmail = ref('')
const contactOrg = ref('')
const contactMessage = ref('')
const submitting = ref(false)
const formFeedback = ref(null)

async function submitContact() {
  formFeedback.value = null
  if (!web3AccessKey) return

  submitting.value = true
  try {
    const orgLine = contactOrg.value.trim()
      ? `\n${t('form.orgLinePrefix')}${contactOrg.value.trim()}`
      : ''
    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        access_key: web3AccessKey,
        name: contactName.value,
        email: contactEmail.value,
        message: `${contactMessage.value}${orgLine}`,
        subject: t('partnership.formSubjectMail'),
        from_name: 'SYPHU-China partnership',
      }),
    })
    const data = await res.json().catch(() => ({}))
    if (data.success) {
      formFeedback.value = {
        ok: true,
        text: t('form.successPartnership'),
      }
      contactName.value = ''
      contactEmail.value = ''
      contactOrg.value = ''
      contactMessage.value = ''
    } else {
      formFeedback.value = {
        ok: false,
        text: typeof data.message === 'string' ? data.message : t('form.fail'),
      }
    }
  } catch {
    formFeedback.value = { ok: false, text: t('form.network') }
  } finally {
    submitting.value = false
  }
}
</script>

<template>
  <div class="min-h-screen bg-white font-sans text-gray-900 overflow-x-hidden">
    <SiteNav active="partnership" />

    <header class="bg-gradient-to-br from-slate-900 via-[#1a0a0c] to-[#7a1619] text-white">
      <div class="mx-auto max-w-4xl px-4 py-12 text-center sm:px-6 sm:py-14 md:py-20">
        <p class="text-xs md:text-sm tracking-[0.25em] text-white/70 mb-3 md:mb-4">{{ t('partnership.heroKicker') }}</p>
        <h1 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight mb-5 md:mb-6">{{ t('partnership.heroTitle') }}</h1>
        <p class="text-base md:text-lg text-white/90 leading-relaxed max-w-2xl mx-auto">
          {{ t('partnership.heroLead') }}
        </p>
        <a
          href="#contact"
          class="inline-block mt-8 md:mt-10 px-8 py-3 rounded-full bg-white text-[#B22222] font-bold text-sm hover:bg-gray-100 transition shadow-lg"
        >
          {{ t('partnership.contactCta') }}
        </a>
      </div>
    </header>

    <section class="mx-auto max-w-5xl px-4 py-12 sm:px-6 md:py-20">
      <h2 class="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-4">{{ t('partnership.inviteTitle') }}</h2>
      <div class="h-1.5 w-16 bg-[#B22222] rounded-full mb-6 md:mb-8" />
      <div class="prose prose-gray max-w-none text-gray-700 text-sm md:text-base leading-relaxed space-y-4">
        <p>{{ t('partnership.inviteP1') }}</p>
        <p>{{ t('partnership.inviteP2') }}</p>
      </div>
    </section>

    <section class="py-12 px-6 bg-slate-50 border-y border-gray-100">
      <div class="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
        <div>
          <h2 class="text-xl md:text-2xl font-bold text-gray-900 mb-5 md:mb-6">{{ t('partnership.whereTitle') }}</h2>
          <SchoolGlobe />
        </div>
        <div class="space-y-6">
          <div class="rounded-2xl bg-white border border-gray-100 p-6 shadow-sm">
            <h3 class="font-bold text-[#B22222] mb-3">{{ t('partnership.addrShenyangTitle') }}</h3>
            <p class="text-gray-800 leading-relaxed text-sm md:text-base">
              {{ t('partnership.addrShenyang') }}<br />
              {{ t('partnership.zipLabel') }}：{{ t('partnership.zipShenyang') }}
            </p>
          </div>
          <div class="rounded-2xl bg-white border border-gray-100 p-6 shadow-sm">
            <h3 class="font-bold text-gray-900 mb-3">{{ t('partnership.addrBenxiTitle') }}</h3>
            <p class="text-gray-700 leading-relaxed text-sm">
              {{ t('partnership.addrBenxi') }}
            </p>
          </div>
          <a
            class="inline-flex items-center gap-2 text-[#B22222] font-semibold text-sm hover:underline"
            href="https://www.openstreetmap.org/?mlat=41.7694&mlon=123.4461#map=15/41.7694/123.4461"
            target="_blank"
            rel="noopener noreferrer"
          >
            {{ t('partnership.mapLink') }}
          </a>
        </div>
      </div>
    </section>

    <section class="py-14 md:py-24 px-4 sm:px-6 max-w-6xl mx-auto">
      <h2 class="text-xl md:text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight mb-10 md:mb-14">{{ t('partnership.campusNewsTitle') }}</h2>

      <!-- 重点 ① 医教协同 -->
      <article v-if="newsHospital" class="mb-16 md:mb-24">
        <div
          class="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#4a1518] to-[#1a0a0c] text-white p-6 md:p-10 md:grid md:grid-cols-12 md:gap-8 md:items-stretch"
        >
          <div class="md:col-span-5 flex flex-col justify-center z-10 mb-6 md:mb-0">
            <span class="text-xs font-semibold tracking-[0.2em] text-white/60 uppercase">{{ t('partnership.newsKickerMedEd') }}</span>
            <h3 class="mt-2 text-2xl md:text-3xl font-bold leading-snug">{{ t(`partnership.featuredNews.${newsHospital.id}.title`) }}</h3>
            <p class="mt-4 text-white/85 text-sm md:text-base leading-relaxed">{{ t(`partnership.featuredNews.${newsHospital.id}.line`) }}</p>
            <a
              :href="newsHospital.url"
              class="mt-6 inline-flex items-center gap-2 text-sm font-bold text-white border border-white/40 rounded-full px-5 py-2.5 w-fit hover:bg-white/10 transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              {{ t('partnership.readFull') }}
            </a>
          </div>
          <div class="md:col-span-7 grid grid-cols-2 gap-2 md:gap-3">
            <img
              :src="newsHospital.images[0]"
              alt=""
              class="col-span-2 rounded-2xl w-full h-48 md:h-64 object-cover shadow-lg"
              loading="lazy"
            />
            <img
              :src="newsHospital.images[1]"
              alt=""
              class="rounded-xl w-full h-28 md:h-36 object-cover"
              loading="lazy"
            />
            <img
              :src="newsHospital.images[2]"
              alt=""
              class="rounded-xl w-full h-28 md:h-36 object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </article>

      <!-- 重点 ② 国际交流（左右互换） -->
      <article v-if="newsBelgium" class="mb-16 md:mb-24">
        <div class="flex flex-col lg:flex-row-reverse gap-6 lg:gap-10 items-center">
          <div class="flex-1 w-full grid grid-cols-12 grid-rows-2 gap-2 min-h-[220px]">
            <img
              :src="newsBelgium.images[0]"
              alt=""
              class="col-span-7 row-span-2 rounded-2xl w-full h-full object-cover shadow-md min-h-[220px]"
              loading="lazy"
            />
            <img
              :src="newsBelgium.images[1]"
              alt=""
              class="col-span-5 row-span-1 rounded-xl w-full h-full object-cover min-h-[100px]"
              loading="lazy"
            />
            <img
              :src="newsBelgium.images[2]"
              alt=""
              class="col-span-5 row-span-1 rounded-xl w-full h-full object-cover min-h-[100px]"
              loading="lazy"
            />
          </div>
          <div class="flex-1 lg:max-w-md border-l-4 border-[#B22222] pl-6 lg:pl-8">
            <span class="text-xs font-bold text-[#B22222] tracking-widest">{{ t('partnership.newsKickerIntl') }}</span>
            <h3 class="mt-2 text-xl md:text-2xl font-bold text-gray-900">{{ t(`partnership.featuredNews.${newsBelgium.id}.title`) }}</h3>
            <p class="mt-3 text-gray-600 text-sm md:text-base leading-relaxed">{{ t(`partnership.featuredNews.${newsBelgium.id}.line`) }}</p>
            <a
              :href="newsBelgium.url"
              class="mt-5 inline-block text-sm font-semibold text-[#B22222] hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              {{ t('partnership.newsReportLink') }}
            </a>
          </div>
        </div>
      </article>

      <!-- 国际 -->
      <div
        class="mb-16 md:mb-20 -mx-4 sm:mx-0 rounded-3xl overflow-hidden border-4 border-amber-400/90 bg-gradient-to-br from-slate-950 via-[#1e1b4b] to-slate-900 shadow-2xl shadow-amber-900/20 ring-2 ring-amber-300/40"
      >
        <div class="px-5 py-6 md:px-10 md:py-8">
          <h3 class="text-2xl md:text-4xl lg:text-5xl font-black text-white tracking-tight drop-shadow-lg mb-8">
            {{ t('partnership.intlCoopTitle') }}
          </h3>
          <Swiper
            :modules="galleryModules"
            :slides-per-view="1.08"
            :space-between="16"
            :loop="true"
            :autoplay="{ delay: 2000, disableOnInteraction: false, pauseOnMouseEnter: true }"
            :breakpoints="{
              520: { slidesPerView: 1.25, spaceBetween: 16 },
              768: { slidesPerView: 1.65, spaceBetween: 18 },
              1024: { slidesPerView: 2.15, spaceBetween: 20 },
              1280: { slidesPerView: 2.65, spaceBetween: 22 },
            }"
            class="intl-swiper pb-2"
          >
            <SwiperSlide v-for="(slide, ii) in internationalHeroSlides" :key="'intl-' + ii + slide.src">
              <a
                :href="slide.pageUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="block group"
              >
                <div
                  class="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border-2 border-amber-400/40 bg-black/40 shadow-lg"
                >
                  <img
                    :src="slide.src"
                    :alt="t(`partnership.intlSlideTags.${slide.tagKey}`)"
                    class="absolute inset-0 h-full w-full transition duration-500 group-hover:scale-105"
                    :class="slide.fit === 'contain' ? 'object-contain' : 'object-cover'"
                    loading="lazy"
                  />
                  <div
                    class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/85 to-transparent px-3 py-3 pt-10"
                  >
                    <span class="inline-block rounded-md bg-amber-500 px-2.5 py-0.5 text-[11px] font-bold text-slate-950">
                      {{ t(`partnership.intlSlideTags.${slide.tagKey}`) }}
                    </span>
                  </div>
                </div>
              </a>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      <article v-for="block in researchSpotlights" :key="block.id" class="mb-16 md:mb-20">
        <!-- 微生理会议：图文同高，减少留白 -->
        <div
          v-if="block.id === 'mps2025'"
          class="rounded-2xl border border-gray-200 bg-white p-4 md:p-5 shadow-md ring-2 ring-[#B22222]/10 overflow-hidden"
        >
          <div class="grid lg:grid-cols-12 gap-4 lg:gap-5 lg:items-stretch">
            <div class="lg:col-span-4 flex flex-col justify-center gap-2 min-w-0">
              <span class="text-[11px] font-semibold text-gray-500">{{ t(`partnership.campusResearchCards.${block.id}.badge`) }}</span>
              <h3 class="text-base md:text-lg font-bold text-gray-900 leading-snug">{{ t(`partnership.campusResearchCards.${block.id}.title`) }}</h3>
              <p class="text-xs md:text-sm text-gray-600 leading-relaxed">{{ t(`partnership.campusResearchCards.${block.id}.line`) }}</p>
              <a
                :href="block.url"
                class="mt-1 inline-flex w-fit text-sm font-bold text-[#B22222] hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                {{ t('partnership.readFullArticle') }}
              </a>
            </div>
            <div class="lg:col-span-8 grid grid-cols-3 gap-2 sm:gap-2.5 min-h-0">
              <a
                v-for="(src, i) in block.images"
                :key="i"
                :href="block.url"
                target="_blank"
                rel="noopener noreferrer"
                class="relative aspect-[4/3] overflow-hidden rounded-lg bg-gray-100 ring-1 ring-black/5"
              >
                <img :src="src" alt="" class="absolute inset-0 h-full w-full object-cover hover:opacity-95 transition" loading="lazy" />
              </a>
            </div>
          </div>
        </div>

        <div
          v-else
          class="rounded-3xl border border-gray-200 bg-gradient-to-b from-gray-50 to-white p-6 md:p-8 shadow-sm overflow-hidden"
        >
          <div class="flex flex-col md:flex-row md:items-end gap-6">
            <div class="md:flex-1 min-w-0">
              <span class="text-xs font-semibold text-gray-500 tracking-wider">{{ t(`partnership.campusResearchCards.${block.id}.badge`) }}</span>
              <h3 class="mt-1 text-xl md:text-2xl font-bold text-gray-900 leading-snug">{{ t(`partnership.campusResearchCards.${block.id}.title`) }}</h3>
              <p class="mt-2 text-sm text-gray-600 max-w-2xl">{{ t(`partnership.campusResearchCards.${block.id}.line`) }}</p>
              <a
                :href="block.url"
                class="mt-4 inline-flex text-sm font-bold text-[#B22222] hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                {{ t('partnership.readFullArticle') }}
              </a>
            </div>
            <div class="flex gap-2 md:gap-3 md:flex-shrink-0 overflow-x-auto pb-1">
              <img
                v-for="(src, i) in block.images"
                :key="i"
                :src="src"
                alt=""
                class="h-32 md:h-44 w-auto min-w-[150px] md:min-w-[200px] rounded-xl object-cover shadow-md"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </article>

      <div class="space-y-10">
        <div>
          <h3 class="text-lg font-bold text-gray-900 mb-4">{{ t('partnership.peonySectionTitle') }}</h3>
          <div class="grid sm:grid-cols-2 gap-4">
            <a
              v-for="(p, idx) in peonySpotlight"
              :key="idx"
              :href="p.pageUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="group flex min-h-[260px] md:min-h-[300px] items-center justify-center rounded-3xl bg-gradient-to-b from-rose-50 to-white p-6 ring-1 ring-[#B22222]/10 shadow-sm hover:shadow-md transition"
            >
              <img
                :src="p.src"
                :alt="t('partnership.peonyImgAlt')"
                class="max-h-[min(72vh,560px)] w-full max-w-full object-contain object-center"
                loading="lazy"
              />
            </a>
          </div>
        </div>

        <div>
          <h3 class="text-lg font-bold text-gray-900 mb-5">{{ t('partnership.campusScenerySubtitle') }}</h3>
          <div class="relative rounded-3xl bg-gray-50/80 py-6 pl-4 pr-2 md:px-6 md:py-8 ring-1 ring-black/5">
            <Swiper
              :modules="galleryModules"
              :slides-per-view="1.15"
              :space-between="14"
              :loop="true"
              :autoplay="{ delay: 2400, disableOnInteraction: false, pauseOnMouseEnter: true }"
              :breakpoints="{
                480: { slidesPerView: 1.35, spaceBetween: 14 },
                640: { slidesPerView: 2, spaceBetween: 16 },
                900: { slidesPerView: 2.4, spaceBetween: 18 },
                1200: { slidesPerView: 3.1, spaceBetween: 20 },
              }"
              class="partnership-campus-swiper !pb-1"
            >
              <SwiperSlide v-for="(slide, si) in campusGallerySlides" :key="si + slide.src">
                <a
                  :href="slide.pageUrl"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="block group"
                >
                  <div
                    class="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-gray-200/80 ring-1 ring-black/[0.06]"
                  >
                    <img
                      :src="slide.src"
                      :alt="slide.tag"
                      class="absolute inset-0 h-full w-full transition duration-300 group-hover:scale-[1.03]"
                      :class="slide.fit === 'contain' ? 'object-contain' : 'object-cover'"
                      loading="lazy"
                    />
                  </div>
                  <p class="mt-2 truncate text-center text-[11px] font-medium text-gray-500 sm:text-xs">
                    {{ slide.tag }}
                  </p>
                </a>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </section>

    <!-- 企业合作 -->
    <section class="py-14 px-4 sm:px-6 bg-gradient-to-b from-white to-slate-50 border-t border-gray-100">
      <div class="max-w-3xl mx-auto text-center mb-8">
        <h2 class="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-4">{{ t('partnership.sponsorTitle') }}</h2>
        <p class="text-gray-700 leading-relaxed text-sm md:text-base">
          {{ t('partnership.sponsorLead') }}
        </p>
      </div>

      <div class="max-w-5xl mx-auto mb-10 rounded-2xl border border-[#B22222]/15 bg-gradient-to-br from-rose-50/80 via-white to-amber-50/40 p-6 md:p-8 shadow-sm">
        <p class="text-center text-xs font-bold tracking-[0.2em] text-[#B22222] mb-4">{{ t('partnership.igemKicker') }}</p>
        <h3 class="text-center text-lg md:text-xl font-bold text-gray-900 mb-6">{{ t('partnership.valuesTitle') }}</h3>
        <ul class="grid md:grid-cols-2 gap-4 text-sm text-gray-700 leading-relaxed">
          <li
            v-for="(line, pi) in philosophyLines"
            :key="pi"
            class="flex gap-3 rounded-xl bg-white/70 px-4 py-3 ring-1 ring-gray-100"
          >
            <span class="text-[#B22222] font-bold shrink-0">·</span>
            <span>{{ line }}</span>
          </li>
        </ul>
        <p class="mt-6 text-center text-xs text-gray-500">
          {{ t('partnership.competitionNote') }}
        </p>
      </div>

      <div class="max-w-5xl mx-auto mb-12 space-y-10">
        <div class="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 border-b border-gray-200/80 pb-6">
          <div>
            <h3 class="text-lg md:text-xl font-bold text-gray-900">{{ igemStartupsPage.title }}</h3>
            <p class="mt-1 text-sm text-gray-600 max-w-xl leading-relaxed">
              {{ t('partnership.startupsLead') }}
            </p>
          </div>
          <a
            :href="igemStartupsPage.url"
            class="inline-flex shrink-0 items-center justify-center rounded-full border border-[#B22222]/30 bg-white px-5 py-2.5 text-sm font-semibold text-[#B22222] hover:bg-rose-50 transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            {{ t('partnership.openStartups') }}
          </a>
        </div>

        <!-- 350+ 统计图 + 文案：大屏两列，小屏堆叠 -->
        <div class="grid gap-6 lg:grid-cols-12 lg:gap-8 lg:items-center">
          <a
            :href="igemStartupsPage.url"
            target="_blank"
            rel="noopener noreferrer"
            class="group lg:col-span-7 rounded-2xl overflow-hidden bg-slate-50 ring-1 ring-gray-200/80 shadow-sm transition hover:ring-[#B22222]/25"
          >
            <img
              :src="igemStartupsStats.imageSrc"
              :alt="t('partnership.startupsHeadline')"
              class="w-full h-auto object-contain object-center"
              loading="eager"
              decoding="async"
            />
            <p class="px-4 py-3 text-center text-xs font-medium text-gray-600 group-hover:text-[#B22222]">
              {{ t('partnership.startupsHeadline') }}{{ t('home.statsCaption') }}
            </p>
          </a>
          <div class="lg:col-span-5 flex flex-col justify-center gap-4 rounded-2xl border border-[#B22222]/10 bg-white p-6 shadow-sm">
            <p class="text-2xl md:text-3xl font-extrabold tracking-tight text-gray-900">
              {{ t('partnership.startupsHeadline') }}
            </p>
            <p class="text-sm leading-relaxed text-gray-700">
              {{ t('partnership.startupsBlurb') }}
            </p>
            <p class="text-xs text-gray-500 leading-relaxed">
              <i18n-t keypath="home.enSiteNote" tag="span">
                <template #wiki>
                  <a
                    :href="igemStartupsPage.url"
                    class="text-[#B22222] underline font-medium"
                    target="_blank"
                    rel="noopener noreferrer"
                    >{{ t('home.wikiLink') }}</a
                  >
                </template>
              </i18n-t>
            </p>
          </div>
        </div>

        <!-- 校友分布动图：全宽，高度随内容 -->
        <figure class="space-y-3">
          <figcaption class="text-sm font-semibold text-gray-900">
            {{ t('partnership.mapLabel') }}
          </figcaption>
          <a
            :href="igemAlumniStartupsMap.href"
            target="_blank"
            rel="noopener noreferrer"
            class="block rounded-2xl bg-slate-50 p-3 sm:p-4 ring-1 ring-gray-200/90 shadow-inner hover:ring-[#B22222]/20 transition"
          >
            <img
              :src="igemAlumniStartupsMap.src"
              :alt="t('partnership.mapLabel')"
              class="mx-auto w-full max-h-[min(72vh,520px)] object-contain object-top"
              loading="lazy"
              decoding="async"
            />
          </a>
          <p class="text-xs text-gray-500 leading-relaxed">
            {{ t('partnership.mapCaption') }}{{ t('partnership.mapTech') }}
            <code class="rounded bg-gray-100 px-1.5 py-0.5 text-[11px] text-gray-700 break-all"
              >websites/startups/2022/homepage/alumnistartupsmap.gif</code
            >
            {{ t('partnership.mapSlow') }}
          </p>
        </figure>

        <!-- 时间线：通栏，自适应缩放 -->
        <a
          :href="igemStartupsTimeline.href"
          target="_blank"
          rel="noopener noreferrer"
          class="block rounded-2xl overflow-hidden bg-white ring-1 ring-gray-200 p-4 sm:p-6 hover:ring-[#B22222]/25 transition"
        >
          <p class="mb-3 text-xs font-semibold text-gray-500">{{ t('partnership.timelineLabel') }}</p>
          <img
            :src="igemStartupsTimeline.src"
            :alt="t('partnership.timelineLabel')"
            class="w-full h-auto object-contain max-h-[280px] sm:max-h-[320px] mx-auto"
            loading="lazy"
            decoding="async"
          />
        </a>

        <!-- 案例配图：auto-fill 弹性网格 -->
        <div>
          <p class="mb-4 text-sm font-semibold text-gray-800">{{ t('partnership.spotlightHeading') }}</p>
          <div
            class="grid gap-4 [grid-template-columns:repeat(auto-fill,minmax(min(100%,260px),1fr))]"
          >
            <a
              v-for="(item, si) in igemStartupsSpotlights"
              :key="si + item.src"
              :href="item.href"
              target="_blank"
              rel="noopener noreferrer"
              class="group flex flex-col overflow-hidden rounded-2xl bg-white ring-1 ring-gray-200 shadow-sm transition hover:ring-[#B22222]/30 hover:shadow-md"
            >
              <div class="relative aspect-[4/3] w-full bg-slate-100">
                <img
                  :src="item.src"
                  :alt="item.label"
                  class="absolute inset-0 h-full w-full object-cover object-center transition duration-300 group-hover:scale-[1.02]"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <p class="px-3 py-2.5 text-center text-xs font-semibold text-gray-800 group-hover:text-[#B22222]">
                {{ item.label }}
              </p>
            </a>
          </div>
        </div>
      </div>

      <div class="max-w-4xl mx-auto grid md:grid-cols-3 gap-6 text-sm">
        <div class="rounded-xl bg-white border border-gray-100 p-6 shadow-sm">
          <p class="font-bold text-[#B22222] mb-2">{{ t('partnership.coop1t') }}</p>
          <p class="text-gray-600 leading-relaxed">{{ t('partnership.coop1d') }}</p>
        </div>
        <div class="rounded-xl bg-white border border-gray-100 p-6 shadow-sm">
          <p class="font-bold text-[#B22222] mb-2">{{ t('partnership.coop2t') }}</p>
          <p class="text-gray-600 leading-relaxed">{{ t('partnership.coop2d') }}</p>
        </div>
        <div class="rounded-xl bg-white border border-gray-100 p-6 shadow-sm">
          <p class="font-bold text-[#B22222] mb-2">{{ t('partnership.coop3t') }}</p>
          <p class="text-gray-600 leading-relaxed">{{ t('partnership.coop3d') }}</p>
        </div>
      </div>
    </section>

    <!-- 联系 -->
    <section id="contact" class="py-20 bg-gray-50">
      <div class="container mx-auto max-w-lg px-4 text-center sm:px-6">
        <h2 class="text-2xl md:text-3xl font-bold text-gray-900 mb-4">{{ t('partnership.contactSectionTitle') }}</h2>
        <div class="h-1.5 w-16 bg-[#B22222] mx-auto rounded-full mb-8" />
        <form
          class="rounded-xl border border-gray-100 bg-white p-5 text-left shadow-md sm:p-8"
          @submit.prevent="submitContact"
        >
          <p
            v-if="formFeedback"
            class="mb-4 rounded-lg px-4 py-3 text-sm"
            :class="formFeedback.ok ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'"
          >
            {{ formFeedback.text }}
          </p>
          <p v-if="!web3AccessKey" class="mb-4 rounded-lg bg-amber-50 px-4 py-3 text-sm text-amber-900">
            {{ t('form.envHintPartnership') }}
          </p>
          <input
            v-model.trim="contactName"
            type="text"
            name="name"
            autocomplete="name"
            :placeholder="t('recruit.placeholderName')"
            class="w-full p-3 mb-4 border border-gray-300 rounded-lg"
            required
          />
          <input
            v-model.trim="contactEmail"
            type="email"
            name="email"
            autocomplete="email"
            :placeholder="t('recruit.placeholderEmail')"
            class="w-full p-3 mb-4 border border-gray-300 rounded-lg"
            required
          />
          <input
            v-model.trim="contactOrg"
            type="text"
            name="organization"
            autocomplete="organization"
            :placeholder="t('partnership.placeholderOrg')"
            class="w-full p-3 mb-4 border border-gray-300 rounded-lg"
          />
          <textarea
            v-model.trim="contactMessage"
            name="message"
            :placeholder="t('partnership.placeholderMsgP')"
            rows="5"
            class="w-full p-3 mb-4 border border-gray-300 rounded-lg"
            required
          />
          <button
            type="submit"
            class="w-full py-3 bg-[#B22222] text-white font-bold rounded-lg disabled:opacity-60 disabled:cursor-not-allowed"
            :disabled="submitting || !web3AccessKey"
          >
            {{ submitting ? t('form.submitting') : t('form.submit') }}
          </button>
        </form>
      </div>
    </section>

    <SiteFooter />
  </div>
</template>
