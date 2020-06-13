// Math And Date Programs Assignments...!

// Program # 01 :
// Write a program that takes a positive integer from user & display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number

// Solution :
// var number = 45;
// console.log("number: " + number);
// console.log("round off value: " + Math.round(number));
// console.log("floor value: " + Math.floor(number));
// console.log("ceil value: " + Math.ceil(number));

// Program # 02 :
// Write a program that takes a negative integer from user & display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number

// Solution :
// var number = -32;
// console.log("number: " + number);
// console.log("round off value: " + Math.round(number));
// console.log("floor value: " + Math.floor(number));
// console.log("ceil value: " + Math.ceil(number));

// Program # 03 :
// Write a program that takes a positive floating point number from user & display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number

// Solution :
// var number = 3.45214
// console.log("number: " + number);
// console.log("round off value: " + Math.round(number));
// console.log("floor value: " + Math.floor(number));
// console.log("ceil value: " + Math.ceil(number));

// Program # 04 :
// Write a program that takes a negative floating point number from user & display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number

// Solution :
// var number = -2.673
// console.log("number: " + number);
// console.log("round off value: " + Math.round(number));
// console.log("floor value: " + Math.floor(number));
// console.log("ceil value: " + Math.ceil(number));

// Program # 05 :
// . Write a program that displays the absolute value of a number.
// E.g. absolute value of -4 is 4 & absolute value of 5 is 5

// Solution :
// var number = -4;
// console.log("The absolute value of  -4 is: " + Math.abs(number));

// Program # 06 :
// Write a program that simulates a dice using random() method of JS Math class. Display the value of dice in your browser.

// Solution :
// var randomDice = Math.floor(Math.random() * 6) + 1;
// console.log("random dice value: " + randomDice);

// Program # 07 :
// Write a program that simulates a coin toss using random() method of JS Math class. Display the value of coin in your browser.

// Solution :
// var randomCoin = Math.floor(Math.random() * 2) + 1;
// var message = "";

// if (randomCoin === 1) {
//     message = "Tails";
//     console.log(randomCoin);
//     console.log("random coin value: " + message);
// }

// else {
//     message = "Heads";
//     console.log(randomCoin);
//     console.log("random coin value: " + message);
// }

// Program # 08 :
// Write a program that shows a random number between 1 and 100 in your browser.

// Solution :
// var randomNumber = Math.floor(Math.random() * 100) + 1;
// console.log("random number between 1 and 100: " + randomNumber);

// Program # 09 :
// Write a program that asks the user about his weight. Parse the user input and display his weight in your browser.
// Possible user inputs can be:
// a. 50
// b. 50kgs
// c. 50.2kgs
// d. 50.2kilograms

// Solution :
// var userWeight = parseFloat(prompt("What is your weight ?"));
// var kg = userWeight + " Kilograms";
// console.log(kg);

// Program # 10 :
// Write a program that stores a random secret number from 1 to 10 in a variable. Ask the user to input a number between 1 and 10.
// If the user input equals the secret number, congratulate the user.

// Solution :
// function game() {
//     var userInput = parseInt(prompt("Enter a number between  from 1 to 10."));

//     if (userInput >= 1 && userInput <= 10) {
//         var generatedRandomNumber = generateRandomNum();
//         var isValueMatched = numberMatched(userInput, generatedRandomNumber);
//         gameStatus(isValueMatched);
//     }

//     else {
//         alert("Less than 1 or greate than 10 value will not be acceptable!");
//     }
// }

// game();

// function generateRandomNum() {
//     var randomNum = Math.floor(Math.random() * 10) + 1;
//     return randomNum;
// }

// function numberMatched(userValue, randomValue) {
//     var flag = false;
//     if (userValue === randomValue) {
//         flag = true;
//     }
//     return flag;
// }

// function gameStatus(finalValue) {
//     if (finalValue) {
//         console.log("Congralutation! You Won!");
//     }

//     else {
//         console.log("Please Try Again!");
//     }
// }

// Progarm # 11 :
// Write a program that displays current date and time in your browser.

// Solution :
// var currentDate = new Date();
// console.log(currentDate);

