export class Character {
  constructor(name, type, health, level, attack, defence) {
    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
    this.attack = attack;
    this.defence = defence;
    if (typeof this.name !== 'string' || this.name.length < 2 || this.name.length > 10) {
      throw new Error('Введите корректное значение');
    }
  }
}
export class Bowman extends Character {
  constructor(name, type, health, level) {
    super(name, type, health, level);
    this.attack = 25;
    this.defence = 25;
    if (this.type !== 'Bowman') {
      throw new Error('Введите корректное значение');
    }
  }
}
export class Swordsman extends Character {
  constructor(name, type, health, level) {
    super(name, type, health, level);
    this.attack = 40;
    this.defence = 10;
    if (this.type !== 'Swordsman') {
      throw new Error('Введите корректное значение');
    }
  }
}
export class Magician extends Character {
  constructor(name, type, health, level) {
    super(name, type, health, level);
    this.attack = 10;
    this.defence = 40;
    if (this.type !== 'Magician') {
      throw new Error('Введите корректное значение');
    }
  }
}
export class Undead extends Character {
  constructor(name, type, health, level) {
    super(name, type, health, level);
    this.attack = 25;
    this.defence = 25;
    if (this.type !== 'Undead') {
      throw new Error('Введите корректное значение');
    }
  }
}
export class Zombie extends Character {
  constructor(name, type, health, level) {
    super(name, type, health, level);
    this.attack = 40;
    this.defence = 10;
    if (this.type !== 'Zombie') {
      throw new Error('Введите корректное значение');
    }
  }
}
export class Daemon extends Character {
  constructor(name, type, health, level) {
    super(name, type, health, level);
    this.attack = 10;
    this.defence = 40;
    if (this.type !== 'Daemon') {
      throw new Error('Введите корректное значение');
    }
  }
}
