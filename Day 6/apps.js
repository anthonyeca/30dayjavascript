import { countries } from "./countries.js"
import { webTechs } from "./web_techs.js"

//Exercises: Level 1
//1. Iterate 0 to 10 using for loop, do the same using while and do while loop
//2. Iterate 10 to 0 using for loop, do the same using while and do while loop
//3. Iterate 0 to n using for loop
//4. Write a loop that makes the following pattern using console.log():
// #
// ##
// ###
// ####
// #####
// ######
// #######
//5. Use loop to print the following pattern:
// i    i^2   i^3
// 0    0     0
// 1    1     1
// 2    4     8
// 3    9     27
// 4    16    64
// 5    25    125
// 6    36    216
// 7    49    343
// 8    64    512
// 9    81    729
// 10   100   1000
//6. Use for loop to iterate from 0 to 100 and print only even numbers
//7. Use for loop to iterate from 0 to 100 and print only odd numbers
//8. Use for loop to iterate from 0 to 100 and print only prime numbers
//9. Use for loop to iterate from 0 to 100 and print the sum of all numbers.
//10. Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.
//11. Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds. Print sum of evens and sum of odds as array
//12. Develop a small script which generate array of 5 random numbers
//13. Develop a small script which generate array of 5 random numbers and the numbers must be unique
//14. Develop a small script which generate a six characters random id:

//1.
// for (let a = 0; a <= 10; a++) {
//     console.log(a, "FOR")
// }
// let b = 0
// while (b <= 10) {
//     console.log(b, "WHILE")
//     b++
// }
// let c = 0
// do {
//     console.log(c, "DO WHILE")
//     c++
// } while (c <= 10);

// 2.
// for (let a = 10; a >= 0; a--) {
//     console.log(a, "FOR")
// }
// let b = 10
// while (b >= 0) {
//     console.log(b, "WHILE")
//     b--
// }
// let c = 10
// do {
//     console.log(c, "DO WHILE")
//     c--
// } while (c >= 0);

//3.
// let n = 5
// for (let i = 0; i <= n; i++) {
//     console.log(i)
// }

//4.
// for (let i = 1; i <= 7; i++) {
//     let text = "#"
//     console.log(text.repeat(i))
// }

//5.
// console.log("i   i^2  i^3")
// for (let i = 0; i <= 10; i++) {
//     console.log(`${i}   ${i * i}    ${i * i * i}`)
// }

//6.
// for (let i = 0; i <= 100; i++) {
//     if (i % 2 === 0) {
//         console.log(i, "EVEN")
//     }
// }

//7.
// for (let i = 0; i <= 100; i++) {
//     if (i % 2 !== 0) {
//         console.log(i, "ODD")
//     }
// }

//8.
// let count = 0
// for (let j = 2; j <= 100; j++) {
//     for (let i = 1; i <= j; i++) {
//         if (j % i == 0)
//             count++
//     }
//     if (count == 2) console.log(j)
//     count = 0
// }

//9.
// let sum = 0
// for (let i = 0; i <= 100; i++) {
//     sum = sum + i
// }
// console.log(`The sum of all numbers from 0 to 100 is ${sum}.`)

//10.
// let even = 0
// let odd = 0
// for (let i = 0; i <= 100; i++) {
//     if (i % 2 !== 0) {
//         odd += i
//     } else {
//         even += i
//     }
// }
// console.log(`The sum of all evens from 0 to 100 is ${even}. And the sum of all odds from 0 to 100 is ${odd}.`)

//11.
// let even = 0
// let odd = 0
// let arr = []
// for (let i = 0; i <= 100; i++) {
//     if (i % 2 !== 0) {
//         odd += i
//     } else {
//         even += i
//     }
// }
// arr.push(even)
// arr.push(odd)
// console.log(`${arr}`)

//12.
// for (let i = 0; i < 5; i++) {
//     let num = Math.floor(Math.random() * 100)
//     console.log(num)
// }

//13.
// let arr = []
//
//     let num = Math.floor(Math.random() * 100) + 1
//     if (arr.indexOf(num) === -1) {
//         arr.push(num)
//     }
// }
// console.log(arr)

