/**
 * 成员与头像来自 iGEM Wiki 静态资源。
 * 简介文案见 src/locales/partials/teamRoster.bio.*.json（teamRoster.bio.{bioKey}），此处只保留姓名（英文）、头像与键。
 * 2025: static.igem.wiki/teams/5630/team/
 * 2023: static.igem.wiki/teams/4617/wiki/teamphoto/
 * 2024: static.igem.wiki/teams/5270/team/
 */

export const wikiTeamPages = {
  2025: 'https://2025.igem.wiki/SYPHU-China/members',
  2024: 'https://2024.igem.wiki/SYPHU-China/team',
  2023: 'https://2023.igem.wiki/syphu-china/team',
}

const img25 = (file) => `https://static.igem.wiki/teams/5630/team/${file}`
const img23 = (file) => `https://static.igem.wiki/teams/4617/wiki/teamphoto/${file}`

/** iGEM 2025 SYPHU-China */
export const roster2025 = [
  {
    subsectionKey: 'teamLeader',
    subsection: 'Team Leader',
    members: [
      {
        name: 'Shangyi Yang',
        nameZh: '杨尚轶',
        roles: ['teamLeader', 'dryLab'],
        photo: img25('shangyi-yang.webp'),
        bioKey: 'm2025-shangyi-yang',
      },
    ],
  },
  {
    subsectionKey: 'studentLeaders',
    subsection: 'Student Leaders',
    members: [
      {
        name: 'Haibo Li',
        nameZh: '李海博',
        roles: ['hpLeader'],
        photo: img25('haibo-li.webp'),
        bioKey: 'm2025-haibo-li',
      },
      {
        name: 'Xiaoling Yang',
        nameZh: '杨晓玲',
        roles: ['wetLabLeader'],
        photo: img25('xiaoling-yang.webp'),
        bioKey: 'm2025-xiaoling-yang',
      },
      {
        name: 'Wenbin Chen',
        nameZh: '陈文斌',
        roles: ['dryLabLeader'],
        photo: img25('wenbin-chen-1.webp'),
        bioKey: 'm2025-wenbin-chen',
      },
      {
        name: 'Ziru He',
        nameZh: '何子儒',
        roles: ['wikiLeader', 'dryLab', 'hp'],
        photo: img25('ziru-he.webp'),
        bioKey: 'm2025-ziru-he',
      },
    ],
  },
  {
    subsectionKey: 'students',
    subsection: 'Students',
    members: [
      {
        name: 'Jiaxuan Fu',
        nameZh: '付家璇',
        roles: ['wetLab'],
        photo: img25('jiaxuan-fu.webp'),
        bioKey: 'm2025-jiaxuan-fu',
      },
      {
        name: 'Erjia Zhang',
        nameZh: '张二嘉',
        roles: ['hp', 'dryLab'],
        photo: img25('erjia-zhang.webp'),
        bioKey: 'm2025-erjia-zhang',
      },
      {
        name: 'Shuoyan Zhang',
        nameZh: '张硕妍',
        roles: ['wetLab'],
        photo: img25('shuoyan-zhang.webp'),
        bioKey: 'm2025-shuoyan-zhang',
      },
      {
        name: 'Xingna Jiang',
        nameZh: '姜星娜',
        roles: ['artDesign'],
        photo: img25('xingna-jiang.webp'),
        bioKey: 'm2025-xingna-jiang',
      },
      {
        name: 'Tianyue Liu',
        nameZh: '刘天月',
        roles: ['hp'],
        photo: img25('tianyue-liu.webp'),
        bioKey: 'm2025-tianyue-liu',
      },
      {
        name: 'Siyi Liao',
        nameZh: '廖思怡',
        roles: ['hp'],
        photo: img25('siyi-liao.webp'),
        bioKey: 'm2025-siyi-liao',
      },
      {
        name: 'Zihang He',
        nameZh: '何子航',
        roles: ['hp'],
        photo: img25('zihang-he.webp'),
        bioKey: 'm2025-zihang-he',
      },
      {
        name: 'Liwen Huang',
        nameZh: '黄利文',
        roles: ['hp'],
        photo: img25('liwen-huang.webp'),
        bioKey: 'm2025-liwen-huang',
      },
      {
        name: 'Lirong Zhang',
        nameZh: '张立融',
        roles: ['wetLab'],
        photo: img25('lirong-zhang-new.webp'),
        bioKey: 'm2025-lirong-zhang',
      },
      {
        name: 'Yixin Liu',
        nameZh: '刘艺馨',
        roles: ['wetLab'],
        photo: img25('yixin-liu.webp'),
        bioKey: 'm2025-yixin-liu',
      },
      {
        name: 'Sihui Wu',
        nameZh: '吴思慧',
        roles: ['hp'],
        photo: img25('sihui-wu.webp'),
        bioKey: 'm2025-sihui-wu',
      },
      {
        name: 'Zixin Shen',
        nameZh: '沈子心',
        roles: ['hp'],
        photo: img25('zixin-shen.webp'),
        bioKey: 'm2025-zixin-shen',
      },
    ],
  },
  {
    subsectionKey: 'advisors',
    subsection: 'Our Advisors',
    members: [
      {
        name: 'Zhangyi Yang',
        nameZh: '',
        roles: ['advisor', 'formerLeader'],
        photo: img25('zayn-yang.webp'),
        bioKey: 'm2025-zayn-yang',
      },
      {
        name: 'Chunhui Sheng',
        nameZh: '盛春辉',
        roles: ['advisor'],
        photo: img25('chunhui-sheng.webp'),
        bioKey: 'm2025-chunhui-sheng',
      },
      {
        name: 'Jiaying Luo',
        nameZh: '罗佳颖',
        roles: ['advisor'],
        photo: img25('jiaying-luo.webp'),
        bioKey: 'm2025-jiaying-luo',
      },
    ],
  },
  {
    subsectionKey: 'pi',
    subsection: 'Our PI',
    members: [
      {
        name: 'Xianpu Ni',
        nameZh: '倪现朴',
        roles: ['pi'],
        photo: img25('xianpuni.webp'),
        bioKey: 'm2025-xianpuni',
      },
    ],
  },
]

