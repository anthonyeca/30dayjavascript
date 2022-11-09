//Exercise: Level 1
//1. Create an index.html file and put four p elements as above: Get the first paragraph by using document.querySelector(tagname) and tag name
//2. Get each of the the paragraph using document.querySelector('#id') and by their id
//3. Get all the p as nodeList using document.querySelectorAll(tagname) and by their tag name
//4. Loop through the nodeList and get the text content of each paragraph
//5. Set a text content to paragraph the fourth paragraph,Fourth Paragraph
//6. Set id and class attribute for all the paragraphs using different attribute setting methods

//1.
// const paragraph = document.getElementsByTagName('p')
// console.log(paragraph[0])

//2.
// const paragraphID = document.querySelector('#parrafo')
// console.log(paragraphID)
//3.
// const paragraphAll = document.querySelectorAll('p')

//4.
// for (let i = 0; i < paragraphAll.length; i++) {
//   console.log(paragraphAll[i])
// }

//5.
// paragraphAll[3].textContent = 'Fourth Paragraph'

//6.
// paragraphAll[0].className = 'dotClassName'
// paragraphAll[0].id = 'dotID'
// console.log(paragraphAll[0])
// paragraphAll[1].classList.add('classList')
// console.log(paragraphAll[1])
// paragraphAll[2].setAttribute('class', 'withSetAttribute')
// paragraphAll[2].setAttribute('id', 'withSetAttribute')
// console.log(paragraphAll[2])

//Exercise: Level 2
//1.Change stye of each paragraph using JavaScript(eg. color, background, border, font-size, font-family)
//2.Select all paragraphs and loop through each elements and give the first and third paragraph a color of green, and the second and the fourth paragraph a red color
//3. Set text content, id and class to each paragraph

//1.
// const paragraph = document.querySelectorAll('p')
// paragraph.forEach((el, i) => {
//   el.style.border = '3px solid black'
//   el.style.width = '10rem'
//   el.style.background = '#eee'
//   el.style.fontFamily = 'arial'
//   el.style.color = 'blue'
//   el.style.fontSize = '32px'
// })

//2.
// paragraph.forEach((el, i) => {
//   if (i == 0 || i == 2) {
//     el.style.color = 'green'
//   } else {
//     el.style.color = 'red'
//   }
// })

//3.
// paragraph.forEach((el) => {
//   el.setAttribute('id', 'paragraph')
//   el.setAttribute('class', 'paragraph')
// })

// console.log(paragraph)
