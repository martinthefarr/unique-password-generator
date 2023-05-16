// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
function generatePassword() {
  var passwordLength = prompt("How many charachters would you like your password. Pick between 8 and 128.")
  console.log(passwordLength)
  if (passwordLength < 8 || > 128) {
    return "Please try again"
  }
  var lowerCase = prompt("Would you like lowercase characters")
  var upperCase = prompt("Would you like uppercase characters")
  var numeric = prompt("Would you like numeric characters")
  var specialCharacters = prompt("Would you like special characters")
  console.log(lowerCase, upperCase, numeric, specialCharacters)
  if (lowerCase === false, upperCase === false, numeric === false, specialCharacters === false) {
    alert("You need to add uppercase, lowercase, numbers, and special characters")
    return "Please try again"
  }
  var lower = "abcdefghijklmnopqrstuvwxyz"
  var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  var numbers = "1234567890"
  var symbols = "!@#$%^&*()"
  var container = ""
  
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page
// ```