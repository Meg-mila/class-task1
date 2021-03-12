import Character from '../app';
import Daemon from '../daemon';
import Bowman from '../bowman';
import Swordsman from '../swordsman';
import Undead from '../undead';
import Zombie from '../zombie';
import Magician from '../magician';

test('check length name <2', () => {
  expect(() => {
    // eslint-disable-next-line no-new
    new Character('И', 'Bowman', 10, 3);
  }).toThrow();
});

test('check length name >10', () => {
  expect(() => {
    // eslint-disable-next-line no-new
    new Character('Аполлинарий', 'Bowman', 55, 2);
  }).toThrow();
});

test('check string', () => {
  expect(() => {
    // eslint-disable-next-line no-new
    new Character(5, 'Swordsman', 10, 4);
  }).toThrow();
});

test('check type', () => {
  expect(() => {
    // eslint-disable-next-line no-new
    new Bowman('Alex', 'Man', 80, 4);
  }).toThrow();
});

test('check type', () => {
  expect(() => {
    // eslint-disable-next-line no-new
    new Swordsman('Alex', 'Man', 80, 4);
  }).toThrow();
});

test('check type', () => {
  expect(() => {
    // eslint-disable-next-line no-new
    new Magician('Alex', 'Man', 80, 4);
  }).toThrow();
});

test('check type', () => {
  expect(() => {
    // eslint-disable-next-line no-new
    new Undead('Alex', 'Man', 80, 4);
  }).toThrow();
});

test('check type', () => {
  expect(() => {
    // eslint-disable-next-line no-new
    new Zombie('Alex', 'Man', 80, 4);
  }).toThrow();
});

test('check type', () => {
  expect(() => {
    // eslint-disable-next-line no-new
    new Daemon('Goofy', 'nn', 80, 4);
  }).toThrow();
});

test('check attack and defence', () => {
  const received = new Bowman('Leonardo', 'Bowman', 30, 2);
  expect(received.attack).toEqual(25);
  expect(received.defence).toEqual(25);
});

test('check attack and defence', () => {
  const received = new Swordsman('Leonardo', 'Swordsman', 30, 2);
  expect(received.attack).toEqual(40);
  expect(received.defence).toEqual(10);
});

test('check attack and defence', () => {
  const received = new Magician('Leonardo', 'Magician', 30, 2);
  expect(received.attack).toEqual(10);
  expect(received.defence).toEqual(40);
});

test('check attack and defence', () => {
  const received = new Zombie('Leonardo', 'Zombie', 30, 2);
  expect(received.attack).toEqual(40);
  expect(received.defence).toEqual(10);
});

test('check attack and defence', () => {
  const received = new Undead('Snoopy', 'Undead', 45, 2);
  expect(received.attack).toEqual(25);
  expect(received.defence).toEqual(25);
});

test('check attack and defence', () => {
  const received = new Daemon('Leonardo', 'Daemon', 30, 2);
  expect(received.attack).toEqual(10);
  expect(received.defence).toEqual(40);
});
