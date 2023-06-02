const dog = {}
dog.name = "Doggy"
dog.legs = 4
dog.age = 0.5
dog.bark = function () {
  return "woof woof"
}
dog.breed = "labrador"
dog.getInfo = function () {
  return `${this.name} has ${this.legs} legs, he/she is ${this.age}years old , he is ${
    this.breed
  } breed and his/her bark sound is ${this.bark()}`
}

console.log(dog.getInfo())
