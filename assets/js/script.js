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
  if (passwordLength < 8 || passwordLength > 128) {
    alert("You must choose a password length of 8 to 128 characters")
    return "Please try again"
  }
  var lowerCase = confirm ("Would you like lowercase characters")
  var upperCase = confirm ("Would you like uppercase characters")
  var numeric = confirm ("Would you like numeric characters")
  var specialCharacters = confirm ("Would you like special characters")
  console.log(lowerCase, upperCase, numeric, specialCharacters)
  if (lowerCase === false && upperCase === false && numeric === false && specialCharacters === false) {
    alert("You need to add uppercase, lowercase, numbers, or special characters")
    return "Please try again"
  }
  var lower = "abcdefghijklmnopqrstuvwxyz"
  var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  var numbers = "1234567890"
  var symbols = "!@#$%^&*()"
  var container = ""
  if (lowerCase) {
    container += lower
  }
  if (upperCase) {
    container += upper
  }
  if (numeric) {
    container += numbers
  }
  if (specialCharacters) {
    container += symbols
  }
  console.log(container)
  let result = ""
  var containerlength = container.length
  for (let i = 0; i < passwordLength; i++) {
    result += container.charAt(Math.floor(Math.random() * containerlength))

  }
  console.log(result)
  return result
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// function makeid(length) {
//     let result = '';
//     const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
//     const charactersLength = characters.length;
//     let counter = 0;
//     while (counter < length) {
//       result += characters.charAt(Math.floor(Math.random() * charactersLength));
//       counter += 1;
//     }
//     return result;
// }
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