# 03 JavaScript: Password Generator

Create an application that generates a random password based on user-selected criteria. This app will run in the browser and feature dynamically updated HTML and CSS powered by your JavaScript code. It will also feature a clean and polished user interface and be responsive, ensuring that it adapts to multiple screen sizes.

If you are unfamiliar with special characters, take a look at [some examples](https://www.owasp.org/index.php/Password_special_characters).

## User Story

```
AS AN employee with access to sensitive data
I WANT to randomly generate a password that meets certain criteria
SO THAT I can create a strong password that provides greater security
```

## What I did 

1. Using the ASCII Printable Characters (https://www.w3schools.com/charsets/ref_html_ascii.asp) to generate the random characters. the *26 + 97 means that there are 26 characters in the alphabet and we are looking at 97 to 122; which are just lowercase letters. Applying the same principle as above *26 + 65 for Uppercase letters since it runs from 65 to 90

2. I needed to define all the const" 
const $alphabetCount = 26;
const $firstLowercase = 97;
const $firstUppercase = 65;
const $numberLength = 10;
const $firstDigit = 48;
const $passwordMinimumLength = 8;
const $passwordMaximumLength = 125;

3. Created an object to randomly run the function each time it's invoked 

4. Defnied the functions using the const above

5. Created a for loop that includes one of the criteria with the length of the value in the length box.
    5A. Check if the criteria box is checked 
    5B. Generate the password = length + the criteria by looping through the array by the amount of time in the PasswordLength indicator
    5C. Get checked values from the check boxes
    5D. Added the return so the loop would end
    
 6. Added the results of the randomly selected function in the generateRansom object
 
 7. Added the event listener to the button so that the password appears in the text box

8. Finally added the alert if all the boxes are unchecked
