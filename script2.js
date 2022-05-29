// Assignment Code
const generateBtn = document.querySelector("#generate");

  // Array of lowercase characters 
  var lowerCaseCharArray = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z'
  ];
  // Array of uppercase characters 
  var upperCaseCharArray = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z'
  ];

  // Array of numeric characters 
  var numberCharArray = [
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9'
   ];

// Array of specialCharacters
var specialCharArray = [
    '@',
    '%',
    '+',
    '\\',
    '/',
    "'",
    '!',
    '#',
    '$',
    '^',
    '?',
    ':',
    ',',
    ')',
    '(',
    '}',
    '{',
    ']',
    '[',
    '~',
    '-',
    '_',
    '.'
  ];

// Functions to get random variable from array of option

function getRandomLower() {
  return lowerCaseCharArray[Math.floor(Math.random() * lowerCaseCharArray.length)]
}
function getRandomUpper() {
  return upperCaseCharArray[Math.floor(Math.random() * upperCaseCharArray.length)]
}
function getRandomNumber() {
  return numberCharArray[Math.floor(Math.random() * numberCharArray.length)]
}
function getRandomspecial() {
  return specialCharArray[Math.floor(Math.random() * specialCharArray.length)]
}

let randomiseFuncArray = [
  getRandomLower,
  getRandomUpper,
  getRandomNumber,
  getRandomspecial,
];

generateBtn.addEventListener('click', function(){
var lengthSelect = document.getElementById("passwordlength").value;
var lowerCaseSelect = document.getElementById("lowercase").checked
var upperCaseSelect = document.getElementById("uppercase").checked
var numericalSelect = document.getElementById("number").checked
var specialSelect = document.getElementById("special").checked

var generatedPassword = ''

for (var i = 0; i < lengthSelect; i++) {
  let choose = Math.floor(Math.random() * 4)
  // choose = # relating to function in array
  let build = randomiseFuncArray[choose]
  // f = getRandomspecial
  generatedPassword += build()
  // password += getRandomspecial()
}

function writePassword(password) {
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
  };

  writePassword(generatedPassword);
})
