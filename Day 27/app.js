const titles = [
  ['🌱', 'Educator'],
  ['💻', 'Programmer'],
  ['🌐', 'Developer'],
  ['🔥', 'Motivator'],
  ['📔', 'Content Creator'],
]

const programs = [
  'PYTHON',
  'MONGODB',
  'PANDAS',
  'NUMPY',
  'JAVASCRIPT',
  'REACT',
  'REDUX',
  'NODE',
]

const titlesDiv = document.getElementById('titles')
const box = document.querySelectorAll('box')
const boxesDiv = document.querySelector('#boxes')
const textBoxes = boxesDiv.querySelectorAll('div.boxes > p')
const footer = document.getElementById('footer')

let counter = 0
setInterval(() => {
  if (counter < titles.length) {
    titlesDiv.innerHTML = ''
    let icons = document.createElement('p')
    let title = document.createElement('h4')
    for (let i = 0; i < titles.length; i++) {
      icons.textContent = titles[counter][0]
      title.textContent = titles[counter][1]
      titlesDiv.append(icons, title)
      icons.style.fontSize = '20px'
      icons.style.marginLeft = '20px'
      title.style.fontSize = '20px'
      title.style.marginTop = '25px'
      title.style.opacity = '0.7'
      titlesDiv.style.display = 'flex'
      titlesDiv.style.background = '#fadadd'
    }
    counter++
  } else {
    counter = 0
  }
}, 3000)

boxesDiv.style.display = 'flex'
boxesDiv.style.justifyContent = 'space-evenly'

textBoxes.forEach((el) => {
  el.style.border = '1px solid black'
  el.style.width = '12rem'
  el.style.height = '10rem'
  el.style.alignText = 'center'
  el.style.display = 'flex'
  el.style.alignItems = 'center'
  el.style.textAlign = 'center'
  el.style.justifyContent = 'center'
  el.addEventListener('mouseenter', (e) => {
    e.target.style.background = '#e5ccc9 '
  })
  el.addEventListener('mouseleave', (e) => {
    e.target.style.background = '#fff'
  })
})

let programming = document.createElement('p')
let programmingText = document.createElement('p')

footer.append(programming)

programming.textContent = `The technologies I teach`

let contador = 0
setInterval(() => {
  if (contador < programs.length) {
    let word = document.createElement('span')
    word = programs[contador]
    programmingText.textContent = word
    contador++

    let randomColor = '#'
    for (let i = 0; i < 3; i++) {
      let random = Math.floor(Math.random() * 10)
      randomColor += random
    }
    console.log(randomColor)
    programmingText.style.color = randomColor
  } else {
    contador = 0
  }
}, 2000)
footer.append(programmingText)

footer.style.display = 'flex'
programmingText.style.fontSize = '45px'
programmingText.style.fontWeight = 'bold'
programmingText.style.margin = '-10px 0px'
