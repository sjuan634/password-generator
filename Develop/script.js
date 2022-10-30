// Declare variables/arrays with values for each password criteria
let lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
let upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let numbers = [0,1,2,3,4,5,6,7,8,9]
let specialCharacters = "~!@#$%^&*()_-+={[}]|:;'<,>.?/";

// function that generates password prompts user for length and criteria
function generatePassword () {
  let lengthPass = parseInt(prompt("How many characters do you want in you password? (8-128)"));
  // Validates that user enter an integer
  while (!Number.isInteger(parseInt(lengthPass))) {
    alert("You need to enter a integer. Try again.");
    lengthPass = prompt("How many characters do you want in you password? (8-128)");
  }
  // Validates that user enter a number between 8 and 128
  while (lengthPass < 8 || lengthPass > 128) {
    alert("Invalid entry \nChoose a number between 8 - 128");
    lengthPass = prompt("How many characters do you want in you password? (8-128)");
  }

  let shouldUseNum = confirm("Do you want number characters?");
  let shouldUseLower = confirm("Do you want lower case characters?");
  let shouldUseUpper = confirm("Do you want upper case characters?");
  let shouldUseSpecial = confirm("Do you want special characters?");

  // Create array with all criteria selected by user
  let passCriteria = [];

  if (shouldUseNum) {
    passCriteria.push(numbers);
  }

  if (shouldUseLower) {
    passCriteria.push(lowerCaseLetters);
  }

  if (shouldUseUpper) {
    passCriteria.push(upperCaseLetters);
  }

  if (shouldUseSpecial) {
    passCriteria.push(specialCharacters);
  }

  // Validates that the user selected at least one criteria
  while (passCriteria.length === 0) {
    alert("You need to select at least one criteria. Try again");
    shouldUseNum = confirm("Do you want number characters?");
    shouldUseLower = confirm("Do you want lower case characters?");
    shouldUseUpper = confirm("Do you want upper case characters?");
    shouldUseSpecial = confirm("Do you want special characters?");

    passCriteria = [];

    if (shouldUseNum) {
      passCriteria.push(numbers);
    }

    if (shouldUseLower) {
     passCriteria.push(lowerCaseLetters);
    }

    if (shouldUseUpper) {
      passCriteria.push(upperCaseLetters);
    }

    if (shouldUseSpecial) {
      passCriteria.push(specialCharacters);
    }
  }

  // Builds password based on length and criteria selected by the user
  password = "";
  for (var i = 0; i < lengthPass; i++){
    let criteriaIndex = Math.floor(Math.random() * passCriteria.length);
    console.log(criteriaIndex);
    let randomSet = passCriteria[criteriaIndex];
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
