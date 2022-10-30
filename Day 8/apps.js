//Exercises: Level 1
//1. Create an empty object called dog
//2. Print the the dog object on the console
//3. Add name, legs, color, age and bark properties for the dog object. The bark property is a method which return woof woof
//4. Get name, legs, color, age and bark value from the dog object
//5. Set new properties the dog object: breed, getDogInfo

//1.
// const dog = {}

//2.
// console.log(dog)

//3.
// const dog = {
//     name: "Yunior",
//     legs: 4,
//     color: "black",
//     bark: function () {
//         console.log("woof woof")
//     }
// }

//4.
// console.log(dog.name)
// console.log(dog.legs)
// console.log(dog.color)
// console.log(dog.bark())

//5.
// dog.breed = "yes"
// dog.getDogInfo = function () {
//     let bark = this.bark()
//     let statement = `I'm a dog called ${this.name}, I have ${this.legs} legs and I'm ${this.color}, I also can bark: ${bark}`
//     return statement
// }
// console.log(dog.getDogInfo())

//Exercises: Level 2
//1. Find the person who has many skills in the users object.
//2. Count logged in users, count users having greater than equal to 50 points from the following object.
//3. Find people who are MERN stack developer from the users object
//4. Get all the values of users object

// const users = {
//     Alex: {
//       email: "alex@alex.com",
//       skills: ["HTML", "CSS", "JavaScript"],
//       age: 20,
//       isLoggedIn: false,
//       points: 30
//     },
//     Asab: {
//       email: "asab@asab.com",
//       skills: ["HTML", "CSS", "JavaScript", "Redux", "MongoDB", "Express", "React", "Node"],
//       age: 25,
//       isLoggedIn: false,
//       points: 50
//     },
//     Brook: {
//       email: "daniel@daniel.com",
//       skills: ["HTML", "CSS", "JavaScript", "React", "Redux"],
//       age: 30,
//       isLoggedIn: true,
//       points: 50
//     },
//     Daniel: {
//       email: "daniel@alex.com",
//       skills: ["HTML", "CSS", "JavaScript", "Python"],
//       age: 20,
//       isLoggedIn: false,
//       points: 40
//     },
//     John: {
//       email: "john@john.com",
//       skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "Node.js"],
//       age: 20,
//       isLoggedIn: true,
//       points: 50
//     },
//     Thomas: {
//       email: "thomas@thomas.com",
//       skills: ["HTML", "CSS", "JavaScript", "React"],
//       age: 20,
//       isLoggedIn: false,
//       points: 40
//     },
//     Paul: {
//       email: "paul@paul.com",
//       skills: ["HTML", "CSS", "JavaScript", "MongoDB", "Express", "React", "Node"],
//       age: 20,
//       isLoggedIn: true,
//       points: 40
//     }
//   }

//1.
// Will show every "user"
// let person = Object.keys(users) //console.log(person)
// let max = 0
// let user = ''
// for (let i = 0; i < person.length; i++) {
//     //sizeSkills will show every skill
//     let sizeSkills = users[person[i]].skills // users[person[0]].skills
//     if (sizeSkills.length > max) {
//         max = sizeSkills.length
//         user = person[i]
//     }
// }
// console.log(max, user)

//2.
// Will show every "user"
// let person = Object.keys(users) //console.log(person)
// let loggedUsers = 0
// let user = []

// for (let i = 0; i < person.length; i++) {
//     //loggedStatus will show the loggin status
//     let loggedStatus = users[person[i]].isLoggedIn
//     //points will show the points of every user
//     let points = users[person[i]].points
//     if (loggedStatus === true) {
//         loggedUsers += 1
//     }
//     if (points >= 50) {
//         user.push(person[i])
//     }
// }

// console.log(`The number of logged users are:${loggedUsers}, and the users who have more than 50 points are: ${user}`)

//3.
// let person = Object.keys(users)
// let user = []

// for (let i = 0; i < person.length; i++) {
//     let sum = 0
//     let skillMern = users[person[i]].skills
//     skillMern.forEach(el => {
//         if (el == "MongoDB") {
//             sum += 1
//         } else if (el == "Express") {
//             sum += 1
//         } else if (el == "JavaScript") {
//             sum += 1
//         } else if (el == "React") {
//             sum += 1
//         }
//     })
//     if (sum == 4) {
//         user.push(person[i])
//     }
// }
// console.log(`The users who know the MERN stack are: ${user}`)
//4. console.log(Object.entries(users))

//Exercises: Level 3
//1. Create an object literal called personAccount. It has firstName, lastName, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is a set of incomes and its description.

//1.
// Create an object literal called personAccount. It has firstName, lastName, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is a set of incomes and its description.
//2.**** Questions:2, 3 and 4 are based on the following two arrays:users and products ()
//Imagine you are getting the above users collection from a MongoDB database. a. Create a function called signUp which allows user to add to the collection. If user exists, inform the user that he has already an account. b. Create a function called signIn which allows user to sign in to the application
//3. The products array has three elements and each of them has six properties. a. Create a function called rateProduct which rates the product b. Create a function called averageRating which calculate the average rating of a product
//4. Create a function called likeProduct. This function will helps to like to the product if it is not liked and remove like if it was liked.

