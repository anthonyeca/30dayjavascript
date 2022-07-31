import { countries } from "./countries.js"
import { webTechs } from "./web_techs.js"

// Exercise: Level 1
//1. Declare an empty array;
//2. Declare an array with more than 5 number of elements
//.3 Find the length of your array
//.4 Get the first item, the middle item and the last item of the array
//5. Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
//6. Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
//7. Print the array using console.log()
//8. Print the number of companies in the array
//9. Print the first company, middle and last company
//10. Print out each company
//11. Change each company name to uppercase one by one and print them out
//12. Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
//13. Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
//14. Filter out companies which have more than one 'o' without the filter method
//15. Sort the array using sort() method
//16. Reverse the array using reverse() method
//17. Slice out the first 3 companies from the array
//18. Slice out the last 3 companies from the array
//19. Slice out the middle IT company or companies from the array
//20. Remove the first IT company from the array
//21. Remove the middle IT company or companies from the array
//22. Remove the last IT company from the array
//23. Remove all IT companie

//1.
//const emptyArr = []
//2.
// const frutas = ["Manzana", "Pera", "Piña", "Melon", "Patilla"]
//3.
// console.log(frutas.length)
//4.
// console.log(`First item: ${frutas[0]}\nMiddle item: ${frutas[(frutas.length - 1) / 2]}\nLast item: ${frutas[frutas.length - 1]}`)
//5.
// const mixedDataTypes = ["Manzana", 5, true, null, "", frutas,]
// console.log(mixedDataTypes)
// console.log(mixedDataTypes.length)
//6. 
const itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"]
//7.
// console.log(itCompanies)
//8.
// console.log(itCompanies.length)
//9.
// console.log(`First item: ${itCompanies[0]}\nMiddle item: ${itCompanies[(itCompanies.length - 1) / 2]}\nLast item: ${itCompanies[itCompanies.length - 1]}`)
//10.
// itCompanies.forEach(el => {
//     console.log(el)
// });
//11.
// itCompanies.forEach(el => {
//     console.log(el.toUpperCase())
// });
//12.
//console.log(itCompanies.join(), "are big IT companies")
//13.
// let busqueda = prompt("Que Compañia deseas buscar?: ")
// itCompanies.includes(busqueda) ? console.log("Company found") : console.log("Company Not Found")
//14.
// itCompanies.forEach(el => {
//     elements = el.toLowerCase().split('')
//     if (elements.includes("o") === true) {
//         let sum = 0
//         elements.forEach(letra => {
//             if (letra === "o") {
//                 sum = sum + 1
//                 if (sum === 2) {
//                     console.log(`${elements.join("")} Tiene 2 "o"`)
//                 }
//             }
//         });
//     } else {
//         console.log(`${el} No contiene "o"`)
//     }
// });
//15.
// console.log(itCompanies.sort())
//16.
// console.log(itCompanies.reverse())
//17.
// console.log(itCompanies.slice(0, 3))
//18.
// console.log(itCompanies.reverse().slice(0, 3).reverse())
//19.
// console.log(itCompanies.slice(3, 4))
//20.
// itCompanies.shift()
// console.log(itCompanies)
//21.
// itCompanies.splice((itCompanies.length - 1) / 2, 1)
// console.log(itCompanies)
//22.
// itCompanies.pop()
// console.log(itCompanies)
//23.
// itCompanies.splice(0)
// console.log(itCompanies)

//Exercise: Level 2
//1. Create a separate countries.js file and store the countries array in to this file, create a separate file web_techs.js and store the webTechs array in to this file. Access both file in main.js file
//2. First remove all the punctuations and change the string to array and count the number of words in the array
//3. In the following shopping cart add, remove, edit items
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
//4. add 'Meat' in the beginning of your shopping cart if it has not been already added
//5. add Sugar at the end of you shopping cart if it has not been already added
//6. remove 'Honey' if you are allergic to honey
//7. modify Tea to 'Green Tea'
//8. In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.
//9. In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.
//10. Concatenate the following two variables and store it in a fullStack variable.
// const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
// const backEnd = ['Node','Express', 'MongoDB']


//1.
// console.log(countries)
// console.log(webTechs)
//2.
// let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
// const words = text.split(" ")
// console.log(words)
// console.log(words.length)
//4.
// shoppingCart.unshift("Meat")
// console.log(shoppingCart)
//5.
// shoppingCart.push("Sugar")
// console.log(shoppingCart)
//6.
// shoppingCart.pop()
// console.log(shoppingCart)
//7.
// let teaPos = shoppingCart.indexOf("Tea")
// shoppingCart[teaPos] = "Gren Tea"
// console.log(shoppingCart)
// const shoppingCartV2 = shoppingCart.map(el => el === "Tea" ? "Green Tea" : el)
// console.log(shoppingCartV2)
//8.
// console.log(countries)
// if (countries.includes("Ethiopia") === true) {
//     console.log("ETHIOPIA")
// } else {
//     countries.push("Ethiopia")
// }
// console.log(countries)
//9.
// console.log(webTechs)
// if (webTechs.includes("Sass") === true) {
//     console.log("Sass is a CSS preprocess")
// } else {
//     webTechs.push("Sass")
// }
// console.log(webTechs)
//10.
// const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
// const backEnd = ['Node', 'Express', 'MongoDB']
// let fullStack = frontEnd.concat(backEnd)
// console.log(fullStack)

//Exercise: Level 3
//1. The following is an array of 10 students ages:
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
// Sort the array and find the min and max age
console.log(`The minimun age is : ${ages.sort()[0]}, the maximun age in the list is: ${ages.sort()[ages.length - 1]}`)
// Find the median age(one middle item or two middle items divided by two)
let middleAge = ages.sort().length / 2
console.log(`The median age is ${ages[middleAge]}`)
// Find the average age(all items divided by number of items)
let sumAge = 0
ages.forEach(el => {
    sumAge += el
});
let avgAge = sumAge / ages.length
console.log(`The average age is: ${avgAge}`)
// Find the range of the ages(max minus min)
console.log(`The range of the ages are from: ${ages.sort()[0]} to: ${ages.sort()[ages.length - 1]}`)
// Compare the value of (min - average) and (max - average), use abs() method
let minAvg = Math.abs(ages.sort()[0] - avgAge)
let maxAvg = Math.abs(ages.sort()[ages.length - 1] - avgAge)
console.log(`Value of min - avg: ${minAvg} and max - avg ${maxAvg}`)
//1.Slice the first ten countries from the countries array
// console.log(countries.slice(0, 10))
// Find the middle country(ies) in the countries array
console.log(countries[(countries.length - 1) / 2])
// Divide the countries array into two equal arrays if it is even. If countries array is not even , one more country for the first half.
let countries1 = countries.slice(0, Math.round(countries.length / 2))
let countries2 = countries.slice(Math.round((countries.length) / 2), countries.length)
console.log(countries1)
console.log(countries2)
