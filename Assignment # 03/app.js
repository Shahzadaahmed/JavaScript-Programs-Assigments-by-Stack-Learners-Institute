// Assignment # 03 : If Else (Set of conditions).

// Program # 01 :
// Write a program to check whether the given input number is divisible by 3 or else 
// show a message “Number is not divisible by 3”.

// Solution :
// var myNumber = parseInt(prompt("Enter any Number!"));

// if (myNumber % 3 === 0) {
//     console.log(myNumber + " is divisible by 3");
// }

// else {
//     console.log("Sorry!\n" + myNumber + " is not divisible by 3");
// }

// DONE..........!

// Program # 02 :
// Write a program that checks whether the given input is an even number or an odd number.

// Solution :
// var myNumber = parseInt(prompt("Enter any number to check it is Even Number or Odd Number!"));

// if (myNumber % 2 === 0) {
//     console.log(myNumber + " is an Even Number!");
// }

// else {
//     console.log(myNumber + " is an Odd Number!");
// }

// DONE..........!

// Program # 03 :
// Write an if/else statement with the following condition: If the variable age is greater than 18, 
// output "Old enough", otherwise output "Too young".

// Solution :
// var age = parseInt(prompt("Enter Your Age!"));

// if (age >= 18) {
//     console.log("Old Enough!");
// }

// else {
//     console.log("Too Young!");
// }

// DONE..........!

// Program # 04 :
// Write a program that prompts the user for their name, and then displays a special greeting to that person
// if their name is the same as yours. If the name entered by the user is anything other than your name,
// your code should not produce any output.

// Solution :
// var myName = "ahmed";
// var userName = prompt("Enter Your Name!");

// if (userName === myName) {
//     console.log("WOW Man! Your name is same as my name!");
// }

// else {
//     console.log("Invalid Name");
// }

// DONE..........!

// Program # 05 :
// Note : Program # 05 is exact same as program # 01. It will be mark as DONE...!

// Program # 06 :
// Right Now I am skipping Program # 06.

// Program # 07 :
// Write a program to create a calculator for +, -, *, /, % using switch case / If Else statements. 
// (number1, number2 and operator will be input).

// Solution :
// var num1 = parseInt(prompt("Enter any number!"));
// var num2 = parseInt(prompt("Enter another number!"));
// var operator = prompt("Enter any Math Operator!", "+ , - , * , / , %");

// if (operator === "+") {
//     console.log(num1 + num2);
// }

// else if (operator === "-") {
//     console.log(num1 - num2);
// }

// else if (operator === "*") {
//     console.log(num1 * num2);
// }

// else if (operator === "/") {
//     console.log(num1 / num2);
// }

// else if (operator === "%") {
//     console.log(num1 % num2);
// }

// else {
//     console.log("Invalid Operator");
// }

// DONE..........!

// Program # 08 :
// Write a program that takes time as input from user in 24 hours clock format like: 1900 = 7pm. 
// Implement the following case using if, else & else if statements.

// var time = parseInt(prompt("Enter Current Time in 24 hours clock format!", "1900"));

// if (!isNaN(time)) {
//     if (time >= 0000 && time < 1200) {
//         console.log("Good Morning!");
//     }

//     else if (time >= 1200 && time < 1700) {
//         console.log("Good Afternoon!");
//     }

//     else if (time >= 1700 && time < 2100) {
//         console.log("Good Evening!");
//     }

//     else if (time >= 2100 && time <= 2359) {
//         console.log("Good Night!");
//     }
// }

// else {
//     console.log("Invalid Time Format!");
// }

// DONE..........!

// Program # 09 :
// Write a program that takes a calendar year in YYYY format in a variable. 
// Check & notify the user whether it is a leap year or not.
// Note : In normal year we have 365 days in a year.
// Note : In Leap Year we have 366 days in a year.
// Note : Every Leap Year comes after 4 Years.

// Solution :
// var year = parseInt(prompt("Enter Year to check It is a Leap Year or Not!"));

// if (year % 4 === 0) {
//     console.log(year + " is a Leap Year!");
// }

// else {
//     console.log(year + " is not a Leap Year!");
// }

// DONE..........!

// Program 10 :
// Write a program that
// a. Store correct password in a JS variable.
// b. Asks user to enter his/her password
// c. Validate the two passwords:
// i. Check if user has entered password. If not, then give message “ Please enter your password”
// ii. Check if both passwords are same. If they are same, show message “Correct! 
// The password you entered matches the original password”. Show “Incorrect password” otherwise.

// Solution :
// var password = "Ahmed786";
// var userInput = prompt("Enter Password!");

// if (userInput === password) {
//     console.log("Correct!\nThe password you entered matches the original password!");
// }

// else {
//     console.log("Invalid Password!");
// }

// DONE..........!

// Program # 11 :
// Write a program that adds an else statement to the following script to display “You are not Fahad”
// var firstName = "Ali";
// if (firstName === "Fahad") {
//  document.write("Hello Fahad!");
// }

// Solution :
// var firstName = "Ali";
// if (firstName === "Fahad") {
//     console.log("Hello Fahad!");
// }

// else {
//     console.log("You are not Fahad!");
// }

// DONE..........!

// Program # 12 :
// This if/else statement does not work. Try to fix it:
// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// else
// greeting = "Good evening";
// } 

