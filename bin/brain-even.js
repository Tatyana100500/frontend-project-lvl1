#!/usr/bin/env node
import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name?');
console.log(`Hello, ${name}!`);
console.log('Answer "yes" if the number is even, otherwise answer "no".');
const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max));
const answer = () => {
  const num = getRandomInt(100);
  let correctAnswer = '';
  if (num % 2 === 0) {
    correctAnswer = 'yes';
  } else {
    correctAnswer = 'no';
  }
  const a = readlineSync.question(`Question: ${num}`);
  if (a === correctAnswer) {
    return 'Correct!';
  }
  return `${a} is wrong answer ;(. Correct answer was ${correctAnswer}.`;
};
const winOrNo = (answerFunc) => {
  const str = answerFunc();
  counter += 1;
  if (str !== 'Correct!') {
    return `${str} 
Let's try again, ${name}!`;
  }
  if (counter === 3) {
    return `Congratulations, ${name}!`;
  }
  return winOrNo(answerFunc);
};
console.log(winOrNo(answer));