/** iGEM 2023 */
export const roster2023 = [
  { name: 'Yi Ding', nameZh: '丁一', photo: img23('yi-ding.jpg'), bioKey: 'm2023-yi-ding' },
  { name: 'Zayn Yang', nameZh: '杨 Zayn', photo: img23('zaynyang.jpg'), bioKey: 'm2023-zayn-yang' },
  { name: 'Mengting Li', nameZh: '李梦婷', photo: img23('mengting-li.jpg'), bioKey: 'm2023-mengting-li' },
  { name: 'Shuwen Cheng', nameZh: '程姝文', photo: img23('shuwen-cheng.jpg'), bioKey: 'm2023-shuwen-cheng' },
  { name: 'Shuya Hu', nameZh: '胡姝雅', photo: img23('shuya-hu.jpg'), bioKey: 'm2023-shuya-hu' },
  { name: 'Yiqing Wang', nameZh: '王艺清', photo: img23('yiqing-wang.jpg'), bioKey: 'm2023-yiqing-wang' },
  { name: 'Junjie Shi', nameZh: '史俊杰', photo: img23('junjie-shi.jpg'), bioKey: 'm2023-junjie-shi' },
  { name: 'Xiaoling Yang', nameZh: '杨晓玲', photo: img23('xiaoling-yang.jpg'), bioKey: 'm2023-xiaoling-yang' },
  { name: 'Lanzhuo Xu', nameZh: '徐岚卓', photo: img23('lanzhuo-xu.jpg'), bioKey: 'm2023-lanzhuo-xu' },
  { name: 'Zhexuan An', nameZh: '安哲轩', photo: img23('zhexuan-an.jpg'), bioKey: 'm2023-zhexuan-an' },
  { name: 'Jialong Xie', nameZh: '谢家龙', photo: img23('jialong-xie.jpg'), bioKey: 'm2023-jialong-xie' },
  { name: 'Fushun Xu', nameZh: '徐福顺', photo: img23('fushun-xu.jpg'), bioKey: 'm2023-fushun-xu' },
  { name: 'Xuan Guo', nameZh: '郭璇', photo: img23('xuan-guo.jpg'), bioKey: 'm2023-xuan-guo' },
  { name: 'Qianying Miao', nameZh: '缪倩颖', photo: img23('qianying-miao.jpg'), bioKey: 'm2023-qianying-miao' },
  { name: 'Xiaorong Qin', nameZh: '秦小荣', photo: img23('xiaorong-qin.jpg'), bioKey: 'm2023-xiaorong-qin' },
  { name: 'Xinghao Hu', nameZh: '胡兴浩', photo: img23('xinghao-hu.jpg'), bioKey: 'm2023-xinghao-hu' },
  { name: 'Jinlei Li', nameZh: '李金磊', photo: img23('jinlei-li.jpg'), bioKey: 'm2023-jinlei-li' },
  { name: 'Jiarui Bai', nameZh: '白家瑞', photo: img23('jiarui-bai.jpg'), bioKey: 'm2023-jiarui-bai' },
  { name: 'Zishuo Wang', nameZh: '王子硕', photo: img23('zishuo-wang.jpg'), bioKey: 'm2023-zishuo-wang' },
  { name: 'Zhihao Dong', nameZh: '董智昊', photo: img23('zhihao-dong.jpg'), bioKey: 'm2023-zhihao-dong' },
  { name: 'Guoqing Xu', nameZh: '徐国庆', photo: img23('guoqing-xu.jpg'), bioKey: 'm2023-guoqing-xu' },
  { name: 'Qi Wang', nameZh: '王琦', photo: img23('qi-wang.jpg'), bioKey: 'm2023-qi-wang' },
  { name: 'Jingyu Chen', nameZh: '陈靖宇', photo: img23('jinyu-chen.jpg'), bioKey: 'm2023-jingyu-chen' },
  { name: 'Yuqiao Xin', nameZh: '辛雨桥', photo: img23('yuqiao-xin.jpg'), bioKey: 'm2023-yuqiao-xin' },
  { name: 'Xianpu Ni', nameZh: '倪现朴', photo: img23('xianpu-ni.jpg'), bioKey: 'm2023-xianpu-ni' },
]

