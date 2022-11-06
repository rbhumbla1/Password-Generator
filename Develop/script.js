// Assignment Code
var generateBtn = document.querySelector("#generate");

var lCase = true;
var uCase = true;
var numeric = true;
var spChar = true;


//Get length - should be atleast 8 characters and and no more than 128 characters
//return the length 
function getPWLength() {
  var len = 0;
  var again = true;

  console.log("in getPWLength")

  while(again) {
    len = window.prompt("Please enter the length of the password:");

    //get out if cancel; if input is not a number of not anumber between 8 and 128, prompt again
    if(len == null){
      console.log("user cancelled");
      again = false;
    } else if ((len < 8 || len > 128) || (isNaN(len))){
      alert("Please choose a number between 8 and 128.");
      again = true;
    } else {
      again = false;
    } 
  }
  return len;
}

//Ask user if they want lowercase, uppercase, numberic and/or special charaters in their password 
//and store them in global vard defined above
function askUserCharTypePref() {

  var oneChar = true;
  var charSel = "";

  //ask the user for what type of characters they want in the password
  lCase = confirm("Would you like a lower case character in your password?");
  console.log("lCase = " + lCase);

  uCase = confirm("Would you like an upper case character in your password?");
  console.log("uCase = " + uCase);

  numeric = confirm("Would you like a numeric in your password?");
  console.log("numeric = " + numeric);

  spChar = confirm("Would you like a special character in your password?");
  console.log("spChar = " + spChar);

  //if there are no character, ask the user to select at least one
 if(lCase == false && uCase == false)
  oneChar = false;

  //keep asking till user select either L or U
  while(oneChar == false){

    charSel = prompt("At least one character needs to be selected.  Enter L for lowercase or U for uppercase character:");

    if(charSel != null)
      charSel = charSel.toUpperCase();
    if(charSel == "L"){
     lCase = true;
     oneChar = true;
    } else if (charSel == "U"){
      uCase = true;
      oneChar = true;
    } else {
      oneChar = false;
    }

  }   

}


//create password based on user charater preference
function createPassword(len) {
  //removing l, I, 0, O, o to avoid confusion
  var lower = "abcdefghijkmnpqrstuvwxyz"; 
  var upper = "ABCDEFGHJKLMNPQRSTUVWXYZ";
  var num = '123456789';
  var punctuation = '!@#$%^&*()_+~`|}{[]\:;?><,./-=';
  var pw = "";
  var selLength = 0;
  var selChar = "";
  var numCat = 0; //tostore the number of categories user selected from lower, upper, num & punctuation

  //based on user selection of type of character, calculate how many total characters we have to generate the password
  if(lCase){
    selLength += lower.length;
    selChar += lower;
    numCat++;
  } 
  if (uCase) {
    selLength += upper.length;
    selChar += upper;
    numCat++;
  }
  if(numeric){
    selLength += num.length;
    selChar += num;
    numCat++;
  }
  if(spChar){
    selLength += punctuation.length;
    selChar += punctuation;
    numCat++;
  }

  console.log("numCat = " + numCat);

  //Extra: To ensure that the password have at least of each category the user wanted, we will reduce the lopp with # of selections the user made.  
  //Then we will add one random character from each type at the end of password.  
  //For example, if user selected lowercase, uppercase & special character, we will loopp till len-3.
  //And then we will concat 3 random chars at end of password, one from lowercase, one from uppercase and one from special character

  //loop till you get all characters equal to len - numCat
  for(var i = 0; i < len - numCat; i++){
    pw += selChar.charAt(Math.random() * selLength);
  }

  for (var j = numCat; j >=0; j--){
    if(lCase){
      lCase = false;
      pw += lower.charAt(Math.random() * lower.length);
    }
    if(uCase){
      uCase = false;
      pw += upper.charAt(Math.random() * upper.length);
    }
    if(numeric){
      numeric = false;
      pw += num.charAt(Math.random() * num.length);
    }
    if(spChar){
      spChar = false;
      pw += punctuation.charAt(Math.random() * punctuation.length);
    }
  }

  //shuffle the password so last 4 digits are not in lower, upper, number, special character order
  pw = pw.split('').sort(function(){return 0.5-Math.random()}).join('');

  return pw;
}

//Generate password according to user input
function generatePassword() {
  var length = 0;
  var password = "";

  console.log("in writePassword");


  //get length - should be atleast 8
  length = getPWLength();

  console.log("lenght = " + length);

  //Get character types
  askUserCharTypePref();

  //Create the password based on user character preference
  password = createPassword(length);

  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  console.log("in writePassword");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
