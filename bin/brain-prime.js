import readlineSync from 'readline-sync'

const arrPrime = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97]

console.log('Welcome to the Brain Games!')
const name = readlineSync.question('May I have your name? ')
console.log(`Hello, ${name}!`)
console.log('Answer "yes" if given number is prime. Otherwise answer "no".')
const getRandomInt = (max) => {
  return Math.floor(Math.random() * Math.floor(max))
}
const answer = () => {
  const num = getRandomInt(100)
  const a = readlineSync.question(`Question: ${num} `)
  let correctAnswer = ''
  if (arrPrime.includes(num)) {
    correctAnswer = 'yes'
  } else {
    correctAnswer = 'no'
  }
  if (a === correctAnswer) {
    return `Your answer: ${a}
    Correct!`
  } else {
    return `${a} is wrong answer ;(. Correct answer was ${correctAnswer}.`
  }
}
const count = 0
const winOrNo = (answer, count) => {
  const str = answer()
  count += 1
  if (str.substring(str.length - 8) !== 'Correct!') {
    return `${str} 
Let's try again, ${name}!`
  } else {
    if (count === 3) {
      return `Congratulations, ${name}!`
    } else {
      console.log(str)
      return winOrNo(answer, count)
    }
  }
}
console.log(winOrNo(answer, count))
