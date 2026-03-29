<script setup>
import { computed, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import SiteNav from '../components/SiteNav.vue'
import SiteFooter from '../components/SiteFooter.vue'
import { SITE_CONTACT } from '../data/siteContact.js'

const { t, tm } = useI18n()

const groupKeys = ['wet', 'dry', 'hp', 'wiki', 'art']

const commonExpectLines = computed(() => {
  const v = tm('recruit.commonExpect')
  return Array.isArray(v) ? v : []
})

function groupPoints(key) {
  const v = tm(`recruit.groups.${key}.points`)
  return Array.isArray(v) ? v : []
}
const web3AccessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || ''

const contactName = ref('')
const contactEmail = ref('')
const contactMessage = ref('')
const submitting = ref(false)
const formFeedback = ref(null)

async function submitContact() {
  formFeedback.value = null
  if (!web3AccessKey) return

  submitting.value = true
  try {
    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        access_key: web3AccessKey,
        name: contactName.value,
        email: contactEmail.value,
        message: contactMessage.value,
        subject: t('recruit.formSubject'),
        from_name: 'SYPHU-China recruit',
      }),
    })
    const data = await res.json().catch(() => ({}))
    if (data.success) {
      formFeedback.value = { ok: true, text: t('form.successRecruit') }
      contactName.value = ''
      contactEmail.value = ''
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
    <SiteNav active="recruit" />

    <header class="bg-gradient-to-br from-[#B22222] to-[#7a1619] text-white">
      <div class="max-w-4xl mx-auto px-4 py-12 text-center sm:px-6 sm:py-14 md:py-24">
        <p class="text-xs md:text-sm tracking-[0.25em] text-white/80 mb-3 md:mb-4">{{ t('recruit.heroKicker') }}</p>
        <h1 class="text-2xl sm:text-3xl md:text-5xl font-extrabold tracking-tight mb-5 md:mb-6">{{ t('recruit.heroTitle') }}</h1>
        <p class="text-base md:text-lg text-white/95 leading-relaxed max-w-2xl mx-auto">
          {{ t('recruit.heroLead') }}
        </p>
        <div
          class="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap sm:gap-x-8 sm:gap-y-2 text-[15px] text-white/95"
        >
          <a
            :href="'mailto:' + SITE_CONTACT.email"
            class="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 backdrop-blur-sm transition hover:bg-white/20"
          >
            <span class="select-none" aria-hidden="true">📫</span>
            <span class="break-all sm:break-normal">{{ SITE_CONTACT.email }}</span>
          </a>
          <a
            :href="'tel:' + SITE_CONTACT.telHref"
            class="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 backdrop-blur-sm transition hover:bg-white/20"
          >
            <span class="select-none" aria-hidden="true">📞</span>
            <span>{{ SITE_CONTACT.phoneDisplay }}</span>
          </a>
        </div>
        <a
          href="#contact"
          class="inline-block mt-8 md:mt-10 px-8 py-3 rounded-full bg-white text-[#B22222] font-bold text-sm hover:bg-gray-100 transition shadow-lg"
        >
          {{ t('recruit.toForm') }}
        </a>
      </div>
    </header>

    <!-- 通用说明 -->
    <section class="px-4 py-14 sm:px-6 md:py-20 bg-gray-50">
      <div class="max-w-3xl mx-auto">
        <h2 class="text-xl md:text-2xl font-bold text-gray-900 mb-6 text-center">{{ t('recruit.expectTitle') }}</h2>
        <ul class="space-y-3 text-gray-700 leading-relaxed">
          <li v-for="(line, i) in commonExpectLines" :key="i" class="flex gap-3">
            <span class="text-[#B22222] font-bold shrink-0">·</span>
            <span>{{ line }}</span>
          </li>
        </ul>
        <p class="mt-8 text-xs md:text-sm text-gray-500 text-center">
          {{ t('recruit.expectFoot') }}
        </p>
      </div>
    </section>

    <!-- 各组详情 -->
    <section class="px-4 py-14 sm:px-6 md:py-20">
      <div class="max-w-5xl mx-auto">
        <h2 class="text-xl md:text-2xl lg:text-3xl font-bold text-center text-gray-900 mb-4">{{ t('recruit.groupsTitle') }}</h2>
        <div class="h-1.5 w-16 bg-[#B22222] mx-auto rounded-full mb-12" />

        <div class="space-y-10">
          <article
            v-for="key in groupKeys"
            :key="key"
            class="scroll-mt-28 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition-shadow hover:shadow-md sm:p-8 md:p-10 md:scroll-mt-24"
            :id="key"
          >
            <h3 class="text-xl md:text-2xl font-bold text-[#B22222]">{{ t(`recruit.groups.${key}.title`) }}</h3>
            <p class="mt-2 text-gray-600 font-medium">{{ t(`recruit.groups.${key}.short`) }}</p>
            <ul class="mt-6 space-y-4 text-gray-700 text-sm md:text-base leading-relaxed">
              <li v-for="(p, idx) in groupPoints(key)" :key="idx" class="pl-4 border-l-2 border-[#B22222]/30">
                {{ p }}
              </li>
            </ul>
          </article>
        </div>
      </div>
    </section>

    <!-- 流程提示 -->
    <section class="border-y border-gray-100 bg-[#fafafa] px-4 py-12 sm:px-6">
      <div class="max-w-3xl mx-auto text-center">
        <h2 class="text-lg md:text-xl font-bold text-gray-900 mb-4">{{ t('recruit.nextTitle') }}</h2>
        <p class="text-gray-600 text-sm md:text-base leading-relaxed">
          {{ t('recruit.nextBody') }}
        </p>
      </div>
    </section>

    <!-- 联系我们（与团队页表单逻辑一致） -->
    <section id="contact" class="py-20 bg-gray-50">
      <div class="container mx-auto max-w-lg px-4 text-center sm:px-6">
        <h2 class="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">{{ t('recruit.contactTitle') }}</h2>
        <div class="h-1.5 w-16 bg-[#B22222] mx-auto rounded-full mb-4" />
        <p class="text-xs md:text-sm text-gray-500 mb-8">
          {{ t('recruit.contactHint') }}
        </p>
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
            {{ t('form.envHintRecruit') }}
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
          <textarea
            v-model.trim="contactMessage"
            name="message"
            :placeholder="t('recruit.placeholderMsg')"
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
