import startGame from '../index.js';
import getRandomNumber from '../randomizerModule.js';

const gameDescription = 'What is the result of the expression?';

const operators = ['+', '-', '*'];

const calculate = (firstOperand, operator, secondOperand) => {
  switch (operator) {
    case '+':
      return firstOperand + secondOperand;
    case '-':
      return firstOperand - secondOperand;
    case '*':
      return firstOperand * secondOperand;
    default:
      return 'Error';
  }
};

const startRound = () => {
  const firstNumber = getRandomNumber(0, 20);
  const secondNumber = getRandomNumber(0, 10);

  const randomOperator = operators[getRandomNumber(0, operators.length - 1)];

  const questionOfRound = `${firstNumber} ${randomOperator} ${secondNumber}`;
  const correctAnswer = calculate(firstNumber, randomOperator, secondNumber).toString();

  return [questionOfRound, correctAnswer];
};

const calcGame = () => {
  startGame(gameDescription, startRound);
};

export default calcGame;
