import Character from './app';

export default class Bowman extends Character {
  constructor(name, type, health, level) {
    super(name, type, health, level);
    this.attack = 25;
    this.defence = 25;
    if (this.type !== 'Bowman') {
      throw new Error('Введите корректное значение');
    }
  }
}
