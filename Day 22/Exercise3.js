//Exercise: Level 3
//1. Check the requirement of this project from both images(jpg and gif). All the data and CSS has been implemented using JavaScript only. The data is found on starter folder project_3. The drop down button has been created using details HTML element.

//1.
const asabenehChallenges2020 = {
  description: 'Asabeneh Yetayeh challenges',
  challengeTitle: 'Asabeneh Yetayeh challenges',
  challengeSubtitle: '30DaysOfJavaScript Challenge',
  challengeYear: 2020,
  keywords: [
    'HTML',
    'HTML5',
    'CSS',
    'CSS3',
    'JS',
    'JavaScript',
    'ES6',
    'Promise',
    'async await',
    'Database',
    'React',
    'React Hooks',
    'Context API',
    'React Router',
    'Web Storage',
    'localStorage',
    'sessionStorage',
    'Redux',
    'Node',
    'MongoDB',
    'SQL',
    'API',
    'DOM',
    'data science',
    'MERN',
    'Python',
    'Flask',
    'Statistics',
    'Linear Algebra',
    'Numpy',
    'Pandas',
    'Scipy',
    'Scikit-learn',
    'Visualization',
    'D3.js',
  ],
  author: {
    firstName: 'Asabeneh',
    lastName: 'Yetayeh',
    titles: [
      ['🌱', 'Educator'],
      ['💻', 'Programmer'],
      ['🌐', 'Developer'],
      ['🔥', 'Motivator'],
      ['📔', 'Content Creator'],
    ],
    qualifications: [
      'MSc. Computer Science Ongoing',
      'BSc. Information and Communication Eng.',
      'MSc. Food Technology',
      'BSc.Food Technology',
    ],
    socialLinks: [
      {
        social: 'LinkedIn',
        url: 'https://www.linkedin.com/in/asabeneh/',
        fontawesomeIcon: '<i class="fab fa-linkedin">',
      },
      {
        social: 'Twitter',
        url: 'https://twitter.com/Asabeneh',
        fontawesomeIcon: '<i class="fab fa-twitter-square"></i>',
      },
      {
        social: 'Github',
        fontawesomeIcon: '<i class="fab fa-github-square"></i>',
        url: 'https://github.com/Asabeneh',
      },
      {
        social: 'DEV.to',
        fontawesomeIcon: '',
        url: 'https://dev.to/asabeneh',
      },
    ],
    skills: [
      'Web Development',
      'Data Analysis',
      'Data Visualization',
      'Programming',
      'Databases',
      'Developing API',
    ],
    bio: 'I am an educator, developer, motivator and content creator. I am a life-long learner. If you like to know more about me checkout my LinkedIn or Github profile. Thank you so much for joining in my quest of changing everyone to developer.',
  },
  challenges: [
    {
      name: '30 Days Of Python',
      topics: [
        'Python',
        'Flask',
        'Numpy',
        'Pandas',
        'Statistics',
        'API',
        'MongoDB',
      ],
      days: 30,
      status: 'Done',
      questions: 'Above 500',
      projects: 'Two',
      interviewQns: '',
      githubUrl: 'https://github.com/Asabeneh/30-Days-Of-Python',
    },
    {
      name: '30 Days Of JavaScript',
      topics: ['JavaScript', 'ES6', 'Promise', 'async and await', 'DOM'],
      days: 30,
      status: 'Ongoing',
      questions: 'Above 500',
      projects: 'About 30',
      interviewQns: '',
      githubUrl: 'https://github.com/Asabeneh/30DaysOfJavaScript',
    },
    {
      name: '30 Days Of HTML & CSS',
      topics: ['CSS', 'Flex', 'Grid', 'CSS Animation'],
      days: 30,
      status: 'Coming',
      questions: 'Above 500',
      projects: 'Two',
      interviewQns: '',
      githubUrl: '',
    },
    {
      name: '30 Days Of React',
      topics: [
        'React',
        'React Router',
        'Redux',
        'Context API',
        'React Hooks',
        'MERN',
      ],
      days: 30,
      status: 'Coming',
      questions: '',
      projects: '',
      interviewQns: '',
      githubUrl: '',
    },
    {
      name: '30 Days Of ReactNative',
      topics: ['ReactNative', 'Redux'],
      days: 30,
      status: 'Coming',
      questions: '',
      projects: 'Two',
      interviewQns: '',
      githubUrl: '',
    },
    {
      name: '30 Days Of Fullstack',
      topics: ['React', 'Redux', 'MongoDB', 'Node', 'MERN'],
      days: 30,
      status: 'Coming',
      questions: '',
      projects: '',
      interviewQns: '',
      githubUrl: '',
    },
    {
      name: '30 Days Of Data Analysis',
      topics: ['Python', 'Numpy', 'Pandas', 'Statistics', 'Visualization'],
      days: 30,
      status: 'Coming',
      questions: '',
      projects: '',
      interviewQns: '',
      githubUrl: '',
    },
    {
      name: '30 Days Of Machine Learning',
      topics: [
        'Python',
        'Numpy',
        'Pandas',
        'Scikit-learn',
        'Scipy',
        'Linear Algebra',
        'Statistics',
        'Visualization',
      ],
      days: 30,
      status: 'Coming',
      questions: '',
      projects: '',
      interviewQns: '',
      githubUrl: '',
    },
  ],
}

