const webTechs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Express",
  "Redux",
  "Node",
  "MongoDB",
]
webTechs[0],
  webTechs[Math.floor((webTechs.length - 1) / 2)],
  webTechs[webTechs.length - 1]

const mixedDataTypes = [
  "Japan",
  1945,
  {
    Commander: "Hirohito",
    Slogan: "Tenno heka banzai",
  },
  true,
  undefined,
]

const itCompanies = [
  "facebook",
  "google",
  "microsoft",
  "apple",
  "iBM",
  "oracle",
  "amazon",
]

// print the array like as a sentence  Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.

// let newCompanies = []
// itCompanies.map((e) => {
//   newCompanies.push(e.charAt(0).toUpperCase() + e.slice(1))
//   return newCompanies
// })
// newCompanies.pop()
// console.log(
//   `${newCompanies.join()} and ${itCompanies[itCompanies.length - 1]} are big IT companies`
// )

// Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
// const company = "netflix"
// itCompanies.includes(company) ? console.log(company) : console.log("not found")

// Filter out companies which have more than one 'o' without the filter method
// itCompanies.find((element) => {
//   if (element.includes("oo")) {
//     console.log(element)
//   }
// })

// Sort the array using sort() method
// console.log(itCompanies.sort())

// Reverse the array using reverse() method
// console.log(itCompanies.reverse())

// Slice out the first 3 companies from the array
// const newCompanies = itCompanies.slice(0, 3)
// console.log(newCompanies)

// Slice out the last 3 companies from the array
// const newCompanies = itCompanies.slice(itCompanies.length - 3, itCompanies.length)
// console.log(newCompanies)

// Slice out the middle IT company or companies from the array
// const newCompanies = itCompanies.slice(
//   Math.floor(itCompanies.length / 2),
//   Math.floor(itCompanies.length / 2) + 1
// )
// console.log(newCompanies)

// Remove the first IT company from the array\
// const company = itCompanies.shift()
// console.log(company)

// Remove the middle IT company or companies from the array
// const middle = itCompanies[Math.floor(itCompanies.length / 2)]
