// Assignment code here
let lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
let upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let numbers = [0,1,2,3,4,5,6,7,8,9]
let specialCharacters = "~!@#$%^&*()_-+={[}]|:;'<,>.?/";
let numCharacters = prompt("How many characters would you like the password to be? (8 - 128)");

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
