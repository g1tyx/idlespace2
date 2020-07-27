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
    'Cards': '卡牌',
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
    'Longer Spell': '更长的法术',
    'More Drones': '更多无人机',
    'Production': '生产',
    'Recycling': '回收',
    'Technology': '技术',
    'Update Warp': '更新扭曲',
    'Victory Warp': '胜利扭曲',
    'More Computing': '更多计算',
    'In Use': '使用中',
    'After confirmation cards will be locked until prestige (you can click \'Confirm\' only one time per prestige).': '确认卡牌之后，卡牌将被锁定直到声望（每个声望您只能单击“确认”一次）。',
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
    'Game Loaded': '游戏已加载',
    'Power Plant': '发电厂',
    'Technician': '技术员',
    'To unlock you need': '要解锁，您需要',
    'bigger number = high priority': '更大的数字=高优先级',
    'Efficiency bonus': '效率加成',
    'General bonus': '普通加成',
    'Interval': '间隔',
    'Max buy': '最大购买',
    'On / Off': '开启 / 关闭',
    'Priority': '优先级',
    'Prod': '产出',
    'Ratio': '比率',
    'Total': '总计',
    'Total Consumed': '总消耗量',
    'Total Production': '总产量',
    'Auto space stations': '自动空间站',
    'Drones efficiency prestige': '无人机效率声望',
    'Drones production prestige': '无人机生产声望',
    'Experience': '经验',
    'Fleet design updater': '舰队设计更新器',
    'Owned': '拥有',
    'Price': '价格',
    'Product': '产品',
    'Science': '科学',
    'Spend your experience here.': '在这里花费您的经验。',
    'Starter Pack': '入门包',
    'War': '战争',
    'Increase components from enemies by': '提高从敌人那里获得的组件',
    'Increase computing regeneration by': '提高计算再生率',
    'Increase Dark Matter gain by': '提高获得的暗物质',
    'Increase districts from enemies by': '提高从敌人那里得到的地区',
    'Increase Drones limit by': '提高无人机上限',
    'Increase Drones recycling by': '提高无人机回收',
    'Increase Experience gain by': '提高经验获得',
    'Increase material from enemies by': '提高从敌人那里得到的材料',
    'Increase researches boost from 35% to': '研究提升从35％提高到',
    'Increase technology gain by': '提高技术获得',
    'Research boosts also increase the relative technology': '研究的提升也增加了相关技术',
    'Spells last 100% more': '法术持续时间提高100％以上',
    'Game update longer than 1 hours become warps': '超过1小时的游戏更新会扭曲',
    'Gain one slot every 10 max level enemy. Slots never reset.': '每10个最高等级的敌人获得一个插槽。 插槽永远不会重置。',
    'Drones yields 100% more when not in war (no enemy on battle screen': '不在战争中时，无人机的收益提高100％（战斗屏幕上没有敌人）',
    'Warp 0.5 seconds when you win a battle': '在战斗中获胜时扭曲0.5秒',
    'Warp 100% more': '扭曲100%更多',
    'Warp 250 seconds when you defeat an enemy': '击败敌人时扭曲250秒',
    ' Half': ' 一半',
    'Changelog': '更新日志',
    'Clear': '清除',
    'Export': '导出',
    'Import': '导入',
    'Load': '加载',
    'Ui': '界面',
    'Save': '保存',
    'Start': '开始',
    'Search': '搜索',
    'Warp': '扭曲',
    'Weeks': '周',
    'Week': '周',
    'Years': '年',
    'Year': '年',
    'Warfare': '战事',
    'Use Dark Matter to warp! Warp will reduce the time of ongoing battles.': '使用暗物质扭曲！ 扭曲将减少正在进行的战斗时间。',
    'Scientist will unlock researches.': '科学家将解锁研究。',
    'Mega Engineering': '巨型工程',
    'Donate': '捐赠',
    'Computing / buffs': '计算 / 增益',
    'Designs': '设计',
    'Start with buying mining drones and technicians, buy mines and power plant when needed. If you run out of energy all drones will stop! so make sure you have enough energy.': '首先购买采矿无人机和技术人员，然后在需要时购买矿山和电厂。 如果您用光了所有无人机，则将停止！ 因此，请确保您有足够的能量。',
    'This game is built with Angular 2+ and Ng-Zorro (Ant design). See': '该游戏是使用Angular 2+和Ng-Zorro（蚂蚁设计）制作的。 看',
    'This game is inspired by various idle and strategy games, including but not limited to: Trimps, Ngu Idle, Realm grinder, Stellaris, Civilization.': '该游戏的灵感来自各种休闲和策略游戏，包括但不限于：Trimps，Ngu Idle，Realm grinder，Stellaris和Civilization。',
    'for source code and package used.': '用于使用的源代码和软件包。',
    'Credits': '鸣谢',
    'All technologies increase 50% faster': '所有技术的增长速度提高50％',
    'cards slots.': '卡槽。',
    'Dark Matter. Now you have': '暗物质。现在你有',
    'Gain 100% more materials from enemies': '从敌人身上获得100％更多材料',
    'Gain 30% more components from enemies': '从敌人身上获得30％更多组件',
    'Gain 50% more district from enemies': '从敌人身上获得50％更多地区',
    'Increase technology gain': '提高技术获得',
    'More Components': '更多组件',
    'More Districts': '更多地区',
    'More Idle time': '更多放置时间',
    'More Materials': '更多材料',
    'More Velocity and Acceleration': '更高的速度和加速度',
    'ON': '开启',
    'Your current experience multiplier is': '你当前经验倍数是',
    'Your next experience multiplier will be': '你下一经验加成会',
    'Your will gain': '你会获得',
    'Reset everything except "Exp Shop" and ship design. Ship design with locked module becomes blueprint. You will be able to defeat enemies again and gain Experience. The "experience multiplier" multiply the effectiveness of experience spent. "experience multiplier" is based on the max level of defeated enemy.': '重置除“经验商店”和运送设计之外的所有内容。 锁定模块的船舶设计成为蓝图。 您将能够再次击败敌人并获得经验。 “经验乘数”乘以经验的有效性。 “经验倍增”是基于击败敌人的最大等级。',
    'Game Saved': '游戏已保存',
    'Auto Search': '自动搜索',
    'Best ratio': '最佳比率',
    'Cheap': '便宜',
    'Max Level': '最高级',
    'Most space': '最多空间',
    'Threat': '威胁',
    'Threat /round': '威胁/回合',
    'Velocity': '速度',
    'with "Enemy distance" determine battle time.': '用“敌人的距离”确定战斗时间。',
    'work in the same way of armour.': '以相同的装甲方式工作。',
    'You can have up to five fleets with different composition, one fleet can have up to 5.00e3 naval capacity. There aren\'t penalties for using more fleets. Ships naval capacity are equal to the maximum number of module levels.': '您最多可以拥有五艘不同组成的舰队，一个舰队可以拥有5.00e3的海军容量。 使用更多舰队不会受到任何惩罚。 船舶海军能力等于模块级的最大数量。',
    'You can search for new enemies in the "Search" section. You can search enemies of any level, but you can only attack enemies with level lower or equal to your max level. You can improve enemies rewards by paying more "search" or by increasing enemy distance.': '您可以在“搜索”部分中搜索新的敌人。 您可以搜索任何级别的敌人，但只能攻击级别低于或等于最大级别的敌人。 您可以通过支付更多的“搜索”费用或增加敌人的距离来提高敌人的奖励。',
    '"Shipyard work" can be used to build space stations and mega structures. On the "Space stations" section you can change the priority of Space stations and army ships. Space stations grants habitable space.': '“造船厂的工作”可以用来建造空间站和大型结构。 在“空间站”部分，您可以更改空间站和军舰的优先级。 空间站授予可居住的空间。',
    'Acceleration': '加速度',
    'Adaptive Precision': '自适应精度',
    'After prestige you can defeat enemies again to gain more experience.': '获得声望之后，你可以再次击败敌人以获得更多经验。',
    'amount of work needed to build one ships.': '建造一艘船所需的工作量。',
    'and': '和',
    'Armour': '装甲',
    'Armour Damage Reduction': '装甲伤害减免',
    'At the end of each round dead ships are removed and will not be target in the next round. Ships gain threat based on damage done or "Threat per round".': '在每一轮结束时，死船将被移除，并且不会成为下一轮的目标。舰船根据所造成的伤害或每轮的仇恨值获得仇恨值。',
    'Battle': '战斗',
    'Cargo': '货物',
    'Battle results can be analysed on the "Reports" section. Battle consist on five rounds, on each round': '战斗结果可以在“报告”部分进行分析。战斗有五回合，每一回合',
    'Civil Engineering': '土木工程',
    'Damage': '伤害',
    'Explosion': '爆炸',
    'Explosion Damage': '爆炸伤害',
    'Fleets': '舰队',
    'Ground Defences': '地面防御',
    'Icons are from Ng-Zorro, https://game-icons.net and Font Awesome.': '图标来自Ng-Zorro, https://game-icons.net和Font Awesome。',
    'increase armour by a percent.': '增加装甲按百分比。',
    'increase computing': '增加计算',
    'increase searching speed': '提高搜索速度',
    'increase ships build speed': '提高船舶建造速度',
    'Laboratory': '实验室',
    'Mega structures': '大型结构',
    'Mega Structures': '大型结构',
    'Military Engineering': '军事工程',
    'Naval': '海军',
    'Precision': '精度',
    'Shield': '护盾',
    'Shield Damage Reduction': '护盾伤害减免',
    'Space station': '空间站',
    'starting threat.': '开始威胁。',
    'Technologies': '技术',
    'The Computing research line will unlock automation; priority two or three are fired when previous priority buffs are active. After researching "Computing IV" priority one are fired on full computing.': '计算研究线将开启自动化;优先级2或3被触发时，前一个优先级的增益是激活的。在研究完“计算IV”后，优先级之一是完全计算。',
    'Not implemented yet.': '还没有实现。',
    'On each run, defeat max level enemy, grants Experience points.': '在每次运行中，击败最大等级的敌人，给予经验点。',
    'Enemies': '敌人',
    'Enemies may have ground defences, planetary defences works exactly like ships but can be completely destroyed by Nuke. Ground defences don\'t require energy because are attached to the planet energy grid.': '敌人可能拥有地面防御系统，行星防御系统就像船只一样工作，但是可以被核弹完全摧毁。地面防御系统不需要能源，因为它与地球能源网相连。',
    'Each weapon fire to one semi random target, including ships dead in this round. "Threat" is the chance to be chosen, some modules increase the threat of some ships. "Accuracy" increase threat of alive ships, "Adaptive Precision" increase threat proportional to weapon armour %, shield % and defence %.': '每一件武器对一个半随机目标开火，包括在这一轮中死亡的船只。“威胁”是被选择的机会，一些模块增加了一些船的威胁。“精确”增加活着的船的威胁值，“自适应精确”增加武器装甲%，盾牌%和防御%的威胁值。',
    'Modules': '模块',
    'Reports': '报告',
    'Tree': '科技树',
    'must be greater or equal to zero. Has no other effects.': '必须大于或等于零。没有其他影响。',
    'Torus': '圆环面',
    ' optimization X': ' 优化 X',
    ' Drones Yards': ' 无人机花园',
    'Battlecruiser': '战列巡洋舰',
    'Battleship': '战舰',
    'Colossus': '巨像',
    'Corvette': '轻巡洋舰',
    'Cruiser': '巡洋舰',
    'Destroyer': '驱逐舰',
    'Dreadnought': '无畏战舰',
    'Drone X': '无人机 X',
    'Frigate': '巡防舰',
    'Deep mining': '深井开采',
    'Grand strategy': '伟大战略',
    'Habitat': '栖息地',
    'Ransack': '洗劫',
    'Research Module': '研究模块',
    'Renewable energy': '可再生能源',
    'Reactive Armour': '反应装甲',
    'Primary Industry': '第一产业',
    'Primary Industry focus': '行业重点',
    'Tactics': '战术',
    'Battle win': '战斗胜利',
    'Citadel': '城堡',
    'Colony': '殖民地',
    'Fleet': '舰队',
    'Habitable zone': '宜居区',
    'Pillage': '抢劫',
    'Observatory': '天文台',
    'Ring World': '环世界',
    'Rotating Space Station': '旋转空间站',
    'Scientist Yards': '科学家花园',
    'Scientists origin': '科学家的起源',
    'searching': '搜索',
    'Space mining': '太空采矿',
    'Space Station': '空间站',
    'Titan': '泰坦',
    'Technicians Yards': '技术员花园',
    'Military Focus': '军事焦点',
    'Advanced Space Stations': '高级空间站',
    'Builders origin': '建筑者的起源',
    'Assembly patterns': '组装模式',
    'Enemy Defeated!': '敌人被击败!',
    'Military Industry': '军事工业',
    'Optimistic zone': '乐观地带',
    'Orbital Research Lab': '轨道研究实验室',
    'Orbital Satellites': '轨道卫星',
    'Planetary Acquisition': '行星收购',
    'Searchers Yards': '搜索者花园',
    'Secondary Industry': '第二产业',
    'Communications Jammer': '通信干扰机',
    'departments': '部门',
    'from enemies': '来自敌人',
    'Drones initiative': '无人机计划',
    'Plasma': '等离子体',
    'per': '每',
    'more': '更多',
    'mod points': '模块点',
    'Replicator': '复制因子',
    'Scientist': '科学家',
    'Searcher': '搜索者',
    'technology progress': '技术进度',
    'Unlock auto casting': '解锁自动投射',
    'Unlock research': '解锁研究',
    'Unlock secondary auto casting': '解锁辅助自动投射',
    ' District': ' 地区',
    'Actual': '实际',
    'Add': '新增',
    'Cell': '单元',
    'All Types': '全部类型',
    'Attack': '攻击',
    'Auto Attack Option': '自动攻击选项',
    'Auto Sort': '自动排序',
    'Backlog': '待办',
    'Bonus': '加成',
    'Cesleans Congregation': '塞斯林教会',
    'ciao': '你好',
    'Create': '创建',
    'days': '天',
    'Design': '设计',
    'Distance': '距离',
    'Drone': '无人机',
    'Earth Ascendancy': '地球优势',
    'Enable Fleet': '启用舰队',
    'Eta': '和',
    ' optimization IX': ' 优化 IX',
    'Factory': '工厂',
    ' Factory': '工厂',
    'Fleet Capacity': '舰队容量',
    'Fleet Priority': '舰队优先级',
    'Foundry': '铸造厂',
    'Habitability': '宜居性',
    'Habitable Space': '居住空间',
    'Habitable space': '居住空间',
    'Laser': '激光',
    'Jobs': '工作',
    'Level': '等级',
    'lv.': '等级',
    'Min ships ': '最小船只 ',
    'New': '新',
    'New Design': '新设计',
    'New Fleet Capacity': '新船队容量',
    'Next': '下一个',
    'New on BackLog': '新待办列表',
    'Qty': '数量',
    'Reinforce': '加强',
    'Old': '旧',
    'Reinforce All': '全部加强',
    'Rocket': '火箭',
    'Reset': '重置',
    'Search Time': '搜索时间',
    'sec': '秒',
    'Ship Modules': '飞船模块',
    'ship module': '飞船模块',
    'Solar Panel': '太阳能板',
    'Sort': '排序',
    'Sprawl': '扩张',
    'Status': '状态',
    'Strength': '力量',
    'Technology ': '技术 ',
    'To do': '进行中',
    'Type': '类型',
    'Unlocked': '已解锁',
    'Worker': '工人',
    'yields': '生产',
    'ship': '飞船',
    'Stealth Armour': '隐形装甲',
    'Suppressor': '抑制器',
    'Tesla Cannon': '特斯拉炮',
    'Unlock ship module': '解锁飞船模块',
    'velocity and acceleration': '速度和加速度',
    'Warp Drive': '扭曲驱动',
    'yields and consume': '生产和消耗',
    'Alloy': '合金',
    'Antimatter Rocket': '反物质火箭',
    'Build any space station': '建立任何空间站',
    'Coilgun': '线圈炮',
    'Deflector': '导流板',
    'Drone Factory': '无人机工厂',
    'energetic districts': '能量区',
    'Fission Reactor': '裂变反应堆',
    'initiative': '倡议',
    'mining districts': '采矿区',
    'Module': '模块',
    'Ok': '好的',
    'OK': '好的',
    'Armour dmg. red.': '装甲伤害。 红色。',
    'Shield dmg. red.': '护盾伤害。 红色。',
    'Attack All': '攻击所有',
    'Avg. Damage': '平均伤害',
    'Battle Reports': '战斗报告',
    'Boost': '提升',
    'boosts also increase the relative technology': '也提升了相关技术',
    'Choose': '选择',
    'Date': '日期',
    'Detail': '详情',
    'Enemy': '敌人',
    'Explosion dmg.': '爆照伤害。',
    'Quantity': '数量',
    'Shield Recharge': '护盾充能',
    'Shield Charger': '护盾充能器',
    'Surrender': '投降',
    'View': '查看',
    'Weapons': '武器',
    'Won': '胜利',
    ' Regeneration': ' 再生',
    'Defeat an enemy': '击败敌人',
    'Droids were originally build for warfare. This path focus on battle (active style).': '机器人最初是为战争而建造的。 此路径专注于战斗（主动风格）。',
    'Improve Drone build speed': '提升无人机建造速度',
    'Increase materials gain from battles': '提高从战斗中获得的材料数量',
    'Increase Naval Capacity': '提升海军容量',
    'production of': '生产',
    'storage': '存储',
    'research': '研究',
    'computing ': '计算 ',
    'Disintegrator': '分解者',
    'districts': '地区',
    ' districts': '地区',
    'Emp impulse': '电磁脉冲',
    'Level 1 auto casting start casting on full computing': '第1级自动施放在完全计算时开始施放',
    'Antimatter Reactor': '反物质反应堆',
    'Fusion Reactor': '聚变反应堆',
    'Operative': '有效',
    'Dismiss': '解雇',
    'Districts Info': '地区信息',
    'Drone Depot': '无人机仓库',
    'Drones Info': '无人机信息',
    'Production stopped': '生产已停止',
    'Set': '设置',
    'Technicians are always 100% operative.': '技术人员总是100%的操作。',
    'This message can be disabled in the ui options section.': '可以在界面选项部分禁用此消息。',
    'Waiting for work': '等待工作',
    'Stopped': '已停止',
    'Theme': '主题',
    'Small Headers': '小标题',
    'Scientific': '科学',
    'Number format (reload required': '数字格式(需要重新加载',
    'Dark Green': '暗绿',
    'Side menu theme': '侧菜单主题',
    'Tutorial info': '教程信息',
    'Ui Settings': '界面设置',
    'USA decimal format (reload required': '美国十进制格式(需要重新加载',
    'Show drones status': '显示无人机状态',
    'Show operativity info': '显示操作性信息',
    'Show districts info': '显示地区信息',
    'Show components info': '显示组件信息',
    'Disable small(1 sec) warp notifications': '禁用小的(1秒)扭曲通知',
    'Disable all warp notifications': '禁用所有扭曲通知',
    'Disable "Production stopped" modal': '禁用“生产停止”模式',
    'Battle Win notification': '战斗胜利通知',
    'Battle Lost notification': '战斗失败通知',
    'Dark Blue': '暗蓝',
    'Light Blue': '淡蓝',
    'Light Green': '淡绿',
    '60% ship velocity, +30% districts from battle': '60%的飞船速度，+30%战斗获得的地区',
    'Drones yields (20 + 1 per relative building)% more resources': '无人机产生(20 + 1 每相对建筑)%更多的资源',
    'Engineering': '工程符号',
    'Long Scale': '长刻度',
    'No': '不',
    'Standard': '标准',
    'War initiative': '战争主动权',
    'Delete': '删除',
    'Threks Meritocracy': '族群精英',
    'Tiles': '瓦片',
    'All Statuses': '全部状态',
    'Defences': '防御',
    'Generators': '发电机',
    'Thrusters': '推进器',
    'Others': '其它',
    'unit': '单位',
    'No Data': '无数据',
    'Ships fire in orderly fashion, having anti-shield before anti-armour ship is recommended.': '舰船有序开火，建议在反装甲之前先安装防盾。',
    'Some researches, like "Origin" are exclusive, you can get only one per run.': '有些研究，如“起源”是排他的，每次运行只能得到一个。',
    'Attacher gain threat based on damage done, "Threat multi" can increase or decrease that amount. Threat is added at the end of the round.': '攻击者根据所造成的伤害获得仇恨值，可以增加或减少仇恨值。威胁在回合结束时添加。',
    'Battle time is determined by enemy distance and your slowest ship.': '战斗时间取决于敌人的距离和你最慢的船。',
    'damage done to attacker in case of explosion.': '爆炸时对攻击者造成的伤害。',
    'damage, percent dealt to armour, shield or ground defence may vary.': '装甲、盾牌或地面防御的伤害、百分比可能会有所不同。',
    'decrease all incoming armour damage by a fixed quantity.': '将所有进入的装甲伤害降低一定数量。',
    'explosion threshold, when armour is less than Explosion the ships may explode. In case of lethal damage explosion is not triggered.': '爆炸阈值，当装甲小于爆炸时，船只可能会爆炸。 万一发生致命伤害，不会触发爆炸。',
    'extra threat per round, useful for "Tank" ships.': '每回合额外威胁值，对“坦克”舰船有用。',
    'Increase drone mods, each drone depends on different technologies, see mod page.': '增加无人机模块，每个无人机取决于不同的技术，见模块页面。',
    'increase naval capacity': '增加海军容量',
    'Increase research speed of researches with the relative technology': '利用相关技术提高研究速度',
    'increase space stations and megatructures build speed': '提高空间站和大型建筑的建造速度',
    'increase the drone mods': '增加无人机模块',
    'Science can be used for researches or technologies, in the Laboratory tab you can set the priority. Technologies determine the maximum module level for space ships. Technologies give the following bonus': '科学可以用于研究或技术，在实验室选项卡您可以设置优先级。技术决定了宇宙飞船的最大模块级别。技术带来了以下好处',
    'Some researches can be "boosted" by doing task like "build one mine" or "build one mine". Boost increase research progress by 35%, research must be unlocked and can be boosted only one time per level. See the rising arrow in the research preview.': '有些研究可以通过“建一个矿”或“建一个矿”这样的任务来“推进”。增加研究进度35%，研究必须解锁，每级只能提升一次。在研究预览中看到上升的箭头。',
    ' / buffs': ' / 增益',
    ' research line and some special research will unlock buffs on bottom of screen.': '研究线和一些特殊的研究将解锁屏幕底部的增益。',
    'Cards are special bonus unlocked every ten enemy level, cards are unlocked by prestige and never reset. Cards are not effected by "experience multiplier" and can be changed only one time per prestige run.': '卡牌是每10个敌人等级解锁的特殊奖励，卡牌是由声望解锁的，不会重置。卡牌不受“经验倍数”影响，每次声望运行只能改变一次。',
    'In case target has no shield and armour is lower than explosion threshold there is a chance to explode. Chance is proportional to missing armour and occur on each shot, if conditions are met. In case exploded ship has "Explosion damage", damage is dealt to attackers. Explosion damage is 100% armour and 100% shield.': '如果目标没有盾牌且装甲低于爆炸阈值，则有可能爆炸。机会与丢失盔甲成正比，如果条件满足，每次射击都会发生。如果爆炸的船有“爆炸伤害”，攻击者会受到伤害。爆炸伤害是100%装甲和100%盾牌。',
    'In order to acquire new district you will need to win battles. On the Fleet section you can change your fleet composition. On the Design tab you can create new Ships design or change existing designs. Enemies can be searched on the Enemies section.': '为了获得新的地区，你需要赢得战斗。在舰队部分你可以改变你的舰队组成。在设计选项卡上，您可以创建新的船舶设计或更改现有的设计。敌人可以在敌人栏中搜索。',
    'increase material and science battle rewards.': '增加材料和科学战斗奖励。',
    'increase threat of alive targets based on weapon armour% and shield%.': '基于武器护甲%和盾%增加活着目标的威胁值。',
    'increase threat of alive targets.': '增加活着目标的威胁值。',
    'On the "Design" section you can create or update ship designs. Each ship can equip a maximum number of modules and module points. larger modules cost more points and have a small bonus compared to more small modules.': '在“设计”部分，您可以创建或更新船舶设计。每艘船可以装备最大数量的模块和模块点。与更小的模块相比，更大的模块花费更多的积分，并有少量的奖励。',
    'Prestige grants "experience multiplier" based on max current max level enemy. "experience multiplier" increase the effectiveness of experience, retroactively.': '声望给予“经验倍增器”基于当前最大等级的敌人。“经验倍增器”增加了经验的有效性，具有追溯性。',
    'Prestige reset everything except experience, dark matter, cards, and ships designs. Prestige unlocks cards and dark matter.': '威望重置除了经验、暗物质、卡牌和飞船设计之外的一切。声望解锁卡和暗物质。',
    'Shield are regenerated, if some ships have "Shield Recharge". "Shield Recharge" apply to any ships with shield greater than zero, ships with lower shield percent have priority. If a ships has shield completely depleted shield will not be regenerated.': '当一些舰船有“护盾补给”时，护盾会重生。“护盾补给”适用于任何护盾大于零的舰船，低护盾百分比的舰船优先。如果舰船的护盾完全耗尽，护盾将不会再生。',
    'Activate everything under "Automation". "Battle win" notification can be disabled from': '在“自动化”下激活所有内容。 可以从以下位置禁用“战斗胜利”通知',
    'Add Module': '添加模块',
    'After defeating the first tree enemies you will need to search them by your own. To do so research "Search" from laboratory screen and than buy searchers. Note that searchers consume science.': '击败第一批树上的敌人后，您需要自己搜索它们。 为此，请从实验室屏幕中搜索“搜索”，然后购买搜索者。 请注意，搜索者会消耗科学。',
    'Automation.': '自动化.',
    'Battle, click Attack All.': '战斗，点击攻击全部。',
    'Click': '点击',
    'Defeat higher level enemies, every time you beat any max level enemy from level two, you will gain Experience. You don\'t get Experience from defeating the same level more times in the same sun.': '击败更高等级的敌人，每当您从第二等级击败任何最大等级的敌人，您将获得经验值。 在同一太阳下多次击败同一关卡，您不会获得经验。',
    'Delete Design': '删除设计',
    'Enemies, click Search. Activate "Auto search" on': '敌人，点击搜索。 启用“自动搜索”',
    'Extra Small': '特小',
    'Fleets, click Reinforce.': '舰队，点击强化。',
    'Getting started': '入门',
    'Maximize': '最大化',
    'Medium': '中等',
    'Module count': '模块数量',
    'new ships and modules, improve ships designs.': '新的船舶和模块，改善船舶设计。',
    'Next Design': '下一个设计',
    'Next goals': '下一个目标',
    'Options -> ui.': '选项-> 界面。',
    'Options to setup auto attack options, set "Min ships %" to 90, so Fleet 1 will attack when 90% or more drones are ready.': '设置自动攻击选项的选项，将“最小船只百分比”设置为90，这样，当90％或更多的无人机准备就绪时，舰队1将进行攻击。',
    'Points': '点数',
    'Small': '小',
    'To increase battle speed equip thrusters (travel eta is from the slowest ship) and/or activate more fleets to fight more tiles at the same time.': '为了提高战斗速度，请装备推进器（旅行速度是从最慢的船上来的）和/或激活更多的舰队以同时战斗更多的瓦片。',
    'Stats': '统计',
    'Update': '更新',
    'Wait for ships to be constructed, buy more workers in case is too slow.': '等待建造船只，如果速度太慢，请购买更多工人。',
    ' as fast as you can. It unlock replicators, a drone that will help making new drones, including itself.': '以你最快的速度。 它解锁复制机，这是一种无人机，可以帮助制造包括自身在内的新无人机。',
    ' metallurgists and workers.': '冶金学家和工人。',
    ' mining drones, technicians, mines and power plants.': '采矿无人机，技术人员，矿山和发电厂。',
    ' scientist and research Metallurgist.': '科学家和研究冶金学家。',
    'Auto surrender': '自动投降',
    'Components and Drone modding': '组件和无人机改装',
    'Components and modding': '组件和改装',
    'Disable small(2 sec) warp notifications': '禁用小（2秒）扭曲通知',
    'List ui for workers': '列出工人界面',
    'Metal production': '金属生产',
    'Show descriptions': '显示说明',
    'Space station completed notifications': '空间站完成通知',
    'Space Stations completed notifications': '空间站完成通知',
    'Str.': '力量',
    'Dark matter reward': '暗物质奖励',
    'Enemy level is too low. Gain experience from lv.': '敌人等级太低。 获得经验从等级 ',
    'every time you defeat enemies of max level (': '每次您击败最高等级的敌人时（',
    'Experience reward': '经验奖励',
    'Losing streak': '连败',
    'Increase tiles with components.': '使用组件增加瓦片。',
    'Tauddaesh Republic': '达伊沙共和国',
    'Caase League': '凯塞联盟',
    'Mullaur Alliance': '穆勒联盟',
    'Auto buy': '自动购买',
    'Storage': '存储',
    'General bonus - Yielded and consumed': '一般加成 - 生产和消耗',
    'Foundry allows you to build more metallurgists.': '锻造允许你建立更多的冶金学家。',
    'Efficiency bonus - Yielded only': '效率加成 - 仅产生',
    'Comp. priorities': '比较优先级',
    'Additive': '附加',
    'Batteries increases energy capacity.': '电池增加了能量容量。',
    'Manual buy quantity, this number increase the price.': '手动购买数量，此数量增加价格。',
    'Power Plant allow you to build more technicians.': '发电厂让你建立更多的技术人员。',
    'Priorities for assembling new drones with components.': '优先将新无人机与组件组装在一起。',
    'The first item is the normal priority,': '第一项是正常优先级，',
    'the second is used when resources are ending.': '第二个在资源即将用尽时使用。',
    's yield energy.': '生产能源。',
    'Snutruth Dominion': '斯努特鲁斯领地',
    's yield science.': '生产科学。',
    'Drone Depots increase components storage.': '无人机仓库可增加组件存储量。',
    'Drone Factories allow you to build more replicators.': '无人机工厂使您可以构建更多复制器。',
    'ers look for new enemies.': '寻找新敌人。',
    'Factories allow you to build more workers.': '工厂使您可以培养更多的工人。',
    'laboratories allow you to build more scientists.': '实验室使您可以培养更多的科学家。',
    'Multiplicative': '乘数',
    'Observatories allow you to build more searchers.': '天文台使您可以建立更多的搜索者。',
    's build ships and space stations with alloy.': '用合金建造船只和空间站。',
    's turn alloy into droid components.': '将合金变成机器人零件。',
    's turn metal into alloy.': '将金属变成合金。',
    's yield metal and consume energy.': '生产金属并消耗能源。',
    'Mines allow you to build more miners.': '矿井允许你建造更多的矿工。',
    'Limit reached, expansions needed.': '达到极限，需要扩展。',
    's': '',
    's origin': '的起源',
    's Yards': '花园',
    'Ablative Armour': '烧蚀护甲',
    'Clocking Device': '计时装置',
    'Itrudizar Hegemony': '伊鲁迪萨霸权',
    'Jammer': '干扰器',
    'Railgun': '轨道炮',
    'Solar Sail': '太阳帆',
    'Teleporter': '传送器',
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
    'When your technology are high enough, you will be able to improve your drones. When modding, all drones except for one will be destroyed. The maximum amount of mods depends on drone type and ca be increased with drone\'s technology (es. Mining for miners), robotics technology and researches. Hover "Total:" on mod page to see details.': '当您的技术足够高时，您将能够改进无人机。 改装时，除一架外的所有无人机都将被摧毁。 模块的最大数量取决于无人机的类型，并且可以通过无人机的技术（例如，采矿者的采矿），机器人技术和研究来增加。 将鼠标悬停在模块页面上的“总计：”以查看详细信息。',
    'Recycling increase component recovery from drones, recycling can be increased from mod or researches. Whenever you mod a drone you will get back an amount of components equal to "actual recycling" * "drone quantity". Those components are used immediately to rebuild this specific drones and are not affected by components storage.': '回收可提高无人机的零部件回收率，可通过改装或研究提高回收率。 每当您改装无人机时，您将获得等于“实际回收” *“无人机数量”的组件数量。 这些组件将立即用于重建此特定的无人机，并且不受组件存储的影响。',
    'Components are used to make drones, see "Automation" info. Components storage is used only when all drones are at maximum quantity, before that components are reserved. On drone\'s pages you can see how many components are reserved and how many are needed to make one drone.': '组件用于制造无人机，请参阅“自动化”信息。 仅当所有无人机都达到最大数量时才使用组件存储，然后再保留组件。 在无人机页面上，您可以看到保留了多少组件以及制造一架无人机需要多少组件。',
    'is depleted before Armour. It prevents ship explosion, that is based on armour, so is more valuable but require energy. Shield can be recharged.': '在盔甲前消耗殆尽。它以装甲为基础，可以防止飞船爆炸，所以更有价值，但需要能量。盾牌可以重新充电。',
    'is generated by scientists. Researches in the "In Progress" column are researched, those in the "Backlog" are not.': '是由科学家产生的。在“进行中”栏中的研究被研究，而在“待办”栏中的研究没有被研究。',
    'is the ship health. Ships have some base armour.': '是飞船的健康。舰船有一些基础装甲。',
    'Drones operativity can be adjusted with the slider. In case you run out resources (like energy) every drones that depend on it will stop working permanently. To fix drag the sliders to the right.': '无人机的操控性可以通过滑块进行调整。如果你耗尽了资源(比如能源)，依赖它的所有无人机都将永久停止工作。若要修复此问题，请将滑块向右拖动。',
    'are required to build buildings. Districts can be obtained from battle. It may take a while before you\'re ready to engage battle, so don\'t waste them (don\'t buy batteries!).': '被要求建造建筑物。地区可以从战斗中获得。在你准备战斗之前可能需要一段时间，所以不要浪费它们(不要买电池!)',
    ' Ended': '结束了',
    ' has ended, all consumers have been stopped. You can reactivate them with the slider.': '用完了，所有的消费者已经停止。你可以用滑块重新激活它们。',
    'Droids were originally build for assisting in researches and exploring the space. This path focus on science, physics and searching. It can adapt to any play style.': '机器人最初是用来协助研究和探索太空的。这条道路侧重于科学、物理和搜索。它可以适应任何比赛风格。',

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
    "Lv. 0 ": "等级. 0 ",
    " Lv. 0 ": " 等级. 0 ",
    "1 ": "1 ",
    "2 ": "2 ",
    "3 ": "3 ",
    "35 ": "35 ",
    "54 ": "54 ",
    "2.0 ": "2.0 ",
    "+ 25 ": "+ 25 ",
    "+ 35 ": "+ 35 ",
    "+ 54 ": "+ 54 ",
    "+1 ": "+1 ",
    "+2 ": "+2 ",
    "+20% ": "+20% ",
    "+25% ": "+25% ",
    "+30% ": "+30% ",
    "+100% ": "+100% ",
    "Global Automation ": "全局自动化 ",
    "Storage - ": "存储 - ",
    "Buy": "购买",
    "Interval in": "间隔单位是",
    "Technician": "技术员",
    "Total buy": "总计购买",
    "er": "者",
    "Alloy": "合金",
    "Cargo": "位置",
    "Worker": "工人",
    "Components": "组件",
    "Improved ": "改进的",
    "Optimized ": "优化 ",
    "Searching": "搜索",
    "Propulsion": "推进",
    "Physics": "物理学",
    "Mining": "采矿",
    "Energy": "能量",
    'Miner': '矿工',
    'Production': '生产',
    'Replicator': '复制器',
    'Science': '科学 ',
    'Scientist': '科学家',
    'Search': '搜索',
    'Searcher': '搜索者',
    "Ziuwux Meritocracy": "清除",
    "Scavenging": "清除",
    "Materials": "材料",
    "Scout": "侦查",
    "Nuke": "核武器",
    "Habitable Space": "宜居空间",
    "lurgist": "家",
    "Warp": "扭曲",
    "Computing": "计算",
    "Upgraded ": "升级 ",
    "Fleet 1 cell": "舰队 1 单元",
    "Robotics": "机器人学",
    "War origin": "战争的起源",
    "Tractor Beam": "牵引光束",
    "Metallurgist": "冶金家",
    "Build one ": "建造一个 ",
    "Research ": "研究 ",
    "Unlock ": "解锁 ",
    "Warp ": "扭曲 ",
    "Naval Logistics": "海军后勤",
    "Aagzo Regency": "加佐摄政 ",
    "Mars Meritocracy": "火星商人 ",
    'Mars Custodianship': '火星管理者',
    'Gouslacan Custodianship': '古拉斯加管理者',
    'Hikvoik Custodianship': '福克管理者',
    "Oyikreoca Corporation": "奥克瑞康公司",
    "Cesleans Kingdom": "塞斯林王国",
    "Thofkiena Republic": "托夫基纳共和国",
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
    " III": " III",
    " IV": " IV",
    " V": " V",
    " completed!": " 完成!",
    "production": "产量",
    "Yards": "花园",
    "Assembly Priority": "组装优先",
    "Drive": "驾驶",
    "produces": "生产",
    "seconds": "秒",
    "1% Scientist": "1% 科学家",
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
    [/^ (.+) for (.+) exp$/, ' $1 花费 $2 经验'],
    [/^Drones yields and consume (.+) more$/, '无人机生产和消耗增加 $1'],
    [/^Drones yields (.+) more$/, '无人机生产增加 $1'],
    [/^\+ (.+) naval capacity$/, '\+ $1 海军容量'],
    [/^\+ (.+) habitable space$/, '\+ $1 居住空间'],
    [/^(.+) Operative$/, '$1 有效'],
    [/^(.+)District(.+)$/, '地区'],
    [/^Metal(.+)$/, '金属'],
    [/^er(.+)$/, '者'],
    [/^(.+) days$/, '$1 天'],
    [/^(.+) hours$/, '$1 小时'],
    [/^(.+) minutes$/, '$1 分钟'],
    [/^(.+) seconds$/, '$1 秒'],
    [/^(.+) sec$/, '$1 秒'],
    [/^\+(.+) computing $/, '\+$1 计算 '],
    [/^\+ (.+) recycling$/, '\+$1 回收'],
    [/^Lv. (.+) Machine Nexus(.+) Energy District, (.+) Energy$/, '等级 $1 机器联结$2 能量区, $3 能量'],
    [/^Lv. (.+) Gliechoth Core(.+) Energy District, (.+) Energy$/, '等级 $1 格里乔斯核心$2 采矿区, $3 金属'],
    [/^: (.+)\n\+(.+) Mining District, (.+) Metal$/, ': $1\n\+$2 矿区, $3 金属'],
    [/^: (.+)\n\+(.+) Habitable Space, (.+) Science$/, ': $1\n\+$2 居住空间, $3 科学'],
    [/^: (.+)\n\+(.+) Energy District, (.+) Energy$/, ': $1\n\+$2 能量区, $3 能量'],
    [/^(.+) Miner$/, '$1 矿工'],
    [/^(.+) idle gain when idling for 6 or more hours$/, '$1 放置收益当放置6小时及以上时'],
    [/^(.+) ship speed$/, '$1 飞船速度'],
    [/^(.+) Technician$/, '$1 技术员'],
    [/^(.+) AM$/, '上午 $1'],
    [/^(.+) PM$/, '下午 $1'],
    [/^(\d+) Royal points$/, '$1 皇家点数'],
    [/^Cost: (\d+) RP$/, '成本：$1 皇家点数'],
    [/^Usages: (\d+)\/$/, '用途：$1\/'],
    [/^workers: (\d+)\/$/, '工人：$1\/'],

]);