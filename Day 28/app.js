const input = document.querySelectorAll('input')
const header = document.getElementById('header')
const required = document.createElement('p')
const button = document.querySelector('button')
const playersDiv = document.getElementById('playersDiv')
const requiredDiv = document.getElementById('required')

const player = document.createElement('div')

const addPlayer = () => {
  let newPlayer = document.createElement('div')
  let firstName = document.createElement('p')
  let lastName = document.createElement('p')
  let country = document.createElement('p')
  let points = document.createElement('p')
  let removeButton = document.createElement('button')
  let addFive = document.createElement('button')
  let removeFive = document.createElement('button')

  if (
    input[0].value.length === 0 ||
    input[1].value.length === 0 ||
    input[2].value.length === 0 ||
    input[3].value.length === 0
  ) {
    required.textContent = 'All fields are required'
    required.style.color = 'red'
    required.style.fontWeight = 'bold'
    requiredDiv.append(required)
  } else {
    requiredDiv.innerHTML = ''
    firstName.textContent = input[0].value
    lastName.textContent = input[1].value
    country.textContent = input[2].value
    points.textContent = input[3].value
    removeButton.textContent = '🗑'
    addFive.textContent = '+5'
    removeFive.textContent = '-5'

    newPlayer.append(firstName)
    newPlayer.append(lastName)
    newPlayer.append(country)
    newPlayer.append(points)
    newPlayer.append(removeButton)
    newPlayer.append(addFive)
    newPlayer.append(removeFive)

    newPlayer.style.background = '#fadadd'
    newPlayer.style.display = 'flex'
    newPlayer.style.gap = '5rem'
    newPlayer.style.width = '50%'

    firstName.style.marginLeft = '5rem'
    firstName.style.width = '2rem'
    lastName.style.width = '2rem'
    country.style.width = '2rem'
    points.style.width = '2rem'

    removeButton.style.height = '35px'
    removeButton.style.width = '35px'
    removeButton.style.marginTop = '7px'
    removeButton.style.color = 'red'

    addFive.style.height = '35px'
    addFive.style.width = '35px'
    addFive.style.marginTop = '7px'

    removeFive.style.height = '35px'
    removeFive.style.width = '35px'
    removeFive.style.marginTop = '7px'

    playersDiv.style.marginTop = '2rem'
    playersDiv.style.display = 'flex'
    playersDiv.style.justifyContent = 'center'
    playersDiv.style.flexDirection = 'column'
    playersDiv.style.alignItems = 'center'
    playersDiv.append(newPlayer)
  }

  removeButton.addEventListener('click', () => {
    newPlayer.remove()
  })
  addFive.addEventListener('click', () => {
    if (points.textContent != '100') {
      let newValue = parseInt(points.textContent) + 5
      points.textContent = newValue
    }
  })
  removeFive.addEventListener('click', () => {
    if (points.textContent != '0') {
      let newValue = parseInt(points.textContent) - 5
      points.textContent = newValue
    }
  })
}

button.addEventListener('click', () => {
  addPlayer()
})

//**STYLES*/

input.forEach((el) => {
  el.style.width = '6rem'
  el.style.height = '1rem'
  el.style.border = '1px solid #fadadd'
  el.style.fontSize = '15px'
  el.style.outline = 'none'
  el.style.padding = '10px'
})

button.style.width = '7rem'
button.style.height = '2.4rem'
button.style.background = '#fadadd'
button.style.border = 'none'
button.style.borderRadius = '5px'
button.style.marginTop = '-5px'
