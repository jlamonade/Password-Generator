// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {

  var possibleCharacters = ""; // string with possible characters used in password
  var password = "";
  var passwordLength;
  var ifLowerCaseLetters;
  var ifUpperCaseLetters;
  var ifNumerals;
  var ifSymbols;
  var re = new RegExp(/^\d+$/); 

  do { // using do/while here so that prompt comes before any checks
    passwordLength = prompt("Please enter a valid password length. Enter a number between 8 and 128.");
    if (passwordLength == null) {
      return null;
    }
  } while ( // the conditions here ensures user enters a valid integer before function proceeds further
    !re.test(passwordLength) || // regex test returns true if passwordLength contains anything but numbers
    !passwordLength || // checks for null or undefined values
    passwordLength < 8 || 
    passwordLength > 128
    )

  ifLowerCaseLetters = confirm("Do you want LOWER-CASE letters?"); 
  ifUpperCaseLetters = confirm("Do you want UPPER-CASE letters?");
  ifNumerals = confirm("Do you want NUMBERS?");
  ifSymbols = confirm("Do you want SYMBOLS?");


  /* appends character sets into possibleCharacters */
  if (ifLowerCaseLetters) {
    possibleCharacters += "abcdefghijklmnopqrstuvwxyz";
  }
  if (ifUpperCaseLetters) {
    possibleCharacters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  if (ifNumerals) {
    possibleCharacters += "0123456789";
  }
  if (ifSymbols) {
    possibleCharacters += "!@#$%^&*()-=_+";
  }

  console.log(possibleCharacters);

 if (possibleCharacters) { 
  /* 
  checks to make sure that user chooses at least 1 character type
  if possibleCharacter is empty, that means user chose false for all
  character types. 
  */
  for (var i = 0; i < passwordLength; i++) { 
    /* 
    passwordLength is converted to an integer here because 
    of comparison with integer.
    */
    var randomIndex = Math.floor(Math.random() * possibleCharacters.length);
    /* 
    Generates a random number between 0 and possibleCharacters.length
    used as an index to get a character from possibleCharacters
    */
    password += possibleCharacters[randomIndex]; // appends newly generated character into password
  }
  return password;
 } else {
   alert('You must choose at least one character type.');
   return null; // if !possibleCharacters then null so that passwordText.value does not change
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