// const users = [
//     {
//         _id: 'ab12ex',
//         username: 'Alex',
//         email: 'alex@alex.com',
//         password: '123123',
//         createdAt: '08/01/2020 9:00 AM',
//         isLoggedIn: false
//     },
//     {
//         _id: 'fg12cy',
//         username: 'Asab',
//         email: 'asab@asab.com',
//         password: '123456',
//         createdAt: '08/01/2020 9:30 AM',
//         isLoggedIn: true
//     },
//     {
//         _id: 'zwf8md',
//         username: 'Brook',
//         email: 'brook@brook.com',
//         password: '123111',
//         createdAt: '08/01/2020 9:45 AM',
//         isLoggedIn: true
//     },
//     {
//         _id: 'eefamr',
//         username: 'Martha',
//         email: 'martha@martha.com',
//         password: '123222',
//         createdAt: '08/01/2020 9:50 AM',
//         isLoggedIn: false
//     },
//     {
//         _id: 'ghderc',
//         username: 'Thomas',
//         email: 'thomas@thomas.com',
//         password: '123333',
//         createdAt: '08/01/2020 10:00 AM',
//         isLoggedIn: false
//     }
// ];

// const products = [
//     {
//         _id: 'eedfcf',
//         name: 'mobile phone',
//         description: 'Huawei Honor',
//         price: 200,
//         ratings: [
//             { userId: 'fg12cy', rate: 5 },
//             { userId: 'zwf8md', rate: 4.5 }
//         ],
//         likes: []
//     },
//     {
//         _id: 'aegfal',
//         name: 'Laptop',
//         description: 'MacPro: System Darwin',
//         price: 2500,
//         ratings: [],
//         likes: ['fg12cy']
//     },
//     {
//         _id: 'hedfcg',
//         name: 'TV',
//         description: 'Smart TV:Procaster',
//         price: 400,
//         ratings: [{ userId: 'fg12cy', rate: 5 }],
//         likes: ['fg12cy']
//     }
// ]

// const personAccount = {
//     firstName: "Carlos",
//     lastName: "Vidal",
//     incomes: {
//         work: 200,
//         web: 300,
//         sp500: 50
//     },
//     expenses: {
//         food: 150,
//         shoes: 60,
//         dentist: 40
//     },
//     totalIncome: function () {
//         let arrValues = Object.values(this.incomes)
//         let sum = 0
//         for (let i = 0; i < arrValues.length; i++) {
//             sum += arrValues[i]
//         }
//         return sum
//     },
//     totalExpense: function () {
//         let arrValues = Object.values(this.expenses)
//         let sum = 0
//         for (let i = 0; i < arrValues.length; i++) {
//             sum += arrValues[i]
//         }
//         return sum
//     },
//     accountInfo: function () {
//         return `${this.firstName} ${this.lastName} and your total Incomes are: ${this.totalIncome()}`
//     },
//     addIncome: function (description, value) {
//         this.incomes[description] = value
//         return this.incomes
//     },
//     addExpense: function (description, value) {
//         this.expenses[description] = value
//         return this.expenses
//     },
//     accountBalance: function () {
//         let arrIncomes = Object.values(this.incomes)
//         let sumIncomes = 0
//         for (let i = 0; i < arrIncomes.length; i++) {
//             sumIncomes += arrIncomes[i]
//         }
//         let arrExpenses = Object.values(this.expenses)
//         let sumExpenses = 0
//         for (let i = 0; i < arrExpenses.length; i++) {
//             sumExpenses += arrExpenses[i]
//         }
//         return sumIncomes - sumExpenses
//     }
// }

// console.log(personAccount.totalIncome())
// console.log(personAccount.totalExpense())
// console.log(personAccount.accountInfo())
// console.log(personAccount.addIncome("renting", 700))
// console.log(personAccount.addExpense("dinner", 50))
// console.log(personAccount.accountBalance())

//2.
// const signUp = (user, email, password) => {
//     let keys = "abcdefghijklmnopqrstuvwxyz01234567890"
//     let id = []
//     let date = new Date
//     for (let i = 0; i < users.length; i++)
//         if (user === users[i].username) {
//             return "This Username is already taken"
//         }
//     for (let i = 0; i < 6; i++) {
//         let random = Math.floor(Math.random() * keys.length)
//         id.push(keys[random])
//     }

//     let last = users.length
//     users[last] = {
//         ["_id"]: id.join(""),
//         ["username"]: user,
//         ["email"]: email,
//         ["password"]: password.toString(),
//         ["createdAt"]: date.toLocaleString("en-US"),
//         ["isLoggedIn"]: false
//     }
// }

// const signIn = (username) => {
//     for (let i = 0; i < users.length; i++) {
//         if (username === users[i].username) {
//             users[i].isLoggedIn = true
//         }
//     }
//     return "isLogged Updated"
// }

// signUp("Anthony", "anthony@gmail.com", 15254)
// signUp("Mariale", "mariale@gmail.com", 5123)
// signUp("Franco", "Franco@gmail.com", 5412123)

