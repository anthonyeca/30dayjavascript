// import { countries_data } from "./countries_data.js"
// import { countries } from "./countries.js"
// import { countries_random } from "./countries_error.js"

//1. Explain the difference between forEach, map, filter, and reduce.
//2.Define a callback function before you use it in forEach, map, filter or reduce.
//3. Use forEach to console.log each country in the countries array.
//4. Use forEach to console.log each name in the names array.
//5. Use forEach to console.log each number in the numbers array.
//6. Use map to create a new array by changing each country to uppercase in the countries array.
//7. Use map to create an array of countries length from countries array.
//8. Use map to create a new array by changing each number to square in the numbers array
//9. Use map to change to each name to uppercase in the names array
//10. Use map to map the products array to its corresponding prices.
//11. Use filter to filter out countries containing land.
//12. Use filter to filter out countries having six character.
//13. Use filter to filter out countries containing six letters and more in the country array.
//14. Use filter to filter out country start with 'E';
//15. Use filter to filter out only prices with values.
//16. Declare a function called getStringLists which takes an array as a parameter and then returns an array only with string items.
//17. Use reduce to sum all the numbers in the numbers array.
//18. Use reduce to concatenate all the countries and to produce this sentence: Estonia, Finland, Sweden, Denmark, Norway, and IceLand are north European countries
//19. Explain the difference between some and every
//20. Use some to check if some names' length greater than seven in names array
//21. Use every to check if all the countries contain the word land
//22. Explain the difference between find and findIndex.
//23. Use find to find the first country containing only six letters in the countries array
//24. Use findIndex to find the position of the first country containing only six letters in the countries array
//25. Use findIndex to find the position of Norway if it doesn't exist in the array you will get -1.
//26. Use findIndex to find the position of Russia if it doesn't exist in the array you will get -1.

//1.
// let forEach = "Iterate an array elements. We use forEach only with arrays. It takes a callback function with elements, index parameter and array itself. The index and the array optional"

// let map = " Iterate an array elements and modify the array elements. It takes a callback function with elements, index , array parameter and return a new array."

// let filter "Filter out items which full fill filtering conditions and return a new array."

// let reduce = "Reduce takes a callback function. The call back function takes accumulator, current, and optional initial value as a parameter and returns a single value. It is a good practice to define an initial value for the accumulator value. If we do not specify this parameter, by default accumulator will get array first value. If our array is an empty array, then Javascript will throw an error."

//2.
//FOREACH
// const callback = num => {
//   return console.log(num * 2)
// }
// const final = array.forEach(callback)
//MAP
// const callback = num => {
//   return num * 2
// }
// const final = array.map(callback)
// console.log(final)

//3.
// countries.forEach((element) => console.log(element))

//4.
// names.forEach(el => console.log(el))

//5.
// numbers.forEach(el => console.log(el))

//6.
// const countriesToUpper = countries.map((el) => el.toUpperCase())
//console.log(countriesToUpper)

//7.
// const countriesLength = countries.map(el => el.length)
// console.log(countriesLength)

//8.
// const numbersSquare = numbers.map(el => el ** 2)
// console.log(numbersSquare)

//9.
// const namesToUpper = names.map(el => el.toUpperCase())
// console.log(namesToUpper)

//10.
//NO IDEA WHAT TO DO XD

//11.
// const countryLand = countries.filter((el) => el.includes('land'))
// console.log(countryLand)

//12.
// const countriesOutSix = countries.filter((el) => el.length != 6)
// console.log(countriesOutSix)

//13.
// const countriesOutSixAndMore = countries.filter((el) => el.length < 6)
// console.log(countriesOutSixAndMore)

//14.
// const countriesStartE = countries.filter((el => el.startsWith("E")))
// console.log(countriesStartE)

//15.
// const productsValues = products.filter((el) => el.price != "" && el.price != " ")
// console.log(productsValues)

//BETTER ONE
// function numbersOnly(value) {
//     if (typeof (value.price) === 'number') {
//         return value;
//     }
// }
// let arrNumbers = products.filter(numbersOnly);
// console.log(arrNumbers);

//16.
// const getStringLists = (arr) => {
//     arr.map(el => {
//         if (typeof el === "string")
//             return console.log(el)
//     })
// }

// getStringLists(names)

//17.
// const sumReduce = numbers.reduce((el, acc) => {
//     acc += el
//     return acc
// })
// console.log(sumReduce)

//18.
//INCOMPLETE
// const concatenateCountries = countries.reduce((prevVal, currVal, idx) => {
//     return idx == 0
//         ? currVal
//         : prevVal + ', ' + currVal
// },)
// console.log(concatenateCountries.concat(" are north European countries"))

//19.
//Some return true if it found "some" value to what we send as argument. Every return true if "every" value match with the argument

//20.
// const checkNamesLength = names.some((el) => el.length > 7
// )
// console.log(checkNamesLength)

//21
// const checkCountriesLand = countries.every((el) =>
//     el.includes("land"))
// console.log(checkCountriesLand)

