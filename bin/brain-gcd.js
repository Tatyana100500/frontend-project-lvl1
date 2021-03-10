#!/usr/bin/env node
import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name?  ');
console.log(`Hello, ${name}!`);
console.log('Find the greatest common divisor of given numbers.');
const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max));
const gcd = (a, b) => {
  if (b) {
    return gcd(b, a % b);
  }
  return Math.abs(a);
};
const answer = () => {
  const num1 = getRandomInt(100);
  const num2 = getRandomInt(100);
  const correctAnswer = gcd(num1, num2);
  const a = readlineSync.question(`Question: ${num1} ${num2} `);
  if (a === correctAnswer.toString()) {
    return 'Correct!';
  }
  return `${a} is wrong answer ;(. Correct answer was ${correctAnswer}.`;
};
let counter = 0;
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
