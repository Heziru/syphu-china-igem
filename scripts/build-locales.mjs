import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.join(__dirname, '..')

const zhCN = {
  nav: {
    home: '首页',
    projects: '历年项目',
    labs: '实验室环境',
    team: '我们的团队',
    recruit: '招新',
    partnership: '交流 · 赞助',
    join: '加入我们',
    contact: '联系我们',
    work: '我们的工作',
  },
  footer: {
    rights: '© 2026 SYPHU-China iGEM Team. All Rights Reserved.',
    school: '沈阳药科大学 · 创新药学人才的摇篮',
  },
  lang: {
    label: '语言',
    'zh-CN': '简体中文',
    'zh-HK': '繁體中文（香港）',
    'zh-TW': '繁體中文（台灣）',
    en: 'English',
    fr: 'Français',
  },
  brand: { teamLine: 'iGEM Team' },
  home: {
    heroTitle: '药研创新 · 智造生物',
    heroSubtitle: '沈阳药科大学 SYPHU-China iGEM 团队',
    projectsKicker: 'Projects',
    projectsTitle: '历年项目回顾',
    projectsIntro: '每一年围绕{strong}推进合成生物学设计与验证。',
    projectsIntroStrong: '不同疾病与临床需求',
    seasonFocus: '{year} 赛季 · 疾病聚焦',
    viewWiki: '查看项目 Wiki',
    sourceRepo: 'GitLab 源码（pages/）',
    sourceNote2024:
      '静态资源见 {path5270} ，与 GitLab {pages} 部署一致，可对照源码。',
    statsCaption: '（与官网首页统计图一致）',
    enSiteNote:
      '英文站为 350+ startups and counting · from over 50 countries；具体以{wiki}更新为准。',
    wikiLink: '官网',
  },
  projects: {
    tags: { cancer: 'Cancer Therapy', skin: 'Skin Disease' },
    cards: {
      '2025': {
        diseaseTitle: '肝癌',
        diseaseSubtitle: '大肠杆菌 Nissle 1917 靶向肿瘤微环境 · 全反式维甲酸与耐药逆转',
        title: 'SYPHU-China 2025 Project',
        description:
          'SYPHU-China 团队使用大肠杆菌 Nissle 1917 作为底盘，通过基因工程改造，使其具备主动靶向以及原位合成的特性。利用趋化性，使细菌能够主动向肿瘤微环境中高浓度的乳酸迁移。改造后的细菌能在肿瘤部位利用内源性底物合成全反式维甲酸。AIVC 模型预测全反式维甲酸可诱导肿瘤起始细胞分化并逆转化疗耐药性，实验结果表明该联合治疗方案显著延长了肝癌患者的总生存期与无进展生存期，提出了一种新型有效的晚期肝癌治疗方案。',
        imgAlt0: '2025 项目主页示意',
        imgAlt1: '细胞与药学主题',
        imgAlt2: '2025 项目配图',
        cap0: 'Wiki 首页',
        cap1: '首页视觉',
        cap2: '项目展示',
      },
      '2024': {
        diseaseTitle: '脂溢性皮炎',
        diseaseSubtitle: '罗伊氏乳杆菌皮肤微环境靶向 · 动态抗菌肽释放',
        title: 'SYPHU-China 2024 Project',
        description:
          'SYPHU-China 团队通过基因工程改造乳酸菌 Lactobacillus reuteri DSM17938，构建了一个靶向皮肤微环境的长效治疗系统。该工程菌株能够特异性迁移至乳酸浓度较高的皮肤环境，并且通过合成生物学手段，设计了一个动态响应系统，可自动激活抗菌肽（AMP）释放。研究证明，该系统相比传统抗真菌疗法，能有效降低皮肤病复发率，且对宿主微生物群无明显影响，为慢性炎症性皮肤病的治疗提供了新范式。',
        imgAlt0: '2024 湿实验',
        imgAlt1: '实验结果',
        imgAlt2: '实验室与安全',
        cap0: 'experiments',
        cap1: 'results',
        cap2: 'safety / lab',
      },
      '2023': {
        diseaseTitle: 'HER2 阳性肿瘤细胞',
        diseaseSubtitle: '趋化靶向肿瘤微环境 · ADC 与乳酸感应元件',
        title: 'SYPHU-China 2023 Project',
        description:
          'SYPHU-China 团队在 2023 年专注于 HER2 阳性实体瘤的靶向治疗。通过基因回路构建，设计了一个可自主泳动并靶向肿瘤微环境的元件，结合抗体-毒性蛋白偶联药物（ADC）实现对 HER2 阳性肿瘤细胞的精准打击。团队还开发了多种合成生物学元件，如感应乳酸的受体 eTlpC 和高强度启动子。项目凭借创新的实验结果和完备的答辩展示，获得了国际评审专家的高度认可。',
        imgAlt0: 'HER2 主题动画',
        imgAlt1: '模型',
        imgAlt2: '项目描述配图',
        cap0: '首页 HER2 视觉',
        cap1: 'model',
        cap2: 'description',
      },
    },
  },
  team: {
    title: '我们的团队',
    piKicker: 'Principal Investigator',
    piHeading: '指导教师',
    rosterTitle: '历届参赛成员',
    rosterIntroBefore: '以下信息整理自',
    rosterIntroAfter: '页面；简介为便于阅读做了缩写，完整英文自述以 Wiki 为准。',
    workTitle: '我们的工作',
    workResearch: '我们的研究',
    workResearchDesc:
      '展示团队在合成生物学、基因工程、微生物学等方面的前沿研究成果。',
    workLab: '实验成果',
    workLabDesc: '展示我们在多个项目中的实验数据和验证结果。',
    learnMore: '了解更多',
    contactTitle: '联系我们',
  },
  recruit: {
    heroKicker: 'Recruitment',
    heroTitle: '加入 SYPHU-China iGEM',
    heroLead:
      '合成生物学竞赛不仅是实验与建模，更是跨学科协作与全球交流。下面按常见 iGEM 队伍分工介绍各组职责与期望；欢迎结合自身兴趣选择方向，通过底部表单与我们联系。',
    toForm: '直达报名表单',
    expectTitle: '我们共同期待什么',
    expectFoot:
      '各队招新推文常强调：专业方向匹配、可迁移技能与团队感同等重要——以上条目供参考，以当届面试通知为准。',
    groupsTitle: '组别与能力期待',
    nextTitle: '接下来怎么做',
    nextBody:
      '一般流程包括：关注招新群/公众号推送 → 填写意向或参加面试 → 试训与分工。具体时间节点与面试形式每年由队长组发布；可先通过下方表单留下联系方式与意向组别。',
    contactTitle: '联系我们',
    contactHint:
      '建议留言中写明：年级专业、意向组别、可投入时间、联系方式（与邮箱一致即可）。',
    placeholderName: '您的姓名',
    placeholderEmail: '您的邮箱',
    placeholderMsg: '您的留言（建议含意向组别）',
  },
  labs: {
    heroKicker: 'Laboratory & Research',
    galleryTitle: '影像掠影',
    galleryIntro: '下列图片均来自 iGEM Wiki 静态资源；以 {wiki} 为准。',
    wikiOfficial: '官方 Wiki',
    viewSource: '查看来源',
    footNote: '如需增删图片，可编辑 {file} 中的静态站地址（须与 Wiki 一致）。',
    kindLabel: { igem: 'iGEM Wiki' },
  },
  labIntro: {
    title: '沈阳药科大学 · 实验与科研环境',
    lead:
      '沈阳药科大学拥有药学国家级实验教学示范中心（2001 年成立，2007 年获批国家级），下设多个实验教学分中心，为 SYPHU-China iGEM 等创新团队提供湿实验与交叉学科支撑。',
    centerLabel: '药学国家级实验教学示范中心官网',
  },
  labGallery: {
    'igem-edu-platform': {
      title: '实验教学平台（iGEM Wiki 素材）',
      caption: 'SYPHU-China 2025 项目记载的实验教学与平台展示。',
    },
    'igem-cell': { title: '细胞与药学主题视觉', caption: '2025 团队 Wiki 首页科研相关配图。' },
    'igem-exp1': {
      title: '实验记录掠影 ①',
      caption: 'SYPHU-China 2024 iGEM 项目实验部分公开素材。',
    },
    'igem-exp2': { title: '实验记录掠影 ②', caption: '2024 湿实验相关图示与场景。' },
    'igem-exp3': { title: '实验记录掠影 ③', caption: '团队实验流程与结果展示（Wiki）。' },
    'igem-lab-safety': { title: '实验室安全与场景', caption: '2024 Wiki 安全与实验室环境相关配图。' },
    'igem-results': { title: '实验成果展示', caption: '2024 项目结果页面公开图片。' },
  },
  partnership: {
    heroKicker: 'Collaboration · Sponsorship',
    heroTitle: '与全球同行对话，让合成生物学走得更远',
    heroLead:
      'SYPHU-China 欢迎国内外高校 iGEM 团队与组织交流互访、线上研讨与联合科普；我们也期待与生物医药、合成生物及相关领域企业建立合作，把课堂与实验室里的想法带到真实世界。',
    contactCta: '联系合作',
    inviteTitle: '面向全球 iGEM 社区的邀请',
    inviteP1:
      'iGEM 的价值在于开放协作与知识共享。我们渴望与各大洲的参赛团队建立长期联系：分享湿实验与干实验经验、Human Practices 与科普实践、Wiki 与答辩准备心得，以及在规则与伦理框架下的跨校联合活动等。',
    inviteP2:
      '若贵队希望开展校际交流、Guest Speaker、联合 outreach 或赛前友好互评，请通过页面底部表单与我们联系，并注明学校/团队名称与期望的协作形式。',
    whereTitle: '我们在哪里',
    addrShenyangTitle: '沈阳校区（校本部）',
    addrShenyang: '辽宁省沈阳市沈河区文化路 103 号',
    zipLabel: '邮编',
    zipShenyang: '110016',
    addrBenxiTitle: '本溪校区（南校区）',
    addrBenxi:
      '辽宁省本溪市高新技术产业开发区华佗大街 26 号 · 邮编 117004（学校另设南校区；团队日常以学院安排为准）。',
    mapLink: '在 OpenStreetMap 中打开主校区附近地图',
    campusNewsTitle: '沈药掠影与校园动态',
    readFull: '阅读原文 →',
    sponsorTitle: '赞助与产业合作',
    sponsorLead:
      '合成生物学正在从论文走向产品。我们期待与生物制药、合成生物、诊断与实验室技术、绿色制造等领域企业展开合作：可为项目提供实验耗材与表征支持、数据与场景验证、科普与品牌共创，以及在合规与伦理审查框架下的联合曝光。',
    igemKicker: 'iGEM',
    valuesTitle: '理念与价值',
    philosophy1:
      '开放与共享：标准 DNA 元件（Registry）、团队互助与全球社区，是 iGEM 的底色。',
    philosophy2: '安全与责任：从实验室到公众，强调生物安全、伦理与负责任的创新。',
    philosophy3: 'Human Practices：项目扎根真实世界，关注社会、法律、教育与利益相关方。',
    philosophy4:
      '从研究到影响：高质量 Wiki、可复现实验，以及面向真实需求的转化与创业探索（含竞赛中的 Entrepreneurship 等相关方向）。',
    competitionNote: '更多定义与规则以 competition.igem.org 与当年赛程为准。',
    startupsLead:
      '以下配图选自 startups.igem.org 使用的官方静态资源，突出全球校友初创规模与地理分布。',
    openStartups: '打开 iGEM Startups 官网',
    startupsHeadline: '350+ 初创企业，覆盖 50+ 国家与地区',
    startupsBlurb:
      'iGEM Startups 将竞赛中的创新项目与创业辅导、社群与资源对接起来；官网用下图概括全球校友初创企业的规模与分布趋势。',
    mapLabel: '校友初创企业分布',
    mapCaption: '动图示意全球校友初创企业地理分布，与 iGEM Startups 叙事一致。',
    mapTech: '资源路径：',
    mapSlow: '（动图体积较大，首次加载可能稍慢。）',
    timelineLabel: 'iGEM Startups 时间线',
    spotlightHeading: '官网首页展示的初创案例（节选）',
    coop1t: '科研与实验',
    coop1d: '菌株与实验设计、分析检测、安全与质量控制等方向的对接与讨论。',
    coop2t: '品牌与传播',
    coop2d: 'Wiki、答辩、开放日与社交媒体的致谢与联合传播（遵守 iGEM 规则与学校规定）。',
    coop3t: '长期关系',
    coop3d: '欢迎与团队建立持续 mentorship 与人才交流，具体权益以书面协议与当年赛程为准。',
    contactSectionTitle: '联系合作',
    placeholderOrg: '学校 / iGEM 团队名 / 企业名称（选填）',
    placeholderMsgP: '合作意向、时间段与希望对接的方向',
  },
  form: {
    submit: '提交',
    submitting: '发送中…',
    successRecruit:
      '提交成功！请留意邮箱回复，欢迎说明意向组别（湿实验/干实验/HP/Wiki/美工等）。',
    successContact: '提交成功，我们已收到您的留言，会尽快通过邮箱与您联系。',
    successPartnership:
      '提交成功！我们会尽快通过邮箱与您联系，也欢迎抄送团队公共邮箱（如有）。',
    fail: '发送失败，请稍后重试。',
    network: '网络异常，请检查网络后重试。',
    envHintRecruit: '表单需在项目根目录配置 .env 中的 VITE_WEB3FORMS_ACCESS_KEY。',
    envHintTeam:
      '留言功能需在项目根目录创建 .env，设置 VITE_WEB3FORMS_ACCESS_KEY（在 web3forms.com 用您的邮箱免费获取）。',
    envHintPartnership: '表单需在项目根目录配置 .env 中的 VITE_WEB3FORMS_ACCESS_KEY。',
  },
  teamPi: {
    name: '倪现朴 教授',
    titles: '生物技术与生物制药教研室主任 · 硕士生导师',
    affiliation: '沈阳药科大学 生命科学与生物制药学院',
    research:
      '倪现朴教授长期从事微生物药物代谢工程、微生物药物生物合成途径与机制、以及活体微生物药物的合成生物学等方向的研究；主持国家自然科学基金、辽宁省自然科学基金面上项目、辽宁省教育厅重点攻关项目等课题，在 Applied Microbiology and Biotechnology、Microbial Cell Factories 等期刊发表多篇论文，入选辽宁省“百千万人才”工程培养人选等人才计划。',
    igemSupport:
      '倪老师始终关心并推动沈阳药科大学 iGEM 参赛与合成生物学人才培养工作，在校内牵头组织与支持相关事务，鼓励沈药学子走上国际赛事舞台，与来自全球的优秀青年团队同台交流、同台竞技，在实践中历练科研与创新能力。',
  },
}

