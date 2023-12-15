function generatePassword() {
  var length = parseInt(prompt("Enter the length of the password (between 8 and 128 characters):"));

  // Validate password length
  if (isNaN(length) || length < 8 || length > 128) {
    alert("Please enter a valid password length between 8 and 128 characters.");
    return;
  }

  var includeLowerCase = confirm("Include lowercase characters?");
  var includeUpperCase = confirm("Include uppercase characters?");
  var includeNumeric = confirm("Include numeric characters?");
  var includeSpecialChar = confirm("Include special characters ($@%&*, etc)?");

  // Validate at least one character type is selected
  if (!(includeLowerCase || includeUpperCase || includeNumeric || includeSpecialChar)) {
    alert("Please select at least one character type.");
    return;
  }

  var charSet = '';
  var lowerCaseChars = 'abcdefghijklmnopqrstuvwxyz';
  var upperCaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var numericChars = '0123456789';
  var specialChars = '$@%&*'; // Add more special characters as needed

  if (includeLowerCase) charSet += lowerCaseChars;
  if (includeUpperCase) charSet += upperCaseChars;
  if (includeNumeric) charSet += numericChars;
  if (includeSpecialChar) charSet += specialChars;

  var password = '';
  for (var i = 0; i < length; i++) {
    var randomIndex = Math.floor(Math.random() * charSet.length);
    password += charSet.charAt(randomIndex);
  }

  // Display generated password
  document.getElementById('passwordDisplay').innerText = 'Generated Password: ' + password;
}