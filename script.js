// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {

  var possibleCharacters = ""; // string with possible characters used in password
  var password = "";
  var passwordLength;
  var ifLowerCaseLetters;
  var ifUpperCaseLetters;
  var ifNumerals;
  var ifSpecialCharacters;
  var re = new RegExp(/^\d+$/); 

  do { // using do/while here so that prompt comes before any checks
    passwordLength = prompt("Please enter a valid password length. Enter a number between 8 and 128.");
    if (passwordLength == null) {
      break;
    }
  } while ( // the conditions here ensures user enters a valid integer before function proceeds further
    !re.test(passwordLength) || // regex test returns true if passwordLength contains anything but numbers
    !passwordLength || // checks for null or undefined values
    passwordLength < 8 || 
    passwordLength > 128
    )

  if (passwordLength) { 
    ifLowerCaseLetters = confirm("Do you want LOWER-CASE letters?"); 
    ifUpperCaseLetters = confirm("Do you want UPPER-CASE letters?");
    ifNumerals = confirm("Do you want NUMBERS?");
    ifSpecialCharacters = confirm("Do you want SPECIAL CHARACTERS?");
  } else {
    return null; // null if passwordLength is null or undefined
  }


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
  if (ifSpecialCharacters) {
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
    randomIndex = Math.floor(Math.random() * possibleCharacters.length + 0.5);
    /* 
    Generates a random number between 0 and possibleCharacters.length
    Adding 0.5 ensures that the last index is generated since .floor()
    is used
    */
    password += possibleCharacters[randomIndex]; // appends newly generated character into password
  }
  return password;
 } else {
   alert('You must choose at least one character type.');
   return null; // null so that passwordText.value does not change
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
