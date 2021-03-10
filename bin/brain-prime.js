#!/usr/bin/env node
import readlineSync from 'readline-sync';

const arrPrime = [2, 3, 5, 7, 11, 13, 17,
  19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];

console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!`);
console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max));
const answer = () => {
  const num = getRandomInt(100);
  const a = readlineSync.question(`Question: ${num} `);
  let correctAnswer = '';
  if (arrPrime.includes(num)) {
    correctAnswer = 'yes';
  } else {
    correctAnswer = 'no';
  }
  if (a === correctAnswer) {
    return `Your answer: ${a}
    Correct!`;
  }
  return `${a} is wrong answer ;(. Correct answer was ${correctAnswer}.`;
};
const winOrNo = (answerFunc) => {
  const str = answerFunc();
  counter += 1;
  if (str.substring(str.length - 8) !== 'Correct!') {
    return `${str} 
Let's try again, ${name}!`;
  }
  if (counter === 3) {
    return `Congratulations, ${name}!`;
  }
  console.log(str);
  return winOrNo(answerFunc);
};
console.log(winOrNo(answer));