//14.
// let arr = []
// let result = '';
// let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
// while (arr.length < 5) {
//     result = characters.charAt(Math.floor(Math.random() * characters.length));
//     if (arr.indexOf(result) === -1) {
//         arr.push(result)
//     }
// }
// console.log(arr.join(""))

//Exercises: Level 2
//1.Develop a small script which generate any number of characters random id:
//2.Write a script which generates a random hexadecimal number.
//3. Write a script which generates a random rgb color number.
//4. Using the above countries array, create the following new array.
//5. Using the above countries array, create an array for countries length'.
//6. Use the countries array to create the following array of arrays:
//7. In above countries array, check if there is a country or countries containing the word 'land'. If there are countries containing 'land', print it as array. If there is no country containing the word 'land', print 'All these countries are without land'.
//8. In above countries array, check if there is a country or countries end with a substring 'ia'. If there are countries end with, print it as array. If there is no country containing the word 'ai', print 'These are countries ends without ia'.
//9. Using the above countries array, find the country containing the biggest number of characters.
//10.Using the above countries array, find the country containing only 5 characters.
//11. Find the longest word in the webTechs array
//12. Use the webTechs array to create the following array of arrays:
//13. An application created using MongoDB, Express, React and Node is called a MERN stack app. Create the acronym MERN by using the array mernStack
//14. Iterate through the array, ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"] using a for loop or for of loop and print out the items.
//15. This is a fruit array , ['banana', 'orange', 'mango', 'lemon'] reverse the order using loop without using a reverse method.
//16. Print all the elements of array as shown below.
// const fullStack = [
//     ['HTML', 'CSS', 'JS', 'React'],
//     ['Node', 'Express', 'MongoDB']
//   ]
// ````

// ```sh
//   HTML
//   CSS
//   JS
//   REACT
//   NODE
//   EXPRESS
//   MONGODB

//1.
// let arr = []
// let result = '';
// let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
// let counter = Math.floor(Math.random() * 100) + 1
// if (counter < 100) {
//     while (arr.length < counter) {
//         result = characters.charAt(Math.floor(Math.random() * characters.length));
//         if (arr.indexOf(result) === -1) {
//             arr.push(result)
//         }
//     }
//     console.log(`Your random ID is: ${arr.join("")}`)
// }

//2.
// let arr = []
// let result = '';
// let characters = 'ABCDEFabcdef0123456789';
// while (arr.length < 6) {
//     result = characters.charAt(Math.floor(Math.random() * characters.length));
//     if (arr.indexOf(result) === -1) {
//         arr.push(result)
//     }
// }
// console.log(`Your Hexadeciaml number is: #${arr.join("")}`)

//3.
// let arr = []
// let result = '';
// let characters = '0123456789';
// let r = Math.round(Math.random() * 255)
// let g = Math.floor(Math.random() * 255)
// let b = Math.floor(Math.random() * 255)

// console.log(`rgb(${r},${g},${b})`)

//4.
// countries.forEach(element => {
//     console.log(element.toUpperCase())
// });

//5.
// let arr = []
// countries.forEach(element => {
//     arr.push(element.length)
// });
// console.log(arr)

//6.
// let arrGlobal = []
// countries.forEach(element => {
//     let arr = []
//     arr.push(element)
//     arr.push(element.slice(0, 3).toUpperCase())
//     arr.push(element.length)
//     arrGlobal.push(arr)
// });
// console.log(arrGlobal)

//7.
// let arr = []
// countries.forEach(element => {
//     if (element.includes("land") === true) {
//         arr.push(element)
//     }
// });
// console.log(arr)

//8.
// let arr = []
// countries.forEach(element => {
//     if (element.lastIndexOf("ia") != -1) {
//         arr.push(element)
//     }
// });
// console.log(arr)

//9.
// let arr = []
// let temp = 0
// countries.forEach((element) => {
//     if (temp < element.length) {
//         temp = element.length
//     }
// })
// countries.forEach((element) => {
//     if (element.length === temp) {
//         arr.push(element)
//     }
// })
// console.log(arr)

