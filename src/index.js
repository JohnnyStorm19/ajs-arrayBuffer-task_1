/* eslint-disable no-console */
import Magician from './js/Magician';
import Daemon from './js/Daemon';

const merlin = new Magician('Merlin');
const diablo = new Daemon('Diablo');
merlin.stoned = true;
merlin.attack = { position: 2 };
diablo.stoned = true;
diablo.attack = { position: 3 };

console.log(merlin);
console.log(diablo);
