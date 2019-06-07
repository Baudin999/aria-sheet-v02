export class Dice {
  constructor(
    public numberOfDice: number,
    public sides: number,
    public constant: number,
    public text?: string
  ) {}

  roll() {
    let total = 0;
    for (var i = 0; i < this.numberOfDice; ++i) {
      total += Math.floor(Math.random() * this.sides + 1);
    }
    return total + this.constant;
  }

  static parse(expression: string): Dice | null {
    let r = /(\d+)\s*d\s*(\d+)\s*([+-])\s*(\d+)/;
    let result = r.exec(expression);
    if (result) {
      return new Dice(+result[1], +result[2], +(result[3] + result[4]), expression);
    }
    return null;
  }
}