//10.
// countries.forEach((element) => {
//     if (element.length === 5) {
//         arr.push(element)
//     }
// })
// console.log(arr)

//11.
// let arr = []
// let temp = 0
// webTechs.forEach((element) => {
//     if (temp < element.length) {
//         temp = element.length
//     }
// })
// webTechs.forEach((element) => {
//     if (element.length === temp) {
//         arr.push(element)
//     }
// })
// console.log(arr)

// 2nd possibility
// let nuevo = ''
// console.log(webTechs[1].length)
// for (let i = 0; i < webTechs.length; i++){
//   if(webTechs[i].length > nuevo.length){
//     nuevo = webTechs[i]
//   }
// }
// console.log(nuevo)

//12.
// let arrGlobal = []
// webTechs.forEach((element) => {
//     let arr = []
//     arr.push(element)
//     arr.push(element.length)
//     arrGlobal.push(arr)
// })
// console.log(arrGlobal)
//13.

// const mernStack = ['MongoDB', 'Express', 'React', 'Node']
// let arr = []
// let initial = ''
// for (let i = 0; i < mernStack.length; i++) {
//     initial = mernStack[i].slice(0, 1)
//     arr.push(initial)
// }
// console.log(arr.join(""))

//14.
// const webStack = ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"]

// for (let i = 0; i < webStack.length; i++) {
//     console.log(webStack[i])
// }

//15.
// const fruits = ['banana', 'orange', 'mango', 'lemon']

// let arr = []
// let range = fruits.length - 1
// for (let i = 0; i < fruits.length; i++) {
//     arr.push(fruits[range - i])
// }
// console.log(arr)

//16.
// for (let i = 0; i < fullStack.length ; i++){
//     for (let j = 0; j < fullStack[i].length; j++){
//       console.log(fullStack[i][j])
//     }
//   }

//Exercises: Level 3
//1.Copy countries array(Avoid mutation)
//2. Arrays are mutable. Create a copy of array which does not modify the original. Sort the copied array and store in a variable sortedCountries
//3. Sort the webTechs array and mernStack array
//4. Extract all the countries contain the word 'land' from the countries array and print it as array
//5. Find the country containing the hightest number of characters in the countries array
//6. Extract all the countries contain the word 'land' from the countries array and print it as array
//7. Extract all the countries containing only four characters from the countries array and print it as array
//8. Extract all the countries containing two or more words from the countries array and print it as array
//9. Reverse the countries array and capitalize each country and stored it as an array

//1.
// const newArray = [...countries];
// console.log(newArray)

//2.
// const newArray = [...countries]
// const sortedCountries = newArray.sort()
// console.log(countries)
// console.log(sortedCountries)

//3.
// console.log(mernStack.sort())
// console.log(webTechs.sort())

//4.
// let arr = []
// countries.forEach(el => {
//     if (el.includes("land") === true) {
//         arr.push(el)
//     }
// })
// console.log(arr)

//5.
// let arr = []
// let temp = 0
// countries.forEach((el) => {
//     if (temp < el.length) {
//         temp = el.length
//     }
// })
// countries.forEach((el) => {
//     if (el.length === temp) {
//         arr.push(el)
//     }
// })
// console.log(arr)

//6.
// let arr = []
// countries.forEach(el => {
//     if (el.includes("land") === true) {
//         arr.push(el)
//     }
// })
// console.log(arr)

//7.
// let arr = []
// countries.forEach(el => {
//     if (el.length === 4) {
//         arr.push(el)
//     }
// })
// console.log(arr)

//8.
// let arr = []
// countries.forEach(el => {
//     if (el.includes(" ") === true) {
//         arr.push(el)
//     }
// })
// console.log(arr)

//9.
// const arr = [...countries]
// let countriesReversed = []
// arr.forEach(el => {
//     el = el.toUpperCase()
//     countriesReversed.push(el)
// })
// console.log(countriesReversed.reverse())