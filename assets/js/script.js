// Retrieves Button from HTML doc to utilise in JS code.
const generateBtn = document.querySelector("#generate");

// Strings holding the 4 different types of variables available in a password.
const lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
const upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numericalChars = "0123456789"
const specialChars = "@%+\/'!#$^?:,)(}{][~-_.;"

// Function to take the Generated Password String and print to the Index.html file in the password section.
function writePassword(password) {
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
};

// Main function to generate a random password for the user once the user clicks on the "Generate Password" Button.
generateBtn.addEventListener('click', function(){
  var charsToUse = ''
  var lengthSelect = document.getElementById("passwordlength").value;
  var lowerCaseSelect = document.getElementById("lowercase").checked
  var upperCaseSelect = document.getElementById("uppercase").checked
  var numericalSelect = document.getElementById("number").checked
  var specialSelect = document.getElementById("special").checked

// Conditional statement to restrict the password length and enforce that one setting is selected
  if (lengthSelect < 8 || lengthSelect > 128) {
    window.alert("Password must be between 8 and 128 Characters, Please reenter in # of Characters")
    return
  }
  if (!lowerCaseSelect && !upperCaseSelect && !numericalSelect && !specialSelect) {
    window.alert("Must select at least one Password Variable")
    return
  }

// Further conditional statements to add the string to larger string IF the user selected the setting to be in the password.
  if(lowerCaseSelect) {
    charsToUse += lowerCaseChars
  }
  if(upperCaseSelect) {
    charsToUse += upperCaseChars
  }
  if(numericalSelect) {
    charsToUse += numericalChars
  }
  if(specialSelect) {
    charsToUse += specialChars
  }
  var generatedPassword = ''


// This loop keeps repeating as many times as the number selected for the password length by the User.
  for (var i = 0; i < lengthSelect; i++) {
    generatedPassword += charsToUse.charAt(Math.floor(Math.random() * charsToUse.length));
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
