/*

 @name    : 锅巴汉化 - Web汉化插件
 @author  : 麦子、JAR、小蓝、好阳光的小锅巴
 @version : V0.6.1 - 2019-07-09
 @website : http://www.g8hh.com

*/

//1.汉化杂项
var cnItems = {
    _OTHER_: [],

    //未分类：
    'Auto': '自动',
    'Auto search': '自动搜索',
    'Automation': '自动化',
    'Workers': '工人',
    'Batteries': '电池',
    'Cards': '卡',
    ' Max': '最大',
    'Exp Shop': '经验商店',
    'Info': '信息',
    'Notifications': '通知',
    'Options': '选项',
    'Prestige': '声望',
    'Warps': '扭曲',
    'Available': '可用',
    'Days': '天',
    'Day': '天',
    'Drones': '无人机',
    'Efficiency': '效率',
    'Hour': '小时',
    'Hours': '小时',
    'Locked': '未解锁',
    'Off': '关闭',
    'On': '开启',
    'Name': '名称',
    'Misc': '杂项',
    'Month': '月',
    'Months': '月',
    'Minutes': '分钟',
    'Minute': '分钟',
    'Mine': '矿山',
    'Miner': '矿工',
    'Metal': '金属',
    'Materials': '材料',
    'Longer Spell': '更长的法术',
    'More Drones': '更多无人机',
    'Production': '生产',
    'Recycling': '回收',
    'Technology': '技术',
    'Update Warp': '更新扭曲',
    'Victory Warp': '胜利扭曲',
    'More Computing': '更多计算',
    'In Use': '使用中',
    'After confirmation cards will be locked until prestige (you can click \'Confirm\' only one time per prestige).': '确认卡之后，卡将被锁定直到声望（每个声望您只能单击“确认”一次）。',
    'Components': '组件',
    'Computing Regeneration': '计算再生',
    'Confirm': '确认',
    'Districts': '地区',
    'Double Warp': '双倍扭曲',
    'Final Victory Warp': '最终胜利扭曲',
    'More Experience': '更多经验',
    'More Dark Matter': '更多暗物质',
    'Peacefully Efficiency': '和平效率',
    'Research Boost': '研究提升',
    'Science Warp': '科学扭曲',
    'Technology Boost': '技术提升',
    'Warps yield science equal to \'total science per sec\' * \'warp time\'': '扭曲产生的科学等于“每秒科学总数” *“扭曲时间”',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',

    //原样
    '': '',
    '': '',

}


//需处理的前缀
var cnPrefix = {
    "(-": "(-",
    "(+": "(+",
    "(": "(",
    "-": "-",
    "+": "+",
    " ": " ",
    ": ": "： ",
    "\n": "",
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": "",
    " ": "",
    "Buy": "购买",
}

//需处理的后缀
var cnPostfix = {
    ":": "：",
    "：": "：",
    ": ": "： ",
    "： ": "： ",
    " ": "",
    "/s)": "/s)",
    "/s": "/s",
    ")": ")",
    "%": "%",
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": "",
    " ": "",
    "\n": "",
}

//需排除的，正则匹配
var cnExcludeWhole = [
    /^x?\d+(\.\d+)?[A-Za-z%]{0,2}(\s.C)?\s*$/, //12.34K,23.4 °C
    /^x?\d+(\.\d+)?(e[+\-]?\d+)?\s*$/, //12.34e+4
    /^\s*$/, //纯空格
    /^\d+(\.\d+)?[A-Za-z]{0,2}.?\(?([+\-]?(\d+(\.\d+)?[A-Za-z]{0,2})?)?$/, //12.34M (+34.34K
    /^(\d+(\.\d+)?[A-Za-z]{0,2}\/s)?.?\(?([+\-]?\d+(\.\d+)?[A-Za-z]{0,2})?\/s\stot$/, //2.74M/s (112.4K/s tot
    /^\d+(\.\d+)?(e[+\-]?\d+)?.?\(?([+\-]?(\d+(\.\d+)?(e[+\-]?\d+)?)?)?$/, //2.177e+6 (+4.01+4
    /^(\d+(\.\d+)?(e[+\-]?\d+)?\/s)?.?\(?([+\-]?(\d+(\.\d+)?(e[+\-]?\d+)?)?)?\/s\stot$/, //2.177e+6/s (+4.01+4/s tot
];
var cnExcludePostfix = [
    /:?\s*x?\d+(\.\d+)?(e[+\-]?\d+)?\s*$/, //12.34e+4
    /:?\s*x?\d+(\.\d+)?[A-Za-z]{0,2}$/, //: 12.34K, x1.5
]

//正则替换，带数字的固定格式句子
//纯数字：(\d+)
//逗号：([\d\.,]+)
//小数点：([\d\.]+)
//原样输出的字段：(.+)
var cnRegReplace = new Map([
    [/^(.+) seconds$/, '$1 秒'],
    [/^(.+) AM$/, '上午 $1'],
    [/^(.+) PM$/, '下午 $1'],
    [/^(\d+) Royal points$/, '$1 皇家点数'],
    [/^Cost: (\d+) RP$/, '成本：$1 皇家点数'],
    [/^Usages: (\d+)\/$/, '用途：$1\/'],
    [/^workers: (\d+)\/$/, '工人：$1\/'],

]);