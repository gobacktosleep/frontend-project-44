import startGame from '../index.js';
import getRandomNumber from '../randomizerModule.js';

const gameDescription = 'What is the result of the expression?';

const operators = ['+', '-', '*'];
const firstOperandMin = 0;
const firstOperandMax = 20;
const secondOperandMin = 0;
const secondOperandMax = 10;

const calculate = (firstOperand, operator, secondOperand) => {
  switch (operator) {
    case '+':
      return firstOperand + secondOperand;
    case '-':
      return firstOperand - secondOperand;
    case '*':
      return firstOperand * secondOperand;
    default:
      throw new Error('Error');
  }
};

const generateData = () => {
  const firstNumber = getRandomNumber(firstOperandMin, firstOperandMax);
  const secondNumber = getRandomNumber(secondOperandMin, secondOperandMax);

  const randomOperator = operators[getRandomNumber(0, operators.length - 1)];

  const questionOfRound = `${firstNumber} ${randomOperator} ${secondNumber}`;
  const correctAnswer = calculate(firstNumber, randomOperator, secondNumber).toString();

  return [questionOfRound, correctAnswer];
};

const startCalcGame = () => {
  startGame(gameDescription, generateData);
};

export default startCalcGame;
