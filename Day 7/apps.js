import { countries } from "./countries.js"

//Exercises Level 1
//1. Declare a function fullName and it print out your full name.
//2. Declare a function fullName and now it takes firstName, lastName as a parameter and it returns your full - name.
//3. Declare a function addNumbers and it takes two two parameters and it returns sum.
//4. An area of a rectangle is calculated as follows: area = length x width. Write a function which calculates areaOfRectangle.
//5. A perimeter of a rectangle is calculated as follows: perimeter= 2x(length + width). Write a function which calculates perimeterOfRectangle.
//6. A volume of a rectangular prism is calculated as follows: volume = length x width x height. Write a function which calculates volumeOfRectPrism.
//7. Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates areaOfCircle
//8. Circumference of a circle is calculated as follows: circumference = 2πr. Write a function which calculates circumOfCircle
//9. Density of a substance is calculated as follows:density= mass/volume. Write a function which calculates density.
//10. Speed is calculated by dividing the total distance covered by a moving object divided by the total amount of time taken. Write a function which calculates a speed of a moving object, speed.
//11. Weight of a substance is calculated as follows: weight = mass x gravity. Write a function which calculates weight.
//12. Temperature in oC can be converted to oF using this formula: oF = (oC x 9/5) + 32. Write a function which convert oC to oF convertCelsiusToFahrenheit.
//13. Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is underweight, normal, overweight or obese based the information given below.
// The same groups apply to both men and women.
// Underweight: BMI is less than 18.5
// Normal weight: BMI is 18.5 to 24.9
// Overweight: BMI is 25 to 29.9
// Obese: BMI is 30 or more
//14. Write a function called checkSeason, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer.
//15. Math.max returns its largest argument. Write a function findMax that takes three arguments and returns their maximum with out using Math.max method.

// //1
// function fullName (){
//     console.log("Anthony")
//   }

//   fullName()

//   //2
//   function fullName2 (name,lastName){
//     return(`${name} ${lastName}`)
//   }

//   fullName2("Anthony","Challout")

//   //3
//   function addNumbers(num1,num2){
//     return sum = num1+num2
//   }
//   addNumbers(2,2)

//   //4
//   function areaOfRectangle (length,width){
//     return area = length * width
//   }

//   areaOfRectangle(2,3)

//   //5
//   function perimeterOfRectangle(length,width){
//     return area = 2*(length * width)
//   }

//   perimeterOfRectangle(2,3)

//   //6

//   function volumeOfRectPrism (length,width,height){
//     return volume = length * width* height
//   }

//   volumeOfRectPrism(4,3,3)


//   //7

//   function areaOfCircle(r){
//     return area = (r * r * Math.PI)
//   }

//   areaOfCircle(3)

//   //8
//   function circumferenceOfCircle(r){
//     return area = (2 * Math.PI) * r
//   }

//   circumferenceOfCircle(3)

//   //9

//   function density(mass,volume){
//     return density = mass/volume
//   }

//   density(3,4)

//   //10

//   function calculateSpeed(distance,time){
//     return speed = distance/time
//   }

//   calculateSpeed(100,5)

//   //11

//   function weight(mass,gravity=9.8){
//     return weight=mass/gravity
//   }

//   weight(80)

//   //12

//   function convertCelsiusToFahrenheit(celcious){
//     return grades=(celcious * 9/5) +32
//   }

//   convertCelsiusToFahrenheit(30)

//   //13

//   function calculateBMI(KG,height){
//     let BMI = KG / (height * height)
//     if (BMI > 30) {
//      return "You are obese"
//     }
//     if (BMI > 25 && BMI < 29.9) {
//      return "You are Overweight"
//     }
//     if (BMI > 18.5 && BMI < 24.9) {
//       return "You are Normal"
//     }
//     if (BMI < 18.5){
//       return  "You are Underweight"
//     }
//     }

//   calculateBMI(77,1.75)

//   //14

//   function checkSeason(month){
//    if (month === 'January' || month === 'February' || month === 'March'){
//      return "Winter"
//    }else if  (month === 'April' || month === 'May' || month === 'June'){
//    return  "Spring"
//   }
//   else if (month ==='July' || month === 'August'||month === 'September'){
//     return "Summer"
//   }

//   else{
//     return "Autumn"
//   }
//   }

