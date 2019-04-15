class RetiredForagerBee extends ForagerBee {
  // TODO..
  constructor () {
  	super();
  	this.age = 40;
  	this.job = 'gamble';
  	this.canFly = false;
  	this.color = 'grey';

  }
  forage () {
  	return 'I am too old, let me play cards instead';
  }
  gamble () {
  	var treasure = 1;
  	this.treasureChest.push(treasure);
  	return this.treasureChest;
  }
};
