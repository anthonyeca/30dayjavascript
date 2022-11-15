import { countries_data } from './countries_data.js'

const mostSpokenLanguages = (arr, numberOfCountries) => {
  const occurences = arr.reduce((acc, curr) => {
    const { languages } = curr
    languages.forEach((language) => {
      acc[language] = acc[language] === undefined ? 1 : acc[language] + 1
    })
    return acc
  }, {})
  return Object.keys(occurences)
    .map((language) => ({ language, count: occurences[language] }))
    .sort((a, b) => b.count - a.count)
    .slice(0, numberOfCountries)
}

const mostPopulation = (arr, numberOfCountries) => {
  let newArr = []
  arr.forEach((el) => {
    let obj = { name: '', population: '' }
    obj['name'] = el.name
    obj['population'] = el.population
    newArr.push(obj)
  })
  const newArrSorted = newArr.sort((a, b) => {
    return b.population - a.population
  })
  return newArrSorted.slice(0, numberOfCountries)
}

const header = document.createElement('div')
const h1 = document.createElement('h1')
const h4 = document.createElement('h4')

document.body.append(header)
h1.textContent = 'World Countries Data'
header.append(h1)
h4.textContent = 'Currently, we have 250 countries'
header.append(h4)

const hr = document.createElement('hr')
document.body.append(hr)

const divButtons = document.createElement('div')
const buttonPopulation = document.createElement('button')
const buttonLanguages = document.createElement('button')

buttonPopulation.textContent = 'POPULATION'
buttonLanguages.textContent = 'LANGUAGES'

divButtons.append(buttonPopulation, buttonLanguages)
document.body.append(divButtons)

const subTitle = document.createElement('div')
const charts = document.createElement('div')
document.body.append(subTitle)
document.body.append(charts)

buttonPopulation.addEventListener('click', () => {
  const text = document.createElement('p')
  text.textContent = '10 Most populated countries in the world'
  subTitle.innerHTML = ''
  charts.innerHTML = ''
  subTitle.append(text)

  for (let i = 0; i < mostPopulation(countries_data, 10).length; i++) {
    const textCountries = document.createElement('p')
    const countCountries = document.createElement('p')
    let value = 0
    let chart = document.createElement('p')
    let population = mostPopulation(countries_data, 10)[i].name
    let countOfPopulation = mostPopulation(countries_data, 10)[i].population
    textCountries.textContent += population
    value =
      (mostPopulation(countries_data, 10)[i].population * 100) /
      mostPopulation(countries_data, 10)[0].population
    countCountries.textContent += countOfPopulation

    charts.append(textCountries)
    charts.append(chart)
    charts.append(countCountries)

    charts.style.display = 'grid'
    charts.style.gridTemplateColumns = '1fr 1fr 1fr'
    charts.style.gridColumnGap = '10rem'
    charts.style.color = 'black'
    chart.style.width = `${value.toFixed(2) / 2}rem`
    chart.style.background = 'orange'
    textCountries.style.marginLeft = '10rem'
  }
})

buttonLanguages.addEventListener('click', () => {
  const text = document.createElement('p')

  subTitle.innerHTML = ''
  charts.innerHTML = ''
  text.textContent = '10 Most spoken lenguages in the world'
  subTitle.append(text)

  for (let i = 0; i < mostSpokenLanguages(countries_data, 10).length; i++) {
    const textCountries = document.createElement('p')
    const countCountries = document.createElement('p')
    let value = 0
    let chart = document.createElement('p')
    let languages = mostSpokenLanguages(countries_data, 10)[i].language
    let countOfLanguages = mostSpokenLanguages(countries_data, 10)[i].count
    textCountries.textContent += languages
    value =
      (mostSpokenLanguages(countries_data, 10)[i].count * 100) /
      mostSpokenLanguages(countries_data, 10)[0].count
    countCountries.textContent += countOfLanguages

    charts.append(textCountries)
    charts.append(chart)
    charts.append(countCountries)

    charts.style.display = 'grid'
    charts.style.gridTemplateColumns = '1fr 1fr 1fr'
    charts.style.gridColumnGap = '10rem'
    charts.style.color = 'black'
    chart.style.width = `${value.toFixed(2) / 2}rem`
    chart.style.background = 'orange'
    textCountries.style.marginLeft = '10rem'
  }
})

/** STYLES */
document.body.style.fontFamily = 'arial'
document.body.style.color = 'grey'
header.style.textAlign = 'center'

h1.style.color = 'orange'
h1.style.fontWeight = 'normal'
h4.style.fontWeight = 'normal'
h4.style.marginTop = '-15px'

divButtons.style.display = 'flex'
divButtons.style.justifyContent = 'center'
divButtons.style.gap = '10px'

buttonPopulation.style.background = 'orange'
buttonPopulation.style.border = 'none'
buttonPopulation.style.padding = '6px 12px 6px 12px'

buttonLanguages.style.background = 'orange'
buttonLanguages.style.border = 'none'
buttonLanguages.style.padding = '6px 12px 6px 12px'

subTitle.style.textAlign = 'center'
subTitle.style.color = 'black'

charts.style.display = 'grid'
