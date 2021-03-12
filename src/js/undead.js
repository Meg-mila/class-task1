import Character from './app';

export default class Undead extends Character {
  constructor(name, type, health, level) {
    super(name, type, health, level);
    this.attack = 25;
    this.defence = 25;
    if (this.type !== 'Undead') {
      throw new Error('Введите корректное значение');
    }
  }
}