//3.
// A
// const signUp = (user, email, password) => {
//     let keys = "abcdefghijklmnopqrstuvwxyz01234567890"
//     let id = []
//     let date = new Date
//     for (let i = 0; i < users.length; i++)
//         if (user === users[i].username) {
//             return "This Username is already taken"
//         }
//     for (let i = 0; i < 6; i++) {
//         let random = Math.floor(Math.random() * keys.length)
//         id.push(keys[random])
//     }

//     let last = users.length
//     users[last] = {
//         ["_id"]: id.join(""),
//         ["username"]: user,
//         ["email"]: email,
//         ["password"]: password.toString(),
//         ["createdAt"]: date.toLocaleString("en-US"),
//         ["isLoggedIn"]: false
//     }
// }

// const signIn = (username) => {
//     for (let i = 0; i < users.length; i++) {
//         if (username === users[i].username) {
//             users[i].isLoggedIn = true
//         }
//     }
//     return "isLogged Updated"
// }

// signUp("Anthony", "anthony@gmail.com", 15254)
// signUp("Mariale", "mariale@gmail.com", 5123)
// signUp("Franco", "Franco@gmail.com", 5412123)

// const rateProduct = (username, product, rate) => {
//     let id = ""
//     for (let i = 0; i < users.length; i++) {
//         if (username == users[i].username) {
//             id = users[i]["_id"]
//         }
//     }
//     for (let i = 0; i < products.length; i++) {
//         if (product == products[i]["name"]) {
//             products[i].ratings.push({
//                 ["userId"]: id,
//                 ["rate"]: rate
//             })
//         }
//     }
//     return "Rate Completed"
// }

// rateProduct("Mariale", "TV", 3)
// rateProduct("Franco", "Laptop", 2)
// rateProduct("Mariale", "TV", 5)
// rateProduct("Mariale", "TV", 5)
// rateProduct("Mariale", "TV", 2)
// rateProduct("Mariale", "TV", 4)
// rateProduct("Mariale", "TV", 2)
// // console.log(products)

// //B
// console.log(products[2].ratings)
// console.log(products[0].name)

// const averageRating = (product) => {
//     let sum = 0
//     let numberOfRaitings = 0
//     let avgRatings = 0
//     for (let i = 0; i < products.length; i++) {
//         numberOfRaitings = products[i].ratings.length
//         if (product === products[i].name) {
//             console.log()
//             for (let j = 0; j < products[i].ratings.length; j++) {
//                 sum += products[i].ratings[j].rate
//             }
//         }
//     }
//     avgRatings = sum / numberOfRaitings
//     return `The avg of raitings for the product ${product} is: ${avgRatings}`
// }

// console.log(averageRating("TV"))

//4.
// const signUp = (user, email, password) => {
//     let keys = "abcdefghijklmnopqrstuvwxyz01234567890"
//     let id = []
//     let date = new Date
//     for (let i = 0; i < users.length; i++)
//         if (user === users[i].username) {
//             return "This Username is already taken"
//         }
//     for (let i = 0; i < 6; i++) {
//         let random = Math.floor(Math.random() * keys.length)
//         id.push(keys[random])
//     }

//     let last = users.length
//     users[last] = {
//         ["_id"]: id.join(""),
//         ["username"]: user,
//         ["email"]: email,
//         ["password"]: password.toString(),
//         ["createdAt"]: date.toLocaleString("en-US"),
//         ["isLoggedIn"]: false
//     }
// }

// const signIn = (username) => {
//     for (let i = 0; i < users.length; i++) {
//         if (username === users[i].username) {
//             users[i].isLoggedIn = true
//         }
//     }
//     return "isLogged Updated"
// }

// signUp("Anthony", "anthony@gmail.com", 15254)
// signUp("Mariale", "mariale@gmail.com", 5123)
// signUp("Franco", "Franco@gmail.com", 5412123)

// const likeProduct = (username, product) => {
//     let id = ""
//     for (let i = 0; i < users.length; i++) {
//         if (username == users[i].username) {
//             id = users[i]["_id"]
//         }
//     }
//     for (let i = 0; i < products.length; i++) {
//         if (product == products[i]["name"]) {
//             if (products[i].likes.length == 0) {
//                 products[i].likes.push(id)
//                 return `Liked Completed by ${id}, Number of likes: ${products[i].likes.length}, likes: ${products[i].likes}`

//             } else {
//                 for (let j = 0; j < products[i].likes.length; j++) {
//                     if (products[i].likes[j] == id) {
//                         let arr = products[i].likes
//                         arr.splice(id, 1)
//                         products[i].likes = arr
//                         return `Like from ${id} removed,likes: ${arr.length} from ${products[i].likes}`
//                     }
//                 }
//                 products[i].likes.push(id)
//                 return `Liked Completed by ${id} likes: ${products[i].likes.length} likes from: ${products[i].likes}`
//             }
//         }
//     }
// }
// console.log(products[1].likes)

// likeProduct("Mariale", "Laptop")
// console.log(products)
// likeProduct("Mariale", "TV")
// console.log(products)
// likeProduct("Mariale", "TV")
// console.log(products)