//   checkSeason('January')

//   //15
// function findMax(...args){
//     let arr = []
//     let MaxNumber = 0
//     arr.push(...args)
//     arr.forEach(el => {
//       if (el > MaxNumber) {
//         MaxNumber = el
//       }
//     })
//     return MaxNumber
//   }

//   console.log(findMax(3,2,5))

// SAME WITH ARROW FUNCTION

// const findMax = (...args) => {
//     let arr = []
//     let maxNum = 0
//     arr.push(...args)
//     arr.forEach(el => {
//       if (el > maxNum) {
//         maxNum = el
//       }
//     })
//     return maxNum
//   }

//   console.log(findMax(5,2,3,6,78,8,3))

// Exercises: Level 2
//1. Linear equation is calculated as follows: ax + by + c = 0. Write a function which calculates value of a linear equation, solveLinEquation.
//2. Quadratic equation is calculated as follows: ax2 + bx + c = 0. Write a function which calculates value or values of a quadratic equation, solveQuadEquation.
//3. Declare a function name printArray. It takes array as a parameter and it prints out each value of the array.
//4. Write a function name showDateTime which shows time in this format: 08/01/2020 04:08 using the Date object.
//5. Declare a function name swapValues. This function swaps value of x to y.
//6. Declare a function name reverseArray. It takes array as a parameter and it returns the reverse of the array (don't use method).
//7. Declare a function name capitalizeArray. It takes array as a parameter and it returns the - capitalizedarray.
//8. Declare a function name addItem. It takes an item parameter and it returns an array after adding the item
//9. Declare a function name removeItem. It takes an index parameter and it returns an array after removing an item
//10. Declare a function name sumOfNumbers. It takes a number parameter and it adds all the numbers in that range.
//11. Declare a function name sumOfOdds. It takes a number parameter and it adds all the odd numbers in that - range.
//12. Declare a function name sumOfEven. It takes a number parameter and it adds all the even numbers in that - range.
//13. Declare a function name evensAndOdds . It takes a positive integer as parameter and it counts number of evens and odds in the number.
//14. Write a function which takes any number of arguments and return the sum of the arguments
//15. Writ a function which generates a randomUserIp.
//16. Write a function which generates a randomMacAddress
//17. Declare a function name randomHexaNumberGenerator. When this function is called it generates a random hexadecimal number. The function return the hexadecimal number.
//18 Declare a function name userIdGenerator. When this function is called it generates seven character id. The function return the id.


// const solveLinEquation = (a = 0, b = 0, c = 0) => {
//     let x = (c - b) / a;
//     if (a != 0) {
//         return (`The solution is x = ${x}`);
//     } else {
//         return ('There is no solution for the equation')
//     }
// }

// solveLinEquation(3, 5, 5)

//3.
// const printArray = arr => {
//     arr.forEach(el => {
//       console.log(el)
//     })
//   }

//4.
// let dateOriginal = new Date()
// let date = dateOriginal.toLocaleDateString();
// let time = dateOriginal.toLocaleTimeString();
// const showDateTime = () =>{
//   console.log(date , time)
//   }

// showDateTime()

// //5.
// const swapValues = (x,y) => {
//     let temp = x
//     x = y
//     y = temp
//     return (`The value of X=${x} and Y=${y}`)
//   }

//   swapValues(20,30)

//6.
// const reverseArray = arr => {
//     let newArr = []
//     let length = arr.length
//     for (let i = 0; i < arr.length; i++) {
//         length--
//         newArr.push(arr[length])
//     }
//     return newArr
// }

//7.
// const capitalizeArray = arr => {
//     let newArr = []
//     arr.forEach(el => {
//         let newEl = el.slice(0, 1).toUpperCase()
//         let elWithoutFirst = el.slice(1, el.length)
//         let capitalizedWord = newEl.concat(elWithoutFirst)
//         newArr.push(capitalizedWord)
//     })
//     return newArr
// }
// capitalizeArray(["anthony", "Pedro", "ramon", "portugal"])

//8.
// const addItem = (...item) => {
//     let arr = []
//     arr.push(...item)
//     return arr
// }
// addItem("hola", 5)

//9.
// const removeItem = (index) => {
//     let arr = [1,2,3,4,5,6,7,8,9]
//     arr.splice(index,1)
//     return arr
//   }
//   removeItem(1)

