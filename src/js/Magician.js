/* eslint-disable no-underscore-dangle */
import Character from './BaseCharacter';

export default class Magician extends Character {
  constructor(name) {
    super(name);
    this.type = 'Magician';
    this._attack = 100;
    this.defence = 40;
  }

  set stoned(state) {
    this._stoned = state;
  }

  get stoned() {
    return this._stoned;
  }

  set attack(obj) {
    if (!obj.attack || !obj.position) {
      throw new Error('В объект не задана атака и/или позиция героя');
    }
    if (typeof obj.attack !== 'number') {
      throw new Error('Значение атаки должно быть числом');
    }
    this.position = obj.position;
    this._attack = obj.attack;
  }

  get attack() {
    if (!this._stoned) {
      this._attack = Math.round(this._attack - (this._attack / 10) * (this.position - 1));
      if (this._attack < 0) {
        this._attack = 0;
      }
      return this._attack;
    }
    this._attack = Math.round(this._attack - (this._attack / 10) * (this.position - 1));
    this._attack -= Math.round(Math.log2(this.position) * 5);
    if (this._attack < 0) {
      this._attack = 0;
    }
    return this._attack;
  }
}
