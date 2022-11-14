import startGame from '../index.js';
import getRandomNumber from '../randomizerModule.js';

const gameDescription = 'What number is missing in the progression?';
const progLength = 10;
const progStepMin = 2;
const progStepMax = 10;

const getProgression = (start, step, length) => {
  const progression = [];

  for (let i = start; progression.length < length; i += step) {
    progression.push(i);
  }
  return progression;
};

const generateData = () => {
  const progStart = getRandomNumber();
  const progStep = getRandomNumber(progStepMin, progStepMax);
  const progression = getProgression(progStart, progStep, progLength);
  const hiddenNumber = getRandomNumber(0, progression.length - 2);
  const correctAnswer = progression[hiddenNumber].toString();
  progression[hiddenNumber] = '..';
  const questionOfRound = progression.join(' ');

  return [questionOfRound, correctAnswer];
};

const startProgressionGame = () => {
  startGame(gameDescription, generateData);
};

export default startProgressionGame;
