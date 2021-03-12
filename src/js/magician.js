import Character from './app';

export default class Magician extends Character {
  constructor(name, type, health, level) {
    super(name, type, health, level);
    this.attack = 10;
    this.defence = 40;
    if (this.type !== 'Magician') {
      throw new Error('Введите корректное значение');
    }
  }
}
