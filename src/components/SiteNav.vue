<script setup>
import { useI18n } from 'vue-i18n'
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { IMAGES } from '../assets.js'
import { persistLocale } from '../i18n/index.js'

const props = defineProps({
  active: { type: String, default: '' },
  teamExtras: { type: Boolean, default: false },
  recruitHashContact: { type: Boolean, default: false },
})

const localeCodes = ['zh-CN', 'zh-HK', 'zh-TW', 'en', 'fr']

const { locale, t } = useI18n()
const route = useRoute()

const isActive = (name) => {
  if (props.active) return props.active === name
  const map = { home: 'Home', labs: 'Labs', team: 'TeamPage', recruit: 'Recruit', partnership: 'Partnership' }
  return route.name === map[name]
}

const linkClass = (name) =>
  isActive(name)
    ? 'text-[#B22222] font-semibold shrink-0 rounded-xl bg-rose-50/90 px-2.5 py-2 shadow-sm ring-1 ring-[#B22222]/15'
    : 'shrink-0 rounded-xl px-2.5 py-2 text-gray-700 transition-all duration-200 hover:bg-rose-50/60 hover:text-[#B22222]'

const joinTo = computed(() => (props.recruitHashContact ? { path: '/recruit', hash: '#contact' } : '/recruit'))

function setLocale(code) {
  if (localeCodes.includes(code)) {
    locale.value = code
    persistLocale(code)
  }
}

function langButtonClass(code) {
  const on = locale.value === code
  return [
    'shrink-0 select-none rounded-full border px-2 py-1.5 text-center text-[10px] font-semibold leading-tight transition-all duration-200 focus-visible:outline focus-visible:ring-2 focus-visible:ring-[#B22222]/35 focus-visible:ring-offset-2 sm:px-3 sm:py-2 sm:text-xs md:px-3.5 md:text-sm',
    on
      ? 'pointer-events-none border-[#B22222] bg-[#B22222] text-white shadow-md shadow-[#B22222]/20'
      : 'border-gray-200 bg-gray-50/90 text-gray-700 hover:border-[#B22222]/40 hover:bg-rose-50 hover:text-[#B22222] active:scale-[0.98]',
  ]
}
</script>

<template>
  <header class="sticky top-0 z-50 pt-[env(safe-area-inset-top,0px)]">
    <nav
      class="border-b border-gray-100/90 bg-white/95 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.12)] backdrop-blur-sm supports-[backdrop-filter]:bg-white/90"
    >
      <div class="mx-auto max-w-7xl px-4 sm:px-6 md:px-10">
        <!-- Logo 与五种语言同一行；语言区窄屏可横向滑动，避免单独占满一行 -->
        <div class="flex items-center gap-3 border-b border-gray-100 py-4 md:gap-4 md:py-5">
          <router-link to="/" class="group flex min-w-0 flex-1 items-center gap-2 sm:gap-3">
            <img
              :src="IMAGES.SCHOOL_LOGO"
              alt="SYPHU"
              class="h-10 w-auto shrink-0 object-contain transition-transform duration-300 group-hover:scale-[1.03] sm:h-11 md:h-12"
            />
            <div class="hidden h-9 w-px bg-gray-300 sm:block md:h-10" />
            <div class="flex min-w-0 flex-col text-[#B22222]">
              <span
                class="text-lg font-bold leading-tight transition-colors group-hover:text-[#9c1c1f] sm:text-xl md:text-2xl"
                >SYPHU-China</span
              >
              <span class="text-[10px] font-semibold tracking-widest text-gray-500 md:text-[11px]">{{
                t('brand.teamLine')
              }}</span>
            </div>
          </router-link>

          <div
            class="flex max-w-[min(100%,12.5rem)] min-w-0 flex-shrink-0 items-center gap-1 overflow-x-auto pb-0.5 [-ms-overflow-style:none] [scrollbar-width:none] sm:max-w-none sm:gap-1.5 md:gap-2 [&::-webkit-scrollbar]:hidden"
            role="group"
            :aria-label="t('lang.label')"
          >
            <button
              v-for="code in localeCodes"
              :key="code"
              type="button"
              :class="langButtonClass(code)"
              :aria-pressed="locale === code"
              :aria-current="locale === code ? 'true' : undefined"
              @click="setLocale(code)"
            >
              {{ t(`lang.${code}`) }}
            </button>
          </div>
        </div>

        <div
          class="flex flex-wrap items-center gap-x-1 gap-y-2 py-4 text-sm font-medium md:gap-x-2 md:py-5 md:text-base"
        >
          <router-link to="/" :class="linkClass('home')">{{ t('nav.home') }}</router-link>
          <router-link :to="{ path: '/', hash: '#projects' }" :class="linkClass('home')">{{
            t('nav.projects')
          }}</router-link>
          <router-link to="/labs" :class="linkClass('labs')">{{ t('nav.labs') }}</router-link>
          <router-link to="/team" :class="linkClass('team')">{{ t('nav.team') }}</router-link>
          <router-link to="/recruit" :class="linkClass('recruit')">{{ t('nav.recruit') }}</router-link>
          <router-link to="/partnership" :class="linkClass('partnership')">{{ t('nav.partnership') }}</router-link>
          <template v-if="teamExtras">
            <a
              href="#work"
              class="shrink-0 rounded-xl px-2.5 py-2 text-gray-700 transition-all duration-200 hover:bg-rose-50/60 hover:text-[#B22222]"
              >{{ t('nav.work') }}</a
            >
            <a
              href="#contact"
              class="ml-auto inline-flex shrink-0 items-center rounded-full bg-[#B22222] px-5 py-2.5 text-sm font-bold text-white shadow-md shadow-[#B22222]/25 transition hover:scale-[1.02] hover:bg-red-800 hover:shadow-lg md:px-6 md:py-3 md:text-base"
            >
              {{ t('nav.contact') }}
            </a>
          </template>
          <router-link
            v-else
            :to="joinTo"
            class="ml-auto inline-flex shrink-0 items-center rounded-full bg-[#B22222] px-5 py-2.5 text-sm font-bold text-white shadow-md shadow-[#B22222]/25 transition hover:scale-[1.02] hover:bg-red-800 hover:shadow-lg md:px-7 md:py-3 md:text-base"
          >
            {{ t('nav.join') }}
          </router-link>
        </div>
      </div>
    </nav>
  </header>
</template>
