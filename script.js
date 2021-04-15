// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {

  possibleCharacters = "";
  var password = "";
  var passwordLength;
  var ifLowerCaseLetters;
  var ifUpperCaseLetters;
  var ifNumerals;
  var ifSpecialCharacters;
  var re = new RegExp('^[0-9]$');

  do {
    passwordLength = prompt("Please enter a valid password length. Enter a number between 8 and 128.");
    console.log(passwordLength);
    if (passwordLength == null) {
      break;
    } else {
      ifLowerCaseLetters = confirm("Do you want LOWER-CASE letters?"); 
      ifUpperCaseLetters = confirm("Do you want UPPER-CASE letters?");
      ifNumerals = confirm("Do you want numbers?");
      ifSpecialCharacters = confirm("Do you want special characters?");
    }
  } while (
    passwordLength == undefined ||
    typeof +passwordLength != "number" ||
    isNaN(passwordLength) ||
    +passwordLength < 8 ||
    +passwordLength > 128
  )


  if (ifLowerCaseLetters) {
    possibleCharacters += "abcdefghijklmnopqrstuvwxyz";
  }
  if (ifUpperCaseLetters) {
    possibleCharacters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  if (ifNumerals) {
    possibleCharacters += "0123456789";
  }
  if (ifSpecialCharacters) {
    possibleCharacters += "!@#$%^&*()-=_+";
  }

  console.log(possibleCharacters);

  for (var i = 0; i < passwordLength; i++) {
    randomIndex = Math.floor(Math.random() * possibleCharacters.length);
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
