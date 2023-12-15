// Array of special characters to be included in password
const specialCharacters = [
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
const numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
const lowerCasedCharacters = [
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
const upperCasedCharacters = [
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
  const length = parseInt(prompt("Enter the length of the password (between 8 and 128 characters):"));

  if (isNaN(length) || length < 8 || length > 128) {
    alert("Please enter a valid password length between 8 and 128 characters.");
    return;
  }

  const includeLowerCase = confirm("Include lowercase characters?");
  const includeUpperCase = confirm("Include uppercase characters?");
  const includeNumeric = confirm("Include numeric characters?");
  const includeSpecialChar = confirm("Include special characters ($@%&*, etc)?");

  if (!(includeLowerCase || includeUpperCase || includeNumeric || includeSpecialChar)) {
    alert("Please select at least one character type.");
    return;
  }

  return {
    length: length,
    includeLowerCase: includeLowerCase,
    includeUpperCase: includeUpperCase,
    includeNumeric: includeNumeric,
    includeSpecialChar: includeSpecialChar
  };
}

// Function for getting a random element from an array
function getRandom(arr) {
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

// Function to generate password with user input
function generatePassword() {
  const options = getPasswordOptions();

  let allChars = [];
  let password = '';

  if (options.includeLowerCase) allChars = allChars.concat(lowerCasedCharacters);
  if (options.includeUpperCase) allChars = allChars.concat(upperCasedCharacters);
  if (options.includeNumeric) allChars = allChars.concat(numericCharacters);
  if (options.includeSpecialChar) allChars = allChars.concat(specialCharacters);

  for (let i = 0; i < options.length; i++) {
    const randomChar = getRandom(allChars);
    password += randomChar;
  }

  return password;
}

// Get references to the #generate element
const generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  const password = generatePassword();
  const passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);