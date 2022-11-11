import startGame from '../index.js';
import getRandomNumber from '../randomizerModule.js';

const gameDescription = 'What number is missing in the progression?';

const getProgression = (start, step, length) => {
  const progression = [];

  for (let i = start; progression.length < length; i += step) {
    progression.push(i);
  }
  return progression;
};

const startRound = () => {
  const progStart = getRandomNumber();
  const progStep = getRandomNumber(2, 10);
  const progLength = 10;
  const progression = getProgression(progStart, progStep, progLength);
  const hiddenNumber = getRandomNumber(0, progression.length - 2);
  const correctAnswer = progression[hiddenNumber].toString();
  progression[hiddenNumber] = '..';
  const questionOfRound = progression.join(' ');

  return [questionOfRound, correctAnswer];
};

const progressionGame = () => {
  startGame(gameDescription, startRound);
};

export default progressionGame;
