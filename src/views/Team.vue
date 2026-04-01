<template>
    <div class="min-h-screen bg-white font-sans text-gray-900 overflow-x-hidden">
      <SiteNav active="team" team-extras />

      <!-- 团队介绍 (Team Section) -->
      <section id="team" class="py-20 bg-gray-50">
        <div class="container mx-auto px-4 sm:px-6">
          <div class="text-center mb-16">
            <h2 class="text-2xl md:text-3xl font-bold text-gray-900 mb-4">{{ t('team.title') }}</h2>
            <div class="h-1.5 w-16 bg-[#B22222] mx-auto rounded-full"></div>
          </div>

          <!-- 指导教师 PI -->
          <div class="max-w-5xl mx-auto mb-20">
            <p class="text-center text-xs font-semibold uppercase tracking-[0.2em] text-[#B22222] mb-2">{{ t('team.piKicker') }}</p>
            <h3 class="text-center text-xl md:text-2xl font-bold text-gray-900 mb-10">{{ t('team.piHeading') }}</h3>
            <article
              class="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden flex flex-col md:flex-row md:items-stretch gap-0"
            >
              <div class="md:w-[280px] lg:w-[320px] shrink-0 bg-gray-100 flex items-center justify-center p-6 md:p-8">
                <img
                  :src="pi.photoUrl"
                  :alt="t('team.piPhotoAlt')"
                  class="w-full h-auto max-h-[min(28rem,70vh)] object-contain"
                  loading="lazy"
                />
              </div>
              <div class="p-8 md:p-10 flex flex-col justify-center text-left">
                <h4 class="text-2xl md:text-3xl font-bold text-gray-900">{{ pi.name }}</h4>
                <p class="mt-2 text-sm text-[#B22222] font-semibold">{{ pi.titles }}</p>
                <p class="mt-1 text-sm text-gray-500">{{ pi.affiliation }}</p>
                <p class="mt-6 text-gray-700 text-sm md:text-base leading-relaxed">{{ pi.research }}</p>
                <p class="mt-5 text-gray-700 text-sm md:text-base leading-relaxed border-l-4 border-[#B22222]/80 pl-4">
                  {{ pi.igemSupport }}
                </p>
              </div>
            </article>
          </div>

          <!-- 历届成员（数据与照片来自 iGEM Wiki 静态资源） -->
          <div class="max-w-6xl mx-auto">
            <h3 class="text-center text-xl font-bold text-gray-900 mb-4">{{ t('team.rosterTitle') }}</h3>
            <p class="text-center text-sm text-gray-500 mb-8 max-w-2xl mx-auto leading-relaxed">
              {{ t('team.rosterIntroBefore') }}
              <a :href="wikiTeamPages[2025]" class="text-[#B22222] underline hover:no-underline" target="_blank" rel="noopener noreferrer">2025 Members</a>、
              <a :href="wikiTeamPages[2024]" class="text-[#B22222] underline hover:no-underline" target="_blank" rel="noopener noreferrer">2024 Team</a>、
              <a :href="wikiTeamPages[2023]" class="text-[#B22222] underline hover:no-underline" target="_blank" rel="noopener noreferrer">2023 Team</a>
              {{ t('team.rosterIntroAfter') }}
            </p>

            <div class="flex flex-wrap justify-center gap-2 mb-12">
              <button
                v-for="y in seasonYears"
                :key="y"
                type="button"
                class="px-5 py-2.5 rounded-full text-sm font-semibold transition-all border"
                :class="
                  activeYear === y
                    ? 'bg-[#B22222] text-white border-[#B22222] shadow-md'
                    : 'bg-white text-gray-700 border-gray-200 hover:border-[#B22222]/50'
                "
                @click="activeYear = y"
              >
                {{ y }} {{ t('team.seasonLabel') }}
              </button>
            </div>

            <!-- 2025 -->
            <div v-show="activeYear === 2025" class="space-y-14">
              <template v-for="block in roster2025" :key="block.subsection">
                <div>
                  <h4 class="text-lg font-bold text-gray-900 mb-1 text-center">
                    {{ t(`team.rosterSubsection.${block.subsectionKey}`) }}
                    <span class="text-xs font-normal text-gray-400 tracking-wide ml-2">{{ block.subsection }}</span>
                  </h4>
                  <div class="h-px bg-gray-200 mb-8 max-w-md mx-auto" />
                  <div class="flex flex-wrap justify-center gap-x-6 gap-y-8">
                    <article
                      v-for="member in block.members"
                      :key="member.name"
                      class="w-[min(100%,22rem)] shrink-0 bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-lg transition-shadow flex flex-col"
                    >
                      <div class="bg-gray-100 flex items-center justify-center px-4 py-5 md:py-6">
                        <img
                          :src="member.photo"
                          :alt="member.name"
                          class="w-full h-auto max-h-72 sm:max-h-80 object-contain"
                          loading="lazy"
                        />
                      </div>
                      <div class="p-5 flex-1 flex flex-col text-left">
                        <h5 class="font-bold text-gray-900">{{ member.name }}</h5>
                        <p v-if="member.roles?.length" class="mt-1 text-xs text-[#B22222] font-medium">
                          {{ roleLine(member) }}
                        </p>
                        <p class="mt-3 text-sm text-gray-600 leading-relaxed flex-1">{{ localizedBio(member) }}</p>
                      </div>
                    </article>
                  </div>
                </div>
              </template>
            </div>

            <!-- 2024（图片来自 static.igem.wiki/teams/5270/team/，与 GitLab team.vue 一致） -->
            <div v-show="activeYear === 2024" class="space-y-10">
              <div class="flex flex-col sm:flex-row items-center justify-center gap-6 text-center sm:text-left">
                <img
                  :src="roster2024.logoUrl"
                  :alt="t('team.logo2024Alt')"
                  class="max-h-24 object-contain shrink-0"
                  loading="lazy"
                />
                <div class="text-sm text-gray-600 max-w-xl">
                  <p>{{ t('team.roster2024SourceNote') }}</p>
                  <a
                    :href="roster2024.wikiUrl"
                    class="mt-2 inline-block text-[#B22222] font-semibold underline hover:no-underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {{ t('team.wiki2024Link') }}
                  </a>
                </div>
              </div>
              <div class="flex flex-wrap justify-center gap-x-6 gap-y-8">
                <article
                  v-for="member in roster2024.members"
                  :key="`2024-${member.name}`"
                  class="w-[min(100%,22rem)] shrink-0 bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-lg transition-shadow flex flex-col"
                >
                  <div class="bg-gray-100 flex items-center justify-center px-4 py-5 md:py-6">
                    <img
                      :src="member.photo"
                      :alt="member.name"
                      class="w-full h-auto max-h-72 sm:max-h-80 object-contain"
                      loading="lazy"
                    />
                  </div>
                  <div class="p-5 flex-1 flex flex-col text-left">
                    <h5 class="font-bold text-gray-900">{{ member.name }}</h5>
                    <p v-if="member.roles?.length" class="mt-1 text-xs text-[#B22222] font-medium">
                      {{ roleLine(member) }}
                    </p>
                    <p class="mt-3 text-sm text-gray-600 leading-relaxed flex-1">{{ localizedBio(member) }}</p>
                  </div>
                </article>
              </div>
            </div>

            <!-- 2023 -->
            <div v-show="activeYear === 2023">
              <div class="flex flex-wrap justify-center gap-x-6 gap-y-8">
                <article
                  v-for="member in roster2023"
                  :key="member.name"
                  class="w-[min(100%,22rem)] shrink-0 bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-lg transition-shadow flex flex-col"
                >
                  <div class="bg-gray-100 flex items-center justify-center px-4 py-5 md:py-6">
                    <img
                      :src="member.photo"
                      :alt="member.name"
                      class="w-full h-auto max-h-72 sm:max-h-80 object-contain"
                      loading="lazy"
                    />
                  </div>
                  <div class="p-5 flex-1 flex flex-col text-left">
                    <h5 class="font-bold text-gray-900">{{ member.name }}</h5>
                    <p class="mt-3 text-sm text-gray-600 leading-relaxed flex-1">{{ localizedBio(member) }}</p>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 我们的工作 (Work Section) -->
      <section id="work" class="py-20">
        <div class="container mx-auto px-4 sm:px-6">
          <div class="text-center mb-16">
            <h2 class="text-2xl md:text-3xl font-bold text-gray-900 mb-4">{{ t('team.workTitle') }}</h2>
            <div class="h-1.5 w-16 bg-[#B22222] mx-auto rounded-full"></div>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div class="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all border border-gray-100">
              <h3 class="text-xl font-bold mb-4">{{ t('team.workResearch') }}</h3>
              <p class="text-gray-600 mb-8 text-sm md:text-base leading-relaxed">{{ t('team.workResearchDesc') }}</p>
              <router-link to="/" class="text-sm font-bold text-[#B22222] hover:underline">{{ t('team.learnMore') }}</router-link>
            </div>
            <div class="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all border border-gray-100">
              <h3 class="text-xl font-bold mb-4">{{ t('team.workLab') }}</h3>
              <p class="text-gray-600 mb-8 text-sm md:text-base leading-relaxed">{{ t('team.workLabDesc') }}</p>
              <router-link to="/labs" class="text-sm font-bold text-[#B22222] hover:underline">{{ t('team.learnMore') }}</router-link>
            </div>
          </div>
        </div>
      </section>

      <!-- 联系我们 (Contact Us Section) -->
      <section id="contact" class="py-20 bg-gray-50">
        <div class="container mx-auto px-4 text-center sm:px-6">
          <h2 class="text-2xl md:text-3xl font-bold text-gray-900 mb-4">{{ t('team.contactTitle') }}</h2>
          <div class="h-1.5 w-16 bg-[#B22222] mx-auto rounded-full mb-8"></div>
          <form
            class="mx-auto max-w-lg rounded-xl border border-gray-100 bg-white p-5 text-left shadow-md sm:p-8"
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
              {{ t('form.envHintTeam') }}
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
              rows="4"
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

  <script setup>
  import { ref, computed } from 'vue'
  import { useI18n } from 'vue-i18n'
  import SiteNav from '../components/SiteNav.vue'
  import SiteFooter from '../components/SiteFooter.vue'
  import { wikiTeamPages, roster2025, roster2023, roster2024 } from '../data/teamWiki.js'

  const { t, te, locale } = useI18n()

  /** 按当前界面语言取文案，避免 fallbackLocale 把简介退回简体 */
  function localizedBio(member) {
    if (!member.bioKey) return ''
    const k = `teamRoster.bio.${member.bioKey}`
    const loc = locale.value
    if (!te(k, loc)) return ''
    return t(k, loc)
  }

  function roleLine(member) {
    if (!member.roles?.length) return ''
    const loc = locale.value
    return member.roles
      .map((rk) => {
        const key = `team.roles.${rk}`
        return te(key, loc) ? t(key, loc) : ''
      })
      .filter(Boolean)
      .join(' · ')
  }

  const seasonYears = [2025, 2024, 2023]
  const activeYear = ref(2025)

  /** 指导教师（照片：iGEM Wiki 静态资源；文案见 teamPi.*） */
  const pi = computed(() => ({
    photoUrl: 'https://static.igem.wiki/teams/5630/team/xianpuni.webp',
    name: t('teamPi.name'),
    titles: t('teamPi.titles'),
    affiliation: t('teamPi.affiliation'),
    research: t('teamPi.research'),
    igemSupport: t('teamPi.igemSupport'),
  }))

  /** Web3Forms：https://web3forms.com — 用您的收信邮箱生成 key，填到 .env 的 VITE_WEB3FORMS_ACCESS_KEY */
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
          subject: t('team.contactFormSubject'),
          from_name: 'SYPHU-China website',
        }),
      })
      const data = await res.json().catch(() => ({}))
      if (data.success) {
        formFeedback.value = { ok: true, text: t('form.successContact') }
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

  <style>
  html { scroll-behavior: smooth; }
  @keyframes fadeIn { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
  .animate-fade-in { animation: fadeIn 1.2s ease-out; }
  </style>
