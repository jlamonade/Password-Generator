// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {

  // lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
  // upperCaseLetters = lowerCaseLetters.toUpperCase();
  // specialCharacters = "!@#$%^&*";
  // numbers = "0123456789";

  possibleCharacters = "";
  var passwordLength;
  while (
    passwordLength < 8 ||
    passwordLength > 128 ||
    passwordLength == undefined
  ) {
    passwordLength = +prompt("Please enter a valid password length. Enter a number between 8 and 128.");
  }

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