//22.
//find will find the argument expecified, will just return the first item.Return the first element which satisfies the condition
//findIndex will return the index of the value searched

//23.
// const countriesFinded = countries.find((el) => el.length == 6)
// console.log(countriesFinded)

//24.
// const countriesFindedIndex = countries.findIndex((el) => el.length == 6)
// console.log(countriesFindedIndex)

//25.
// const countriesFindedIndex = countries.findIndex((el) => el == "Norway")
// console.log(countriesFindedIndex)

//26.
// const findRussia = countries.findIndex((el) => el === "Russia")
// console.log(findRussia)

//Exercises: Level 2
//1. Find the total price of products by chaining two or more array iterators(eg. arr.map(callback).filter(callback).reduce(callback))
//2. Find the sum of price of products using only reduce reduce(callback))
//3. Declare a function called categorizeCountries which returns an array of countries which have some common pattern(you find the countries array in this repository as countries.js(eg 'land', 'ia', 'island','stan')).
//4. Create a function which return an array of objects, which is the letter and the number of times the letter use to start with a name of a country.
//5. Declare a getFirstTenCountries function and return an array of ten countries. Use different functional programming to work on the countries.js array
//6. Declare a getLastTenCountries function which which returns the last ten countries in the countries array.
//7. Find out which letter is used many times as initial for a country name from the countries array (eg. Finland, Fiji, France etc)

//1.
// const findTotalPrice = products
//   .map((el) => el.price)
//   .filter((el) => typeof el != "string")
//   .reduce((acc, cur) => (acc += cur));
// console.log(findTotalPrice);

//2.
// const sumOnlyReduce = products.reduce((acc, curr, index) => {
//   if (typeof curr.price == "number") {
//     acc += curr.price;
//   }
//   return acc;
// }, 0);
// console.log(sumOnlyReduce);

//3.
// function categorizeCountries(keyword) {
//   return countries.filter((country) => country.endsWith(keyword));
// }
// categorizeCountries("land");
// categorizeCountries("en");
// categorizeCountries("ia");

//4.
//don't fking understand this fking exercise

//5.
// const getFirstTenCountries = () => {
//   let arr = countries.splice(0, 10);
//   console.log(arr.map((el) => el.name));
// };
// getFirstTenCountries();

//6.
// const getLastTenCountries = () => {
//   let arr = countries.splice(-10, 10);
//   console.log(arr.map((el) => el.name));
// };
// getLastTenCountries();

//7.
// const findInitialLetter = () => {
//   const arr = [];
//   const obj = {};
//   countries.forEach((el) => {
//     arr.push(el.name[0]);
//   });
//   let sum = 0;
//   for (const value of arr) {
//     const key = value;
//     key in obj ? obj[key].push(value) : (obj[key] = [value]);
//   }
//   return obj;
// };
// console.log(findInitialLetter());

//BRILLIANT SOLUTION:
// const getStartingLetters = (arr) => {
//   const occurences = arr.reduce((acc, curr) => {
//     const startingLetter = curr[0];
//     acc[startingLetter] = (acc[startingLetter] || 0) + 1;
//     return acc;
//   }, {});

//   return Object.keys(occurences)
//     .sort()
//     .map((letter) => ({ letter, count: occurences[letter] }));
// };
// console.log(getStartingLetters(countries));

//Exercises: Level 3
//1. Use the countries information, in the data folder. Sort countries by name, by capital, by population
//2. *** Find the 10 most spoken languages:
//3. *** Use countries_data.js file create a function which create the ten most populated countries

//SORTING BY POPULATION

// countries_data.sort((a, b) => {
//   return a.population - b.population;
// });

//SORTING BY CAPITAL

// countries_data.sort((a, b) => {
//   let fa = a.capital.toLowerCase(),
//     fb = b.capital.toLowerCase();
//   if (fa < fb) {
//     return -1;
//   }
//   if (fa > fb) {
//     return 1;
//   }
//   return 0;
// });

//SORTING BY NAME

// countries_data.sort((a, b) => {
//   let fa = a.name.toLowerCase(),
//     fb = b.name.toLowerCase();
//   if (fa < fb) {
//     return -1;
//   }
//   if (fa > fb) {
//     return 1;
//   }
//   return 0;
//});

//2.
// const mostSpokenLanguages = (arr, numberOfCountries) => {
//   const occurences = arr.reduce((acc, curr) => {
//     const { languages } = curr
//     languages.forEach((language) => {
//       acc[language] = acc[language] === undefined ? 1 : acc[language] + 1
//     })

//     return acc
//   }, {})
//   return Object.keys(occurences)
//     .map((language) => ({ language, count: occurences[language] }))
//     .sort((a, b) => b.count - a.count)
//     .slice(0, numberOfCountries)
// }
// console.log(mostSpokenLanguages(countries_data, 5))

//3.
//INCOMPLETE, I dont have any idea to implement it with map or set
