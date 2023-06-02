// const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]

// ages.sort((a, b) => a - b)

// const min = ages[0]
// const max = ages[ages.length - 1]
// const median =
//   ages.length % 2 === 1
//     ? ages[Math.floor(ages.length / 2)]
//     : [ages[Math.floor(ages.length / 2)], ages[Math.floor(ages.length / 2) - 1]]

// console.log(ages)
// console.log(median)

const countries = require("../exercise2/countries")

const tenCountries = countries.slice(0, 10)
const middle = Math.floor(countries.length / 2)
const middleCountries =
  countries.length % 2 === 1
    ? countries[middle]
    : [countries[middle], countries[middle - 1]]
console.log(middle)

let divideCountries1 = []
let divideCountries2 = []

if (countries.length % 2 === 1) {
  for (let i = 0; i < middle; i++) {
    divideCountries1.push(countries[i])
  }
  for (let i = countries.length - 1; i >= middle; i--) {
    divideCountries2.push(countries[i])
  }
} else {
  for (let i = 0; i < middle; i++) {
    divideCountries1.push(countries[i])
  }
  for (let i = countries.length - 1; i >= middle; i--) {
    divideCountries2.push(countries[i])
  }
}

let dividedCountries = [divideCountries1, divideCountries2]
console.log(dividedCountries)
