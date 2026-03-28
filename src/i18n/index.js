import { createI18n } from 'vue-i18n'
import zhCN from '../locales/zh-CN.json'
import zhHK from '../locales/zh-HK.json'
import zhTW from '../locales/zh-TW.json'
import en from '../locales/en.json'
import fr from '../locales/fr.json'

const STORAGE_KEY = 'syphu-locale'

function getInitialLocale() {
  if (typeof localStorage === 'undefined') return 'zh-CN'
  const saved = localStorage.getItem(STORAGE_KEY)
  if (saved && ['zh-CN', 'zh-HK', 'zh-TW', 'en', 'fr'].includes(saved)) return saved
  return 'zh-CN'
}

export const i18n = createI18n({
  legacy: false,
  locale: getInitialLocale(),
  fallbackLocale: 'zh-CN',
  messages: {
    'zh-CN': zhCN,
    'zh-HK': zhHK,
    'zh-TW': zhTW,
    en,
    fr,
  },
  globalInjection: true,
})

export function persistLocale(code) {
  try {
    localStorage.setItem(STORAGE_KEY, code)
  } catch {
    /* ignore */
  }
}