const img24 = (file) => `https://static.igem.wiki/teams/5270/team/${file}`

export const roster2024 = {
  wikiUrl: wikiTeamPages[2024],
  logoUrl: 'https://static.igem.wiki/teams/5270/logo/teamlogo.jpg',
  members: [
    {
      name: 'Zhangyi Yang',
      roles: ['leader', 'dryLabLeader', 'wetLab', 'wiki'],
      photo: img24('zayn-yang.png'),
      bioKey: 'm2024-zhangyi-yang',
    },
    {
      name: 'Junjie Shi',
      roles: ['wetLabLeader'],
      photo: img24('sjj.jpg'),
      bioKey: 'm2024-junjie-shi',
    },
    {
      name: 'Jialong Xie',
      roles: ['hpLeader'],
      photo: img24('xjl.jpg'),
      bioKey: 'm2024-jialong-xie',
    },
    {
      name: 'Shengwei Zhang',
      roles: ['wikiLeader'],
      photo: img24('zhangshengwei.jpg'),
      bioKey: 'm2024-shengwei-zhang',
    },
    {
      name: 'Di Mu',
      roles: ['artDesignLeader'],
      photo: img24('dimu.jpg'),
      bioKey: 'm2024-di-mu',
    },
    {
      name: 'Yuxin Duan',
      roles: ['artDesign'],
      photo: img24('yuxinduan.jpg'),
      bioKey: 'm2024-yuxin-duan',
    },
    {
      name: 'Sa Hou',
      roles: ['wetLab', 'dryLab'],
      photo: img24('hs.jpg'),
      bioKey: 'm2024-sa-hou',
    },
    {
      name: 'Aiyong Fu',
      roles: ['wetLab'],
      photo: img24('aiyong.jpg'),
      bioKey: 'm2024-aiyong-fu',
    },
    {
      name: 'Yuqiong Zhang',
      roles: ['wetLab'],
      photo: img24('yuqiong.jpg'),
      bioKey: 'm2024-yuqiong-zhang',
    },
    {
      name: 'Guorui Zhang',
      roles: ['wetLab'],
      photo: img24('guoruizhang.jpg'),
      bioKey: 'm2024-guorui-zhang',
    },
    {
      name: 'Kexin Zhou',
      roles: ['hp'],
      photo: img24('kexinzhou.jpg'),
      bioKey: 'm2024-kexin-zhou',
    },
    {
      name: 'Siyu Han',
      roles: ['hp'],
      photo: img24('hsy.jpg'),
      bioKey: 'm2024-siyu-han',
    },
    {
      name: 'Xiaoling Yang',
      roles: ['wetLab'],
      photo: img24('xiaoling.jpg'),
      bioKey: 'm2024-xiaoling-yang',
    },
    {
      name: 'Xiaoying Guoyang',
      roles: ['hp'],
      photo: img24('gyxy.jpg'),
      bioKey: 'm2024-xiaoying-guoyang',
    },
    {
      name: 'Zishuo Wang',
      roles: ['hp'],
      photo: img24('wzs.jpg'),
      bioKey: 'm2024-zishuo-wang',
    },
    {
      name: 'Yi Ding',
      roles: ['wetLab'],
      photo: img24('dy.jpg'),
      bioKey: 'm2024-yi-ding',
    },
    {
      name: 'Jingyao Liu',
      roles: ['wetLab'],
      photo: img24('jingyao-liu.jpg'),
      bioKey: 'm2024-jingyao-liu',
    },
    {
      name: 'Yazhi He',
      roles: ['wetLab'],
      photo: img24('heyazhi.jpg'),
      bioKey: 'm2024-yazhi-he',
    },
    {
      name: 'Jiatian He',
      roles: ['dryLab'],
      photo: img24('hejiatian.jpg'),
      bioKey: 'm2024-jiatian-he',
    },
    {
      name: 'Xinyi Fu',
      roles: ['wetLab'],
      photo: img24('xinyifu.jpg'),
      bioKey: 'm2024-xinyi-fu',
    },
    {
      name: 'Yuxuan Liu',
      roles: ['wiki'],
      photo: img24('lyx.jpg'),
      bioKey: 'm2024-yuxuan-liu',
    },
    {
      name: 'Liqin Xu',
      roles: ['wetLab'],
      photo: img24('liqinxu.jpg'),
      bioKey: 'm2024-liqin-xu',
    },
    {
      name: 'Siyuan Li',
      roles: ['wetLab'],
      photo: img24('lisiyuan.jpg'),
      bioKey: 'm2024-siyuan-li',
    },
    {
      name: 'Siying Xie',
      roles: ['dryLab'],
      photo: img24('xsy.jpg'),
      bioKey: 'm2024-siying-xie',
    },
    {
      name: 'Zimeng Li',
      roles: ['dryLab'],
      photo: img24('lizimeng.jpg'),
      bioKey: 'm2024-zimeng-li',
    },
    {
      name: 'Yilin Liang',
      roles: ['wetLab', 'dryLab'],
      photo: img24('lyl.jpg'),
      bioKey: 'm2024-yilin-liang',
    },
    {
      name: 'Jiarui Bai',
      roles: ['hp'],
      photo: img24('bjr.jpg'),
      bioKey: 'm2024-jiarui-bai',
    },
    {
      name: 'Lanzhuo Xu',
      roles: ['wetLab'],
      photo: img24('xulanzhou.jpeg'),
      bioKey: 'm2024-lanzhuo-xu',
    },
    {
      name: 'Ruixuan Ren',
      roles: ['wetLab'],
      photo: img24('ruixuan.jpg'),
      bioKey: 'm2024-ruixuan-ren',
    },
    {
      name: 'Shaohan Ye',
      roles: ['wetLab'],
      photo: img24('yeshaohan.jpg'),
      bioKey: 'm2024-shaohan-ye',
    },
    {
      name: 'Shenyuan Li',
      roles: ['wetLab'],
      photo: img24('shenyuanli.jpg'),
      bioKey: 'm2024-shenyuan-li',
    },
    {
      name: 'Qianying Miao',
      roles: ['wetLab'],
      photo: img24('mqy.jpg'),
      bioKey: 'm2024-qianying-miao',
    },
    {
      name: 'Xianpu Ni',
      roles: ['pi'],
      photo: img24('xianpuni.jpg'),
      bioKey: 'm2024-xianpu-ni',
    },
  ],
}
