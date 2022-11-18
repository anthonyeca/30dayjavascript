const text = '30 Days Of Javascript'
const challenge = 'Challenge 2020'
const author = 'asabeneh yetayeh'
const textUpper = text.toUpperCase()
const challengeUpper = challenge.toUpperCase()
const authorUpper = author.toUpperCase()

const title = document.createElement('div')
const titleDiv = document.createElement('div')
document.body.append(titleDiv)

const randomColors = () => {
  let color = '#'
  for (let i = 0; i < 3; i++) {
    let random = Math.floor(Math.random() * 9)
    color += random
  }
  return color
}

setInterval(() => {
  title.innerHTML = ''
  const lettersContainerText = document.createElement('div')
  const challengeContainerText = document.createElement('div')
  const authorContainerText = document.createElement('div')
  for (let i = 0; i < textUpper.length; i++) {
    const letter = document.createElement('p')
    letter.textContent = textUpper[i]
    letter.style.color = `${randomColors()}`
    letter.style.fontSize = '48px'
    lettersContainerText.append(letter)
    title.append(lettersContainerText)
    lettersContainerText.style.display = 'flex'
    lettersContainerText.style.gap = '4px'
  }
  titleDiv.append(title)
  for (let i = 0; i < challengeUpper.length; i++) {
    const letter = document.createElement('p')
    letter.textContent = challengeUpper[i]
    letter.style.color = `${randomColors()}`
    letter.style.fontSize = '48px'
    letter.style.display = 'flex'
    challengeContainerText.append(letter)
    title.append(challengeContainerText)
    challengeContainerText.style.display = 'flex'
    challengeContainerText.style.gap = '4px'
  }

  for (let i = 0; i < authorUpper.length; i++) {
    const letter = document.createElement('p')
    letter.textContent = authorUpper[i]
    letter.style.color = `${randomColors()}`
    letter.style.fontSize = '48px'
    letter.style.display = 'flex'
    authorContainerText.append(letter)
    title.append(authorContainerText)
    authorContainerText.style.display = 'flex'
    authorContainerText.style.gap = '4px'
  }
  titleDiv.append(title)
  title.style.background = `${randomColors()}`
}, 3000)

document.body.style.fontFamily = 'arial'
title.style.width = '100%'
title.style.height = '90vh'