fs.mkdirSync(path.join(root, 'src/locales'), { recursive: true })
fs.writeFileSync(path.join(root, 'src/locales/zh-CN.json'), JSON.stringify(zhCN, null, 2), 'utf8')

const en = structuredClone(zhCN)
Object.assign(en.nav, {
  home: 'Home',
  projects: 'Past Projects',
  labs: 'Laboratories',
  team: 'Our Team',
  recruit: 'Recruitment',
  partnership: 'Partnership',
  join: 'Join Us',
  contact: 'Contact',
  work: 'Our Work',
})
en.footer.school = 'Shenyang Pharmaceutical University · cradle of innovative pharmacists'
en.lang.label = 'Language'
en.home.heroTitle = 'Pharmaceutical Innovation · Engineered Biology'
en.home.heroSubtitle = 'Shenyang Pharmaceutical University · SYPHU-China iGEM Team'
en.home.projectsTitle = 'Project Highlights'
en.home.projectsIntro = 'Each year we advance synthetic biology design and validation around {strong}.'
en.home.projectsIntroStrong = 'different diseases and clinical needs'
en.home.seasonFocus = '{year} · Disease focus'
en.home.viewWiki = 'View project Wiki'
en.home.sourceRepo = 'GitLab source (pages/)'
en.home.sourceNote2024 =
  'Static assets at {path5270}, deployed with GitLab {pages}; you can cross-check the repository.'
