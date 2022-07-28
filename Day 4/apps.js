//Exercises: Level 1
//1. Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.
//2. Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.
//3. If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in to ways
//     using if else
//     ternary operator.
//   let a = 4
//   let b = 3
//4. Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?

//1.
// let age = prompt("Introduce tu edad: ")
// if (age >= 18) {
//     console.log("Eres mayor de edad puedes conducir")
// } else {
//     console.log(`Eres menor de edad te faltan ${18 - age} años para poder conducir`)
// }
//2.
// let yourAge = prompt("Introduce tu edad: ")
// let myAge = 20

// if (yourAge > myAge) {
//     console.log(`Eres ${yourAge - myAge} años mas viejo que yo`)
// } else {
//     console.log(`Soy ${myAge - yourAge} años mas viejo que tu`)
// }
//3.
// let a = 5
// let b = 3
// a > b
//     ? console.log(`${a} es mayor que ${b}`)
//     : console.log(`${a} es menor que ${b}`)
//4.
// let a = 2
// a % 2 == 0
//     ? console.log(`${a} es un numero par`)
//     : console.log(`${a} es un numero impar`)

//Exercises: Level 2
//1. Write a code which can give grades to students according to theirs scores:
// 80-100, A
// 70-89, B
// 60-69, C
// 50-59, D
// 0-49, F
//2. Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
//September, October or November, the season is Autumn.
//December, January or February, the season is Winter.
//March, April or May, the season is Spring
//June, July or August, the season is Summer
//3. Check if a day is weekend day or a working day. Your script will take day as an input.

//1.
// let score = 90
// if (score > 0 && score < 50) {
//     console.log("F")
// } else if (score > 49 && score < 60) {
//     console.log("D")
// } else if (score > 59 && score < 70) {
//     console.log("C")
// } else if (score > 69 && score < 90) {
//     console.log("B")
// } else if (score > 79 && score < 101) {
//     console.log("A")
// } else {
//     console.log(`${score} No es valido`)
// }

// let estacion = prompt("Introduce el mes")
// if (estacion == "September" | estacion == "October" | estacion == "November") {
//     console.log("Autumn")
// } else if (estacion == "December" | estacion == "January" | estacion == "February") {
//     console.log("Winter")
// } else if (estacion == "March" | estacion == "April" | estacion == "May") {
//     console.log("Spring")
// } else if (estacion == "June" | estacion == "July" | estacion == "August") {
//     console.log("Summer")
// } else {
//     console.log(`${estacion} No es un mes`)
// }
//3.
// let day = prompt("Introduce el dia")
// let dayLower = day.toLowerCase()
// switch (dayLower) {
//     case 'monday':
//         console.log(`${dayLower} is a working day`)
//         break
//     case 'tuesday':
//         console.log(`${dayLower} is a working day`)
//         break
//     case 'wednesday':
//         console.log(`${dayLower} is a working day`)
//         break
//     case 'thursday':
//         console.log(`${dayLower} is a working day`)
//         break
//     case 'friday':
//         console.log(`${dayLower} is a working day`)
//         break
//     case 'saturday':
//         console.log(`${dayLower} is a weekend`)
//         break
//     case 'sunday':
//         console.log(`${dayLower} is a weekend`)
//         break
//     default:
//         console.log('It is not a week day.')
// }

//Exercises: Level 3
//1. Write a program which tells the number of days in a month.
// let a = prompt('Enter the month:');
// let Month = a.toLowerCase();

// if ('january' === Month || 'march' === Month || 'may' === Month || 'july' === Month || 'agust' === Month || 'october' === Month || 'december' === Month) {
//     console.log(`${Month} has 31 days`)
// }
// else if ('February' === Month) {
//     console.log(`${Month} has 28 days`);
// }
// else if ('april' === Month || 'june' === Month || 'september' === Month || 'november' === Month) {
//     console.log(`${Month} has 30 days`)
// }
// else {
//     console.log('Re-Enter');
// }