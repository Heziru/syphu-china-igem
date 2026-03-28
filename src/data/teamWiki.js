/**
 * 成员与头像来自 iGEM Wiki 静态资源（读取自各年度团队页 HTML）。
 * 2025: static.igem.wiki/teams/5630/team/
 * 2023: static.igem.wiki/teams/4617/wiki/teamphoto/
 * 2024: Wiki 页为动态渲染，初始 HTML 中仅见 teamlogo；完整名册见 Wiki 链接。
 */

export const wikiTeamPages = {
  2025: 'https://2025.igem.wiki/SYPHU-China/members',
  2024: 'https://2024.igem.wiki/SYPHU-China/team',
  2023: 'https://2023.igem.wiki/syphu-china/team',
}

const img25 = (file) => `https://static.igem.wiki/teams/5630/team/${file}`
const img23 = (file) => `https://static.igem.wiki/teams/4617/wiki/teamphoto/${file}`

/** iGEM 2025 SYPHU-China：成员与简介梗概（详情见 Wiki） */
export const roster2025 = [
  {
    subsection: 'Team Leader',
    subsectionZh: '队长',
    members: [
      {
        name: 'Shangyi Yang',
        nameZh: '杨尚轶',
        roles: ['Team leader', 'Dry Lab'],
        photo: img25('shangyi-yang.webp'),
        bio: '药物分析专业三年级，SYPHU-China 队长。主导干实验建模、虚拟细胞框架与递药系统计算模型，强调可重复与可验证的科学流程。',
      },
    ],
  },
  {
    subsection: 'Student Leaders',
    subsectionZh: '学生负责人',
    members: [
      {
        name: 'Haibo Li',
        nameZh: '李海博',
        roles: ['HP Leader'],
        photo: img25('haibo-li.webp'),
        bio: 'Human Practices 方向学生负责人。',
      },
      {
        name: 'Xiaoling Yang',
        nameZh: '杨晓玲',
        roles: ['Wet Lab Leader'],
        photo: img25('xiaoling-yang.webp'),
        bio: '湿实验方向学生负责人；热爱生活与实验的小伙伴们。',
      },
      {
        name: 'Wenbin Chen',
        nameZh: '陈文斌',
        roles: ['Dry Lab Leader'],
        photo: img25('wenbin-chen-1.webp'),
        bio: '干实验负责人；热衷于计算机、编程与逆向工程。',
      },
      {
        name: 'Ziru He',
        nameZh: '何子儒',
        roles: ['Wiki Leader', 'Dry Lab', 'HP'],
        photo: img25('ziru-he.webp'),
        bio: 'Wiki 与多模块协作；兴趣涵盖京剧、旅行、美食、哲学与编程。',
      },
    ],
  },
  {
    subsection: 'Students',
    subsectionZh: '队员',
    members: [
      {
        name: 'Jiaxuan Fu',
        nameZh: '付家璇',
        roles: ['Wet Lab'],
        photo: img25('jiaxuan-fu.webp'),
        bio: '湿实验队员；喜欢羽毛球、水彩与编织。',
      },
      {
        name: 'Erjia Zhang',
        nameZh: '张二嘉',
        roles: ['HP', 'Dry Lab'],
        photo: img25('erjia-zhang.webp'),
        bio: '英文强化药学专业；热爱阅读与羽毛球。',
      },
      {
        name: 'Shuoyan Zhang',
        nameZh: '张硕妍',
        roles: ['Wet Lab'],
        photo: img25('shuoyan-zhang.webp'),
        bio: '负责湿实验相关工作。',
      },
      {
        name: 'Xingna Jiang',
        nameZh: '姜星娜',
        roles: ['Art Design'],
        photo: img25('xingna-jiang.webp'),
        bio: '团队视觉与平面设计；生物制药背景。',
      },
      {
        name: 'Tianyue Liu',
        nameZh: '刘天月',
        roles: ['HP'],
        photo: img25('tianyue-liu.webp'),
        bio: '热爱自然与生命科学，很高兴加入 iGEM。',
      },
      {
        name: 'Siyi Liao',
        nameZh: '廖思怡',
        roles: ['HP'],
        photo: img25('siyi-liao.webp'),
        bio: '喜欢轻松自在的氛围。',
      },
      {
        name: 'Zihang He',
        nameZh: '何子航',
        roles: ['HP'],
        photo: img25('zihang-he.webp'),
        bio: '药学专业，关注合成生物学在新药发现中的潜力；喜欢科幻与徒步。',
      },
      {
        name: 'Liwen Huang',
        nameZh: '黄利文',
        roles: ['HP'],
        photo: img25('liwen-huang.webp'),
        bio: '热爱科研与实验室，也喜欢运动与编程；希望通过 iGEM 深耕基因与生物学知识。',
      },
      {
        name: 'Lirong Zhang',
        nameZh: '张立融',
        roles: ['Wet Lab'],
        photo: img25('lirong-zhang-new.webp'),
        bio: '湿实验队员；对自然史充满热情。',
      },
      {
        name: 'Yixin Liu',
        nameZh: '刘艺馨',
        roles: ['Wet Lab'],
        photo: img25('yixin-liu.webp'),
        bio: '湿实验队员；热爱手工与创作。',
      },
      {
        name: 'Sihui Wu',
        nameZh: '吴思慧',
        roles: ['HP'],
        photo: img25('sihui-wu.webp'),
        bio: '外向乐观，热爱生物医学与周游世界。',
      },
      {
        name: 'Zixin Shen',
        nameZh: '沈子心',
        roles: ['HP'],
        photo: img25('zixin-shen.webp'),
        bio: '药学专业二年级，关注生命分子机制与合成生物学落地应用。',
      },
    ],
  },
  {
    subsection: 'Our Advisors',
    subsectionZh: '指导老师',
    members: [
      {
        name: 'Zhangyi Yang',
        nameZh: '',
        roles: ['Advisor', 'Former leader'],
        photo: img25('zayn-yang.webp'),
        bio: '历届队长，为本年度赛事提供经验与方向指导。',
      },
      {
        name: 'Chunhui Sheng',
        nameZh: '盛春辉',
        roles: ['Advisor'],
        photo: img25('chunhui-sheng.webp'),
        bio: '沈阳药科大学创新创业管理中心副主任，参与对外联络与活动组织。',
      },
      {
        name: 'Jiaying Luo',
        nameZh: '罗佳颖',
        roles: ['Advisor'],
        photo: img25('jiaying-luo.webp'),
        bio: '临床药学院副教授，协助对接肝癌领域临床专家与专业技术支持。',
      },
    ],
  },
  {
    subsection: 'Our PI',
    subsectionZh: 'PI',
    members: [
      {
        name: 'Xianpu Ni',
        nameZh: '倪现朴',
        roles: ['PI'],
        photo: img25('xianpuni.webp'),
        bio: '生命科学与生物制药学院副教授（Wiki 英文页表述）；团队责任指导教师。',
      },
    ],
  },
]

