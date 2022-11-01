import { countries_data } from "./countries_data.js"
// const constants = [2.72, 3.14, 9.81, 37, 100]
// const countries = ["Finland", "Estonia", "Sweden", "Denmark", "Norway"]
// const rectangle = {
//   width: 20,
//   height: 10,
//   area: 200,
//   perimeter: 60,
// }
// const users = [
//   {
//     name: "Brook",
//     scores: 75,
//     skills: ["HTM", "CSS", "JS"],
//     age: 16,
//   },
//   {
//     name: "Alex",
//     scores: 80,
//     skills: ["HTM", "CSS", "JS"],
//     age: 18,
//   },
//   {
//     name: "David",
//     scores: 75,
//     skills: ["HTM", "CSS"],
//     age: 22,
//   },
//   {
//     name: "John",
//     scores: 85,
//     skills: ["HTML"],
//     age: 25,
//   },
//   {
//     name: "Sara",
//     scores: 95,
//     skills: ["HTM", "CSS", "JS"],
//     age: 26,
//   },
//   {
//     name: "Martha",
//     scores: 80,
//     skills: ["HTM", "CSS", "JS"],
//     age: 18,
//   },
//   {
//     name: "Thomas",
//     scores: 90,
//     skills: ["HTM", "CSS", "JS"],
//     age: 20,
//   },
// ]
// const student = ["David", ["HTM", "CSS", "JS", "React"], [98, 85, 90, 95]]
// const students = [
//   ["David", ["HTM", "CSS", "JS", "React"], [98, 85, 90, 95]],
//   ["John", ["HTM", "CSS", "JS", "React"], [85, 80, 85, 80]],
// ]
// const student = {
//   name: "David",
//   age: 25,
//   skills: {
//     frontEnd: [
//       { skill: "HTML", level: 10 },
//       { skill: "CSS", level: 8 },
//       { skill: "JS", level: 8 },
//       { skill: "React", level: 9 },
//     ],
//     backEnd: [
//       { skill: "Node", level: 7 },
//       { skill: "GraphQL", level: 8 },
//     ],
//     dataBase: [{ skill: "MongoDB", level: 7.5 }],
//     dataScience: ["Python", "R", "D3.js"],
//   },
// }
//Exercises: Level 1
//1. Destructure and assign the elements of constants array to e, pi, gravity, humanBodyTemp, waterBoilingTemp.
//2.Destructure and assign the elements of countries array to fin, est, sw, den, nor
//3. Destructure the rectangle object by its properties or keys.

//1.
// let [e, pi, gravity, humanBodyTemp, waterBoilingTemp] = constants
// console.log(e, pi, gravity, humanBodyTemp, waterBoilingTemp)

//2.
// let [fin, est, sw, den, nor] = countries
// console.log(fin, est, sw, den, nor)

//3.
// let { width, height, area, perimeter } = rectangle
// console.log(width, height, area, perimeter)

//Exercises: Level 2
//1. Iterate through the users array and get all the keys of the object using destructuring
//2. Find the persons who have less than two skills

//1.
// for (const { name, scores, skills, age } of users) {
//   console.log(name, scores, skills, age)
// }

//2.
// for (const { name, skills } of users) {
//   skills.length < 2 ? console.log(name, skills) : undefined
// }

//Exercises: Level 3
//1.Destructure the countries object print name, capital, population and languages of all countries
//2. A junior developer structure student name, skills and score in array of arrays which may not easy to read. Destructure the following array name to name, skills array to skills, scores array to scores, JavaScript score to jsScore and React score to reactScore variable in one line.
//3. Write a function called convertArrayToObject which can convert the array to a structure object.
//4. Copy the student object to newStudent without mutating the original object. In the new object add the following ?

//1.
// for ({ name, capital, population, languages } of countries_data) {
//   console.log(name, capital, population, languages)
// }

//2.
// let [name, skills, scores] = student
// let jsScore = scores[2]
// let reactScore = scores[3]
// console.log(name, skills, jsScore, reactScore)

//3.
// const convertArrayToObject = (arr) => {
//   let students = []
//   let profiles = {}
//   for (const [name, skills, scores] of arr) {
//     profiles = { name: name }
//     profiles.skills = skills
//     profiles.scores = scores
//     students.push(profiles)
//   }
//   return students
// }
// console.log(convertArrayToObject(students))

//4.
// const newStudent = { ...student }
// newStudent.skills.frontEnd.push({ skill: "Bootstrap", level: "8" })
// newStudent.skills.backEnd.push({ skill: "Express", level: "9" })
// newStudent.skills.dataBase.push({ skill: "SQL", level: "8" })
// newStudent.skills.dataScience.push("SQL")
// console.log(newStudent)
