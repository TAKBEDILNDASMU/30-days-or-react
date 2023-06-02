class Person {
  constructor(firstName, lastName, age, country, city) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.country = country
    this.city = city
    this.score = 0
    this.skills = []
  }
  getFullName() {
    const fullName = this.firstName + " " + this.lastName
    return fullName
  }
  get getScore() {
    return this.score
  }
  get getSkills() {
    return this.skills
  }
  set setScore(score) {
    this.score += score
  }
  set setSkill(skill) {
    this.skills.push(skill)
  }
  getPersonInfo() {
    const fullname = this.getFullName()

    const skills = `${
      this.getSkills.length > 0 && this.getSkills.slice(0, -1).join(", ")
    } and ${this.getSkills[this.getSkills.length - 1]}`

    const formattedSkills = skills ? `He knews ${skills}` : `He knews nothing`

    const age = this.age
    const country = this.country
    const city = this.city

    return `${fullname} is ${age} years old. He lives in ${city}, ${country}. ${formattedSkills}`
  }
  static favoriteSkills() {
    const skills = ["HTML", "CSS", "JS", "React", "Python", "Node"]
    const randomIndex = Math.floor(Math.random() * skills.length)
    console.log(skills)
    return skills[randomIndex]
  }

  static showDateTime() {
    const date = new Date()
    const years = date.getFullYear()
    const day = date.getDay()
    const month = date.getMonth() + 1
    return `${day} ${month} ${years}`
  }
}

const person1 = new Person("Titan", "Apriliyan", 21, "Indo", "Pono")
person1.setSkill = "HTML"
person1.setSkill = "CSS"
person1.setSkill = "JS"
person1.setSkill = "REACT"
person1.setSkill = "MONGODB"

console.log(Person.showDateTime())
