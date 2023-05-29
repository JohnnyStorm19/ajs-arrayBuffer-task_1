/* eslint-disable no-underscore-dangle */
import Magician from './Magician';
// eslint-disable-next-line no-unused-vars
import Character from './BaseCharacter';

export default class Daemon extends Magician {
  constructor(name) {
    super(name);
    this.type = 'Daemon';
    this._attack = 110;
    this.defence = 30;
  }
}
