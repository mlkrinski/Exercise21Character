const Character = require("./Character.js");

module.exports = class Mage extends Character {
  constructor(name, lifePoints, attackPts, defensePts, magicPts) {
    super(name, lifePoints, attackPts, defensePts);
    this.magicPts = magicPts;
  }
  attack(targetCharacter) {
    targetCharacter.lifePoints -=
      this.attackPts + this.magicPts - targetCharacter.defensePts;
  }
  heal(targetCharacter) {
    targetCharacter.lifePoints += this.magicPts * 2;
  }
};
