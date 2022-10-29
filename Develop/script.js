// Assignment code here
let lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
let upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let numbers = [0,1,2,3,4,5,6,7,8,9]
let specialCharacters = "~!@#$%^&*()_-+={[}]|:;'<,>.?/";
let lengthPass;
let shouldUseSpecial;
let shouldUseLower;
let shouldUseUpper;
let shouldUseNum;
let setToInclude = [];

function generatePassword () {
  lengthPass = prompt("How many characters do you want in you password? (8-128");
  while (lengthPass < 8 || lengthPass > 128) {
    alert("Invalid entry \nChoose a number between 8 - 128");
    lengthPass = prompt("How many characters do you want in you password? (8-128");
  }
  shouldUseNum = confirm("Do you want number characters?");
  shouldUseLower = confirm("Do you want lower case characters?");
  shouldUseUpper = confirm("Do you want upper case characters?");
  shouldUseSpecial = confirm("Do you want special characters?");

  if (shouldUseNum) {
    setToInclude.push(numbers);
  }

  if (shouldUseLower) {
    setToInclude.push(lowerCaseLetters);
  }

  if (shouldUseUpper) {
    setToInclude.push(upperCaseLetters);
  }

  if (shouldUseSpecial) {
    setToInclude.push(specialCharacters);
  }
}

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
