//Exercise: Level 3
//DOM: Mini project 1
//1. Develop the following application, use the following HTML elements to get started with. You will get the same code on starter folder. Apply all the styles and functionality using JavaScript only.
//2.The year color is changing every 1 second
//3. The date and time background color is changing every on seconds
//4. Completed challenge has background green
//5. Ongoing challenge has background yellow
//6. Coming challenges have background red

//1.
const wrapper = document.querySelector('.wrapper')
const firstH1 = document.querySelector('h1')
const firstSpan = document.querySelector('span')
const firstH2 = document.querySelector('h2')
const allH2 = document.querySelectorAll('h2')
const crazyTime = document.querySelector('p')
const list = document.querySelector('ul')
const elementsOfList = document.querySelectorAll('li')

wrapper.style.fontFamily = 'arial'
wrapper.style.display = 'absolute'
wrapper.style.margin = '2rem 10rem'
firstH1.style.textAlign = 'center'
firstH1.style.fontSize = '25px'
firstSpan.style.fontSize = '50px'
firstH2.style.textDecoration = 'underline'
firstH2.style.fontSize = '15px'
firstH2.style.fontWeight = 'normal'
firstH2.style.textAlign = 'center'

setInterval(() => {
  let arr = ['#']
  for (let i = 0; i < 3; i++) {
    let random = Math.floor(Math.random() * 10)
    arr.push(random)
  }
  firstSpan.style.color = `${arr.join('')}`
}, 1000)

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]

const now = new Date()
let month = months[now.getMonth()]
const year = now.getFullYear()
const date = now.getDate()
let hours = now.getHours()
let minutes = now.getMinutes()
let seconds = now.getSeconds()
const time = hours + ':' + minutes + ':' + seconds
const fulltime = `${month} ${date}, ${year} ${time}`

crazyTime.textContent = fulltime

crazyTime.style.width = '13rem'
crazyTime.style.padding = '0.5rem'
crazyTime.style.margin = '0 auto'
setInterval(() => {
  let arr = ['#']
  for (let i = 0; i < 3; i++) {
    let random = Math.floor(Math.random() * 10)
    arr.push(random)
  }
  crazyTime.style.background = `${arr.join('')}`
}, 1000)

list.style.listStyle = 'none'

elementsOfList.forEach((el, index) => {
  el.style.padding = '1rem'
  el.style.margin = '5px'
  el.style.width = '34rem'
  el.style.margin = '0 auto'
  el.style.marginBottom = '5px'

  if (index === 0) {
    el.style.background = '#ACD1AF'
  }
  if (index == 1) {
    el.style.background = '#EEEE9B'
  }
  if (index != 0 && index != 1) {
    el.style.background = '#F47174'
  }
})
