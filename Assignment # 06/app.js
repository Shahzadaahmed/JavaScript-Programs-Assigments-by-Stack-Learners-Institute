// STRINGS PROGRAMS ASSIGNMENTS...!!!

// Program # 01 :
// Write a program that takes two user inputs for first and last name using prompt and merge them in a new 
// variable titled fullName. Greet the user using his full name.

// Solution :
// var firstName = prompt("Write your first name!");
// var lastName = prompt("Write your last name!");
// var titled = firstName + " " + lastName;
// console.log(titled);

// DONE...............!

// Program # 02 :
// Write a program to take a user input about his favorite mobile phone model. 
// Find and display the length of user input in your browser.

// Solution :
// var favouriteMobile = prompt("What is your favourite mobile model ?");
// var lengthOfStr = favouriteMobile.length;
// console.log("My favourite mobile is : " + favouriteMobile);
// console.log("Length of string : " + lengthOfStr);

// DONE...............!

// Program # 03 :
// Write a program to find the index of letter “n” in the word “Pakistani” and display the result in your browser.

// Solution :
// var str = "Pakistani";
// console.log("String: " + str);
// var findIndex = str.indexOf("n");
// console.log("Index of 'n': " + findIndex);

// DONE...............!

// Program # 04 :
// Write a program to find the last index of letter “l” in the word “Hello World” and display the result in your browser.

// Solution :
// var message = "Hello World";
// console.log("String: " + message);
// var lastIndex = message.lastIndexOf("l");
// console.log("Last Index of 'l': " + lastIndex);

// DONE...............!

// Program # 05 :
// Write a program to find the character at 3rd index in the word “Pakistani” and display the result in your browser.

// Solution :
// var message = "Pakistani";
// console.log("String: " + message);
// var findChar = message.charAt(3);
// console.log("Character at index 3: " + findChar);

// DONE...............!

// Program # 06 :
// Repeat Q1 using string concat() method.
// Write a program that takes two user inputs for first and last name using prompt and merge them in a new 
// variable titled fullName. Greet the user using his full name.

// Solution :
// var firstName = prompt("Write your first name!");
// var lastName = prompt("Write your last name!");
// var fullName = firstName.concat(" ", lastName);
// console.log(fullName);

// DONE...............!

// Program # 07 :
// Write a program to replace the “Hyder” to “Islam” in the word “Hyderabad” and display the result in your browser.

// Solution :
// var city = "Hyderabad";
// console.log("City: " + city);
// var replacement = city.replace("Hyder", "Islam");
// console.log("After Replacement: " + replacement);

// DONE...............!

// Program # 08 :
// Write a program to replace all occurrences of “and” in the string with “&” and display the result in your browser. 
// var message = “Ali and Sami are best friends. They play cricket and football together.”;

// Solution :
// var message = "Ali and Sami are best friends. They play cricket and football together.";
// console.log("Message: " + message);

// var arr1 = ["Ali", "and", "sami", "are", "best", "friends."];
// var changeArr1 = arr1.splice(1, 1, "&");

// var arr2 = ["They", "play", "cricket", "and", "football", "together."];
// var changeArr2 = arr2.splice(3, 1, "&");

// var updateMessage = arr1.concat(arr2);
// var convertArrToStr = updateMessage.join(" ");
// console.log("After Replacement: " + convertArrToStr);

// DONE...............!

// Program # 09 :
// Write a program that converts a string “472” to a number 472.
// Display the values & types in your browser.

// Solution :
// var str = "472";
// console.log("Value: " + str);
// console.log("Type: " + typeof str);

// var convertStrToNum = Number(str);
// console.log("Value: " + convertStrToNum);
// console.log("Type: " + typeof convertStrToNum);

// DONE...............!

// Note : subStr() : Method :
// Yeh method bolta hy mujhe btao kahan se start lena. Or Ktna lana hy. Agr dusra parameter nhi dogy to me end tk le aonga.

// Program 10 :
// Write a program that take a URL as user input in the following format: (www.facebook.com / www.yahoo.com ).
// Extract the domain name & show in your browser.

// Solution : 
// var url = prompt("Enter any URL starting from www and end with .com");
// console.log("URL: " + url);
// var domain = url.substr(4);
// console.log("Domain: " + domain);

// DONE...............!

// Program # 11 :
// Write a program that takes user input. Convert and show the input in capital letters.

// Solution :
// var userInput = prompt("Enter any message!");
// console.log("User input: " + userInput);
// var capitalCase = userInput.toUpperCase();
// console.log("Upper case: " + capitalCase);

// DONE...............!

// Program # 12 :
// Write a program that takes user input. Convert and show the input in small letters.

// Solution :
// var userInput = prompt("Enter any message!");
// console.log("User input: " + userInput);
// var smallCase = userInput.toLowerCase()
// console.log("Lower case: " + smallCase);

// DONE...............!

// Program # 13 :
// Write a program that takes user input. Convert and show the input in title case.

// Solution :
// var userInput = prompt("Enter any name! I will show you in titlecase.");
// console.log("User input: " + userInput);

// var firstChar = userInput.charAt(0);
// var titleCase = firstChar.toUpperCase();
// var otherChars = userInput.slice(1);

// var fullValue = titleCase + otherChars;
// console.log("Title case: " + fullValue);

// DONE...............!

// Program # 14 :
// Write a program that converts the variable num to string.
// var num = 35.36 ;
// Remove the dot to display “3536” display in your browser.

// Solution :
// var num = 35.36;
// var convertNumToStr = String(num);
// console.log("Number: " + convertNumToStr);

// var removeDot = convertNumToStr.replace(".", "");
// console.log("Result: " + removeDot);

