//Exercises: Level 1
//1. Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.
//2. Check if type of '10' is equal to 10
//3. Check if parseInt('9.8') is equal to 10
//4. Boolean value is either true or false.
//5. Write three JavaScript statement which provide truthy value.
//6. Write three JavaScript statement which provide falsy value.
//7. Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()
//8. 4 > 3
//9. 4 >= 3
//10.  4 < 3
//11.  4 <= 3
//12.  4 ==  4
//13.  4 ===  4
//1 4.  4 !=  4
//15.  4 !==  4
//16.  4 != ' 4'
//17.  4 == ' 4'
//18.  4 === ' 4'
//19. Find the length of python and jargon and make a falsy comparison statement.
//20. Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()
//21. > 3 && 10 < 12
//22. > 3 && 10 > 12
//23. > 3 || 10 < 12
//24. > 3 || 10 > 12
//25. !(4 > 3)
//26. !(4 < 3)
//27. !(false)
//28. !(4 > 3 && 10 < 12)
//29. !(4 > 3 && 10 > 12)
//30. !(4 === '4')
//31. There is no 'on' in both dragon and python
//32. Use the Date object to do the following activities
//33. What is the year today?
//34. What is the month today as a number?
//35. What is the date today?
//36. What is the day today as a number?
//37. What is the hours now?
//38. What is the minutes now?
//39. Find out the numbers of seconds elapsed from January 1, 1970 to now.

//1.
let firstName = "Anthony"
let lastName = "Challout"
let country = "Venezuela"
let city = "Caracas"
let age = 20
let isMarried = false
const now = new Date()
let year = now.getFullYear()
console.log(year)
console.log(typeof (firstName))
console.log(typeof (lastName))
console.log(typeof (country))
console.log(typeof (city))
console.log(typeof (age))
console.log(typeof (isMarried))
console.log(typeof (year))
//2. 
console.log(typeof ('10') == 10)
//3.
console.log(typeof (parseInt('9.8')) == 10)
//4.
console.log(typeof (isMarried))
//5.
console.log(5 > 4)
console.log(firstName != country)
console.log(isMarried == 0)
//6.
console.log(3 > 7)
console.log(age == city)
console.log(isMarried != 0)
//8.
console.log("***8***")
console.log(4 > 3) //true
//9.
console.log(4 >= 3) //true
//10.
console.log(4 < 3) //false
//11.
console.log(4 <= 3) //false
//12.
console.log(4 == 4) //true
//13.
console.log(4 === 4) //true
//14.
console.log(4 != 4) //false
//15.
console.log(4 !== 4) //false
//16
console.log(4 != '4') //false
//17.
console.log(4 == '4') //true
//18.
console.log(4 === '4') //false
//19.
let python = "python"
let jargon = "jargon"
console.log(python.length != jargon.length)
//21. 
console.log(4 > 3 && 10 < 12) //true
//22. 
console.log(4 > 3 && 10 > 12) //false
//23. 
console.log(4 > 3 || 10 < 12)//true
//24. 
console.log(4 > 3 || 10 > 12)//true
//25. 
console.log(!(4 > 3))  //false
//26. 
console.log(!(4 < 3)) //true
//27. 
console.log(!(false)) //true
//28. 
console.log(!(4 > 3 && 10 < 12)) //false
//29. 
console.log(!(4 > 3 && 10 > 12)) //true
//30. 
console.log(!(4 === '4')) //true
//31. 
let dragon = "dragon"
console.log("Pthton 31")
console.log(!python.endsWith("on"))
console.log(!dragon.endsWith("on"))
//33.
console.log(year)
//34.
console.log(now.getMonth() + 1)
//35.
console.log(now.getDate())
//36.
console.log(now.getDay())
//37.
console.log(now.getHours())
//38.
console.log(now.getMinutes())
//39. 
const allSeconds = Date.now() //
console.log(allSeconds)


//Exercises: Level 2

