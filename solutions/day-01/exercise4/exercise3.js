const users = [
  {
    _id: "ab12ex",
    username: "Alex",
    email: "alex@alex.com",
    password: "123123",
    createdAt: "08/01/2020 9:00 AM",
    isLoggedIn: false,
  },
  {
    _id: "fg12cy",
    username: "Asab",
    email: "asab@asab.com",
    password: "123456",
    createdAt: "08/01/2020 9:30 AM",
    isLoggedIn: true,
  },
  {
    _id: "zwf8md",
    username: "Brook",
    email: "brook@brook.com",
    password: "123111",
    createdAt: "08/01/2020 9:45 AM",
    isLoggedIn: true,
  },
  {
    _id: "eefamr",
    username: "Martha",
    email: "martha@martha.com",
    password: "123222",
    createdAt: "08/01/2020 9:50 AM",
    isLoggedIn: false,
  },
  {
    _id: "ghderc",
    username: "Thomas",
    email: "thomas@thomas.com",
    password: "123333",
    createdAt: "08/01/2020 10:00 AM",
    isLoggedIn: false,
  },
]

// Create a function called signUp which allows user to add to the collection. If user exists, inform the user that he has already an account.
// let userEmail = users.map((user) => user.email)

// const signUp = (data) => {
//   if (!userEmail.includes(data.email)) {
//     users.push(data)
//   } else {
//     console.log("User with the email already registered")
//   }
// }

// const data = {
//   _id: "43256",
//   username: "Titan",
//   email: "titan@titan.com",
//   password: "qwerty",
//   createdAt: "08/01/2020 9:30 AM",
//   isLoggedIn: true,
// }

// signUp(data)

// console.log(users)

// Create a function called signIn which allows user to sign in to the application

// const emailAndPasswords = []

// users.map((user) => {
//   const email = user.email
//   const password = user.password
//   emailAndPasswords.push([email, password])
// })

// const signIn = (email, password) => {
//   emailAndPasswords.map((emailAndPassword) => {
//     if (emailAndPassword.includes(email) && emailAndPassword.includes(password)) {
//       console.log("You already sign in")
//     } else {
//       console.log("Your email doesn't registered, please sign up")
//     }
//   })
// }

// signIn("asab@asab.com", "123456")

const products = [
  {
    _id: "eedfcf",
    name: "mobile phone",
    description: "Huawei Honor",
    price: 200,
    ratings: [{ userId: "fg12cy", rate: 5 }],
    likes: [],
  },
  {
    _id: "aegfal",
    name: "Laptop",
    description: "MacPro: System Darwin",
    price: 2500,
    ratings: [],
    likes: ["fg12cy"],
  },
  {
    _id: "hedfcg",
    name: "TV",
    description: "Smart TV:Procaster",
    price: 400,
    ratings: [{ userId: "fg12cy", rate: 5 }],
    likes: ["fg12cy"],
  },
]

//  a. Create a function called rateProduct which rates the product

// const rateProduct = (userId, rate, idProduct) => {
//   const rating = { userId, rate }
//   products[idProduct].ratings.push(rating)
// }

// rateProduct("7874ty", 8.9, "1")
// console.log(products[1])

// b. Create a function called averageRating which calculate the average rating of a product

// const averageRating = (idProduct) => {
//   const ratings = products[idProduct].ratings.map((rating) => rating.rate)
//   let total = 0
//   let count = 0
//   ratings.forEach((rating) => {
//     total += rating
//     count++
//   })

//   return total / count
// }

// console.log(averageRating(0))

// Create a function called likeProduct. This function will helps to like to the product if it is not liked and remove like if it was liked.

// const likeProduct = (productId, userId) => {
//   const likes = products[productId].likes
//   if (!likes.includes(userId)) {
//     likes.push(userId)
//   } else {
//     const index = likes.indexOf(userId)
//     if (index > -1) {
//       likes.splice(index, 1)
//     }
//   }
// }

// likeProduct(1, "fg12cy")
// likeProduct(1, "fg12cy")
// console.log(products)

//
