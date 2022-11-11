const container = document.querySelector('div')
const key = document.querySelector('h1')
const numbers = document.getElementById('numbers')

document.body.addEventListener('keypress', (e) => {
  key.innerHTML = `You pressed ${e.key}`
  if (e.keyCode == 32) {
    key.innerHTML = `You pressed Space`
  }
  numbers.innerHTML = e.keyCode
  numbers.style.border = '2px solid grey'
  numbers.style.borderRadius = '5px'
})

document.body.style.margin = '0 auto'
document.body.style.fontFamily = 'arial'

container.style.position = 'absolute'
container.style.textAlign = 'center'
container.style.width = '100%'
container.style.top = '50%'
container.style.marginTop = '-100px'

numbers.style.color = 'green'
numbers.style.fontSize = '80px'
numbers.style.width = '20%'
numbers.style.position = 'absolute'
numbers.style.marginLeft = '40%'
