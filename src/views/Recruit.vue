<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import SiteNav from '../components/SiteNav.vue'
import SiteFooter from '../components/SiteFooter.vue'
import { SITE_CONTACT } from '../data/siteContact.js'

const { t } = useI18n()
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

/** 组别说明：综合常见 iGEM 队伍分工与招新介绍方式整理，具体以当届队长发布为准 */
const groups = [
  {
    key: 'wet',
    title: '湿实验组 · Wet Lab',
    short: '在实验室里完成合成生物学项目的「实体」部分',
    points: [
      '承担分子克隆、菌株培养、转化、表达验证、电泳/测序鉴定、部分表型或功能实验等；与干实验对接实验数据。',
      '希望你：有生物/化学/药学类课程基础，动手细心，能严格遵守实验室安全与记录规范；愿意投入固定时段进实验室，接受重复实验与失败迭代。',
      '零基础但学习意愿强亦可：队内需统一培训 SOP，更看重责任心与长期投入。',
    ],
  },
  {
    key: 'dry',
    title: '干实验组 · Dry Lab',
    short: '建模、仿真、数据分析与计算支撑',
    points: [
      '常见工作包括：动力学/通量模型、统计与可视化、参数估计与敏感性分析、与湿实验迭代验证假设；部分队伍也承担小型工具脚本或数据管线。',
      '希望你：具备高等数学与编程基础（如 Python / MATLAB / R 等任一），逻辑清晰，能把假设写清楚、把图表与结论写进 Wiki。',
      '数学、计算机、统计、制药工程（计算方向）等背景均可；英语阅读文献能力重要。',
    ],
  },
  {
    key: 'hp',
    title: '人类实践 · Human Practices (HP)',
    short: '让项目「走出实验室」：社会、伦理、教育与传播',
    points: [
      '典型工作：调研患者/医生/公众需求、设计访谈与问卷、科普活动与课程、政策与伦理梳理、与医院或企业沟通；产出教育材料、推送与故事线。',
      '希望你：沟通与写作能力突出，能独立推进访谈与活动落地；对社会议题敏感，英语读写佳者更利于国际评审材料。',
      '公卫、临床药学、管理、新闻、英语等专业常有优势；重在共情与执行力。',
    ],
  },
  {
    key: 'wiki',
    title: 'Wiki / 信息技术组',
    short: '官方 Wiki 站点、文档结构与部分技术实现',
    points: [
      '负责页面信息架构、内容迁移、样式与交互、Git 协作、Deadline 前联调；与美工、各组合稿时间与版式。',
      '希望你：熟悉 HTML/CSS 基础或愿意学，能读英文技术文档；细心、有版本管理习惯，能承受赛期集中改稿。',
      '与「纯美工」分工：Wiki 偏站点与文档，视觉大物料常由美工组输出素材后接入。',
    ],
  },
  {
    key: 'art',
    title: '美工与多媒体 · Art & Design',
    short: '视觉识别、信息图、答辩与宣传物料',
    points: [
      '常见工作：队徽与主视觉延展、海报与手册、数据信息图、PPT/答辩视觉、短视频或动效（视当年分工而定）。',
      '希望你：熟练使用 PS / AI / ID 等之一，有版式与配色基础；会 PR/AE/Blender 等其一为加分项。',
      '需能按 Wiki 与答辩截稿迭代，接受多轮修改；作品集（课程作业/比赛物料均可）有助于互选。',
    ],
  },
]

const commonExpect = [
  '认同团队目标，能参加例会与组内分工，赛期（尤其暑期至赛前）保持较高投入。',
  '诚实沟通进度与困难；尊重实验室安全、伦理与学校规章制度。',
  '英语：至少能阅读 Wiki 与文献片段；口语与答辩能力会在备赛过程中集体训练。',
  '不限年级：许多队伍欢迎低年级同学从基础岗位做起，以学习与传承为主。',
]
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
          <li v-for="(line, i) in commonExpect" :key="i" class="flex gap-3">
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
            v-for="g in groups"
            :key="g.key"
            class="scroll-mt-28 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition-shadow hover:shadow-md sm:p-8 md:p-10 md:scroll-mt-24"
            :id="g.key"
          >
            <h3 class="text-xl md:text-2xl font-bold text-[#B22222]">{{ g.title }}</h3>
            <p class="mt-2 text-gray-600 font-medium">{{ g.short }}</p>
            <ul class="mt-6 space-y-4 text-gray-700 text-sm md:text-base leading-relaxed">
              <li v-for="(p, idx) in g.points" :key="idx" class="pl-4 border-l-2 border-[#B22222]/30">
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