en.home.statsCaption = '(same figure as on the official site)'
en.home.enSiteNote =
  'English site: 350+ startups and counting · from over 50 countries; see {wiki} for updates.'
en.home.wikiLink = 'official site'
en.team.title = 'Our Team'
en.team.piHeading = 'Faculty advisor'
en.team.rosterTitle = 'Past team members'
en.team.rosterIntroBefore = 'Compiled from'
en.team.rosterIntroAfter =
  '; bios are shortened for readability. Full English statements are on the Wiki.'
en.team.workTitle = 'Our work'
en.team.learnMore = 'Learn more'
en.team.contactTitle = 'Contact us'
en.recruit.heroTitle = 'Join SYPHU-China iGEM'
en.recruit.heroLead =
  'iGEM is more than wet lab and modelling—it is interdisciplinary teamwork and global exchange. Below are common team roles; reach us via the form at the bottom.'
en.recruit.toForm = 'Go to form'
en.recruit.expectTitle = 'What we look for together'
en.recruit.groupsTitle = 'Roles and expectations'
en.recruit.nextTitle = 'What happens next'
en.recruit.contactTitle = 'Contact us'
en.recruit.contactHint =
  'Please include year/major, preferred track, availability, and a reachable email.'
en.recruit.placeholderName = 'Your name'
en.recruit.placeholderEmail = 'Your email'
en.recruit.placeholderMsg = 'Message (suggested: preferred track)'
en.labs.galleryTitle = 'Gallery'
en.labs.galleryIntro = 'Images from iGEM Wiki static hosting; refer to {wiki}.'
en.labs.viewSource = 'View source'
en.labIntro.title = 'SYPHU · Laboratories & research environment'
en.labIntro.lead =
  'SYPHU hosts a national pharmaceutical experimental teaching centre and multiple sub-centres, supporting wet lab and interdisciplinary work for teams like SYPHU-China iGEM.'
