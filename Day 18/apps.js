const countriesAPI = "https://restcountries.com/v2/all"
const catsAPI = "https://api.thecatapi.com/v1/breeds"

//Exercises: Level 1
//1. Read the countries API using fetch and print the name of country, capital, languages, population and area.

//1.
// const fetchData = async () => {
//   try {
//     const response = await fetch(countriesAPI)
//     const countries = await response.json()
//     let obj = {}
//     countries.forEach((el) => {
//       obj = {
//         name: el.name,
//         capital: el.capital,
//         languages: el.languages,
//         population: el.population,
//         area: el.area,
//       }
//       console.log(obj)
//     })
//   } catch (err) {
//     console.log(err)
//   }
// }
// fetchData()

//Exercises: Level 2
//1. Print out all the cat names in to catNames variable.

//1.
// const fetchData = async () => {
//   try {
//     const response = await fetch(catsAPI)
//     const cats = await response.json()
//     for (let i = 0; i < cats.length; i++) {
//       console.log(cats[i].name)
//     }
//   } catch (err) {
//     console.log(err)
//   }
// }
// fetchData()

//Exercises: Level 3
//1. Read the cats api and find the average weight of cat in metric unit.
// const fetchData = async () => {
//   try {
//     const response = await fetch(catsAPI)
//     const cats = await response.json()
//     let arr = []
//     for (let i = 0; i < cats.length; i++) {
//       arr.push(cats[i].weight.metric.replace(" - ", "."))
//     }
//     let sum = 0
//     arr.forEach((el) => (sum += Number(el)))
//     console.log(sum / arr.length)
//   } catch (err) {
//     console.log(err)
//   }
// }
// fetchData()

//2. Read the countries api and find out the 10 largest countries
// const fetchData = async () => {
//   try {
//     const response = await fetch(countriesAPI)
//     const countries = await response.json()
//     let arrSorted = []
//     arrSorted = countries
//       .sort((a, b) => {
//         return b.area - a.area
//       })
//       .slice(0, 10)
//     for (let i = 0; i < arrSorted.length; i++) {
//       console.log(
//         `Country: ${arrSorted[i].name}. Population: ${arrSorted[i].area}`
//       )
//     }
//   } catch (err) {
//     console.log(err)
//   }
// }
// fetchData()

//3. Read the countries api and count total number of languages in the world used as officials.
// const fetchData = async () => {
//   try {
//     const response = await fetch(countriesAPI)
//     const countries = await response.json()
//     let arr = []
//     const mySet1 = new Set()
//     const languages = countries.map((el) => {
//       return el.languages
//     })

//     for (let i = 0; i < languages.length; i++) {
//       for (let j = 0; j < languages[i].length; j++) {
//         mySet1.add(languages[i][j].name)
//       }
//     }
//     console.log(mySet1.size)
//   } catch (err) {
//     console.log(err)
//   }
// }
// fetchData()
