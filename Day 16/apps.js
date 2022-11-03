// Exercises Level 1
//1. Change skills array to JSON using JSON.stringify()
//2. Stringify the age variable
//3. Stringify the isMarried variable
//4. Stringify the student object

const skills = ["HTML", "CSS", "JS", "React", "Node", "Python"]
let age = 250
let isMarried = true
const student = {
  firstName: "Asabeneh",
  lastName: "Yetayehe",
  age: 250,
  isMarried: true,
  skills: ["HTML", "CSS", "JS", "React", "Node", "Python"],
}
const txt = `{
    "Alex": {
        "email": "alex@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 30
    },
    "Asab": {
        "email": "asab@asab.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Redux",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 25,
        "isLoggedIn": false,
        "points": 50
    },
    "Brook": {
        "email": "daniel@daniel.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux"
        ],
        "age": 30,
        "isLoggedIn": true,
        "points": 50
    },
    "Daniel": {
        "email": "daniel@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Python"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "John": {
        "email": "john@john.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux",
            "Node.js"
        ],
        "age": 20,
        "isLoggedIn": true,
        "points": 50
    },
    "Thomas": {
        "email": "thomas@thomas.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "Paul": {
        "email": "paul@paul.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    }
}
`

//1.
// JSON.stringify(skills,undefined,4)

//2.
// const text = JSON.stringify(age)
// console.log(text)

//3.
// const text = JSON.stringify(isMarried)
// console.log(text)

//4.
// const text = JSON.stringify(student, undefined, 4)
// console.log(text)

//Exercises Level 2
//1. Stringify the students object with only firstName, lastName and skills properties

//1.
// const text = JSON.stringify(student, ["firstName", "lastName", "skills"], 4)
// console.log(text)

//Exercises Level 3
//1. Parse the txt JSON to object.
//2. Find the user who has many skills from the variable stored in txt.

//1.
// const text = JSON.parse(txt,undefined,4)
// console.log(text)
// const text = JSON.parse(txt, undefined, 4)
// const arrUsername = Object.keys(text)
// let sumSkills = 0
// let id = ""
// for (let i = 0; i < arrUsername.length; i++) {
//   if (sumSkills < text[arrUsername[i]].skills.length) {
//     sumSkills = text[arrUsername[i]].skills.length
//     id = arrUsername[i]
//   }
// }
// console.log(`${id} have the most skills ${sumSkills}`)