// DONE...............!

// Program # 15 :
// Write a program to display the value of x in your browser if a=”3” and b=”3”?

// Solution :
// var a = "3";
// var b = "3";
// var x = a + b;
// console.log("a is: " + a);
// console.log("b is: " + b);
// console.log("a + b is: " + x);

// DONE...............!

// Program # 16 :
// Write a program to display the value of y in your browser if a=”3” and b=”3”?

// Solution :
// var a = "3";
// var b = "3";
// var y = a - b;
// console.log("a is: " + a);
// console.log("b is: " + b);
// console.log("a - b is: " + y);

// DONE...............!

// Program # 17 :
// Write a program to take user input and store username in a variable. 
// If the username contains any special symbol among [@ . , !], prompt the user to enter a valid username.

// Solution :
// var userInput = prompt("Enter your name!");
// var regularExpression = /^[A-Za-z]+$/;

// if (userInput.match(regularExpression)) {
//     console.log("You wrote: " + userInput);
// }

// else {
//     console.log("Please enter a valid username!");
// }

// DONE...............!

// Program # 18 :
// You have an array : A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an array. 
// After searching, prompt the user whether the given item is found in the list or not.
// Note: Perform case insensitive search. Whether the user enters cookie, Cookie, COOKIE or coOkIE, 
// program should inform about its availability. Example:

// Solution :
// alert("Hello Sir/Madam!\n Available Items in Bakery : cake, bread, eggs, snacks, biscuits, patties.");
// var bakeryItems = ["cake", "bread", "eggs", "snacks", "biscuits", "patties"];
// var userInput = prompt("Welcome to Dilpasand Sweets!\nWhat do you want to order Sir/Madam ?").toLowerCase();

// if (userInput === "cake") {
//     console.log(userInput + " is available at index " + bakeryItems.indexOf(userInput) + " in our bakery!");
// }

// else if (userInput === "bread") {
//     console.log(userInput + " is available at index " + bakeryItems.indexOf(userInput) + " in our bakery!");
// }

// else if (userInput === "eggs") {
//     console.log(userInput + " is available at index " + bakeryItems.indexOf(userInput) + " in our bakery!");
// }
// else if (userInput === "snacks") {
//     console.log(userInput + " is available at index " + bakeryItems.indexOf(userInput) + " in our bakery!");
// }

// else if (userInput === "biscuits") {
//     console.log(userInput + " is available at index " + bakeryItems.indexOf(userInput) + " in our bakery!");
// }

// else if (userInput === "patties") {
//     console.log(userInput + " is available at index " + bakeryItems.indexOf(userInput) + " in our bakery!");
// }

// else {
//     console.log("We are sorry. " + userInput + " is not available in our bakery!");
// }

// DONE...............!

// Program # 19 :
// Write a program to take two input strings. Using string comparison, tell which string is greater than other or if they both are equal.

// Solution :
// var input1 = prompt("Enter any Noun!")
// var input1Length = input1.length;
// var input2 = prompt("Enter any another Noun!");
// var input2Length = input2.length;

// if (input1Length > input2Length) {
//     console.log(input1 + " is greater than " + input2);
// }

// else if (input2Length > input1Length) {
//     console.log(input2 + " is greater than " + input1);
// }

// else if (input1Length === input2Length) {
//     console.log("Both are equal!");
// }

// DONE...............!

// Program # 20 :
// Write a program to take password as an input from user. The password must qualify these requirements:
// a. It should contain alphabets and numbers
// b. It should not start with a number
// c. It must at least 6 characters long
// If the password does not meet above requirements,
// prompt the user to enter a valid password.

// Solution :
// var password = prompt("Please enter a password!!!");
// var securityForCharsAndNums = /^[0-9A-Za-z]+$/;

// if (password.match(securityForCharsAndNums) && !isNaN(password.charAt(0)) && password.length >= 6) {
//     console.log("Your Password is valid!!!");
// }

// else {
//     console.log("Please enter a valid password!!!");
// }

// DONE...............!

// Program # 21 :
// Write a program to convert the following string to an array using string split method.
// var university = “University of Karachi”;
// Display the elements of array in your browser.

// Solution :
// var university = "University of Karachi";
// var convertStrToArr = university.split("");

// for (var i = 0; i < convertStrToArr.length; i++) {
//     console.log(convertStrToArr[i]);
// }

// DONE...............!

// Program # 22 :
// Write a program to display the last character of a user input.

// Solution :
// var userInput = "Pakistan";
// console.log("User input: " + userInput);

// var lastChar = userInput.charAt(7);
// console.log("Last character of input: " + lastChar);

// DONE...............!

// Program # 23 :
// You have a string “The quick brown fox jumps over the lazy dog”. 
// Write a program to count number of occurrences of word “the” in given string.

// Solution :
// var str = "The quick brown fox jumps over the lazy dog";
// console.log("Text: " + str);

// var convert = str.toLowerCase();
// var regularExpression = /the/g;
// var result = convert.match(regularExpression).length;
// console.log("There are " + result + " occurrences of the word 'the' ");

// DONE...............!

// Program # 24 :
// Write a program to count number of vowels & consonants in given string.

// Solution :
// var str = "Pakistan";
// console.log("String: " + str);

// var convert = str.toLowerCase();
// var vowelsList = "aeiou";
// var vowelCount = 0;

// for (var i = 0; i < convert.length; i++) {
//     if (vowelsList.indexOf(convert[i]) != -1) {
//         vowelCount = vowelCount + 1;
//     }
// }
// console.log("There are " + vowelCount + " vowels in the string " + str);

// DONE...............!

// ALL PROGRAMS COMPPLETED...!!!