// Program # 12 :
// Write a program that alerts the current month in words.

// Solution :
// var currentDate = new Date();
// var monthsList = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "Octuber", "November", "December"];
// var currentMonth = currentDate.getMonth();
// console.log(currentMonth);
// console.log("Current Month: " + monthsList[currentMonth]);

// Program # 13 :
// Write a program that alerts the first 3 letters of the current day, for example if today is Sunday then alert will show Sun.

// Solution :
// var day = prompt("Enter any day of a week!").toUpperCase();
// var dayAbbreviation = "";
// var charInDay = day.length;

// if (charInDay > 3) {
//     dayAbbreviation = day.slice(0, 3);
//     console.log(dayAbbreviation);
// }

// Program # 14 :
// Write a program that displays a message “It’s Fun day” if it is Saturday or Sunday today.

// Solution :
// var days = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];
// var userInput = prompt("Enter any day of a week!").toLowerCase();

// if (userInput === days[5] || userInput === days[6]) {
//     console.log("It's Fun Day. It is " + userInput);
// }

// else {
//     console.log("It's Working Day. It is " + userInput);
// }

// Program # 15 :
// Write a program that shows the message “First fifteen days of the month” if the date is less than 16th of the month else 
// shows “Last days of the month”.

// Solution :
// var userInput = parseInt(prompt("Enter any number of the month"));

// if (userInput >= 1 && userInput <= 15) {
//     console.log("First fifteen days of the month!");
// }

// else if (userInput >= 16 && userInput <= 31) {
//     console.log("Last fifteen days of the month!");
// }

// else {
//     console.log("Invalid Number!");
// }

// Program # 16 :
// Write a program that determines the minutes since midnight, Jan. 1, 1970 and assigns it to a \variable that hasn't been declared beforehand. 
// Use any variable you like to represent the Date object.

// Solution :
// var currentDate = new Date();
// console.log("Current Date: " + currentDate);

// // Elapsed miliseconds since January 01, 1970....!
// var milisecondsTillYet = currentDate.getTime();
// console.log("Elapsed miliseconds since January 01, 1970: " + milisecondsTillYet);

// // Elapsed minuites since January 01, 1970....!
// var findMinutesTillYet = milisecondsTillYet / (1000 * 60);
// console.log("Elapsed minuites since January 01, 1970: " + findMinutesTillYet);

// Program # 17 :
// Write a program that tests whether it's before noon and alert “Its AM” else “its PM”.

// Solution :
// var userInput = parseInt(prompt("Enter current hour!"));

// if (!isNaN(userInput)) {
//     if (userInput >= 1 && userInput <= 12) {
//         console.log("It's AM");
//     }

//     else if (userInput >= 13 && userInput <= 24) {
//         console.log("It's PM");
//     }

//     else {
//         console.log("Invalid Number!");
//     }
// }

// else {
//     console.log("Only Numbers are Valid!");
// }

// Program # 18 :
// Write a program that creates a Date object for the last day of the last month of 2020 and assigns it to variable named laterDate.

// Solution :
// var laterDate = new Date("December 31, 2020");
// console.log("Later Date: " + laterDate);

// Program # 19 :
// Create a date object of the starting date of this Ramadan and alert the number of days past since 1st Ramadan?
// Note: 1st Ramadan was on April 25, 2020.

// Solution :
// var ramadanDate = new Date("April 25, 2020");
// var currentDate = new Date();

// // Converting both dates in miliseconds...!
// var ramadanDateInMiliSeconds = ramadanDate.getTime();
// var currentDateInMiliSeonds = currentDate.getTime();

// var daysPassedInMiliSecinds = currentDateInMiliSeonds - ramadanDateInMiliSeconds;
// var daysPassed = daysPassedInMiliSecinds / (1000 * 60 * 60 * 24);
// daysPassed = Math.floor(daysPassed);
// console.log(daysPassed + " days have passed since 1st Ramadan, 2020");

// Program # 20 :
// Write a program that displays in your browser the seconds that elapsed between the reference date and the beginning of 2020.

// Solution :
// var referenceDate = new Date("January 01, 2020");
// var currentDate = new Date();

