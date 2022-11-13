const img = document.querySelector('img')
const select = document.querySelector('select')
const button = document.querySelector('button')
const planetsContainer = document.getElementById('planetsContainer')
const planetsText = document.getElementById('planetsText')
const objectWeigth = document.getElementById('objectWeigth')
const mass = document.getElementById('mass')
const main = document.querySelector('main')
const title = document.querySelector('h1')
const form = document.getElementById('form')

button.addEventListener('click', (e) => {
  const textPlanet = document.createElement('p')
  planetsText.innerHTML = ''

  let textMass = document.createElement('p')
  let massValue = document.createElement('p')
  if (!mass.value) {
    textMass.textContent = 'Mass is required'
    planetsText.append(textMass)
  } else if (isNaN(mass.value)) {
    textMass.textContent = 'Value must be a number'
    planetsText.append(textMass)
  } else {
    let weight = 0
    switch (select.value) {
      case 'mercury':
        img.src = './img/mercury.png'
        weight = (mass.value / 9.81) * 3.7 * 9.80665
        massValue.textContent = `${weight.toFixed(2)} N`
        break
      case 'venus':
        img.src = './img/venus.png'
        weight = (mass.value / 9.81) * 8.87 * 9.80665
        massValue.textContent = `${weight.toFixed(2)} N`
        break
      case 'earth':
        img.src = './img/earth.png'
        weight = mass.value * 9.80665 * 9.80665
        massValue.textContent = `${weight.toFixed(2)} N`
        break
      case 'mars':
        img.src = './img/mars.png'
        weight = (mass.value / 9.81) * 3.71 * 9.80665
        massValue.textContent = `${weight.toFixed(2)} N`
        break
      case 'jupiter':
        img.src = './img/jupiter.png'
        weight = (mass.value / 9.81) * 24.79 * 9.80665
        massValue.textContent = `${weight.toFixed(2)} N`
        break
      case 'saturn':
        img.src = './img/saturn.png'
        weight = (mass.value / 9.81) * 10.44 * 9.80665
        massValue.textContent = `${weight.toFixed(2)} N`
        break
      case 'uranus':
        img.src = './img/uranus.png'
        weight = (mass.value / 9.81) * 8.69 * 9.80665
        massValue.textContent = `${weight.toFixed(2)} N`
        break
      case 'neptune':
        img.src = './img/neptune.png'
        weight = (mass.value / 9.81) * 11.15 * 9.80665
        massValue.textContent = `${weight.toFixed(2)} N`
        break
      case 'pluto':
        img.src = './img/pluto.png'
        weight = (mass.value / 9.81) * 0.66 * 9.80665
        massValue.textContent = `${weight.toFixed(2)} N`
        break
      case 'none':
        img.removeAttribute('src')
        planetsText.innerHTML = ''
        textPlanet.textContent = `You did not choose a planet yet`
        planetsText.append(textPlanet)
        break
      default:
        break
    }
    if (select.value === 'none') {
      return ''
    } else {
      planetsText.innerHTML = ''
      textPlanet.textContent = `They weight of the object on ${select.value.toUpperCase()}`
      massValue.style.background = 'rgba(236, 236, 236, 0.15)'
      massValue.style.width = '8rem'
      massValue.style.height = '8rem'
      massValue.style.display = 'inline-block'
      massValue.style.verticalAlign = 'middle'
      massValue.style.borderRadius = '50%'
      massValue.style.lineHeight = '125px'
      massValue.style.textDecoration = 'bold'
      planetsText.append(textPlanet, massValue)
    }
  }
})

/**STYLES*/

document.body.style.fontFamily = 'arial'
document.body.style.backgroundImage = 'url(./img/galaxy.gif)'
document.body.style.color = 'white'
main.style.textAlign = 'center'

title.style.textShadow = '2px 2px grey'
title.style.fontSize = '50px'

form.style.marginBottom = '1rem'
form.style.display = 'flex'
form.style.justifyContent = 'center'
form.style.gap = '15px'

mass.style.width = '14%'
mass.style.height = '2rem'

planets.style.width = '8%'
planets.style.height = '2.5rem'
planets.style.height = '2.5rem'

button.style.height = '2.5rem'
button.style.fontSize = '18px'
button.style.color = 'white'
button.style.background = 'rgba(236, 236, 236,0.5)'
button.style.border = 'none'
button.style.borderRadius = '5px'

img.style.marginLeft = '50px'

planetsContainer.style.background = 'rgba(236, 236, 236, 0.15)'

planetsContainer.style.width = '70%'
planetsContainer.style.paddingTop = '3rem'
planetsContainer.style.paddingBottom = '3rem'
planetsContainer.style.marginLeft = '15%'

planetsContainer.style.display = 'flex'

planetsText.style.height = '50%'
planetsText.style.marginLeft = '10%'
planetsText.style.marginTop = '8%'
planetsText.style.background = 'rgba(236, 236, 236, 0.15)'
planetsText.style.width = '40%'
planetsText.style.fontSize = '30px'