//10.
// const sumOfNumbers = (number) => {
//     let arr = []
//     for(let i = 0; i <= number; i++){
//       arr.push(i)
//     }
//     return arr
//   }
//   sumOfNumbers(5)

//11.
// const sumOfOdds = (number) => {
//     let arr = []
//     for (let i = 0; i <= number; i++) {
//         if (i % 2 != 0) {
//             arr.push(i)
//         }
//     }
//     return arr
// }
// sumOfOdds(5)

//12.
// const sumOfEven = (number) => {
//     let arr = []
//     for(let i = 0; i <= number; i++){
//       if(i % 2 == 0){
//         arr.push(i)
//       }
//     }
//     return arr
//   }
//   sumOfEven(5)

//13.
// const evensAndOdds = (number) => {
//     let even = 0
//     let odds = 0
//     for (let i = 0; i <= number; i++) {
//         if (i % 2 == 0) {
//             even += 1
//         } else {
//             odds += 1
//         }
//     }
//     return (`The number of evens are:${even} and odds: ${odds}`)
// }

// evensAndOdds(100)

//14.
// const sum = (...item) => {
//     let arr = []
//     let sum = 0
//     arr.push(...item)
//     arr.forEach(el => {
//         sum = sum + el
//     })
//     return sum
// }
// sum(1, 2, 3)
// sum(1, 2, 3, 4)

//15.
// const randomUserIp = () => {
//     let ip0 = Math.floor(Math.random() * 255)
//     let ip1 = Math.floor(Math.random() * 255)
//     let ip2 = Math.floor(Math.random() * 255)
//     let ip3 = Math.floor(Math.random() * 255)
//     return (`${ip0}.${ip1}.${ip2}.${ip3}`)
// }

// randomUserIp()

//16.
//MY SOLUTION
// const randomMacAddress = () => {
//     let hexa = ["A", "B", "C", "D", "E", "F", 0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
//     let arr = []
//     for (let i = 0; i <= 12; i++) {
//         let random = Math.floor(Math.random() * 12)
//         arr.push(hexa[random])
//     }
//     let newArr = []
//     console.log(arr)
//     for (let i = 0; i < 12; i++) {
//         newArr.push(arr[i])
//         if (i % 2 != 0) {
//             newArr.push(":")
//         }
//     }
//     newArr.pop()
//     return newArr.join("")
// }

// randomMacAddress()

// //COOL ONE
// "XX:XX:XX:XX:XX:XX".replace(/X/g, function () {
//     return "0123456789ABCDEF".charAt(Math.floor(Math.random() * 16))
// });

//17.
// const randomHexaNumberGenerator = () => {
//     let hexa = ["A", "B", "C", "D", "E", "F", 0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
//     let arr = []
//     let random = Math.floor(Math.random() * 12)
//     let random2 = Math.floor(Math.random() * 12)
//       let random3 = Math.floor(Math.random() * 12)
//       if (random2 > 50) {
//         arr.push(hexa[random])
//     }
//     arr.push(hexa[random3])
//     return arr.join("")
// }
// randomHexaNumberGenerator()

//18.
// const userIdGenerator = () => {
//     let hexa = ["0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"]
//     let arr = []
//     for (let i = 0; i < 7; i++) {
//         let random = Math.floor(Math.random() * hexa.toString().length)
//         arr.push(hexa.toString()[random])
//     }
//     return arr.join("")
// }

// userIdGenerator()

