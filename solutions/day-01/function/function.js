function generateFullName(firstName = "Asabeneh", lastName = "Yetayeh") {
  let space = " "
  let fullName = firstName + space + lastName
  return fullName
}

console.log(generateFullName())
console.log(generateFullName("David", "Smith"))