const main = document.createElement('div')
document.body.appendChild(main)
main.className = 'wrapper'

const firstH1 = document.createElement('h1')
const h1Year = document.createElement('h1')
const firstH2 = document.createElement('h2')
const crazyTime = document.createElement('p')
const listDiv = document.createElement('div')

firstH1.textContent = `${asabenehChallenges2020.challengeTitle} in`
h1Year.textContent = asabenehChallenges2020.challengeYear
firstH1.appendChild(h1Year)
firstH2.textContent = asabenehChallenges2020.challengeSubtitle
main.appendChild(firstH1)
main.appendChild(firstH2)

main.style.fontFamily = 'arial'
main.style.display = 'absolute'
main.style.margin = '2rem 10rem'
firstH1.style.textAlign = 'center'
firstH1.style.fontSize = '25px'
h1Year.style.position = 'relative'
h1Year.style.marginTop = '-3rem'
h1Year.style.marginLeft = '32rem'
firstH2.style.textDecoration = 'underline'
firstH2.style.fontSize = '15px'
firstH2.style.fontWeight = 'normal'
firstH2.style.textAlign = 'center'
firstH2.style.marginTop = '-2rem'

setInterval(() => {
  let year = asabenehChallenges2020.challengeYear
  let arr = ['#']
  for (let i = 0; i < 3; i++) {
    let random = Math.floor(Math.random() * 10)
    arr.push(random)
  }
  h1Year.style.color = arr.join('')
}, 1000)

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]

const now = new Date()
let month = months[now.getMonth()]
const year = now.getFullYear()
const date = now.getDate()
let hours = now.getHours()
let minutes = now.getMinutes()
let seconds = now.getSeconds()
const time = hours + ':' + minutes + ':' + seconds
const fulltime = `${month} ${date}, ${year} ${time}`

crazyTime.textContent = fulltime
main.appendChild(crazyTime)

crazyTime.style.width = '13rem'
crazyTime.style.padding = '13px'
crazyTime.style.margin = '0 auto'
crazyTime.style.textAlign = 'center'

setInterval(() => {
  let arr = ['#']
  for (let i = 0; i < 3; i++) {
    let random = Math.floor(Math.random() * 10)
    arr.push(random)
  }
  crazyTime.style.background = `${arr.join('')}`
}, 1000)

main.appendChild(listDiv)

console.log()
let listElement
let listDetailed
let listDetailedSummary
let text
for (let i = 0; i < asabenehChallenges2020.challenges.length; i++) {
  listElement = document.createElement('li')
  listDetailed = document.createElement('details')
  listDetailedSummary = document.createElement('summary')
  text = document.createElement('span')
  listElement.className = 'list'

  if (i === 0) {
    listElement.style.background = '#0eef6c'
    text.textContent = 'Done'
  }
  if (i === 1) {
    listElement.style.background = '#f4e622'
    text.textContent = 'Ongoing'
  }
  if (i != 1 && i != 0) {
    listElement.style.background = '#ea3f3f'
    text.textContent = 'Coming'
  }

  listElement.textContent = asabenehChallenges2020.challenges[i].name
  listDetailed.textContent = asabenehChallenges2020.challenges[i].topics
  listDetailedSummary.textContent =
    asabenehChallenges2020.challenges[i].name.slice(11)

  listDiv.appendChild(listElement)
  listElement.appendChild(listDetailed)
  listElement.appendChild(text)

  listDiv.style.margin = '1rem auto'
  listDiv.style.width = '55%'
  listElement.style.display = 'grid'
  listElement.style.gridTemplateColumns = 'auto auto auto'
  listElement.style.padding = '15px'
  listElement.style.marginBottom = '5px'

  listDetailed.style.textAlign = 'center'
  text.style.textAlign = 'right'
}

const fullName =
  asabenehChallenges2020.author.firstName +
  ' ' +
  asabenehChallenges2020.author.lastName

const divInfo = document.createElement('div')
const author = document.createElement('p')
author.textContent = fullName

main.appendChild(divInfo)
divInfo.appendChild(author)

divInfo.style.width = '50%'
divInfo.style.textAlign = 'center'
divInfo.style.margin = '-10px auto'
author.style.fontWeight = 'bold'
author.style.fontSize = '24px'

const social = document.createElement('div')
const linkedin = document.createElement('a')
const twitter = document.createElement('a')
const github = document.createElement('a')

linkedin.innerHTML =
  asabenehChallenges2020.author.socialLinks[0].fontawesomeIcon