en.labIntro.centerLabel = 'National centre website'
en.partnership.heroTitle = 'Collaborate globally—take synthetic biology further'
en.partnership.heroLead =
  'We welcome exchanges with iGEM teams worldwide and partnerships with industry, translating ideas from class and lab into the real world.'
en.partnership.contactCta = 'Contact us'
en.partnership.inviteTitle = 'Invitation to the global iGEM community'
en.partnership.whereTitle = 'Where we are'
en.partnership.sponsorTitle = 'Sponsorship & industry'
en.partnership.valuesTitle = 'Values'
en.partnership.openStartups = 'Open iGEM Startups'
en.partnership.mapLabel = 'Alumni startup map'
en.partnership.timelineLabel = 'iGEM Startups timeline'
en.partnership.contactSectionTitle = 'Contact'
en.form.submit = 'Submit'
en.form.submitting = 'Sending…'
en.form.successRecruit =
  'Sent! Please check your inbox; mention your preferred track (wet/dry/HP/Wiki/art).'
en.form.successContact = 'Sent! We will reply by email as soon as we can.'
en.form.successPartnership =
  'Sent! We will reply soon; feel free to CC the team mailbox if you have one.'
en.form.fail = 'Send failed. Please try again later.'
en.form.network = 'Network error. Check your connection.'
en.form.envHintRecruit = 'Set VITE_WEB3FORMS_ACCESS_KEY in project root .env'
en.form.envHintTeam =
  'Create .env with VITE_WEB3FORMS_ACCESS_KEY (get a free key at web3forms.com).'
