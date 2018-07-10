export interface InterfaceWuXing {
  jin: number,
  mu: number,
  shui: number,
  huo: number,
  tu: number,
}

export interface InterfaceYinYang {
  yin: number,
  yang: number,
}
// 技能可接受传参，精力，影响技能效果

// 属性分： 初始属性，增长属性、后天外力属性、装备属性

export class Thing {
  // high level attribute // 高级属性，影响装备高级属性附加值，外在环境也会影响属性的表现
  public wuxing: InterfaceWuXing // 对基础属性有影响
  public yinyang: InterfaceYinYang
  // 空间和时间 （时间更加稀有）
  public space: number = 0
  public time: number = 0
  // 天生物种体型: 死物体型代表每单位体积重量
  public size: number // 敏捷down 力量up
  constructor() {
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
    this.size = Math.ceil(Math.random() * 1000)
  }
  public attack(skill: any) {
    console.log(skill)
  }
}