//1. Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).
/**Enter base: 20
Enter height: 10
The area of the triangle is 100*/
//2. Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c)
/**Enter side a: 5
Enter side b: 4
Enter side c: 3
The perimeter of the triangle is 12 */
//3. Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))
//4. Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.
//5. Calculate the slope, x-intercept and y-intercept of y = 2x -2
//6. Slope is m = (y2-y1)/(x2-x1). Find the slope between point (2, 2) and point(6,10)
//7. Calculate the value of y (y = x2 + 6x + 9). Try to use different x values and figure out at what x value y is 0.
//8. Writ a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?
// Enter hours: 40
// Enter rate per hour: 28
// Your weekly earning is 1120
//9. If the length of your name is greater than 7 say, your name is long else say your name is short.
//10. Compare your first name length and your family name length and you should get this output.
//11. Declare two variables myAge and yourAge and assign them initial values and myAge and yourAge.
//12. Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years.
//13. Write a script that prompt the user to enter number of years. Calculate the number of seconds a person can live. Assume some one lives just hundred years
//14.Create a human readable time format using the Date time object
// YYYY-MM-DD HH:mm
// DD-MM-YYYY HH:mm
// DD/MM/YYYY HH:mm

//1.
//let base = prompt("Enter base: ")
//let height = prompt("Enter height: ")
//let area = 0.5 * base * height
//console.log(area)
//2.
// let a = parseInt(prompt("Enter side A: "))
// let b = parseInt(prompt("Enter side B: "))
// let c = parseInt(prompt("Enter side C: "))
// let perimeter = a + b + c
// console.log(perimeter)
//3.
// let length = parseInt(prompt("Enter length: "))
// let width = parseInt(prompt("Enter width: "))
// let area = 2 * (length * width)
// console.log(area)
//4.
// let radius = parseInt(prompt("Enter radius: "))
// let pi = Math.PI
// console.log("Area= ", pi * radius * radius)
// console.log("Circumference= ", 2 * pi * radius)
//5.
//6.
// let x1 = 2
// let x2 = 6
// let y1 = 2
// let y2 = 10
// let m = (y2 - y1) / (x2 - x1)
// console.log("La Pendiente es: ", m)
// //7.
// let x = -0.9
// let y = ((x * 2) + (6 * x) + 9)
// console.log("El valor de y es: ", y)
//8.
// let horas = prompt("Introduce el numero de horas trabajadas: ")
// let precioHora = prompt("Introduce el precio de la hora trabajada: ")
// let gananciaSemanal = console.log("Tus ganancias semanales son: ", (horas * precioHora))
//9.
// let name = prompt("Introduce tu nombre")
// console.log(name.length > 7 ? console.log("Tienes un nommbre largo") : console.log("Tienes un nombre corto"))
//10.
// let firstName1 = 'Asabeneh'
// let lastName1 = 'Yetayeh'
// console.log(firstName1.length > lastName1.length ? console.log("Tu primer nombre,", firstName1, " es más largo que el de tu familia,", lastName1) : console.log("Tienes un nombre corto"))
//11.
// let myAge = 250
// let yourAge = 25
// console.log(`I am ${myAge - yourAge} years older than you.`)
//12.
// let yourAge = prompt("Introduce tu año de nacimiento: ")
// let edad = 2022 - yourAge
// let edadHasta18 = 18 - edad
// console.log(edad > 18 ? `Tienes ${edad} puedes conducir` : `Tienes ${edad}. Aun te faltan ${edadHasta18} años más para poder conducir`)
//13.
// let years = prompt("Escribe los años que has vivido: ")
// let totalSegundos = years * 3600 * 24 * 365
// console.log("Has vivido: ", totalSegundos)
//14.
//YYYY-MM-DD HH:mm
let año = now.getFullYear()
let dia = now.getDate()
let mes = now.getMonth() + 1
let hora = now.getHours()
let minuto = now.getMinutes()
console.log(`${año}-${mes}-${dia} ${hora}:${minuto}`)
// DD-MM-YYYY HH:mm
console.log(`${dia}-${mes}-${año} ${hora}:${minuto}`)
// DD/MM/YYYY HH:mm
console.log(`${dia}/${mes}/${año} ${hora}:${minuto}`)

//Exercises: Level 3
// Create a human readable time format using the Date time object.The hour and the minute should be all the time two digits(7 hours should be 07 and 5 minutes should be 05)
//YYY-MM-DD HH:mm eg. 20120-01-02 07:05
console.log(`${año}-${mes}-${dia} ${hora}:${minuto}`)
