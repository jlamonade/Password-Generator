// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {

  // possible character sets
  var lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
  var upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numerals = "0123456789";
  var symbols = "!@#$%^&*()-=_+";

  function getPasswordLength () { // gets the password length
    var passwordLength = prompt("Enter a valid password length. Enter a number between 8 and 128.");
    return passwordLength;
  }

  function validatePasswordLength () { 
    /* 
      validates that the password is a number between 8 and 128
      if anything but a number between 8 and 128 then getPasswordLength
      if passwordLength validates then it will return it
    */
    var passwordLength;
    while (
      !passwordLength ||
      isNaN(passwordLength) ||
      passwordLength < 8 ||
      passwordLength > 128
    ) {
      passwordLength = getPasswordLength();
    }
    return passwordLength; 
  }

  function getCharacterTypes () {
    /* 
      gets character types by confirm() and if true
      adds the associated characters to possibleCharacters 
      and then returns possibleCharacters
    */ 
    var possibleCharacters = "";
    if (confirm("Lower case letters?")) possibleCharacters += lowerCaseLetters;
    if (confirm("Upper case letters?")) possibleCharacters += upperCaseLetters;
    if (confirm("Numbers?")) possibleCharacters += numerals;
    if (confirm("Symbols")) possibleCharacters += symbols;

    return possibleCharacters;
  }

  function validateCharacterTypes () {
    /* 
      if possibleCharacters is empty then user chose
      false for all types and asks for character types
      again, returns a string of possibleCharacters
      if it passes validation
    */
    var possibleCharacters;
    while (!possibleCharacters) {
      alert("You must choose at least 1 character type.")
      possibleCharacters = getCharacterTypes();
    }
    return possibleCharacters;
  }

  function generate (passwordLength, possibleCharacters) {
    /* 
      takes in a passwordLength and possibleCharacters 
      to generate a random password
     */
    var password = "";
    for (var i = 0; i < passwordLength; i++) {
      randomIndex = Math.floor(Math.random() * possibleCharacters.length);
      password += possibleCharacters[randomIndex];
    }
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
