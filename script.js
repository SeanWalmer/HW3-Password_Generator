// Assignment Code
var generateBtn = document.querySelector("#generate");

// Arrays
var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var symbols = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"]
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
var userChoice = []

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  // reseting the user choice array so you dont have to reload webpage to clear previous choice for a new password
  userChoice = []
  passwordText.value = password;

}

// get password legth
function getLength(){
  while(true){   	  
      let input = prompt("How many characters do you want in your password? (between 8 and 128)");
      
      if (input == null) {
          // user hit cancel
          alert("Canceling password Gen");
          return true;
      }else{
          if (input.length<=0 || isNaN(input)) {
              // user pressed OK, but input invalid or does not input anything
              alert("Invalid input.");
              // user input a number but outside paramiters
          }else if(input < 8){
              alert("must be at least 8 characters");
          }else if(input > 128){
              alert("must be less than 128");
          }else{
              // user typed something valid and hit OK
              return parseInt(input);
           };
       };
   };
}

// get desired user characters and form userChoice array
function getChoice(){
  if(confirm("Do you want uppercase letters?")){
    userChoice.push.apply(userChoice, upper);
    // console.log(userChoice);
  };
  if(confirm("Do you want lowercase letters?")){
    userChoice.push.apply(userChoice, lower);
    // console.log(userChoice);
  };
  if(confirm("Do you want symbols?")){
    userChoice.push.apply(userChoice, symbols);
    // console.log(userChoice);
  };
  if(confirm("Do you want numbers?")){
    userChoice.push.apply(userChoice, numbers);
    // console.log(userChoice);
  };
};

// pull a random character from user's desired character list
function getChar(){
  function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
  };
  // var intCheck = randomIntFromInterval(0, (userChoice.length - 1))
  // return userChoice[intCheck];
  return userChoice[randomIntFromInterval(0, (userChoice.length - 1))];
};

// generate password functions
function generatePassword(){
  var passwordLength = getLength();
  // console.log(passwordLength)
  if(passwordLength === true){
    return "No password generated"
  }else{
  getChoice();
  var newPass = "";
  // iterate for desired password legth and adding random characters to password
  for(var i = 0; i < passwordLength; i++){
    newPass += getChar()
   };
  return newPass
}}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
