//Exercises: Level 2
//1. Use the countries array to display all the countries.See the design
//import { countries } from './countries'

const countries = [
  'Afghanistan',
  'Albania',
  'Algeria',
  'Andorra',
  'Angola',
  'Antigua and Barbuda',
  'Argentina',
  'Armenia',
  'Australia',
  'Austria',
  'Azerbaijan',
  'Bahamas',
  'Bahrain',
  'Bangladesh',
  'Barbados',
  'Belarus',
  'Belgium',
  'Belize',
  'Benin',
  'Bhutan',
  'Bolivia',
  'Bosnia and Herzegovina',
  'Botswana',
  'Brazil',
  'Brunei',
  'Bulgaria',
  'Burkina Faso',
  'Burundi',
  'Cambodia',
  'Cameroon',
  'Canada',
  'Cape Verde',
  'Central African Republic',
  'Chad',
  'Chile',
  'China',
  'Colombi',
  'Comoros',
  'Congo (Brazzaville)',
  'Congo',
  'Costa Rica',
  "Cote d'Ivoire",
  'Croatia',
  'Cuba',
  'Cyprus',
  'Czech Republic',
  'Denmark',
  'Djibouti',
  'Dominica',
  'Dominican Republic',
  'East Timor (Timor Timur)',
  'Ecuador',
  'Egypt',
  'El Salvador',
  'Equatorial Guinea',
  'Eritrea',
  'Estonia',
  'Ethiopia',
  'Fiji',
  'Finland',
  'France',
  'Gabon',
  'Gambia, The',
  'Georgia',
  'Germany',
  'Ghana',
  'Greece',
  'Grenada',
  'Guatemala',
  'Guinea',
  'Guinea-Bissau',
  'Guyana',
  'Haiti',
  'Honduras',
  'Hungary',
  'Iceland',
  'India',
  'Indonesia',
  'Iran',
  'Iraq',
  'Ireland',
  'Israel',
  'Italy',
  'Jamaica',
  'Japan',
  'Jordan',
  'Kazakhstan',
  'Kenya',
  'Kiribati',
  'Korea, North',
  'Korea, South',
  'Kuwait',
  'Kyrgyzstan',
  'Laos',
  'Latvia',
  'Lebanon',
  'Lesotho',
  'Liberia',
  'Libya',
  'Liechtenstein',
  'Lithuania',
  'Luxembourg',
  'Macedonia',
  'Madagascar',
  'Malawi',
  'Malaysia',
  'Maldives',
  'Mali',
  'Malta',
  'Marshall Islands',
  'Mauritania',
  'Mauritius',
  'Mexico',
  'Micronesia',
  'Moldova',
  'Monaco',
  'Mongolia',
  'Morocco',
  'Mozambique',
  'Myanmar',
  'Namibia',
  'Nauru',
  'Nepal',
  'Netherlands',
  'New Zealand',
  'Nicaragua',
  'Niger',
  'Nigeria',
  'Norway',
  'Oman',
  'Pakistan',
  'Palau',
  'Panama',
  'Papua New Guinea',
  'Paraguay',
  'Peru',
  'Philippines',
  'Poland',
  'Portugal',
  'Qatar',
  'Romania',
  'Russia',
  'Rwanda',
  'Saint Kitts and Nevis',
  'Saint Lucia',
  'Saint Vincent',
  'Samoa',
  'San Marino',
  'Sao Tome and Principe',
  'Saudi Arabia',
  'Senegal',
  'Serbia and Montenegro',
  'Seychelles',
  'Sierra Leone',
  'Singapore',
  'Slovakia',
  'Slovenia',
  'Solomon Islands',
  'Somalia',
  'South Africa',
  'Spain',
  'Sri Lanka',
  'Sudan',
  'Suriname',
  'Swaziland',
  'Sweden',
  'Switzerland',
  'Syria',
  'Taiwan',
  'Tajikistan',
  'Tanzania',
  'Thailand',
  'Togo',
  'Tonga',
  'Trinidad and Tobago',
  'Tunisia',
  'Turkey',
  'Turkmenistan',
  'Tuvalu',
  'Uganda',
  'Ukraine',
  'United Arab Emirates',
  'United Kingdom',
  'United States',
  'Uruguay',
  'Uzbekistan',
  'Vanuatu',
  'Vatican City',
  'Venezuela',
  'Vietnam',
  'Yemen',
  'Zambia',
  'Zimbabwe',
]
let text = 'World  Countries  List'
text = text.toUpperCase()
let arr = []
for (let letter of text) {
  arr.push(letter)
  arr.push(' ')
}
arr = arr.join('')
console.log(arr)

let title = document.createElement('h1')
let totalNumber = document.createElement('h2')
let daysOfJavaScript = document.createElement('h3')
let author = document.createElement('h3')

title.textContent = arr
totalNumber.textContent = `Total Number of countries: ${countries.length}`
daysOfJavaScript.textContent = '30DaysOfJavascript Dom-Day-2'
author.textContent = 'Author: Asabeneh Yetayeh'

let header = document.createElement('header')
document.body.append(header)
header.style.fontFamily = 'arial'
header.style.textAlign = 'center'

header.appendChild(title)
header.appendChild(totalNumber)
header.appendChild(daysOfJavaScript)
header.appendChild(author)

title.style.fontSize = '32px'
totalNumber.style.fontSize = '15px'
daysOfJavaScript.style.fontSize = '15px'
daysOfJavaScript.style.color = 'gray'
daysOfJavaScript.style.marginTop = '-10px'
author.style.fontSize = '15px'
author.style.color = 'gray'
author.style.marginTop = '-10px'
let container = document.createElement('div')
document.body.append(container)

let country
for (let i = 0; i < countries.length; i++) {
  country = document.createElement('p')
  country.className = 'country'
  country.textContent = countries[i].toUpperCase()
  country.style.border = '1px solid #d3d3d3 '
  country.style.width = '70%'
  country.style.height = '7rem'
  country.style.margin = '10px auto'
  country.style.display = 'flex'
  country.style.alignItems = 'center'
  country.style.justifyContent = 'center'
  container.appendChild(country)
}

container.style.fontFamily = 'arial'
container.style.display = 'grid'
container.style.gridTemplateColumns = '1fr 1fr 1fr 1fr 1fr 1fr'
container.style.textAlign = 'center'
container.style.margin = 'auto'
container.style.width = '60%'
