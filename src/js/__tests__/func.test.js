/* eslint-disable no-unused-vars */
import Character from '../BaseCharacter';
import Magician from '../Magician';
import Daemon from '../Daemon';

test('Создается инстанс класса Character', () => {
  const baseChar = new Character('Dummy');
  const res = {
    name: 'Dummy',
    health: 100,
    level: 1,
    stoned: false,
  };
  expect(baseChar).toEqual(res);
});
test('Выбрасывается ошибка, если имя невалидно', () => {
  const error = 'Invalid name';
  expect(() => {
    const baseChar = new Character('Y');
  }).toThrow(error);
});
test('Создается инстанс класса Magician', () => {
  const merlin = new Magician('Merlin');
  const res = {
    name: 'Merlin',
    health: 100,
    level: 1,
    _stoned: false,
    type: 'Magician',
    _attack: 100,
    defence: 40,
  };
  expect(merlin).toEqual(res);
});
test('Возвращается геттер свойства stoned класса Magician', () => {
  const merlin = new Magician('Merlin');
  const res = {
    name: 'Merlin',
    health: 100,
    level: 1,
    _stoned: false,
    type: 'Magician',
    _attack: 100,
    defence: 40,
  };
  const boolean = true;
  merlin.stoned = boolean;
  expect(merlin.stoned).toEqual(boolean);
});
test('Создается инстанс класса Daemon', () => {
  const diablo = new Daemon('Diablo');
  const res = {
    name: 'Diablo',
    health: 100,
    level: 1,
    _stoned: false,
    type: 'Daemon',
    _attack: 110,
    defence: 30,
  };
  expect(diablo).toEqual(res);
});
test('Возвращается геттер свойства stoned класса Daemon', () => {
  const diablo = new Daemon('Diablo');
  const res = {
    name: 'Diablo',
    health: 100,
    level: 1,
    _stoned: false,
    type: 'Daemon',
    _attack: 110,
    defence: 50,
  };
  const boolean = true;
  diablo.stoned = boolean;
  expect(diablo.stoned).toEqual(boolean);
});
test('Выбрасывается ошибка при нечисловом значении атаки', () => {
  const error = 'Значение атаки должно быть числом';
  expect(() => {
    const value = '100';
    const diablo = new Daemon('Diablo');
    diablo.attack = { positioin: 5, attack: value };
  }).toThrow(error);
});

test.each([
  {
    stoned: true,
    type: 'Daemon',
    position: 3,
    attack: 110,
    expected: 80,
  },
  {
    stoned: false,
    type: 'Daemon',
    position: 2,
    attack: 110,
    expected: 99,
  },
  {
    stoned: true,
    type: 'Daemon',
    position: 5,
    attack: 110,
    expected: 54,
  },
  {
    stoned: false,
    type: 'Daemon',
    position: 1,
    attack: 110,
    expected: 110,
  },
  {
    stoned: true,
    type: 'Daemon',
    position: 10,
    attack: 110,
    expected: 0,
  },
  {
    stoned: false,
    type: 'Daemon',
    position: 15,
    attack: 110,
    expected: 0,
  },
])('Атака класса: $type, изначальная атака: $attack, позиция: $position и дурманом: $stoned', ({
  stoned, position, attack, expected,
}) => {
  const diablo = new Daemon('Diablo');
  diablo.stoned = stoned;
  // eslint-disable-next-line object-shorthand
  diablo.attack = { position: position, attack: attack };
  expect(diablo.attack).toBe(expected);
});

test.each([
  {
    stoned: true,
    type: 'Magician',
    position: 3,
    attack: 100,
    expected: 72,
  },
  {
    stoned: false,
    type: 'Magician',
    position: 2,
    attack: 100,
    expected: 90,
  },
  {
    stoned: true,
    type: 'Magician',
    position: 5,
    attack: 100,
    expected: 48,
  },
  {
    stoned: false,
    type: 'Magician',
    position: 1,
    attack: 100,
    expected: 100,
  },
  {
    stoned: true,
    type: 'Magician',
    position: 10,
    attack: 100,
    expected: 0,
  },
  {
    stoned: false,
    type: 'Magician',
    position: 15,
    attack: 100,
    expected: 0,
  },
])('Атака класса: $type, изначальная атака: $attack, позиция: $position и дурманом: $stoned', ({
  stoned, position, attack, expected,
}) => {
  const merlin = new Magician('Merlin');
  merlin.stoned = stoned;
  // eslint-disable-next-line object-shorthand
  merlin.attack = { position: position, attack: attack };
  expect(merlin.attack).toBe(expected);
});
