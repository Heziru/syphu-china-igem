// src/assets.js
// 这是你的 GitHub 图片库基础地址
const BASE = "https://github.com/Heziru/syphu-china-assets/blob/main/";
const RAW = "?raw=true";

export const IMAGES = {
  // 校徽
  SCHOOL_LOGO: `${BASE}school-logo.jpg${RAW}`,
  // 团队 Logo (注意：文件名里的空格会自动被浏览器处理)
  TEAM_LOGO: `${BASE}syphulogo1：1.png${RAW}`,
  // 透明版校徽
  TOU_SCHOOL: `${BASE}tou-school.png${RAW}`
};
export const TEAM_PHOTOS = [
    `${BASE}2025team.jpg${RAW}`,
    `${BASE}2024team.webp${RAW}`, // 注意这个是 webp 格式
    `${BASE}2023team.jpg${RAW}`
  ];

/** 各赛季队徽（与 TEAM_PHOTOS 顺序一致：2025 → 2024 → 2023），来自 iGEM static.igem.wiki */
export const TEAM_LOGOS_BY_YEAR = [
  {
    year: '2025',
    src: 'https://static.igem.wiki/teams/5630/footer/syphulogo1-1.webp',
    alt: 'SYPHU-China iGEM 2025 team logo',
  },
  {
    year: '2024',
    src: 'https://static.igem.wiki/teams/5270/logo/teamlogo.jpg',
    alt: 'SYPHU-China iGEM 2024 team logo',
  },
  {
    year: '2023',
    src: 'https://static.igem.wiki/teams/4617/wiki/team-logo.svg',
    alt: 'SYPHU-China iGEM 2023 team logo',
  },
]