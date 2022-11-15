import { countries_data } from './countries_data.js'
const header = document.getElementById('header')
const h1 = document.querySelector('h1')
const h3 = document.createElement('h3')
const startingWorld = document.getElementById('startingWorld')
const searchingAny = document.getElementById('searchingAny')
const search = document.getElementById('search')
const countries = document.getElementById('countries')
const textContainer = document.getElementById('textContainer')
const fulltext = document.createElement('p')
const input = document.querySelector('input')

h3.textContent = `Total number of countries: ${countries_data.length}`

textContainer.append(h3)

startingWorld.addEventListener('click', () => {})

searchingAny.addEventListener('click', () => {})

const getAnyWorld = (str) => {
  countries.innerHTML = ''
  countries_data.forEach((el) => {
    let country = document.createElement('p')
    let countryLowered = el.name.toLowerCase()
    if (countryLowered.includes(str) === true) {
      country.textContent += el.name.toUpperCase()
      countries.append(country)
    }
    country.style.color = 'black'
    country.style.width = '10rem'
    country.style.height = '9rem'
    country.style.display = 'flex'
    country.style.justifyContent = 'center'
    country.style.alignItems = 'center'
    country.style.background = 'url(./img/map_image.jpg)'
    country.style.backgroundSize = 'cover'
    country.style.backgroundPosition = 'center'
    country.style.filter = 'brightness(0.6)'
    country.style.borderRadius = '10px'
    country.style.fontWeight = 'bold'
  })
  if (str.length === 0) {
    fulltext.innerHTML = ''
  } else {
    fulltext.innerHTML = `<p>Countries containing <span style="color:red;"> ${str} </span>are <span style="color:blue;"> ${countries.childElementCount} </span></p>`
    textContainer.append(fulltext)
  }
}

search.addEventListener('input', (e) => {
  let word = e.target.value
  getAnyWorld(word.toLowerCase())
})

/** STYLES */
document.body.style.textAlign = 'center'
document.body.style.fontFamily = 'arial'
document.body.style.color = 'white'
document.body.style.margin = '0 auto'

header.style.background = 'url(./img/globe-2.jpg)'
header.style.backgroundSize = 'cover'
header.style.backgroundPosition = 'center center'
header.style.height = '30rem'

h1.style.fontSize = '4rem'
h1.style.display = 'block'

fulltext.style.fontWeight = 'bold'

countries.style.display = 'grid'
countries.style.gridTemplateColumns = '1fr 1fr 1fr 1fr 1fr 1fr'
countries.style.marginLeft = '19rem'
countries.style.width = '70%'

input.style.borderRadius = '15px'
input.style.width = '21rem'
input.style.height = '1rem'
input.style.border = 'none'
input.style.marginTop = '3rem'
input.style.outline = 'none'
input.style.padding = '10px'

startingWorld.style.padding = '0.7rem'
startingWorld.style.background = '#AF8FE9'
startingWorld.style.border = 'none'
startingWorld.style.color = 'white'

searchingAny.style.padding = '0.7rem'
searchingAny.style.background = '#AF8FE9'
searchingAny.style.border = 'none'
searchingAny.style.color = 'white'
