import fs from 'fs'
const p = new URL('./build-locales.mjs', import.meta.url)
let s = fs.readFileSync(p, 'utf8')
const needle = "console.log('Wrote zh-CN, en, fr, zh-HK, zh-TW')"
const i = s.indexOf(needle)
if (i >= 0) {
  s = s.slice(0, i) + needle + '\n'
  fs.writeFileSync(p, s)
  console.log('ok')
}
