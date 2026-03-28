/**
 * 历年项目：疾病主题、Wiki 配图与说明。
 * 队徽 URL 与 `assets.js` 中 TEAM_LOGOS_BY_YEAR 一致；静态图来自各年 Wiki 页面或 iGEM static.igem.wiki。
 * 2024：素材路径与官方 GitLab `pages/` 及 Wiki 部署一致，见 sourceRepoUrl。
 */

const U = 'https://static.igem.wiki'

export const yearProjects = [
  {
    year: '2025',
    diseaseTitle: '肝癌',
    diseaseSubtitle: '大肠杆菌 Nissle 1917 靶向肿瘤微环境 · 全反式维甲酸与耐药逆转',
    title: 'SYPHU-China 2025 Project',
    description:
      'SYPHU-China 团队使用大肠杆菌 Nissle 1917 作为底盘，通过基因工程改造，使其具备主动靶向以及原位合成的特性。利用趋化性，使细菌能够主动向肿瘤微环境中高浓度的乳酸迁移。改造后的细菌能在肿瘤部位利用内源性底物合成全反式维甲酸。AIVC 模型预测全反式维甲酸可诱导肿瘤起始细胞分化并逆转化疗耐药性，实验结果表明该联合治疗方案显著延长了肝癌患者的总生存期与无进展生存期，提出了一种新型有效的晚期肝癌治疗方案。',
    wiki: 'https://2025.igem.wiki/SYPHU-China/',
    tag: 'Cancer Therapy',
    accent: 'from-[#9f1239] via-[#B22222] to-[#7f1d1d]',
    bannerTone: 'dark',
    wikiImages: [
      {
        src: `${U}/teams/5630/home/home-1-1.webp`,
        alt: '2025 项目主页示意',
        caption: 'Wiki 首页',
      },
      {
        src: `${U}/teams/5630/home/cell.webp`,
        alt: '细胞与药学主题',
        caption: '首页视觉',
      },
      {
        src: `${U}/teams/5630/home/home-2.webp`,
        alt: '2025 项目配图',
        caption: '项目展示',
      },
    ],
  },
  {
    year: '2024',
    diseaseTitle: '脂溢性皮炎',
    diseaseSubtitle: '罗伊氏乳杆菌皮肤微环境靶向 · 动态抗菌肽释放',
    title: 'SYPHU-China 2024 Project',
    description:
      'SYPHU-China 团队通过基因工程改造乳酸菌 Lactobacillus reuteri DSM17938，构建了一个靶向皮肤微环境的长效治疗系统。该工程菌株能够特异性迁移至乳酸浓度较高的皮肤环境，并且通过合成生物学手段，设计了一个动态响应系统，可自动激活抗菌肽（AMP）释放。研究证明，该系统相比传统抗真菌疗法，能有效降低皮肤病复发率，且对宿主微生物群无明显影响，为慢性炎症性皮肤病的治疗提供了新范式。',
    wiki: 'https://2024.igem.wiki/SYPHU-China/',
    tag: 'Skin Disease',
    accent: 'from-amber-600 via-orange-500 to-rose-700',
    bannerTone: 'dark',
    /** 与 GitLab 上 Wiki 页面源码、static.igem.wiki/teams/5270 部署路径一致 */
    sourceRepoUrl: 'https://gitlab.igem.org/2024/syphu-china',
    sourceRepoLabel: 'GitLab 源码（pages/）',
    wikiImages: [
      {
        src: `${U}/teams/5270/project/experiment1.png`,
        alt: '2024 湿实验',
        caption: 'experiments',
      },
      {
        src: `${U}/teams/5270/project/result1.jpg`,
        alt: '实验结果',
        caption: 'results',
      },
      {
        src: `${U}/teams/5270/project/lab1.png`,
        alt: '实验室与安全',
        caption: 'safety / lab',
      },
    ],
  },
  {
    year: '2023',
    diseaseTitle: 'HER2 阳性肿瘤细胞',
    diseaseSubtitle: '趋化靶向肿瘤微环境 · ADC 与乳酸感应元件',
    title: 'SYPHU-China 2023 Project',
    description:
      'SYPHU-China 团队在 2023 年专注于 HER2 阳性实体瘤的靶向治疗。通过基因回路构建，设计了一个可自主泳动并靶向肿瘤微环境的元件，结合抗体-毒性蛋白偶联药物（ADC）实现对 HER2 阳性肿瘤细胞的精准打击。团队还开发了多种合成生物学元件，如感应乳酸的受体 eTlpC 和高强度启动子。项目凭借创新的实验结果和完备的答辩展示，获得了国际评审专家的高度认可。',
    wiki: 'https://2023.igem.wiki/syphu-china/',
    tag: 'Cancer Therapy',
    accent: 'from-violet-700 via-fuchsia-600 to-rose-600',
    bannerTone: 'dark',
    wikiImages: [
      {
        src: `${U}/teams/4617/wiki/her2.gif`,
        alt: 'HER2 主题动画',
        caption: '首页 HER2 视觉',
      },
      {
        src: `${U}/teams/4617/wiki/home-pic/model.jpg`,
        alt: '模型',
        caption: 'model',
      },
      {
        src: `${U}/teams/4617/wiki/home-pic/description.jpg`,
        alt: '项目描述配图',
        caption: 'description',
      },
    ],
  },
]
