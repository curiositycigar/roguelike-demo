interface InterfaceWuXing {
  jin: number,
  mu: number,
  shui: number,
  huo: number,
  tu: number,
}

interface InterfaceYinYang {
  yin: number,
  yang: number,
}

interface InterfacePosition {
  x: number,
  y: number,
}

type TypePosition = null | InterfacePosition
// 技能可接受传参->精力，影响技能效果()

// 属性分： 初始属性，增长属性、后天外力属性、装备属性

class Creature {
  public static attack: any
  public uuid: string = '' // 唯一id，标识生物唯一性
  public level: number = 0 // 等级，升级会加基础属性
  public experience: number = 0 // 与等级相关
  public skills: any[] = [] // 技能
  // base attribute
  public points: number = 0 // 点数
  public strength: number // 力量 // 物理攻击力
  public agile: number // 敏捷 // 闪避
  public vigor: number // 精力 // 能量总值
  // high level attribute // 高级属性，影响装备高级属性附加值，外在环境也会影响属性的表现
  public wuxing: InterfaceWuXing // 对基础属性有影响
  public yinyang: InterfaceYinYang
  // appearance 外表影响基础属性的表现，影响装备的基础属性附加值
  public eyes: number // 敏捷up 精力down
  public ears: number // 敏捷up
  public arms: number // 敏捷up 力量up
  public legs: number // 敏捷up 力量up
  // 天生物种体型，后天成长可浮动一两点，默认100，体型影响食量
  public size: number // 敏捷down 力量up
  // 位置
  public lastPos: TypePosition
  public pos: TypePosition
  // live attribute
  public hunger: number = 0 // 饥饿值
  public alive: boolean = true
  constructor() {
    this.lastPos = null
    this.pos = {
      x: 0,
      y: 0,
    }
    // base
    this.strength = 10
    this.agile = 10
    this.vigor = 10
    // high level
    this.wuxing = {
      jin: Math.random() * 100,
      mu: Math.random() * 100,
      shui: Math.random() * 100,
      huo: Math.random() * 100,
      tu: Math.random() * 100,
    }
    const yin = Math.random() * 100
    this.yinyang = {
      yin,
      yang: 100 - yin,
    }
    this.eyes = Math.ceil(Math.random() * 5)
    this.ears = Math.ceil(Math.random() * 5)
    this.arms = Math.ceil(Math.random() * 5)
    this.legs = Math.ceil(Math.random() * 5)
    this.size = Math.ceil(Math.random() * 1000)
  }
}

Creature.attack = (skill: any) => {
  console.log(skill)
}