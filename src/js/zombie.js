import Character from './app';

export default class Zombie extends Character {
  constructor(name, type, health, level) {
    super(name, type, health, level);
    this.attack = 40;
    this.defence = 10;
    if (this.type !== 'Zombie') {
      throw new Error('Введите корректное значение');
    }
  }
}
