#!/usr/bin/env node
import readlineSync from 'readline-sync'

console.log('Welcome to the Brain Games!')
const name = readlineSync.question('May I have your name?')
console.log(`Hello, ${name}!`)
console.log('Answer "yes" if the number is even, otherwise answer "no".')
const getRandomInt = (max) => {
  return Math.floor(Math.random() * Math.floor(max))
}
const answer = () => {
  const num = getRandomInt(100)
  let correctAnswer = ''
  if (num % 2 === 0) {
    correctAnswer = 'yes'
  } else {
    correctAnswer = 'no'
  }
  const a = readlineSync.question(`Question: ${num}`)
  if (a === correctAnswer) {
    return 'Correct!'
  } else {
    return `${a} is wrong answer ;(. Correct answer was ${correctAnswer}.`
  }
}
const count = 0
const winOrNo = (answer, count) => {
  const str = answer()
  count += 1
  if (str !== 'Correct!') {
    return `${str} 
Let's try again, ${name}!`
  } else {
    if (count === 3) {
      return `Congratulations, ${name}!`
    } else {
      return winOrNo(answer, count)
    }
  }
}
console.log(winOrNo(answer, count))
//export default winOrNo
