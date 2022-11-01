//Exercises: Level 1
//1.Calculate the total annual income of the person from the following text. ‘He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.’
//2. The position of some particles on the horizontal x-axis -12, -4, -3 and -1 in the negative direction, 0 at origin, 4 and 8 in the positive direction. Extract these numbers and find the distance between the two furthest particles.
//3. Write a pattern which identify if a string is a valid JavaScript variable

//1.
// const pattern = /\d+/g
// const income = text.match(pattern)
// let sum = 0
// income.forEach((el) => {
//   sum += Number(el)
// })
// console.log(sum)

//2.
// let pattern = /[^?]\d+/g
// const arr = text.match(pattern)
// arrSorted = arr.sort((a, b) => {
//   return a - b
// })
// const distance =
//   Math.abs(Number(arrSorted[0])) + Number(arrSorted[arrSorted.length - 1])
// console.log(`The distance between the two furthest particles is: ${distance}`)

//3.
// const is_valid_variable = (variable) => {
//   let pattern = /^[a-z_]+$/g
//   const valid = pattern.test(variable)
//   return valid === true ? "Nombre de variable Valido" : "Nombre invalido"
// }
// is_valid_variable("first_name")
// is_valid_variable("first-name")
// is_valid_variable("1first_name")
// is_valid_variable("firstname")

//Exercises: Level 2
//1. Write a function called tenMostFrequentWords which get the ten most frequent word from a string?

// const tenMostFrequentWords = (text, slice) => {
//   const pattern = /[a-z]+/gi
//   let matched = text.match(pattern)
//   const occurences = matched.reduce((acc, curr) => {
//     acc[curr] = acc[curr] === undefined ? 1 : acc[curr] + 1
//     return acc
//   }, {})
//   return Object.keys(occurences)
//     .map((word) => ({ word, count: occurences[word] }))
//     .sort((a, b) => {
//       return b.count - a.count
//     })
//     .slice(0, slice)
// }
// console.log(tenMostFrequentWords(paragraph, 10))

//Exercises: Level 3
//1.Write a function which cleans text. Clean the following text. After cleaning, count three most frequent words in the string.

//1.
// const cleanText = (text) => {
//   let pattern = /[@%$&#;.!?]/g
//   let newText = text.replace(pattern, "")
//   console.log(newText)
//   let arr = newText.split(" ")
//   const occurences = arr.reduce((acc, curr) => {
//     acc[curr] = acc[curr] === undefined ? 1 : acc[curr] + 1
//     return acc
//   }, {})
//   return Object.keys(occurences)
//     .map((word) => ({ word, count: occurences[word] }))
//     .sort((a, b) => {
//       return b.count - a.count
//     })
//     .slice(0, 3)
// }
// console.log(cleanText(sentence))
