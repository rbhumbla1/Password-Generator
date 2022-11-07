# Password-Generator
This repository contains files for Module 3 challenge - Password Generator app

## Description
Password generator page provides the following functionality as it created a secure password for the user:

1. When a user clicks the Generate Password button, they will be prompted to provide a lenght for the password.     
    * If the user click OK button with a valid input, the program will continue.
    * If the user click OK button with invalid input, they will be reminded to enter a number between 8 and 128 (inclusive) and the entry prompt is displayed again.  The following invalid inputs are considered:
        * the lenght is less than 8 or more than 128, 
        * the user click OK without entering any thing
        * the user enter anything other string which is not a number
    * If the uer click on Cancel button, the program stops.
3. After a valid password length is entered, the user will be prompted to select which type of characters they want in the passwork. A   confirm box each for Lowercase, Uppercase, Numeric and Special Character will be displayed in sequence.  If the user slelects OK, that implies that they want that type of character inthe password. If Cancel button is pressed then that type of character is excluded from the password.
    * In case, the user cancels all four prompts, to make sure that at least one character is added, a reminder prompt is displays asking the user to select atleast one character type.  The prompt will loop till one type of character is selected with a OK.
4. As the program genrates the password based on lenght and types of characters selcted, there are certain conditions are taken care of to make it easily readable and more randomized:
    * Characters l, I, 0, O, o are removed from charcter set to avoid confusion
    * To ensure that the password have at least of each category the user wanted, we will reduce the lopp with # of selections the user made.  Then we will add one random character from each type at the end of password. For example, if user selected lowercase, uppercase & special character, we will loopp till len-3.  And then we will concat 3 random chars at end of password, one from lowercase, one from uppercase and one from special character 
    * The password string is then shuffled to make sure that it is again in random order.
5. The final password is then written in the textbax of the page.

## Mock Up

![Screenshot of the page](./assets/screenshot1.JPG)

Demo of the project:
![portfolio demo](./assets/Password-Generator-Demo.gif)


## Usage
You can access:
1. the file in GitHub repository: https://github.com/rbhumbla1/Password-Generator
2. the application using this URL: https://rbhumbla1.github.io/Password-Generator

## License
None