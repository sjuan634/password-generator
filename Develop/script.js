// Assignment code here
let lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
let upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let numbers = [0,1,2,3,4,5,6,7,8,9]
let specialCharacters = "~!@#$%^&*()_-+={[}]|:;'<,>.?/";

function generatePassword () {
  let lengthPass = prompt("How many characters do you want in you password? (8-128)");
  while (lengthPass < 8 || lengthPass > 128) {
    alert("Invalid entry \nChoose a number between 8 - 128");
    lengthPass = prompt("How many characters do you want in you password? (8-128)");
  }
  let shouldUseNum = confirm("Do you want number characters?");
  let shouldUseLower = confirm("Do you want lower case characters?");
  let shouldUseUpper = confirm("Do you want upper case characters?");
  let shouldUseSpecial = confirm("Do you want special characters?");

  let includeChoices = [];

  if (shouldUseNum) {
    includeChoices.push(numbers);
  }

  if (shouldUseLower) {
    includeChoices.push(lowerCaseLetters);
  }

  if (shouldUseUpper) {
    includeChoices.push(upperCaseLetters);
  }

  if (shouldUseSpecial) {
    includeChoices.push(specialCharacters);
  }

  password = "";
  for (var i = 0; i < lengthPass; i++){
    let choicesIndex = Math.floor(Math.random() * includeChoices.length);
    console.log(choicesIndex);
    let randomSet = includeChoices[choicesIndex];
    console.log(randomSet);
    password += randomSet[Math.floor(Math.random() * randomSet.length)];
    console.log(password);
  }
  return(password);
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
