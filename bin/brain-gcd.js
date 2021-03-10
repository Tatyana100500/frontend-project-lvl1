#!/usr/bin/env node
import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name?  ');
console.log(`Hello, ${name}!`);
console.log('Find the greatest common divisor of given numbers.');
const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max));
const gcd = (...arguments) => {
  if (arguments.length === 2) {
    if (arguments[1] === 0) {
      return arguments[0];
    } else {
      return gcd(arguments[1], arguments[0] % arguments[1]);
    }
  } else if (arguments.length > 2) {
    let result = gcd(arguments[0], arguments[1]);
    for (let i = 2; i < arguments.length; i++) {
      result = gcd(result, arguments[i]);
    }
    return result;
  }
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
const winOrNo = (answerFunc, counter) => {
  const str = answerFunc();
  counter += 1;
  if (str !== 'Correct!') {
    return `${str} 
Let's try again, ${name}!`;
  }
  if (counter === 3) {
    return `Congratulations, ${name}!`;
  }
  return winOrNo(answerFunc, counter);
};
console.log(winOrNo(answer, 0));
