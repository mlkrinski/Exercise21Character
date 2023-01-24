module.exports = class Character {
  constructor(name, lifePoints, attackPts, defensePts) {
    this.name = name;
    this.lifePoints = lifePoints;
    this.attackPts = attackPts;
    this.defensePts = defensePts;
  }
  attack(targetCharacter) {
    targetCharacter.lifePoints -= this.attackPts - targetCharacter.defensePts;
  }
};
