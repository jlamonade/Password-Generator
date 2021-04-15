// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {

  var possibleCharacters = "";
  var password = "";
  var passwordLength;
  var lowerCaseLetters;
  var upperCaseLetters;
  var numerals;
  var specialCharacters;

  while (
    !passwordLength ||
    passwordLength < 8 ||
    passwordLength > 128
  ) {
    passwordLength = prompt("Please enter a valid password length. Enter a number between 8 and 128.");
    console.log(passwordLength);
    if (!passwordLength) {
      break;
    }
  }

  if (passwordLength) {
    lowerCaseLetters = confirm("Do you want LOWER-CASE letters?"); 
    upperCaseLetters = confirm("Do you want UPPER-CASE letters?");
    numerals = confirm("Do you want numbers?");
    specialCharacters = confirm("Do you want special characters?");
  }

  // var lowerCaseLetters = confirm("Do you want LOWER-CASE letters?"); 
  // var upperCaseLetters = confirm("Do you want UPPER-CASE letters?");
  // var numerals = confirm("Do you want numbers?");
  // var specialCharacters = confirm("Do you want special characters?");

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
    possibleCharacters += "!@#$%^&*()-=_+";
  }

  for (var i = 0; i < passwordLength; i++) {
    var randomIndex = Math.floor(Math.random() * possibleCharacters.length);
    password += possibleCharacters[randomIndex];
  }
  
  return password;

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
