import startGame from '../index.js';
import getRandomNumber from '../randomizerModule.js';

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  for (let i = 2; i <= Math.sqrt(number); i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return number > 1;
};

const generateData = () => {
  const randomNumber = getRandomNumber();
  const correctAnswer = isPrime(randomNumber) ? 'yes' : 'no';

  return [randomNumber, correctAnswer];
};

const startPrimeGame = () => {
  startGame(gameDescription, generateData);
};

export default startPrimeGame;
