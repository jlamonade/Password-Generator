// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {

  var possibleCharacters = "";
  var password = "";
  var passwordLength;
  var ifLowerCaseLetters;
  var ifUpperCaseLetters;
  var ifNumerals;
  var ifSpecialCharacters;
  var re = new RegExp('^[0-9]$');

  function validateLength () {
    do { 
      passwordLength = prompt("Please enter a valid password length. Enter a number between 8 and 128.");
      if (passwordLength == null) return false;
    }
    while (
      !re.test(passwordLength) ||
      !passwordLength || 
      passwordLength < 8 || 
      passwordLength > 128
    );
    return true;
  }

  if (validateLength()) {
    ifLowerCaseLetters = (confirm("Do you want LOWER-CASE letters?")); 
    ifUpperCaseLetters = confirm("Do you want UPPER-CASE letters?");
    ifNumerals = confirm("Do you want numbers?");
    ifSpecialCharacters = confirm("Do you want special characters?");
  }

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