/** iGEM 2023：成员照片与 Wiki 页面英文名对应（简介摘自 Wiki，略作压缩） */
export const roster2023 = [
  {
    name: 'Yi Ding',
    nameZh: '丁一',
    photo: img23('yi-ding.jpg'),
    bio: '队长、干实验组长，兼任部分湿实验；坚信合成生物学将改变世界。',
  },
  {
    name: 'Zayn Yang',
    nameZh: '杨 Zayn',
    photo: img23('zaynyang.jpg'),
    bio: '发起组建 SYPHU-China，建立校内 iGEM 社群；负责 Wiki 与网页工作。',
  },
  {
    name: 'Mengting Li',
    nameZh: '李梦婷',
    photo: img23('mengting-li.jpg'),
    bio: '生命科学与生物制药学院，热爱生物实验与合成生物学。',
  },
  {
    name: 'Shuwen Cheng',
    nameZh: '程姝文',
    photo: img23('shuwen-cheng.jpg'),
    bio: 'HP 组长，负责社会调研与科普外联。',
  },
  {
    name: 'Shuya Hu',
    nameZh: '胡姝雅',
    photo: img23('shuya-hu.jpg'),
    bio: '药学院药学专业，希望在 iGEM 中拓展新领域。',
  },
  {
    name: 'Yiqing Wang',
    nameZh: '王艺清',
    photo: img23('yiqing-wang.jpg'),
    bio: '艺术设计组成员，擅长视频与绘画。',
  },
  {
    name: 'Junjie Shi',
    nameZh: '史俊杰',
    photo: img23('junjie-shi.jpg'),
    bio: '湿实验组，专注于基因工程与表达载体构建。',
  },
  {
    name: 'Xiaoling Yang',
    nameZh: '杨晓玲',
    photo: img23('xiaoling-yang.jpg'),
    bio: '临床药学；兴趣广泛，积极乐观。',
  },
  {
    name: 'Lanzhuo Xu',
    nameZh: '徐岚卓',
    photo: img23('lanzhuo-xu.jpg'),
    bio: '湿实验设计与操作，对微生物与生化反应有浓厚兴趣。',
  },
  {
    name: 'Zhexuan An',
    nameZh: '安哲轩',
    photo: img23('zhexuan-an.jpg'),
    bio: '湿实验成员，参与实验方案与结果验证。',
  },
  {
    name: 'Jialong Xie',
    nameZh: '谢家龙',
    photo: img23('jialong-xie.jpg'),
    bio: 'HP 组，整理临床数据并与医生沟通改进项目。',
  },
  {
    name: 'Fushun Xu',
    nameZh: '徐福顺',
    photo: img23('fushun-xu.jpg'),
    bio: 'Wiki 组网页制作与任务协作。',
  },
  {
    name: 'Xuan Guo',
    nameZh: '郭璇',
    photo: img23('xuan-guo.jpg'),
    bio: 'Wiki 组，在合作中结识伙伴、学习成长。',
  },
  {
    name: 'Qianying Miao',
    nameZh: '缪倩颖',
    photo: img23('qianying-miao.jpg'),
    bio: '热心志愿与药学，善于联系经验解决问题。',
  },
  {
    name: 'Xiaorong Qin',
    nameZh: '秦小荣',
    photo: img23('xiaorong-qin.jpg'),
    bio: '艺术组成员，结合合成生物学与美术设计。',
  },
  {
    name: 'Xinghao Hu',
    nameZh: '胡兴浩',
    photo: img23('xinghao-hu.jpg'),
    bio: '生物工程专业，热爱微生物与合成生物学实验。',
  },
  {
    name: 'Jinlei Li',
    nameZh: '李金磊',
    photo: img23('jinlei-li.jpg'),
    bio: '生物制药专业，痴迷生命科学之美。',
  },
  {
    name: 'Jiarui Bai',
    nameZh: '白家瑞',
    photo: img23('jiarui-bai.jpg'),
    bio: '中药学院天然药物化学；负责微生物与合成生物学实验内容。',
  },
  {
    name: 'Zishuo Wang',
    nameZh: '王子硕',
    photo: img23('zishuo-wang.jpg'),
    bio: 'HP 组，问卷设计与数据分析。',
  },
  {
    name: 'Zhihao Dong',
    nameZh: '董智昊',
    photo: img23('zhihao-dong.jpg'),
    bio: '药学专业，学习与建模相关软件与工作流。',
  },
  {
    name: 'Guoqing Xu',
    nameZh: '徐国庆',
    photo: img23('guoqing-xu.jpg'),
    bio: '干实验组，关注合成生物学与生物工程建模。',
  },
  {
    name: 'Qi Wang',
    nameZh: '王琦',
    photo: img23('qi-wang.jpg'),
    bio: '干实验组，负责分子对接与数据分析。',
  },
  {
    name: 'Jingyu Chen',
    nameZh: '陈靖宇',
    photo: img23('jinyu-chen.jpg'),
    bio: '生物工程专业，参与 HP 与财务等事务。',
  },
  {
    name: 'Yuqiao Xin',
    nameZh: '辛雨桥',
    photo: img23('yuqiao-xin.jpg'),
    bio: '生物制药专业，主要承担 HP 相关工作。',
  },
  {
    name: 'Xianpu Ni',
    nameZh: '倪现朴',
    photo: img23('xianpu-ni.jpg'),
    bio: 'PI：微生物药物生物合成与合成生物学方向；弗莱堡大学访问学者经历（详见 Wiki）。',
  },
]

