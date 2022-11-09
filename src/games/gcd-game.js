import startGame from '../index.js';
import getRandomNumber from '../randomizerModule.js';

const gameDescription = 'Find the greatest common divisor of given numbers.';

const gcdFn = (num1, num2) => {
  if (num2 === 0) {
    return num1;
  }
  return gcdFn(num2, num1 % num2);
};

const startRound = () => {
  const firstNumber = getRandomNumber();
  const secondNumber = getRandomNumber();

  const questionOfRound = `${firstNumber} ${secondNumber}`;
  const correctAnswer = gcdFn(firstNumber, secondNumber).toString();

  return [questionOfRound, correctAnswer];
};

const gcdGame = () => {
  startGame(gameDescription, startRound);
};

export default gcdGame;