en.form.envHintPartnership = 'Set VITE_WEB3FORMS_ACCESS_KEY in project root .env'
en.teamPi.name = 'Prof. Xianpu Ni'
en.teamPi.titles = 'Director, Biotechnology & Biopharmaceutics · Master supervisor'
en.teamPi.affiliation = 'School of Life Science and Biopharmaceutics, SYPHU'
// English project cards (abbreviated professional translation)
en.projects.cards['2025'].diseaseTitle = 'Liver cancer'
en.projects.cards['2025'].diseaseSubtitle =
  'E. coli Nissle 1917 targets TME · ATRA and resistance reversal'
en.projects.cards['2025'].description =
  'Using engineered E. coli Nissle 1917, the team enables chemotaxis toward lactate-rich tumour microenvironments and in situ synthesis of all‑trans retinoic acid, with modelling and experiments supporting improved survival endpoints in advanced liver cancer.'
en.projects.cards['2024'].diseaseTitle = 'Seborrheic dermatitis'
en.projects.cards['2024'].diseaseSubtitle =
  'L. reuteri skin targeting · dynamic AMP release'
en.projects.cards['2024'].description =
  'Engineered Lactobacillus reuteri DSM17938 delivers a long-acting skin-microenvironment therapy with inducible antimicrobial peptides, aiming to reduce relapse versus conventional antifungal approaches.'
