// Quadratic equation is calculated as follows: ax2 + bx + c = 0. Write a function which calculates value or values of a quadratic equation, solveQuadEquation.

function quadraticEquation(a, b, c) {
  const D = b * b - 4 * a * c
  const x1 = ((-b + Math.sqrt(D)) / 2) * a
  const x2 = ((-b - Math.sqrt(D)) / 2) * a
  return { x1, x2 }
}

// Declare a function name printArray. It takes array as a parameter and it prints out each value of the array.
const printArray = (arr) => {
  arr.forEach((element) => console.log(element))
}

const showDateTime = () => {
  console.log(new Date().toLocaleString())
}

const swapValues = (a, b) => {
  return console.log(b, a)
}

const reverseArray = (array) => {
  let newArray = []
  for (let i = array.length - 1; i >= 0; i--) {
    newArray.push(array[i])
  }
  return newArray
}

//Declare a function name capitalizeArray. It takes array as a parameter and it returns the - capitalizedarray.

const capitalizeArray = (array) => {
  const capitalizedArray = array.map((arr) => arr.toUpperCase())
  return capitalizedArray
}
// Declare a function name addItem. It takes an item parameter and it returns an array after adding the item

const addItem = (item) => {
  const items = []
  items.push(item)
  return items
}

// Declare a function name evensAndOdds . It takes a positive integer as parameter and it counts number of evens and odds in the number.

const evensAndOdds = (number) => {
  let even = 0
  let odd = 0
  for (let i = 1; i <= number; i++) {
    i % 2 === 1 ? odd++ : even++
  }
  return console.log(`even: ${even}, odd: ${odd}`)
}

// Write a function which takes any number of arguments and return the sum of the arguments

const addAnyNumber = (...args) => {
  let sum = 0
  args.forEach((arg) => (sum += arg))
  return console.log(sum)
}

// Declare a function name userIdGenerator. When this function is called it generates seven character id. The function return the id.
const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"

const generateId = (length) => {
  let result = ""
  const characterLength = characters.length
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characterLength))
  }
  return result
}

console.log(generateId(9))
