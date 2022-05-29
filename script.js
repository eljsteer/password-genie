// Assignment Code
const generateBtn = document.querySelector("#generate");

const lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
const upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numericalChars = "0123456789"
const specialChars = "@%+\/'!#$^?:,)(}{][~-_.;"

function writePassword(password) {
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
};

generateBtn.addEventListener('click', function(){
  var charToUse = ''
  var lengthSelect = document.getElementById("passwordlength").value;
  var lowerCaseSelect = document.getElementById("lowercase").checked
  var upperCaseSelect = document.getElementById("uppercase").checked
  var numericalSelect = document.getElementById("number").checked
  var specialSelect = document.getElementById("special").checked

  if (lengthSelect < 8 || lengthSelect > 128) {
    window.alert("Password must be between 8 and 128 Characters, Please reenter in  ")
    return
  }
  if (lowerCaseSelect && upperCaseSelect && numericalSelect && specialSelect === false ) {
    window.alert("Must select at least one Password Variable")
    return
  }
  if(lowerCaseSelect) {
    charToUse += lowerCaseChars
  }
  if(upperCaseSelect) {
    charToUse += upperCaseChars
  }
  if(numericalSelect) {
    charToUse += numericalChars
  }
  if(specialSelect) {
    charToUse += specialChars
  }
  var generatedPassword = ''

  for (var i = 0; i < lengthSelect; i++) {
    generatedPassword += charToUse.charAt(Math.floor(Math.random() * charToUse.length));
  }
 
  writePassword(generatedPassword);
})


























// var userLengthInput = prompt("Please enter how many Characters you would like your password to be")

// if (!/^[0-9]+$/.test(userLengthInput)) {
//   alert("You did not enter a number.");
//   userLengthInput = prompt("Please enter how many Characters you would like your password to be?");
// }

//   // while (userLengthInput < 8 || userLengthInput > 128 ) {
//   //   alert("Please enter a Number between 8 and 128");

// var userLowerInput = confirm("Would you like to include Lowercase Characters in your Password?");
// var userUpperInput = confirm("Would you like to include Uppercase Characters in your Password?");
// var userNumericalInput = confirm("Would you like to include Numbers in your Password");
// var userSpecialInput = confirm("Would you like to include Special Characters in your Password");