en.projects.cards['2023'].diseaseTitle = 'HER2-positive tumour cells'
en.projects.cards['2023'].diseaseSubtitle = 'Chemotaxis to TME · ADC and lactate sensing'
en.projects.cards['2023'].description =
  'The 2023 project focused on HER2-positive solid tumours, combining motility circuits with ADC-style delivery and synthetic parts such as eTlpC and strong promoters.'

const fr = structuredClone(en)
Object.assign(fr.nav, {
  home: 'Accueil',
  projects: 'Projets',
  labs: 'Laboratoires',
  team: 'Équipe',
  recruit: 'Recrutement',
  partnership: 'Partenariat',
  join: 'Nous rejoindre',
  contact: 'Contact',
  work: 'Notre travail',
})
fr.lang.label = 'Langue'
fr.home.heroTitle = 'Innovation pharmaceutique · biologie de synthèse'
fr.home.heroSubtitle = 'Université pharmaceutique de Shenyang · SYPHU-China iGEM'
fr.home.projectsTitle = 'Projets en bref'
fr.footer.school = 'Université pharmaceutique de Shenyang'
fr.form.submit = 'Envoyer'
fr.form.submitting = 'Envoi…'

const zhHK = structuredClone(zhCN)
zhHK.nav.partnership = '交流 · 贊助'
zhHK.footer.school = '瀋陽藥科大學 · 創新藥學人才的搖籃'
zhHK.home.heroTitle = '藥研創新 · 智造生物'
zhHK.home.heroSubtitle = '瀋陽藥科大學 SYPHU-China iGEM 團隊'
zhHK.home.projectsTitle = '歷年項目回顧'
zhHK.team.title = '我們的團隊'
zhHK.recruit.heroTitle = '加入 SYPHU-China iGEM'
zhHK.partnership.heroTitle = '與全球同行對話，讓合成生物學走得更遠'
zhHK.partnership.sponsorTitle = '贊助與產業合作'
zhHK.form.submit = '提交'
zhHK.form.submitting = '發送中…'

const zhTW = structuredClone(zhCN)
zhTW.nav.partnership = '交流 · 贊助'
zhTW.footer.school = '瀋陽藥科大學 · 創新藥學人才的搖籃'
zhTW.home.heroTitle = '藥研創新 · 智造生物'
zhTW.home.heroSubtitle = '瀋陽藥科大學 SYPHU-China iGEM 團隊'
zhTW.home.projectsTitle = '歷年專案回顧'
zhTW.team.title = '我們的團隊'
zhTW.recruit.heroTitle = '加入 SYPHU-China iGEM'
zhTW.partnership.heroTitle = '與全球同行對話，讓合成生物學走得更遠'
zhTW.partnership.sponsorTitle = '贊助與產業合作'
zhTW.form.submit = '提交'
zhTW.form.submitting = '發送中…'

fs.writeFileSync(path.join(root, 'src/locales/en.json'), JSON.stringify(en, null, 2), 'utf8')
fs.writeFileSync(path.join(root, 'src/locales/fr.json'), JSON.stringify(fr, null, 2), 'utf8')
fs.writeFileSync(path.join(root, 'src/locales/zh-HK.json'), JSON.stringify(zhHK, null, 2), 'utf8')
fs.writeFileSync(path.join(root, 'src/locales/zh-TW.json'), JSON.stringify(zhTW, null, 2), 'utf8')

console.log('Wrote zh-CN, en, fr, zh-HK, zh-TW')
