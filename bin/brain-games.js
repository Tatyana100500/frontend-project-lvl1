#!/usr/bin/env node

import sayHello from '../src/cli.js'

console.log('Welcome to the Brain Games!')
const name = sayHello()
console.log(name)