// Solution :

// var greeting;
// var hour = 13;
// if (hour < 18) {
//     greeting = "Good Day";
//     console.log(greeting);
// }

// else {
//     greeting = "Good Evening!";
//     console.log(greeting);
// }

// DONE..........!

// Program # 13 :
// Write a JavaScript program that accept two integers and display the larger. 
// Also show if the two integers are equal.

// var num1 = parseInt(prompt("Enter Any Number!"));
// var num2 = parseInt(prompt("Enter Another Number!"));

// if (num1 > num2) {
//     console.log(num1 + " is greater than " + num2);
// }

// else if (num1 < num2) {
//     console.log(num2 + " is greater than " + num1);
// }

// else if (num1 === num2) {
//     console.log("Both Integers are equal!");
// }

// DONE..........!

// Program # 14 :
// Write a program that takes input a number from user & state whether the number is positive, negative or zero.

// Solution :
// var userInput = parseInt(prompt("Enter Any Number"));

// if (userInput > 0) {
//     console.log(userInput + " is a positive integer!");
// }

// else if (userInput < 0) {
//     console.log(userInput + " is a negetive integer!");
// }

// else if (userInput === 0) {
//     console.log(userInput + " Zero Integer!");
// }

// DONE..........!

// Program 15 :
// Ask the user what the current hour is. 
// If the hour is between 6 and 9 a.m., tell the user, "Breakfast is served." 
// If the hour is between 11 a.m. and 1 p.m., tell the user, "Time for lunch." 
// If the hour is between 5 and 8 p.m., tell the user, "It's dinner time." 
// For any other hours, tell the user, "Sorry, you'll have to wait, or go get a snack." 
// (Hint: Store the hour in 24 hours clock format i.e. 14 for 2pm , 15 for 3pm)

// Solution :
// var currentTime = parseInt(prompt("Enter the current hour!"));

// if (currentTime >= 6 && currentTime <= 9) {
//     console.log("Breakfast is served.");
// }

// else if (currentTime >= 11 && currentTime <= 13) {
//     console.log("Time for lunch.");
// }

// else if (currentTime >= 17 && currentTime <= 20) {
//     console.log("It's dinner time.");
// }

// else {
//     console.log("Sorry, you'll have to wait, or go get a snack.");
// }

// DONE..........!

// Program # 16 :
// Write a program that stores value in a variable & tell whether the type of that 
// variable is a "number", "string", "boolean" or “undefined”.

// var str = "ahmed";
// console.log(typeof str);

// var num = 1996;
// console.log(typeof num);

// var booleanValue = true;
// console.log(typeof booleanValue);

// var myValue;
// console.log(typeof myValue);

// DONE..........!

// Program # 17 :
// Write a program that takes a character (i.e. string of length 1) and returns true if it is a vowel, false otherwise.

// Solution :
// var userInput = prompt("Enter any One Alphabet!");

// if (!isNaN(userInput)) {
//     alert("Error! You Entered a number.\nEnter Character Only!");
//     console.log("Error! You Entered a number.\nEnter Character Only!");
// }

// else if (userInput === "A" || userInput === "a" || userInput === "E" || userInput === "e" || userInput === "I" || userInput === "i" || userInput === "O" || userInput === "o" || userInput === "U" || userInput === "u") {
//     alert("Correct!\n" + userInput + " " + "is a Vovel.");
//     console.log("Correct!\n" + userInput + " " + "is a Vovel.");
// }

// else {
//     alert("Incorrect!\n" + userInput + " " + "is not a Vovel.");
//     console.log("Incorrect!\n" + userInput + " " + "is not a Vovel.");
// }

// DONE..........!

// Program # 18 :
// Choose the correct comparison operator to display "true",
// when: 10 is NOT equal to 8.

// Solution :
// Display True When 10 is NOT equal to 8;
// console.log(10 !== 8);

// DONE..........!

// Program 19 :
// Use a if / else statement to rewrite the following JavaScript code. 
// Prompt the user for the number of a month rather than setting it to 8:

// var month = parseInt(prompt("Enter the number of the month!"));

// if (month === 1) {
//     console.log("January");
// }

// else if (month === 2) {
//     console.log("February");
// }

// else if (month === 3) {
//     console.log("March");
// }

// else if (month === 4) {
//     console.log("April");
// }

// else if (month === 5) {
//     console.log("May");
// }

// else if (month === 6) {
//     console.log("June");
// }

// else if (month === 7) {
//     console.log("July");
// }

// else if (month === 8) {
//     console.log("August");
// }

// else if (month === 9) {
//     console.log("September");
// }

// else if (month === 10) {
//     console.log("Octuber");
// }

// else if (month === 11) {
//     console.log("November");
// }

// else if (month === 12) {
//     console.log("December");
// }

// else {
//     console.log("Invalid Month");
// }

// DONE..........!

// Program # 20 :
// Use a conditional (ternary) operator for this exercise:
// If the variable age is a value below 18, the value of the variable should be "Too young",
// otherwise the value of voteable should be "Old enough".

// Solution :
// var age = parseInt(prompt("Enter Your Age!"));
// var younger = "Too Young!";
// var adult = "Old Enough";

// var check = (age <= 18) ? younger : adult;
// console.log(check);

// DONE..........!

// All Programs Completed Successfully...!
/******************** END ******************** */