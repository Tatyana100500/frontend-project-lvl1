#!/usr/bin/env node
import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name?');
console.log(`Hello, ${name}!`);
console.log('What is the result of the expression?');
const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max));
const answer = () => {
  const num1 = getRandomInt(30);
  const num2 = getRandomInt(30);
  const num3 = getRandomInt(3);
  let sign = '';
  let correctAnswer = 0;
  if (num3 === 1) {
    sign = '+';
    correctAnswer = num1 + num2;
  } else if (num3 === 2) {
    sign = '-';
    correctAnswer = num1 - num2;
  } else {
    sign = '*';
    correctAnswer = num1 * num2;
  }
  console.log(correctAnswer);
  const a = readlineSync.question(`Question: ${num1} ${sign} ${num2} `);
  if (a === correctAnswer.toString()) {
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