/** iGEM 2024：头像 URL 与 GitLab 仓库 pages/team.vue 中一致（static.igem.wiki/teams/5270/team/） */
const img24 = (file) => `https://static.igem.wiki/teams/5270/team/${file}`

export const roster2024 = {
  wikiUrl: wikiTeamPages[2024],
  logoUrl: 'https://static.igem.wiki/teams/5270/logo/teamlogo.jpg',
  /** 数据摘录自官方 GitLab：gitlab.igem.org/2024/syphu-china 的 pages/team.vue */
  sourceNote:
    'Photos and roles are taken from the same static.igem.wiki paths as the 2024 team page source (GitLab). Bios are shortened from the Wiki flip-card text.',
  members: [
    {
      name: 'Zhangyi Yang',
      roles: ['Leader', 'Dry Lab Leader', 'Wet Lab', 'Wiki'],
      photo: img24('zayn-yang.png'),
      bio: 'Founded SYPHU-China and the iGEM community at SYPHU; biopharmaceutics background, seeking a PhD to go further in synthetic biology.',
    },
    {
      name: 'Junjie Shi',
      roles: ['Wet Lab Leader'],
      photo: img24('sjj.jpg'),
      bio: 'Led the wet lab on genetic engineering and expression vectors; passionate about microbial and genetic engineering experiments.',
    },
    {
      name: 'Jialong Xie',
      roles: ['HP Leader'],
      photo: img24('xjl.jpg'),
      bio: 'HP leader for SYPHU 2024; organized outreach such as patient-group engagement to refine the project.',
    },
    {
      name: 'Shengwei Zhang',
      roles: ['Wiki Leader'],
      photo: img24('zhangshengwei.jpg'),
      bio: 'Wiki leader; enjoys food, music, and learning technologies that connect diverse interests.',
    },
    {
      name: 'Di Mu',
      roles: ['Art Design Leader'],
      photo: img24('dimu.jpg'),
      bio: 'Art design leader; motto: eat, drink, travel, stay happy.',
    },
    {
      name: 'Yuxin Duan',
      roles: ['Art Design'],
      photo: img24('yuxinduan.jpg'),
      bio: 'Pharmacy student; interests from painting and Chinese instruments to badminton and table tennis.',
    },
    {
      name: 'Sa Hou',
      roles: ['Wet Lab', 'Dry Lab'],
      photo: img24('hs.jpg'),
      bio: 'Pharmaceutical engineering; loves literature and exploring new fields.',
    },
    {
      name: 'Aiyong Fu',
      roles: ['Wet Lab'],
      photo: img24('aiyong.jpg'),
      bio: 'Life sciences and biopharmaceutics; hopes to contribute to understanding health and well-being.',
    },
    {
      name: 'Yuqiong Zhang',
      roles: ['Wet Lab'],
      photo: img24('yuqiong.jpg'),
      bio: 'Lively teammate; values learning together and meeting like-minded people through iGEM.',
    },
    {
      name: 'Guorui Zhang',
      roles: ['Wet Lab'],
      photo: img24('guoruizhang.jpg'),
      bio: 'Pharmaceutical engineering; enjoys walking, music, and cats—less fond of overnight experiments.',
    },
    {
      name: 'Kexin Zhou',
      roles: ['HP'],
      photo: img24('kexinzhou.jpg'),
      bio: 'Medical devices major; curious and enthusiastic about trying new challenges.',
    },
    {
      name: 'Siyu Han',
      roles: ['HP'],
      photo: img24('hsy.jpg'),
      bio: 'Biopharmaceutical major; glad to learn a lot with the iGEM team.',
    },
    {
      name: 'Xiaoling Yang',
      roles: ['Wet Lab'],
      photo: img24('xiaoling.jpg'),
      bio: 'Hot pot, experiments, shopping, cats—the procrastination club VIP with dark circles.',
    },
    {
      name: 'Xiaoying Guoyang',
      roles: ['HP'],
      photo: img24('gyxy.jpg'),
      bio: 'Pharmaceutical preparations; art, music, photography, and writing.',
    },
    {
      name: 'Zishuo Wang',
      roles: ['HP'],
      photo: img24('wzs.jpg'),
      bio: 'Pharmaceutical chemistry; class leader and HP work connecting research with the community.',
    },
    {
      name: 'Yi Ding',
      roles: ['Wet Lab'],
      photo: img24('dy.jpg'),
      bio: 'Wet lab and part-time dry lab; believes synthetic biology can change the world.',
    },
    {
      name: 'Jingyao Liu',
      roles: ['Wet Lab'],
      photo: img24('jingyao-liu.jpg'),
      bio: 'Biopharmaceutical life-base class; strong interest in synthetic biology and soothing music.',
    },
    {
      name: 'Yazhi He',
      roles: ['Wet Lab'],
      photo: img24('heyazhi.jpg'),
      bio: 'Same life-base cohort; enjoys sports and synthetic biology.',
    },
    {
      name: 'Jiatian He',
      roles: ['Dry Lab'],
      photo: img24('hejiatian.jpg'),
      bio: 'From Shenyang; aims to build a career in synthetic biology with broad extracurricular experience.',
    },
    {
      name: 'Xinyi Fu',
      roles: ['Wet Lab'],
      photo: img24('xinyifu.jpg'),
      bio: 'Pharmaceutical chemistry 2023; optimistic, detail-oriented, interested in biological genes.',
    },
    {
      name: 'Yuxuan Liu',
      roles: ['Wiki'],
      photo: img24('lyx.jpg'),
      bio: 'Business administration; optimistic, creative, enjoys reading and sports.',
    },
    {
      name: 'Liqin Xu',
      roles: ['Wet Lab'],
      photo: img24('liqinxu.jpg'),
      bio: 'Warm and sincere; loves reading and life sciences—hopes to learn more at iGEM.',
    },
    {
      name: 'Siyuan Li',
      roles: ['Wet Lab'],
      photo: img24('lisiyuan.jpg'),
      bio: 'Biological pharmacy student; curious learner with strong English and love for pharmacy stories.',
    },
    {
      name: 'Siying Xie',
      roles: ['Dry Lab'],
      photo: img24('xsy.jpg'),
      bio: 'Honored to join the passionate iGEM team and grow together.',
    },
    {
      name: 'Zimeng Li',
      roles: ['Dry Lab'],
      photo: img24('lizimeng.jpg'),
      bio: 'Cheerful biopharmaceutics major; reading, crafts, calligraphy, travel—and iGEM as a warm family.',
    },
    {
      name: 'Yilin Liang',
      roles: ['Wet Lab', 'Dry Lab'],
      photo: img24('lyl.jpg'),
      bio: 'Traditional Chinese medicine school; passionate about the intersection of biology and engineering.',
    },
    {
      name: 'Jiarui Bai',
      roles: ['HP'],
      photo: img24('bjr.jpg'),
      bio: 'Experimental and HP groups; prior iGEM 2023 silver; strong record in competitions and student societies.',
    },
    {
      name: 'Lanzhuo Xu',
      roles: ['Wet Lab'],
      photo: img24('xulanzhou.jpeg'),
      bio: 'Second iGEM year; interested in biosynthesis and global peer exchange.',
    },
    {
      name: 'Ruixuan Ren',
      roles: ['Wet Lab'],
      photo: img24('ruixuan.jpg'),
      bio: 'Chinese materia medica; loves painting and creativity.',
    },
    {
      name: 'Shaohan Ye',
      roles: ['Wet Lab'],
      photo: img24('yeshaohan.jpg'),
      bio: 'Pharmacy sophomore from southern China; cheerful, nature- and biology-loving.',
    },
    {
      name: 'Shenyuan Li',
      roles: ['Wet Lab'],
      photo: img24('shenyuanli.jpg'),
      bio: 'From Chuzhou, Anhui; synthetic biology through iGEM became a guiding light for lab passion.',
    },
    {
      name: 'Qianying Miao',
      roles: ['Wet Lab'],
      photo: img24('mqy.jpg'),
      bio: 'Volunteer experience; warm toward people, lifelong passion for pharmacy.',
    },
    {
      name: 'Xianpu Ni',
      roles: ['PI'],
      photo: img24('xianpuni.jpg'),
      bio: 'Associate Professor, Faculty of Life Sciences and Biopharmaceutics (see Wiki for full profile).',
    },
  ],
}
