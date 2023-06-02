const person = {
  firstName: "Asabeneh",
  age: 250,
  country: "Finland",
  city: "Helsinki",
  skills: ["HTML", "CSS", "JS"],
  title: "teacher",
  address: {
    street: "Heitamienkatu 16",
    pobox: 2002,
    city: "Helsinki",
  },
  getPersonInfo: function () {
    return `I am ${this.firstName} and I live in ${this.city}, ${this.country}. I am ${this.age}.`
  },
}

const copyPerson = Object.assign({}, person)
const keys = Object.keys(copyPerson.address)
const values = Object.values(copyPerson)
const entries = Object.values(copyPerson)
console.log(copyPerson.hasOwnProperty("firstName"))
