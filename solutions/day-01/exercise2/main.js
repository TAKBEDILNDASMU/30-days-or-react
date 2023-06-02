const countries = require("./countries.js")
const webTechs = require("./web_techs.js")

// let text = "I love teaching and empowering people. I teach HTML, CSS, JS, React, Python."

// const word = text.split(" ")
// console.log(word)
// console.log(word.length)

// const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"]

// shoppingCart.unshift("Meat")
// shoppingCart.push("Sugar")
// shoppingCart.filter((cart, i) => (cart === "Tea" ? (shoppingCart[i] = "Green Tea") : ""))

// console.log(shoppingCart)

// countries.includes("Ethiopia") ? console.log("Ethiopia") : countries.push("Ethiopia")

// console.log(countries)

// webTechs.includes("Sass")
//   ? console.log("Sass is a CSS preprocess")
//   : webTechs.push("Sass")

// console.log(webTechs)

const frontEnd = ["HTML", "CSS", "JS", "React", "Redux"]
const backEnd = ["Node", "Express", "MongoDB"]
const fullstack = frontEnd.concat(backEnd)

console.log(fullstack)
