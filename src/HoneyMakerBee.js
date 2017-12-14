class HoneyMakerBee extends Bee {
  constructor() {
    super();
    this.age = this.age * 2;
    this.job = 'make honey';
    this.honeyPot = 0;
  }
  
  makeHoney() {
    this.honeyPot++;
  }
  
  giveHoney() {
    this.honeyPot--;
  }
};
