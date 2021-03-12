export default class Character {
  constructor(name, type, health, level, attack, defence) {
    this.name = name;
    this.type = type;
    this.health = health;
    this.level = level;
    this.attack = attack;
    this.defence = defence;
    if (typeof this.name !== 'string' || this.name.length < 2 || this.name.length > 10) {
      throw new Error('Введите корректное значение');
    }
  }
}
