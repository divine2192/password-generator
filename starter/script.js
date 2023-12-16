// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options
function getPasswordOptions() {
var length = prompt("Enter the length of the password (At least 8 characters but no more than 128): ");
// Validate the length input
while (isNaN(length) || length < 8 || length >128) {
  alert("Please enter a valid number for password length");
  length = parseInt(prompt("Enter the length of the password:"));
}// make sure that the length of password is kept
var includeUppercase = confirm("Include Uppercase?");
var includeLowercase = confirm("Include Lowercase?");
var includeNumbers = confirm("Include Numbers?");
var includeSpecialChars = confirm("Include Special Characters?");
var userConfirm = confirm("You Choose" + " length: " + length + " Uppercase: " + includeUppercase +  " Lowercase: " + includeLowercase + " Numeric: " + includeNumbers + " Special Characters: " + includeSpecialChars);
// Confirms the user input back to the user


  var criteria = {
    length: length,
    includeUppercase: includeUppercase,
    includeLowercase: includeLowercase,
    includeNumbers: includeNumbers,
    includeSpecialChars: includeSpecialChars
   
};

return criteria;

} 

var userCriteria = getPasswordOptions();// carries out the function of user input

// Function for getting a random element from an array
function getRandom(arr) {
  if (arr.length >= 8) {
  
var randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
  }} // uses math random to each array to to get a random one

// Function to generate password with user input
function generatePassword() {
  var password = ''; // we are looking for password so a blank string
  var allowedChars = '';

  if (userCriteria.includeUppercase) {
      allowedChars += upperCasedCharacters.join(''); // for the uppercase find uppercase in the array 
  }
  if (userCriteria.includeLowercase) {
      allowedChars += lowerCasedCharacters.join('');
  }
  if (userCriteria.includeNumbers) {
      allowedChars += numericCharacters.join('');
  }
  if (userCriteria.includeSpecialChars) {
      allowedChars += specialCharacters.join('');
  }
  for (var i = 0; i < userCriteria.length; i++) {
      var randomIndex = Math.floor(Math.random() * allowedChars.length);
      password += allowedChars.charAt(randomIndex);
  } // for each length user input is, it finds a random character based on the allowed characters, it then replace into password to return a generated password to the user
  return password;

}
var passwordGenerated = generatePassword();
  console.log("Generated Password:", passwordGenerated);
// Get references to the #generate element
var generateBtn = document.querySelector('#generate');



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);