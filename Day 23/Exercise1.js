const container = document.getElementById('container')
const title = document.querySelector('h1')
const daysOfJS = document.querySelector('h3')
const author = document.querySelector('p')

container.style.fontFamily = 'arial'
container.style.textAlign = 'center'
//container.style.border = '1px solid black'
title.style.color = '#4EBD3E'
daysOfJS.style.marginTop = '-1rem'
daysOfJS.style.color = '#333'
daysOfJS.style.fontWeight = 'normal'
author.style.marginTop = '-1rem'
author.style.color = '#555'

const input = document.getElementById('input')
const button = document.querySelector('button')

input.style.width = '27em'
input.style.border = '2px solid #4EBD3E'
input.style.fontSize = '18px'
input.style.marginLeft = '-10rem'
input.style.color = 'grey'
input.style.padding = '8px'

button.style.color = 'white'
button.style.fontSize = '20px'
button.style.background = '#4EBD3E'
button.style.padding = '5px'
button.style.border = 'none'
button.style.height = '40px'
button.style.position = 'absolute'
button.style.marginLeft = '15px'

const span = document.querySelectorAll('span')
for (let spans of span) {
  spans.style.position = 'absolute'
  spans.style.marginTop = '-1.2rem'
  spans.style.marginLeft = '-9rem'
  spans.style.color = 'red'
  spans.style.fontSize = '15px'
}
const numbersDiv = document.getElementById('numbers')

button.addEventListener('click', () => {
  if (input.value.length === 0) {
    span[0].removeAttribute('hidden')
    span[1].setAttribute('hidden', '')
  } else if (isNaN(input.value)) {
    span[1].removeAttribute('hidden')
    span[0].setAttribute('hidden', '')
  } else {
    span[0].setAttribute('hidden', '')
    span[1].setAttribute('hidden', '')
    createNumbers(input.value)
  }
})

const createNumbers = (param) => {
  numbersDiv.innerHTML = ''
  let numbers
  for (let i = 0; i <= param; i++) {
    numbers = document.createElement('p')

    if (i % 2 === 0) {
      numbers.style.background = '#0eef6c'
    }
    if (i % 2 != 0) {
      numbers.style.background = '#f4e622'
    }
    if (checkPrime(i) === true) {
      numbers.style.background = '#ea3f3f'
    }
    numbers.className = 'number'
    numbers.style.fontSize = '24px'
    numbers.textContent = i
    numbers.style.color = 'white'
    numbers.style.padding = '15px '
    numbers.style.marginLeft = '6px'
    numbers.style.marginTop = '-15px'
    numbersDiv.appendChild(numbers)
  }
}

function checkPrime(number) {
  let isPrime = true
  if (number === 1) {
  } else if (number > 1) {
    for (let i = 2; i < number; i++) {
      if (number % i == 0) {
        isPrime = false
        break
      }
    }
    if (isPrime) {
      return true
    } else {
      return false
    }
  }
}

numbersDiv.style.textAlign = 'center'
numbersDiv.style.display = 'grid'
numbersDiv.style.gridTemplateColumns = '1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr'
numbersDiv.style.width = '50%'
numbersDiv.style.margin = '30px auto'