//Exercises: Level 3
//1. Modify the userIdGenerator function. Declare a function name userIdGeneratedByUser. It doesn’t take any parameter but it takes two inputs using prompt(). One of the input is the number of characters and the second input is the number of ids which are supposed to be generated.
//2. Write a function name rgbColorGenerator and it generates rgb colors.
//3. Write a function arrayOfHexaColors which return any number of hexadecimal colors in an array.
//4. Write a function arrayOfRgbColors which return any number of RGB colors in an array.
//5. Write a function convertHexaToRgb which converts hexa color to rgb and it returns an rgb color.
//6. Write a function convertRgbToHexa which converts rgb to hexa color and it returns an hexa color.
//7. Write a function generateColors which can generate any number of hexa or rgb colors.
//8. Call your function shuffleArray, it takes an array as a parameter and it returns a shuffled array
//9. Call your function factorial, it takes a whole number as a parameter and it return a factorial of the number
//10. Call your function isEmpty, it takes a parameter and it checks if it is empty or not
//11. Call your function sum, it takes any number of arguments and it returns the sum.
//12. Write a function called sumOfArrayItems, it takes an array parameter and return the sum of all the items. Check if all the array items are number types. If not give return reasonable feedback.
//13. Write a function called average, it takes an array parameter and returns the average of the items. Check if all the array items are number types. If not give return reasonable feedback.
//14. Write a function called modifyArray takes array as parameter and modifies the fifth item of the array and return the array. If the array length is less than five it return 'item not found'.
//15. Write a function called isPrime, which checks if a number is prime number.
//16.Write a functions which checks if all items are unique in the array.
//17. Write a function which checks if all the items of the array are the same data type.
//18. JavaScript variable name does not support special characters or symbols except \$ or _. Write a function isValidVariable which check if a variable is valid or invalid variable.
//19. Write a function which returns array of seven random numbers in a range of 0-9. All the numbers must be unique.
//20. Write a function called reverseCountries, it takes countries array and first it copy the array and returns the reverse of the original array


//1.
// const userIdGeneratedByUser = () => {
//     let numChar = 7
//     let numIds = 5
//     let hexa = ["0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"]
//     let arr1 = []
//     do {
//         let arr = []
//         for (let j = 0; j < numChar; j++) {
//             let random = Math.floor(Math.random() * hexa.toString().length)
//             arr.push(hexa.toString()[random])
//         }
//         console.log(arr.join(""))
//         numIds -= 1
//     } while (numIds > 0)
// }
// userIdGeneratedByUser()

//2.
// const rgbColorGenerator = () => {
//     let r = Math.floor(Math.random() * 256)
//     let g = Math.floor(Math.random() * 256)
//     let b = Math.floor(Math.random() * 256)
//     return `rgb(${r},${g},${b})`
// }
// rgbColorGenerator()

//3.
// const arrayOfHexaColors = () => {
//     let arr = []
//     let hexa = ["A", "B", "C", "D", "E", "F", 0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
//     arr.push('#')
//     for (let i = 0; i < 6; i++) {
//         let random = Math.floor(Math.random() * 12)
//         arr.push(hexa[random])
//     }
//     return arr.join('')
// }
// arrayOfHexaColors()

//4.
// const arrayOfRgbColors = () => {
//     let arr = []
//     let numberOfArrays = prompt("Enter the number of arrays to be generated")
//     do {
//         let r = Math.floor(Math.random() * 256)
//         let g = Math.floor(Math.random() * 256)
//         let b = Math.floor(Math.random() * 256)
//         let rgb = `rgb(${r},${g},${b})`
//         arr.push(rgb)
//         numberOfArrays -= 1
//     } while (numberOfArrays > 0)
//     return console.log(arr)
// }
// arrayOfRgbColors()

//5.
// const convertHexaToRgb = (hex) => {
//     const r = parseInt(hex.slice(1, 3), 16);
//     const g = parseInt(hex.slice(3, 5), 16);
//     const b = parseInt(hex.slice(5, 7), 16);
//     return `rgb(${r},${g},${b})`
// }
// convertHexaToRgb("#ff33ff")

//6.
// const convertRgbToHexa = (r, g, b) => {
//     r = r.toString(16)
//     g = g.toString(16)
//     b = b.toString(16)
//     return (`#${r}${g}${b}`)
// }
// convertRgbToHexa(255, 51, 255)

//7.
// const generateColors = (type, number) => {
//     let arr = []
//     do {
//         let r = Math.floor(Math.random() * 255)
//         let g = Math.floor(Math.random() * 255)
//         let b = Math.floor(Math.random() * 255)
//         let rgb = `rgb(${r},${g},${b})`
//         let h = r.toString(16)
//         let e = g.toString(16)
//         let x = b.toString(16)
//         let hex = `#${h}${e}${x}`
//         number -= 1
//         if (type == 'hexa') {
//             arr.push(hex)
//         } else {
//             arr.push(rgb)
//         }
//     } while (number > 0)
//     return arr
// }
// generateColors('hexa', 3)

//8.
// let arr = [1, 2, 3, 4, 5]

