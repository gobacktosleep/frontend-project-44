import startGame from '../index.js';
import getRandomNumber from '../randomizerModule.js';

const gameDescription = 'Find the greatest common divisor of given numbers.';

const getGcd = (num1, num2) => {
  if (num2 === 0) {
    return num1;
  }
  return getGcd(num2, num1 % num2);
};

const generateData = () => {
  const firstNumber = getRandomNumber();
  const secondNumber = getRandomNumber();

  const questionOfRound = `${firstNumber} ${secondNumber}`;
  const correctAnswer = getGcd(firstNumber, secondNumber).toString();

  return [questionOfRound, correctAnswer];
};

const startGcdGame = () => {
  startGame(gameDescription, generateData);
};

export default startGcdGame;
