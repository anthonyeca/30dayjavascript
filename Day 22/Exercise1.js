//Exercises: Level 1
//1. Create a div container on HTML document and create 100 to 100 numbers dynamically and append to the container div.
//2. Even numbers background is green
//3. Odd numbers background is yellow
//4. Prime numbers background is red

//1.

let title = document.createElement('h1')
let secondTitle = document.createElement('h2')
let thirdTitle = document.createElement('h3')
let container = document.createElement('div')
let containerDiv = document.createElement('div')
container.className = 'container'
document.body.appendChild(container)
document.body.appendChild(containerDiv)

title.textContent = 'Number Generator'
secondTitle.textContent = '30DaysOfJavaScript:DOM Day 2'
thirdTitle.textContent = 'Author: Asabeneh Yetayeh'

container.appendChild(title)
container.appendChild(secondTitle)
container.appendChild(thirdTitle)

document.body.style.fontFamily = 'arial'

let numbers
for (let i = 0; i <= 101; i++) {
  numbers = document.createElement('p')
  numbers.className = 'number'
  numbers.style.fontSize = '24px'
  numbers.textContent = i
  numbers.style.color = 'white'
  numbers.style.padding = '15px '
  numbers.style.marginLeft = '6px'
  numbers.style.marginTop = '-15px'
  if (i % 2 === 0) {
    numbers.style.background = '#0eef6c'
  }
  if (i % 2 != 0) {
    numbers.style.background = '#f4e622'
  }
  if (checkPrime(i) === true) {
    numbers.style.background = '#ea3f3f'
  }
  containerDiv.appendChild(numbers)
}

container.style.textAlign = 'center'
containerDiv.style.textAlign = 'center'
containerDiv.style.display = 'grid'
containerDiv.style.gridTemplateColumns = '1fr 1fr 1fr 1fr 1fr 1fr'
containerDiv.style.width = '30%'
containerDiv.style.margin = '0 auto'
title.style.fontSize = '24px'
secondTitle.style.marginTop = '-18px'
secondTitle.style.fontSize = '18px'
secondTitle.style.textDecoration = 'underline'
secondTitle.style.fontWeight = 'normal'
thirdTitle.style.marginTop = '-17px'
thirdTitle.style.fontSize = '14px'
thirdTitle.style.textDecoration = 'underline'
thirdTitle.style.fontWeight = 'normal'
thirdTitle.style.paddingBottom = '20px'

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