// const shuffleArray = (arr) => {
//     for (let i = arr.length - 1; i > 0; i--) {
//         let j = Math.floor(Math.random() * (i + 1));
//         let temp = arr[i];
//         arr[i] = arr[j];
//         arr[j] = temp;
//     }
//     return arr;
// }
// shuffleArray(arr)

//9.
// const factorial = (n) => {
//     let sum = 1;
//     for (let i = 2; i <= n; i++) {
//         sum = sum * i;
//     }
//     return sum;
// }
// factorial(5)

//10.
// const isEmpty  = (param) => {
//   if (param === undefined) return undefined
//   if (param === null) return null
//   if(param.length <= 0) return "Empty"

// }
// isEmpty(5)

//11.
// const sum = (...args) => {
//     let sum = 0
//     args.forEach(el => {
//         sum = el + sum
//     })
//     return sum
// }
// sum(5, 3, 3, 5, 20)

//12.
// const sumOfArrayItems = (param) => {
//     let arr = []
//     let sum = 0
//     if (Array.isArray(param) != true) {
//         return "You should give an Array as parameter"
//     }
//     param.forEach(el => {
//         if (typeof el == "number") {
//             sum += el
//         } else {
//             return console.log("You should put just numbers")
//         }
//     })
//     return sum
// }
// sumOfArrayItems(arr1)

//13.
// let arr1 = [5, 6, 7]
// const average = (param) => {
//     let arr = []
//     let sum = 0
//     let avg = 0
//     if (Array.isArray(param) != true) {
//         return "You should give an Array as parameter"
//     }
//     param.forEach(el => {
//         if (typeof el == "number") {
//             sum += el
//             avg = sum / param.length
//         } else {
//             return console.log("You should put just numbers")
//         }
//     })
//     return avg
// }
// average(arr1)

//14.
// let arr1 = [1, 2, 3, 4, 5, 6, 7]

// const modifyArray = (arr) => {
//     let newArr = []
//     if (Array.isArray(arr) != true) {
//         return "You should give an Array as parameter"
//     }
//     if (arr.length < 5) {
//         return console.log("Item not found")
//     }
//     return arr[4]
// }
// modifyArray(arr1)

// modifyArray(['Avocado', 'Tomato', 'Potato', 'Mango', 'Lemon', 'Carrot']);

// modifyArray(['Google', 'Facebook', 'Apple', 'Amazon', 'Microsoft', 'IBM'])

// modifyArray(['Google', 'Facebook', 'Apple', 'Amazon'])

//15.
// const isPrime = (number) => {
//     if (number % 2 == 0 || number % 3 == 0) {
//         return "No es primo"
//     }
//     if (number % 2 != 0 && number / number == 1) {
//         return "Es primo"
//     }
// }

// isPrime(331)

//16.
// const uniqueArr = (arr) => {
//     if (arr.length === new Set(arr).size == true) {
//         return "All items are unique"
//     } else {
//         return "You have items duplicated"
//     }
// }
// uniqueArr([1, 4, 2, 3])

//17.
// const checkDataType = (param) => {
//     let number = 0
//     let string = 0
//     param.forEach(el => {
//         if (typeof el == "number") {
//             number += 1
//         } else {
//             string += 1
//         }
//     })
//     if (number >= 1 && string >= 1) {
//         return console.log("Diferent types")
//     } else {
//         return console.log("All items are the same data type")
//     }
// }
// checkDataType([1, 3, 4, "hla"])

//18.
//NEED TO SOLVE LATER

//19.
// FAIL TRY
// const uniqueArray4 = ()=> {
//     let arr = []
//     for (let i = 0;i < 7; i++){
//       let random = Math.floor(Math.random() * 9)  
//       arr.push(random)
//     }
//     let newArrClean = [...new Set(arr)]
//     console.log(newArrClean)
//     let newArrCleanLength = newArrClean.length
//       do{
//         let random = Math.floor(Math.random() * 9)  
//         newArrClean.push(random)
//         newArrCleanLength = newArrClean.length
//       }while(newArrCleanLength < 7)
//         if(newArrClean.length > 7){
//           newArrClean.pop()
//         }

//     return newArrClean
//   }
//   uniqueArray4()

//20.
const reverseCountries = (arr) => {
    let newArr = [...new Set(arr)]
    return newArr.reverse()
}

reverseCountries(countries)