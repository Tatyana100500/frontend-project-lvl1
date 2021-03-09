#!/usr/bin/env node
import readlineSync from 'readline-sync'

console.log('Welcome to the Brain Games!')
const name = readlineSync.question('May I have your name? ')
console.log(`Hello, ${name}!`)
console.log('What number is missing in the progression?')
const getRandomInt = (max) => {
  return Math.floor(Math.random() * Math.floor(max))
}
const answer = () => {
  let num1 = getRandomInt(10)
  const num2 = getRandomInt(50)
  let num3 = getRandomInt(10)
  if (num3 === 0) {
    num3 = 1
  }
  if (num1 === 0) {
    num1 = 1
  }
  console.log(num3)
  const arr = []
  let x = num2
  for (let i = 0; i < 10; i += 1) {
    x += num1
    arr.push(x)
  }
  const correctAnswer = arr[num3 - 1]
  arr[num3 - 1] = ' . . '
  const str = arr.join(' ')
  console.log(correctAnswer)
  const a = readlineSync.question(`Question: ${str} `)
  if (a === correctAnswer.toString()) {
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
export default winOrNo
