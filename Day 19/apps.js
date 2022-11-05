//Exercises: Level 1
//1. Create a closure which has one inner function

//1.
// function closureFunction() {
//   let text = "Im a inner function"
//   function innerFunction() {
//     return text
//   }
//   return innerFunction()
// }
// const closure = closureFunction()
// console.log(closure)

//Exercises: Level 2
//1. Create a closure which has three inner functions

//1.
// function closureFunction() {
//   let first = "Im the first inner function"
//   let second = "Im the 2nd inner function"
//   let third = "Im the 3rd one ;)"
//   function firstInnerFunction() {
//     return first
//   }
//   function secondInner() {
//     return second
//   }
//   function thirdInner() {
//     return third
//   }
//   return {
//     first: firstInnerFunction(),
//     second: secondInner(),
//     third: thirdInner(),
//   }
// }

// const closure = closureFunction()
// console.log(closure.first)
// console.log(closure)

//Exercises: Level 3
//1.Create a personAccount out function. It has firstname, lastname, incomes, expenses inner variables. It has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance inner functions. Incomes is a set of incomes and its description and expenses is also a set of expenses and its description.

// function personAccount(description = undefined, value = undefined) {
//   let name = "XXXXX"
//   let lastname = "ZZZZZ"
//   let expenses = {
//     car: 2000,
//     house: 700,
//     food: 300,
//   }
//   let incomes = {
//     work: 3000,
//     streaming: 1500,
//     web: 700,
//   }
//   function firstName() {
//     return name
//   }
//   function lastName() {
//     return lastname
//   }
//   function totalIncome() {
//     values = Object.values(incomes)
//     let sum = 0
//     for (value of values) {
//       sum += value
//     }
//     return sum
//   }

//   function totalExpense() {
//     values = Object.values(expenses)
//     let sum = 0
//     for (value of values) {
//       sum += value
//     }
//     return sum
//   }
//   function accountBalance() {
//     let incomes = totalIncome()
//     let expense = totalExpense()
//     return incomes - expense
//   }
//   function accountInfo() {
//     return `The owner of the account its ${firstName()} ${lastName()} and it has ${accountBalance()}$ in Balance`
//   }

//   function addIncome() {
//     if (description != undefined) {
//       incomes[description] = value
//       return `Income added , now you have: ${accountBalance()} in balance`
//     }
//   }
//   function addExpense() {
//     if (description != undefined) {
//       incomes[description] = value
//       return `Expense added , now you have: ${accountBalance()} in balance`
//     }
//   }

//   return {
//     name: firstName(),
//     lastname: lastName(),
//     totalIncomes: totalIncome(),
//     totalExpense: totalExpense(),
//     accountBalance: accountBalance(),
//     accountInfo: accountInfo(),
//     addIncome: addIncome(),
//     addExpense: addExpense(),
//   }
// }

// console.log(personAccount().name)
// console.log(personAccount().accountInfo)
// console.log(personAccount().totalIncomes)
// console.log(personAccount("little work", 200).addIncome)
// console.log(personAccount().totalIncomes)
// console.log(personAccount("car", 3000).addExpense)
