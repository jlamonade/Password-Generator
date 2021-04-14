// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {

  possibleCharacters = "";
  var passwordLength;

  do {
    passwordLength = +prompt("Please enter a valid password length. Enter a number between 8 and 128.");
  } while (
    passwordLength < 8 ||
    passwordLength > 128
  )

  var lowerCaseLetters = confirm("Do you want LOWER-CASE letters?");
  var upperCaseLetters = confirm("Do you want UPPER-CASE letters?");
  var numerals = confirm("Do you want numbers?");
  var specialCharacters = confirm("Do you want special characters?");

  if (lowerCaseLetters) {
    possibleCharacters += "abcdefghijklmnopqrstuvwxyz";
  }

  if (upperCaseLetters) {
    possibleCharacters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }

  if (numerals) {
    possibleCharacters += "0123456789";
  }

  if (specialCharacters) {
    possibleCharacters += "!@#$%^&*";
  }

  console.log(possibleCharacters);

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
