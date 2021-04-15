// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {

  var lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
  var upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numerals = "0123456789";
  var symbols = "!@#$%^&*()-=_+";
  var re = new RegExp(/^\d+$/); 

  function getPasswordLength () {
    var passwordLength = prompt("Enter a valid password length. Enter a number between 8 and 128.");
    return passwordLength;
  }

  function validatePasswordLength () {
    var passwordLength;
    while (
      !passwordLength ||
      !re.test(passwordLength) ||
      passwordLength < 8 ||
      passwordLength > 128
    ) {
      passwordLength = getPasswordLength();
    }
    return passwordLength; 
  }

  function getCharacterTypes () {
    var possibleCharacters = "";
    if (confirm("Lower case letters?")) possibleCharacters += lowerCaseLetters;
    if (confirm("Upper case letters?")) possibleCharacters += upperCaseLetters;
    if (confirm("Numbers?")) possibleCharacters += numerals;
    if (confirm("Symbols")) possibleCharacters += symbols;

    return possibleCharacters;
  }

  function validateCharacterTypes () {
    var possibleCharacters;
    while (!possibleCharacters) {
      alert("You must choose at least 1 character type.")
      possibleCharacters = getCharacterTypes();
    }
    return possibleCharacters;
  }

  function generate (passwordLength, possibleCharacters) {
    var password = "";
    console.log(passwordLength, possibleCharacters);
    for (var i = 0; i < passwordLength; i++) {
      randomIndex = Math.floor(Math.random() * possibleCharacters.length);
      password += possibleCharacters[randomIndex];
    }
    console.log(password);
    return password;  
  }

  return generate(validatePasswordLength(), validateCharacterTypes());
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
