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
const buttonPopulation = document.getElementById('population')
const populationChartDiv = document.getElementById('populationChart')
const countryChart = document.createElement('div')

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
  countryChart.innerHTML = ''
  let arr = []
  countries_data.forEach((el) => {
    let nameLowered = el.name.toLowerCase()
    // let capitalLowered = el.capital.toLowerCase()

    if (nameLowered.includes(params) === true) {
      arr.push(el)
    }
  })
  return arr
}

const sortCountriesByName = (arr) => {
  if (buttonName.textContent === 'NAME⬇') {
    let arrSortedDesc = arr.sort(function (a, b) {
      return b.name > a.name ? 1 : -1
    })
    return arrSortedDesc
  } else if (buttonName.textContent === 'NAME⬆') {
    let arrSortedAsc = arr.sort(function (a, b) {
      return a.name > b.name ? 1 : -1
    })
    return arrSortedAsc
  } else {
    return arr
  }
}

const sortCountriesByCapital = (arr) => {
  if (buttonCapital.textContent === 'CAPITAL⬇') {
    let arrSortedDesc = arr.sort(function (a, b) {
      return b.capital > a.capital ? 1 : -1
    })
    return arrSortedDesc
  } else if (buttonCapital.textContent === 'CAPITAL⬆') {
    let arrSortedAsc = arr.sort(function (a, b) {
      return a.capital > b.capital ? 1 : -1
    })
    return arrSortedAsc
  } else {
    return arr
  }
}

const sortCountriesByPopulation = (arr) => {
  if (buttonPopulation.textContent === 'POPULATION⬆') {
    let arrSortedAsc = arr.sort(function (a, b) {
      return b.population > a.population ? 1 : -1
    })
    return arrSortedAsc
  } else if (buttonPopulation.textContent === 'POPULATION⬇') {
    let arrSortedDesc = arr.sort(function (a, b) {
      return a.population > b.population ? 1 : -1
    })
    return arrSortedDesc
  } else {
    return arr
  }
}

const putCountries = (arr) => {
  arr.forEach((el) => {
    let countryText = document.createElement('p')
    let countryChartName = document.createElement('p')
    let countryChartPopulation = document.createElement('p')

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

    countryChartName.textContent = nameCountry
    countryChartPopulation.textContent = population

    countryChart.append(countryChartName, countryChartPopulation)
    populationChartDiv.append(countryChart)

    countryChart.style.display = 'grid'
    countryChart.style.gridTemplateColumns = '1fr 1fr'
  })
}

searchBar.addEventListener('input', (e) => {
  let word = e.target.value
  putCountries(getCountries(word.toLowerCase()))
})

buttonName.addEventListener('click', () => {
  switch (buttonName.textContent) {
    case 'NAME':
      buttonName.textContent = 'NAME⬆'
      putCountries(sortCountriesByName(getCountries(input.value)))
      break

    case 'NAME⬆':
      buttonName.textContent = 'NAME⬇'
      putCountries(sortCountriesByName(getCountries(input.value)))
      break
    default:
      buttonName.textContent = 'NAME'
      putCountries(sortCountriesByName(getCountries(input.value)))
      break
  }
})

buttonCapital.addEventListener('click', () => {
  switch (buttonCapital.textContent) {
    case 'CAPITAL':
      buttonCapital.textContent = 'CAPITAL⬆'
      putCountries(sortCountriesByCapital(getCountries(input.value)))
      break

    case 'CAPITAL⬆':
      buttonCapital.textContent = 'CAPITAL⬇'
      putCountries(sortCountriesByCapital(getCountries(input.value)))
      break
    default:
      buttonCapital.textContent = 'CAPITAL'
      putCountries(sortCountriesByCapital(getCountries(input.value)))
      break
  }
})

buttonPopulation.addEventListener('click', () => {
  switch (buttonPopulation.textContent) {
    case 'POPULATION':
      buttonPopulation.textContent = 'POPULATION⬆'
      putCountries(sortCountriesByPopulation(getCountries(input.value)))
      break

    case 'POPULATION⬆':
      buttonPopulation.textContent = 'POPULATION⬇'
      putCountries(sortCountriesByPopulation(getCountries(input.value)))
      break
    default:
      buttonPopulation.textContent = 'POPULATION'
      putCountries(sortCountriesByPopulation(getCountries(input.value)))
      break
  }
})