twitter.innerHTML = asabenehChallenges2020.author.socialLinks[1].fontawesomeIcon
github.innerHTML = asabenehChallenges2020.author.socialLinks[2].fontawesomeIcon

linkedin.href = asabenehChallenges2020.author.socialLinks[2].url
twitter.href = asabenehChallenges2020.author.socialLinks[2].url
github.href = asabenehChallenges2020.author.socialLinks[2].url

divInfo.append(social)
social.append(linkedin, twitter, github)

linkedin.style.color = 'black'
twitter.style.color = 'black'
github.style.color = 'black'

social.style.marginTop = '-20px'
linkedin.style.marginRight = '5px'
twitter.style.marginRight = '5px'

linkedin.style.fontSize = '24px'
twitter.style.fontSize = '24px'
github.style.fontSize = '24px'

const bioContent = document.createElement('div')
bioContent.textContent = asabenehChallenges2020.author.bio

divInfo.append(bioContent)

bioContent.style.marginTop = '2rem'

const titlesSkillsQuali = document.createElement('div')
const titleDiv = document.createElement('div')
const skillsDiv = document.createElement('div')
const qualiDiv = document.createElement('div')

// const titlesDescription = document.createElement('p')
const titleBio = document.createElement('p')
const skillsBio = document.createElement('p')
const qualiBio = document.createElement('p')
const skillsDescription = document.createElement('p')
const qualiDescription = document.createElement('p')

// titlesDescription.append(asabenehChallenges2020.author.titles)
titleBio.append('Titles')
skillsBio.append('Skills')
qualiBio.append('Qualifications')
skillsDescription.append(asabenehChallenges2020.author.skills)
qualiDescription.append(asabenehChallenges2020.author.qualifications)

titleDiv.append(titleBio)
skillsDiv.append(skillsBio)
qualiDiv.append(qualiBio)

titleBio.style.fontWeight = 'bold'
skillsBio.style.fontWeight = 'bold'
qualiBio.style.fontWeight = 'bold'

for (let i = 0; i < asabenehChallenges2020.author.titles.length; i++) {
  let listTitle = document.createElement('li')
  let icon = asabenehChallenges2020.author.titles[i][0]
  let text = asabenehChallenges2020.author.titles[i][1]
  listTitle.append(icon, ' ', text)
  titleDiv.append(listTitle)
}

for (let i = 0; i < asabenehChallenges2020.author.skills.length; i++) {
  let listSkills = document.createElement('li')
  let icon = '✅'
  let text = asabenehChallenges2020.author.skills[i]
  listSkills.append(icon, ' ', text)
  skillsDiv.append(listSkills)
}

for (let i = 0; i < asabenehChallenges2020.author.qualifications.length; i++) {
  let listsQuali = document.createElement('li')
  let icon = '📖'
  let text = asabenehChallenges2020.author.qualifications[i]
  listsQuali.append(icon, ' ', text)
  qualiDiv.append(listsQuali)
}

qualiDiv.style.listStyle = 'none'
qualiDiv.style.textAlign = 'left'
titleDiv.style.listStyle = 'none'
titleDiv.style.textAlign = 'left'
skillsDiv.style.listStyle = 'none'
skillsDiv.style.textAlign = 'left'

titlesSkillsQuali.append(titleDiv, skillsDiv, qualiDiv)

divInfo.append(titlesSkillsQuali)

titlesSkillsQuali.style.marginTop = '3rem'
titlesSkillsQuali.style.display = 'grid'
titlesSkillsQuali.style.gridTemplateColumns = 'auto auto auto'

const keywordDiv = document.createElement('div')
const keywordTitleDiv = document.createElement('div')
const keywordsTitle = document.createElement('p')

keywordsTitle.textContent = 'Keywords'
keywordTitleDiv.append(keywordsTitle)
divInfo.append(keywordTitleDiv)
divInfo.append(keywordDiv)

keywordsTitle.style.textAlign = 'left'
keywordsTitle.style.fontWeight = 'bold'

for (let i = 0; i < asabenehChallenges2020.keywords.length; i++) {
  let listOfKeywords = document.createElement('span')
  listOfKeywords.textContent = `# ${asabenehChallenges2020.keywords[i]}`
  keywordDiv.append(listOfKeywords)
  listOfKeywords.style.fontWeight = 'bold'
  listOfKeywords.style.borderRadius = '15px'
  listOfKeywords.style.margin = '2px'
  listOfKeywords.style.fontStyle = 'italic'
  listOfKeywords.style.fontSize = '14px'
  listOfKeywords.style.padding = '5px'
  listOfKeywords.style.marginRight = '1rem'

  let arr = ['#']
  for (let i = 0; i < 4; i++) {
    let random = Math.floor(Math.random() * 10)
    arr.push(random)
  }
  listOfKeywords.style.background = `${arr.join('')}`
}

keywordDiv.style.display = 'flex'
keywordDiv.style.flexWrap = 'wrap'
