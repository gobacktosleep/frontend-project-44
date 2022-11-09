import startGame from '../index.js';
import getRandomNumber from '../randomizerModule.js';

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const startRound = () => {
  const randomNumber = getRandomNumber();
  const correctAnswer = isEven(randomNumber) ? 'yes' : 'no';

  return [randomNumber, correctAnswer];
};

const evenGame = () => {
  startGame(gameDescription, startRound);
};

export default evenGame;
