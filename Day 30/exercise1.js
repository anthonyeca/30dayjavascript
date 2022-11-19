import { countries_data } from './countries_data.js'
const header = document.getElementById('header')
const totalCountries = document.createElement('p')
const totalCountriesCriteria = document.createElement('p')
const input = document.querySelector('input')
const countriesContainer = document.getElementById('countriesContainer')
const country = document.createElement('div')
const searchBar = document.getElementById('searchBar')
const buttonName = document.getElementById('name')
const buttonCapital = document.getElementById('capital')
const buttonpoPopulation = document.getElementById('population')

totalCountries.textContent = `Currently, we have ${countries_data.length} countries`

input.style.width = '30%'
input.style.borderRadius = '15px'
input.style.border = '1px solid grey'
input.style.padding = '7px'

header.append(totalCountries)

//**STYLES*/
totalCountries.style.fontSize = '14px'
totalCountries.style.color = '#777'
totalCountries.style.marginTop = '-20px'

country.style.display = 'grid'
country.style.gridTemplateColumns = 'repeat(7, 1fr)'
country.style.background = '#eee'

countries_data.forEach((el) => {
  let countryText = document.createElement('p')

  let flag = el.flag
  let nameCountry = el.name
  let capital = el.capital
  let languages = el.languages
  let population = el.population
  countryText.innerHTML = `<img src='${flag}'></img><br><div class='countryInfo'> <span id ='title'>${nameCountry}</span><br><span>Capital: ${capital}</span><br><span >Languages: ${languages}</span><br><span> Population: ${population}</span></div>`
  country.append(countryText)
  countriesContainer.append(country)
  countryText.style.width = '12rem'
  countryText.style.height = '13em'
  countryText.style.background = 'beige'
  countryText.style.marginLeft = '20px'
})

const getCountries = (params) => {
  country.innerHTML = ''
  let arr = []
  countries_data.forEach((el) => {
    let countryLowered = el.name.toLowerCase()
    let countryText = document.createElement('p')

    if (countryLowered.includes(params) === true) {
      arr.push(el)

      let flag = el.flag
      let nameCountry = el.name
      let capital = el.capital
      let languages = el.languages
      let population = el.population
      countryText.innerHTML = `<img src='${flag}'></img><br><div class='countryInfo'> <span id ='title'>${nameCountry}</span><br><span>Capital: ${capital}</span><br><span >Languages: ${languages}</span><br><span> Population: ${population}</span></div>`
      country.append(countryText)
      countriesContainer.append(country)
      countryText.style.width = '12rem'
      countryText.style.height = '13em'
      countryText.style.background = 'beige'
      countryText.style.marginLeft = '20px'
    }
  })
  let arrSorted = arr.sort(function (a, b) {
    return b.name > a.name ? 1 : -1
  })
  console.log(arrSorted)
}

searchBar.addEventListener('input', (e) => {
  let word = e.target.value
  getCountries(word.toLowerCase())
})

buttonName.addEventListener('click', () => {
  switch (buttonName.textContent) {
    case 'NAME':
      buttonName.textContent = 'NAME⬆'
      break

    case 'NAME⬆':
      buttonName.textContent = 'NAME⬇'
      break
    default:
      buttonName.textContent = 'NAME'
      break
  }

  console.log(buttonName.textContent)
})

buttonCapital.addEventListener('click', () => {
  switch (buttonCapital.textContent) {
    case 'CAPITAL':
      buttonCapital.textContent = 'CAPITAL⬆'
      break

    case 'CAPITAL⬆':
      buttonCapital.textContent = 'CAPITAL⬇'
      break
    default:
      buttonCapital.textContent = 'CAPITAL'
      break
  }

  console.log(buttonCapital.textContent)
})

buttonpoPopulation.addEventListener('click', () => {
  switch (buttonpoPopulation.textContent) {
    case 'POPULATION':
      buttonpoPopulation.textContent = 'POPULATION⬆'
      break

    case 'POPULATION⬆':
      buttonpoPopulation.textContent = 'POPULATION⬇'
      break
    default:
      buttonpoPopulation.textContent = 'POPULATION'
      break
  }

  console.log(buttonpoPopulation.textContent)
})

Object.values(
  countries_data.sort((a, b) => {
    return b.name - a.name
  })
)
