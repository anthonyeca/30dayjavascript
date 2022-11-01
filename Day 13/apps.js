//Exercises:Level 1
//1. Display the countries array as a table
//2. Display the countries object as a table
//3. Use console.group() to group logs

const countries = [
  ["Finland", "Helsinki"],
  ["Sweden", "Stockholm"],
  ["Norway", "Oslo"],
]

//1.
//console.table(countries)

//2.
//console.table(countries_data)

//3.
// console.group("Countries log")
// console.table(countries)
// console.table(countries_data)
// console.groupEnd()

//Exercises:Level 2
//1. 10 > 2 * 10 use console.assert()
//2. Write a warning message using console.warn()
//3. Write an error message using console.error()

//1.
//console.assert(10>2 *10) //will failed

//2.
//console.warn("This is a warning")

//3.
// console.error("This is an error")

//Exercises:Level 3
//1. Check the speed difference among the following loops: while, for, for of, forEach

// console.time("Regular for loop started")
// for (let i = 0; i <= 100; i++) {
//   console.log("")
// }
// console.timeEnd("Regular for loop finished")

// console.time("Regular while loop started")
// let counter = 0
// do {
//   counter++
// } while (counter <= 100)
// console.timeEnd("Regular while loop finished")

// console.time("Regular for of started")
// for (const [name, city] of countries) {
//   console.log(name, city)
// }
// console.timeEnd("Regular for of finished")

// console.time("Regular forEach started")
// countries.forEach((el) => {
//   console.log(el)
// })
// console.timeEnd("Regular forEach finished")
