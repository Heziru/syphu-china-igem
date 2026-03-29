/**
 * 对比各语言 JSON 与 zh-CN（主文案）的键是否一致，列出缺失/多余键。
 * 用法：npm run i18n:check
 * 维护建议：改文案优先改 zh-CN.json，再同步其它语言；英文以 en.json 为准单独校对。
 */
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const dir = path.join(__dirname, '../src/locales')

function flatten(obj, prefix = '') {
  const keys = []
  if (obj === null || typeof obj !== 'object' || Array.isArray(obj)) {
    if (prefix) keys.push(prefix)
    return keys
  }
  for (const k of Object.keys(obj)) {
    const p = prefix ? `${prefix}.${k}` : k
    keys.push(...flatten(obj[k], p))
  }
  return keys
}

const masterName = 'zh-CN.json'
const master = JSON.parse(fs.readFileSync(path.join(dir, masterName), 'utf8'))
const masterKeys = new Set(flatten(master))

const files = fs.readdirSync(dir).filter((f) => f.endsWith('.json') && f !== masterName)

let exit = 0
for (const f of files.sort()) {
  const j = JSON.parse(fs.readFileSync(path.join(dir, f), 'utf8'))
  const keys = new Set(flatten(j))
  const missing = [...masterKeys].filter((k) => !keys.has(k))
  const extra = [...keys].filter((k) => !masterKeys.has(k))
  if (missing.length || extra.length) {
    exit = 1
    console.log(`\n=== ${f} ===`)
    if (missing.length) console.log('缺失键 (相对 zh-CN):', missing.join(', ') || '(无)')
    if (extra.length) console.log('多余键:', extra.join(', ') || '(无)')
  }
}

if (exit === 0) console.log('所有 locale 与 zh-CN.json 键结构一致。')
else console.log('\n请补全缺失键后重新运行 npm run i18n:check')

process.exit(exit)
