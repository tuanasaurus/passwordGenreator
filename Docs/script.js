// Using the ASCII Printable Characters (https://www.w3schools.com/charsets/ref_html_ascii.asp) 
// To generate the random characters. the *26 + 97 means that there are 26 characters in the alphabet and we are looking at 97 to 122; which are just lowercase letters.
// Applying the same principle as above *26 + 65 for Uppercase letters since it runs from 65 to 90

const $alphabetCount = 26;
const $firstLowercase = 97;
const $firstUppercase = 65;
const $numberLength = 10;
const $firstDigit = 48;
const $passwordMinimumLength = 8;
const $passwordMaximumLength = 125;

// Created an object to randomly run the function each time it's invoked 
const $generateRandom = {
  lower: getLowercase,
  upper: getUppercase,
  number: getNumber,
  symbol: getSymbol,
};

function getLowercase () {
  return String.fromCharCode(Math.floor(Math.random() * $alphabetCount) + $firstLowercase);
}

function getUppercase () {
  return String.fromCharCode(Math.floor(Math.random() * $alphabetCount) + $firstUppercase);
}

function getNumber () {
  return String.fromCharCode(Math.floor(Math.random() * $numberLength) + $firstDigit);
}

function getSymbol () {
  const symbols = '!@#$%^&*(){}[]=<>/,.';
  return symbols[Math.floor(Math.random() * symbols.length)];
}

function getPasswordLength (){
  const $passwordLength = document.getElementById('length').value;
  return parseInt($passwordLength);
}

// An loop that includes one of the criteria with the length of the value in the length box. 
// 1. Check if the criteria box is checked 
// 2. Generate the password = length + the criteria by looping through the array by the amount of time in the PasswordLength indicator
function $generatePassword (){
  let $finalResult = ''; 
  // Get checked values from the check boxes
  const $isUppercaseSelected = document.getElementById('upperchase').checked;
  const $isLowercaseSelected = document.getElementById('lowercase').checked;
  const $isNumbersSelected = document.getElementById('numbers').checked;
  const $isSymbolsSelected = document.getElementById('symbols').checked;


  for (i = 0; i < getPasswordLength(); i++) {
    $availableOptions = [];
    if ($isLowercaseSelected){
      $availableOptions.push('lower');
    }
    if ($isUppercaseSelected){
      $availableOptions.push('upper');
    }
    if ($isNumbersSelected){
      $availableOptions.push('number');
    }
    if ($isSymbolsSelected){
      $availableOptions.push('symbol');
    }
    if ($availableOptions.length === 0){
      alert('Please select at least one criteria');
      //Added the return so the loop would end
      return;
    }
    const $randomOption = (Math.floor(Math.random() * $availableOptions.length));
    // Adding the result of the randomly selected function in the generateRandom object
    $finalResult += ($generateRandom[$availableOptions[$randomOption]]())
  }
  document.getElementById('password').value = $finalResult;
}

document.getElementById('generate').addEventListener('click', function(){
  $generatePassword();
});