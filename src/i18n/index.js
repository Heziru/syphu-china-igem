import { createI18n } from 'vue-i18n'
import zhCN from '../locales/zh-CN.json'
import zhHK from '../locales/zh-HK.json'
import zhTW from '../locales/zh-TW.json'
import en from '../locales/en.json'
import fr from '../locales/fr.json'
import teamRosterBioZhCN from '../locales/partials/teamRoster.bio.zh-CN.json'
import teamRosterBioEn from '../locales/partials/teamRoster.bio.en.json'
import teamRosterBioFr from '../locales/partials/teamRoster.bio.fr.json'
import teamRosterBioZhTW from '../locales/partials/teamRoster.bio.zh-TW.json'
import teamRosterBioZhHK from '../locales/partials/teamRoster.bio.zh-HK.json'

const STORAGE_KEY = 'syphu-locale'

function getInitialLocale() {
  if (typeof localStorage === 'undefined') return 'zh-CN'
  const saved = localStorage.getItem(STORAGE_KEY)
  if (saved && ['zh-CN', 'zh-HK', 'zh-TW', 'en', 'fr'].includes(saved)) return saved
  return 'zh-CN'
}

function withTeamRoster(base, bioMap) {
  return {
    ...base,
    teamRoster: { bio: bioMap },
  }
}

export const i18n = createI18n({
  legacy: false,
  locale: getInitialLocale(),
  fallbackLocale: 'zh-CN',
  messages: {
    'zh-CN': withTeamRoster(zhCN, teamRosterBioZhCN),
    'zh-HK': withTeamRoster(zhHK, teamRosterBioZhHK),
    'zh-TW': withTeamRoster(zhTW, teamRosterBioZhTW),
    en: withTeamRoster(en, teamRosterBioEn),
    fr: withTeamRoster(fr, teamRosterBioFr),
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
