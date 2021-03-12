import Character from './app';

export default class Swordsman extends Character {
  constructor(name, type, health, level) {
    super(name, type, health, level);
    this.attack = 40;
    this.defence = 10;
    if (this.type !== 'Swordsman') {
      throw new Error('Введите корректное значение');
    }
  }
}
