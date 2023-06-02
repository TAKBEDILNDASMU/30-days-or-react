const readline = require("readline-sync")

const year = new Date().getFullYear()
let leap
if (year % 4 == 0 && year % 100 != 0) {
  leap = true
} else if (year % 400 == 0) {
  leap = true
} else {
  leap = false
}

const month = readline.question("Enter a month: ")

switch (true) {
  case month == "january":
    console.log("january has 31 days")
    break
  case month == "february" && leap:
    console.log("february has 29 days")
    break
  case month == "february" && !leap:
    console.log("february has 28 days")
    break
  case month == "march":
    console.log("march has 31 days")
    break
  case month == "april":
    console.log("april has 30 days")
    break
  case month == "may":
    console.log("may has 31 days")
    break
  case month == "june":
    console.log("june has 30 days")
    break
  case month == "july":
    console.log("july has 31 days")
    break
  case month == "augustus":
    console.log("augustus has 31 days")
    break
  case month == "september":
    console.log("september has 30 days")
    break
  case month == "october":
    console.log("october has 31 days")
    break
  case month == "november":
    console.log("november has 30 days")
    break
  case month == "december":
    console.log("december has 31 days")
}
