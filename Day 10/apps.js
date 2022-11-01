import { countries_data } from "./countries_data.js"

//Exercises:Level 1
//1. create an empty set
//2. Create a set containing 0 to 10 using loop
//3. Remove an element from a set
//4. Clear a set
//5. Create a set of 5 string elements from array
//6. Create a map of countries and number of characters of a country

//1.
// const newSet = new Set()
// console.log(newSet)

//2.
// const setOfNumbers = new Set()
// for (let i = 0; i <= 10; i++) {
//   setOfNumbers.add(i)
// }
// console.log(setOfNumbers)

//3.
// const setOfNumbers = new Set()
// for (let i = 0; i <= 10; i++) {
//   setOfNumbers.add(i)
// }
// setOfNumbers.delete(2)
// console.log(setOfNumbers)

//4.
// const setOfNumbers = new Set()
// for (let i = 0; i <= 10; i++) {
//   setOfNumbers.add(i)
// }
// setOfNumbers.clear()
// console.log(setOfNumbers)

//5.
// const arr = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]
// const setOfTheWeek = new Set(arr)

//6.
// const countries = ["Finland", "Sweden", "Norway"]
// const newMap = new Map()
// for (let i = 0; i < countries.length; i++) {
//   newMap.set(countries[i], countries[i].length)
// }
// console.log(countries)

//Exercises:Level 2
const a = [4, 5, 8, 9]
const b = [3, 4, 5, 7]
const countries = ["Finland", "Sweden", "Norway"]
//1. Find a union b
//2. Find a intersection b

//1
// const c = [...a, ...b]
// const A = new Set(a)
// const B = new Set(b)
// const C = new Set(c)
// console.log(C)

//2.
// const B = new Set(b)
// let c = a.filter((num) => B.has(num))
// const C = new Set(c)
// console.log(C)

//Exercises:Level 3
//1. How many languages are there in the countries object file.
//2. *** Use the countries data to find the 10 most spoken languages:

//1.
let arr = []
countries_data.forEach((el) => {
  el.languages.map((el) => arr.push(el))
})
let uniqueLanguages = new Set(arr)
console.log(uniqueLanguages.size)

//2.
