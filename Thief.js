const Character = require("./Character.js");

module.exports = class Thief extends Character {
  /*  constructor(name, lifePoints, attackPts, defensePoints) {
    super(name, lifePoints, attackPts, defensePoints);
  } */
  attack(targetCharacter) {
    targetCharacter.lifePoints -=
      (this.attackPts - targetCharacter.defensePts) * 2;
  }
};
