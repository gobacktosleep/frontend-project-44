import readlineSync from 'readline-sync';

const startGame = (gameDescription, startRound) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(gameDescription);

  const amountOfRounds = 3;

  for (let i = 0; i < amountOfRounds; i += 1) {
    const [questionOfRound, correctAnswer] = startRound();
    console.log(`Question: ${questionOfRound}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default startGame;
