//Exercises Level 1
//1. Create an Animal class. The class will have name, age, color, legs properties and create different methods
//2. Create a Dog and Cat child class from the Animal Class.

//1.
// class Animal {
//   constructor(firstName, age, color, legs = 4) {
//     this.firstName = firstName
//     this.age = age
//     this.color = color
//     this.legs = legs
//   }
//   getPetInfo() {
//     return `${this.firstName} who is ${this.age} years old is color ${this.color} and have ${this.legs} legs`
//   }
// }

//2.
// class Dog extends Animal {}

// const dog = new Dog("Yunior", 7, "Black")
// console.log(dog.getPetInfo())

// class Cat extends Animal {}

// const cat = new Cat("Gatin", 1, "white")
// console.log(cat.getPetInfo())

//Exercises Level 2
//1. Override the method you create in Animal class

//1.
// class Cat extends Animal {
//   constructor(firstName, age, color, legs = 4, type) {
//     super(firstName, age, color, (legs = 4))
//     this.type = type
//   }
// }
// const cat = new Cat("Gatin", 1, "white", 4, "Orange")
// console.log(cat)

//Exercises Level 3
//1. Let's try to develop a program which calculate measure of central tendency of a sample(mean, median, mode) and measure of variability(range, variance, standard deviation). In addition to those measures find the min, max, count, percentile, and frequency distribution of the sample. You can create a class called Statistics and create all the functions which do statistical calculations as method for the Statistics class. Check the output below.
//2.
// Create a class called PersonAccount. It has firstname, lastname, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is also a set of expenses and its description.

//1.
//Not sure if this is the way but... I made it :)

// let ages = [
//   31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37,
//   31, 34, 24, 33, 29, 26,
// ]

// class Statistics {
//   constructor(arr) {
//     this.arr = arr
//   }

//   counter() {
//     return this.arr.length
//   }

//   sum() {
//     let sum = 0
//     this.arr.map((el) => {
//       sum += el
//     })
//     return sum
//   }

//   min() {
//     let min = 9999
//     this.arr.map((el) => {
//       el < min ? (min = el) : ""
//     })
//     return min
//   }

//   max() {
//     let max = 0
//     this.arr.map((el) => {
//       el > max ? (max = el) : ""
//     })
//     return max
//   }

//   range() {
//     const min = statistics.min()
//     const max = statistics.max()
//     return max - min
//   }

//   mean() {
//     const totalAge = this.sum()
//     const quantityOfAges = this.counter()
//     return Math.round(totalAge / quantityOfAges)
//   }

//   median() {
//     const totalAge = this.sum()
//     const quantityOfAges = this.counter()
//     return Math.floor(totalAge / quantityOfAges)
//   }

//   var() {
//     let newArr = []
//     const average = this.mean()
//     const squareDiffs = this.arr.map((value) => {
//       const diff = value - average
//       return newArr.push(diff * diff)
//     })
//     let sum = 0
//     newArr.map((el) => {
//       sum += el
//     })
//     const variance = sum / newArr.length
//     return variance
//   }
//   std() {
//     let newArr = []
//     const average = this.mean()
//     const squareDiffs = this.arr.map((value) => {
//       const diff = value - average
//       return newArr.push(diff * diff)
//     })
//     let sum = 0
//     newArr.map((el) => {
//       sum += el
//     })
//     const variance = sum / newArr.length
//     return Math.sqrt(variance)
//   }
// }

// const statistics = new Statistics(ages)

// console.log("Count:", statistics.counter())
// console.log("Sum: ", statistics.sum())
// console.log("Min: ", statistics.min())
// console.log("Max: ", statistics.max())
// console.log("Range: ", statistics.range())
// console.log("Mean: ", statistics.mean())
// console.log("Median: ", statistics.median())
// console.log("Variance: ", statistics.var())
// console.log("Standard Deviation: ", statistics.std())

//2.
class PersonAccount {
  constructor(firstname, lastname, incomes, expenses, balance = 0) {
    this.firstname = firstname
    this.lastname = lastname
    this.incomes = incomes
    this.expeses = expenses
    this.balance = balance
  }
  accountInfo() {
    return `Your name is ${this.firstname} ${this.lastname} you have ${this.incomes} and ${this.expenses}`
  }

  addIncome(income) {
    this.balance += income
    return `You added ${income}$ to your balance`
  }
  addExpenses(expenses) {
    this.balance -= expenses
    return `You added ${expenses}$ as expenses`
  }

  accountBalance() {
    return `Your current balance is: ${this.balance}$`
  }

  totalIncome() {
    let arr = []
    console.log(this.incomes)
    arr.push(this.incomes)
    return arr
  }
}

const persona = new PersonAccount("XXX", "XXXX", "2000", "100")

console.log(persona.accountInfo())
console.log(persona.addIncome(200))
console.log(persona.addIncome(300))
console.log(persona.accountBalance())
console.log(persona.addExpenses(100))
console.log(persona.accountBalance())
console.log(persona.totalIncome())
