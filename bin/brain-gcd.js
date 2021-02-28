import readlineSync from 'readline-sync'

console.log('Welcome to the Brain Games!')
const name = readlineSync.question('May I have your name?  ')
console.log(`Hello, ${name}!`)
console.log('Find the greatest common divisor of given numbers.')
const getRandomInt = (max) => {
  return Math.floor(Math.random() * Math.floor(max))
}
Math.gcd = function () {
  if (arguments.length === 2) {
    if (arguments[1] === 0)
      return arguments[0]
    else {
      return Math.gcd(arguments[1], arguments[0] % arguments[1])
    }
  } else if (arguments.length > 2) {
    let result = Math.gcd(arguments[0], arguments[1])
    for (var i = 2; i < arguments.length; i++) {
      result = Math.gcd(result, arguments[i])
    }
    return result
  }
}
const answer = () => {
  const num1 = getRandomInt(100)
  console.log(num1)
  const num2 = getRandomInt(100)
  console.log(num2)
  const correctAnswer = Math.gcd(num1, num2)
  console.log(correctAnswer)
  const a = readlineSync.question(`Question: ${num1}  ${num2} `)
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
