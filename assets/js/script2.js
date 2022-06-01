// Assignment Code
const generateBtn = document.querySelector("#generate");

  // Array of lowercase characters 
  var lowerCaseChars = [
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
  var upperCaseChars = [
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
  var numberChars = [
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
var specialChars = [
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

function writePassword(password) {
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
};

generateBtn.addEventListener('click', function(){
var lengthSelect = document.getElementById("passwordlength").value;
var lowerCaseSelect = document.getElementById("lowercase").checked
var upperCaseSelect = document.getElementById("uppercase").checked
var numberSelect = document.getElementById("number").checked
var specialSelect = document.getElementById("special").checked
var generatedPassword = ''
var userSelectedArray = [];

// Conditional statement to restrict the password length and enforce that one setting is selected
if (lengthSelect < 8 || lengthSelect > 128) {
  window.alert("Password must be between 8 and 128 Characters, Please reenter in # of Characters")
  return
}

if(lowerCaseSelect) {
  userSelectedArray = userSelectedArray.concat(lowerCaseChars)
}
if(upperCaseSelect) {
  userSelectedArray = userSelectedArray.concat(upperCaseChars)
}
if(numberSelect) {
  userSelectedArray = userSelectedArray.concat(numberChars)
}
if(specialSelect) {
  userSelectedArray = userSelectedArray.concat(specialChars)
}


for (var i = 0; i < lengthSelect; i++) {
  generatedPassword += userSelectedArray[Math.floor(Math.random() * userSelectedArray.length)];
}

  writePassword(generatedPassword);
});