// // Converting both dates in miliseconds...!
// var referenceDateInMiliSeconds = referenceDate.getTime();
// var currentDateInMiliSeonds = currentDate.getTime();

// var secondsPassedInMiliSeconds = currentDateInMiliSeonds - referenceDateInMiliSeconds;
// var secondsPassed = secondsPassedInMiliSeconds / 1000;
// secondsPassed = Math.floor(secondsPassed);
// console.log(secondsPassed + " seconds had passed since beginning of 2020.");

// Program # 21 :
// Create a Date object for the current date and time. Extract the hours, reset the date object an hour ahead and finally 
// display the date object in your browser.

// Solution :
// var currentDate = new Date();
// console.log("Current Date: " + currentDate);

// var currentDateInMiliSeconds = currentDate.getTime();
// var onePastHour = currentDateInMiliSeconds - (1000 * 60 * 60);
// var updateDate = new Date(onePastHour);
// console.log("1 hour ago, it was: " + updateDate);

// Program # 22 :
// Write a program that creates a date object and show the date in an alert box that is reset to 100 years back?

// Solution :
// var currentDate = new Date();
// var oldDate = new Date("May 25, 1920");

// console.log("Current Date: " + currentDate);
// console.log("100 years back, it was: " + oldDate);

// Program # 23 :
// Write a program to ask the user about his age. Calculate and show his birth year in your browser.

// Solution :
// var currentDate = new Date();
// var dateOfBirth = new Date("July 08, 1995");

// // Converting both dates in miliseconds...!
// var currentDateInMiliSeconds = currentDate.getTime();
// var dateOfBirthInMiliSeconds = dateOfBirth.getTime();

// var leftYearsInMiliSeconds = currentDateInMiliSeconds - dateOfBirthInMiliSeconds;
// var leftYears = leftYearsInMiliSeconds / (1000 * 60 * 60 * 24 * 365);
// leftYears = Math.floor(leftYears);
// console.log("Your Age is " + leftYears + ".");

// Program # 24 :
// Write a program to generate your K-Electric bill in your browser. All the amounts should be rounded off to 2 decimal places. 
// Display the following fields:
// a. Customer Name
// b. Current Month
// c. Number of units
// d. Charges per unit
// e. Net Amount Payable (within Due Date)
// f. Late Payment Surcharge
// g. Gross Amount Payable (after Due Date)

// Where, 
// Net Amount Payable (within Due Date) = Number of units * Charges per unit
// &
// Gross Amount Payable (after Due Date) = Net Amount + Late Payment Surcharge

// Solution :
// var customerName = prompt("What is your name ?").toUpperCase();
// var currentMonth = prompt("Enter your current month!").toUpperCase();
// var numberOfUnits = parseInt(prompt("Enter your number of units of this month!"));
// var chargePerUnit = 14;
// var latePaymentSurcharge = 500;
// var netAmountPayable = numberOfUnits * chargePerUnit;
// var grossAmountPayable = netAmountPayable + latePaymentSurcharge;

// console.log("K-Electric Bill");
// console.log("Customer Name: " + customerName);
// console.log("Month: " + currentMonth);
// console.log("Number of units: " + numberOfUnits);
// console.log("Charges per unit: " + chargePerUnit);
// console.log("Net Amount Payable (within due date): " + netAmountPayable);
// console.log("Gross Amount Payable (after due date): " + grossAmountPayable);

// Program # 25 :
// How many months remaining in your coming date of birth.

// Solution :
// var currentDate = new Date();
// var comingDOB = new Date("July 08, 2020");

// // Converting both dates in miliseconds...!
// var currentDateInMiliSeconds = currentDate.getTime();
// var comingDOBInMiliSeconds = comingDOB.getTime();

// var leftMonthsInMiliSeconds = comingDOBInMiliSeconds - currentDateInMiliSeconds;
// var leftMonths = leftMonthsInMiliSeconds / (1000 * 60 * 60 * 24 * 30);
// leftMonths = Math.floor(leftMonths);
// console.log(leftMonths + " months left in your coming date of birth.");

// All Programs Completed...!