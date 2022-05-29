// // Functions to get random variable from array of options
function getRandomLower() {
  return lowerCaseCharArray[Math.floor(Math.random() * lowerCaseArray.length)]
}
function getRandomUpper() {
  return upperCaseCharArray[Math.floor(Math.random() * upperCaseArray.length)]
}
function getRandomNumber() {
  return numericalCharArray[Math.floor(Math.random() * numericalArray.length)]
}
function getRandomspecial() {
  return specialCharArray[Math.floor(Math.random() * specialArray.length)]
}

var randomiseFuncArray = [
  getRandomLower,
  getRandomUpper,
  getRandomNumber,
  getRandomspecial,
];

let arr = [getRandomLower, getRandomUpper]

for (var i = 0; i < lengthSelect; i++) {
  let choose = Math.floor(Math.random() * 4)
  // choose = 3
  let f = randomiseFuncArray[choose]
  // f = getRandomspecial
  password += f()
  // password += getRandomspecial()
}