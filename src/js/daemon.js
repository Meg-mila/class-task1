import Character from './app';

export default class Daemon extends Character {
  constructor(name, type, health, level) {
    super(name, type, health, level);
    this.attack = 10;
    this.defence = 40;
    if (this.type !== 'Daemon') {
      throw new Error('Введите корректное значение');
    }
  }
}
