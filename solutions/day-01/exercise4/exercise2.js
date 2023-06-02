const users = {
  Alex: {
    email: "alex@alex.com",
    skills: ["HTML", "CSS", "JavaScript"],
    age: 20,
    isLoggedIn: false,
    points: 30,
  },
  Asab: {
    email: "asab@asab.com",
    skills: ["HTML", "CSS", "JavaScript", "Redux", "MongoDB", "Express", "React", "Node"],
    age: 25,
    isLoggedIn: false,
    points: 50,
  },
  Brook: {
    email: "daniel@daniel.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux"],
    age: 30,
    isLoggedIn: true,
    points: 50,
  },
  Daniel: {
    email: "daniel@alex.com",
    skills: ["HTML", "CSS", "JavaScript", "Python"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  John: {
    email: "john@john.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "Node"],
    age: 20,
    isLoggedIn: true,
    points: 50,
  },
  Thomas: {
    email: "thomas@thomas.com",
    skills: ["HTML", "CSS", "JavaScript", "React"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  Paul: {
    email: "paul@paul.com",
    skills: ["HTML", "CSS", "JavaScript", "MongoDB", "Express", "React", "Node"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
}

let maxSkill = 0
let userWithMostSkill = ""

for (const user in users) {
  let userSkill = users[user].skills.length
  if (userSkill > maxSkill) {
    maxSkill = userSkill
    userWithMostSkill = user
  }
}

let loggedInUser = 0
let bestUser = 0
for (const user in users) {
  if (users[user].isLoggedIn) {
    loggedInUser++
  }
  if (users[user].points >= 50) {
    bestUser++
  }
}

let MERN = []
for (const user in users) {
  if (users[user].skills.includes("MongoDB", "Express", "React", "NodeJs")) {
    MERN.push(user)
  }
}

const titan = {
  email: "titan@gmail.com",
  skills: ["HTML", "CSS", "JavaScript", "MongoDB", "Express", "React", "Node"],
  age: 21,
  isLoggedIn: true,
  points: 100,
}

let copyUsers = Object.assign({}, users)
copyUsers.Titan = titan

const keys = Object.values(users)
console.log(keys)
