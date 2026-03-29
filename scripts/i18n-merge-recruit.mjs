/**
 * 从 zh-CN.json 将 recruit.groups / recruit.commonExpect 同步到 zh-HK、zh-TW；
 * 从 en.json 同步到 fr.json（可与手动法语润色配合）。
 * 并为各语言 form 补全 orgLinePrefix（若缺失）。
 */
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const loc = (n) => path.join(__dirname, '../src/locales', n)

const zh = JSON.parse(fs.readFileSync(loc('zh-CN.json'), 'utf8'))
const en = JSON.parse(fs.readFileSync(loc('en.json'), 'utf8'))

const orgDefaults = {
  'zh-HK.json': '單位/團隊：',
  'zh-TW.json': '單位/團隊：',
  'fr.json': 'Organisation / équipe : ',
}

for (const file of ['zh-HK.json', 'zh-TW.json']) {
  const j = JSON.parse(fs.readFileSync(loc(file), 'utf8'))
  j.recruit.groups = structuredClone(zh.recruit.groups)
  j.recruit.commonExpect = structuredClone(zh.recruit.commonExpect)
  if (!j.form.orgLinePrefix) j.form.orgLinePrefix = orgDefaults[file]
  fs.writeFileSync(loc(file), JSON.stringify(j, null, 2) + '\n')
  console.log('updated', file)
}

{
  const j = JSON.parse(fs.readFileSync(loc('fr.json'), 'utf8'))
  j.recruit.groups = structuredClone(en.recruit.groups)
  j.recruit.commonExpect = structuredClone(en.recruit.commonExpect)
  if (!j.form.orgLinePrefix) j.form.orgLinePrefix = orgDefaults['fr.json']
  fs.writeFileSync(loc('fr.json'), JSON.stringify(j, null, 2) + '\n')
  console.log('updated fr.json (groups from en; refine French manually if needed)')
}
