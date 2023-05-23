export default class Character {
  constructor(name) {
    if (typeof name !== 'string' || (name.length < 2 || name.length > 10)) {
      throw new Error('Invalid name');
    }
    this.name = name;
    this.health = 100;
    this.level = 1;
    this.stoned = false;
  }
}
