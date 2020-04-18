// For Lopps Asignment Programs Series...!!!

// program # 01 :
// Write a program to display the message “Hello World” 5 times in your browser using for loop.

// Solution :
// var message = "Hello World!!!";
// for (var i = 1; i <= 5; i++) {
//     console.log(i + " " + message);
// }

// DONE...............!

// Program # 02 :
// Write a program to print numeric counting from 1 to 10.

// Solution :
// for (var i = 1; i < 11; i++) {
//     console.log(i);
// }

// DONE...............!

// Program # 03 :
// Write a program to print multiplication table of any number using for loop. 
// Table number & length should be taken as an input from user.

// Solution :
// var table = parseInt(prompt("Enter a number to print it's multiplication table!"));
// var tableLength = parseInt(prompt("Enter the length of the multiplication table!"));
// console.log("Multiplication Table of : " + table);
// console.log("Length of Table is : " + tableLength);

// for (var i = 1; i <= tableLength; i++) {
//     console.log(table + " x " + i + " = " + (i * table));
// }

// DONE...............!

// Program # 04 :
// You have an array
// A = [“Nokia”, “Samsung”, “Apple”, “Sony”, “Huawei”]
// Write each element on new line with the help of for loop.

// Solution :
// var array = ["Nokia", "Samsung", "Apple", "Sony", "Huawei"];
// var lengthOfArray = array.length;

// for (var i = 0; i < lengthOfArray; i++) {
//     console.log(array[i]);
// }

// DONE...............!

// Program # 05 :
// Write a program to print items of the following array using for loop:
// fruits = [“apple”, “banana”, “mango”, “orange”, “strawberry”].

// Solution :
// var fruits = ["Apple", "Banana", "Mango", "Orange", "Strawberry"];
// var fruitslength = fruits.length;

// for (var i = 0; i < fruitslength; i++) {
//     console.log(fruits[i]);
//     console.log("Element at index " + fruits.indexOf(fruits[i]) + " is " + fruits[i]);
// }

// console.log("Element at index " + fruits.indexOf("Apple") + " is " + fruits[0]);
// console.log("Element at index " + fruits.indexOf("Banana") + " is " + fruits[1]);
// console.log("Element at index " + fruits.indexOf("Mango") + " is " + fruits[2]);
// console.log("Element at index " + fruits.indexOf("Orange") + " is " + fruits[3]);
// console.log("Element at index " + fruits.indexOf("Strawberry") + " is " + fruits[4]);

// DONE...............!

// Program # 06 :
// Write a program to initialize an array of N items by using prompt. Where N is number of items as entered by the user.

// Solution :
// alert("Number of items is 4");
// var value1 = prompt("Enter value of Index 0");
// var value2 = prompt("Enter value of Index 1");
// var value3 = prompt("Enter value of Index 2");
// var value4 = prompt("Enter value of Index 3");

// var myArr = [];
// myArr.push(value1, value2, value3, value4);
// var arrLength = myArr.length;

// console.log("Number of items : 4");
// console.log("Items :");

// for (var i = 0; i < arrLength; i++) {
//     console.log(myArr[i]);
// }

// DONE...............!

// Program # 07 :
// Generate the following series in your browser. See example output.
// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k

// Solution od Part : A :
// console.log("Counting from 1 to 15 :");

// for (var i = 1; i <= 15; i++) {
//     console.log(i);
// }

// Solution of Part : B :
// console.log("Reverse Counting from 10 to 1");

// for (var i = 10; i >= 1; i--) {
//     console.log(i);
// }

// Solution of Part : C :
// console.log("Even :");

// for (var i = 0; i <= 20; i = i + 2) {
//     console.log(i);
// }

// Solition of Part D :
// console.log("Odd :");

// for (var i = 1; i < 20; i = i + 2) {
//     console.log(i);
// }

// Solution of Part : E :
// console.log("Series :");

// for (var i = 2; i <= 20; i = i + 2) {
//     console.log(i + "k");
// }

// DONE...............!

// Program # 08 :
// You have an array A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an array.
// After searching, prompt the user whether the given item is found in the list or not. Example:

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

// Program # 09 :
// Write a program to identify the largest number in the given array.
// A = [24, 53, 78, 91, 12]

// Solution :
// var numArr = [24, 53, 78, 91, 12];
// console.log("Array Items : " + numArr);
// console.log("The Largest Number is : " + Math.max(24, 53, 78, 91, 12));

// DONE...............!

// Program # 10 :
// Write a program to identify the smallest number in the given array.
// A = [24, 53, 78, 91, 12]

// Solution :
// var numArr = [24, 53, 78, 91, 12]
// console.log("Array Items : " + numArr);
// console.log("The Smallest Number is : " + Math.min(24, 53, 78, 91, 12));

// DONE...............!

// Program # 11 :
// Write a program to identify the largest & the smallest number in the given array.
// A = [24, 53, 78, 91, 12]

// Solution :
// var numArr = [24, 53, 78, 91, 12];
// console.log("Array Items : " + numArr);
// console.log("The Smallest Number is : " + Math.min(24, 53, 78, 91, 12));
// console.log("The Largest Number is : " + Math.max(24, 53, 78, 91, 12));

// DONE...............!

// Program # 12 :
// Write a program to print multiples of 5 ranging 1 to 100

// Solution :
// for (var i = 5; i <= 100; i = i + 5) {
//     console.log(i);
// }

// DONE...............!

// Program # 13 :
// You have given the following arrays:
// var students = ["Ali", "Sami", "Taha", "Inam"];
// var scores = [58, 73, 89, 90];
// Write a program to generate the following HTML table in your browser using JS.

// Solution :
// var students = ["Ali", "Sami", "Taha", "Inam"];
// var scores = [58, 73, 89, 90];

// document.write("<table> <tr> <thead> Students </thead> <thead> Scores </thead> <tr/> <tr> <td> " + students[0] + " </td> <td> " + scores[0] + " </td> </tr> <tr> <td> " + students[1] + " </td> <td> " + scores[1] + " </td> </tr> <tr> <td> " + students[2] + " </td> <td> " + scores[2] + " </td> </tr> <tr> <td> " + students[3] + " </td> <td> " + scores[3] + " </td> </tr> </table>");

// DONE...............!

// Program # 14 :
// Write a program that prints number from start of the array to desired stop value. Given array:
// var scores = [12, 45, 3, 22, 34, 50];
// (Hint: take stop value from user)
// E.g. if user gives 3 as input value print 12, 45, 3
// if user gives 34 as input value print 12, 45, 3, 22, 34

// Solution : 
// var scores = [12, 45, 3, 22, 34, 50];
// var userInput = parseInt(prompt("Enter any value of the following\n12, 45, 3, 22, 34, 50"));

// if (userInput === scores[0]) {
//     console.log(scores[0]);
// }

// else if (userInput === scores[1]) {
//     console.log(scores[0], scores[1]);
// }

// else if (userInput === scores[2]) {
//     console.log(scores[0], scores[1], scores[2]);
// }

// else if (userInput === scores[3]) {
//     console.log(scores[0], scores[1], scores[2], scores[3]);
// }

// else if (userInput === scores[4]) {
//     console.log(scores[0], scores[1], scores[2], scores[3], scores[4]);
// }

// else if (userInput === scores[5]) {
//     console.log(scores[0], scores[1], scores[2], scores[3], scores[4], scores[5]);
// }

// else if (userInput != scores) {
//     console.log("Error!\nInvalid Number!");
// }

// DONE...............!

// Program # 15 :
// You have an array
// A = [ [1,2,3] , [4,5,6] , [7,8,9] ]
// Write each element on new line with the help of nested for loops.

// Solution :
// var myArr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
// var arrLength = myArr.length;

// for (var i = 0; i < arrLength; i++) {
//     console.log(myArr[i].join(" ") );
// }

// DONE...............!

// Program # 16 :
// Write a program to repeatedly print the value of the variable num which is input by user. 
// Value should be decreasing by 0.5 each time, as long as x Value remains positive.

// Solution :
// var userInput = parseInt(prompt("Enter any positive integer!"));

// for (var i = userInput; i >= 0; i = i - 0.5) {
//     console.log(i);
// }

// DONE...............!

// program # 17 :
// Write a for loop that will iterate from 0 to 20. For each iteration, it will check 
// if the current number is even or odd, and report that to the screen (e.g. "2 is even").

// Solution :
// for (var i = 0; i <= 20; i++) {
//     if (i === 0) {
//         console.log(i + " is Even.");
//     }

//     else if (i % 2 === 0) {
//         console.log(i + " is Even.");
//     }

//     else {
//         console.log(i + " is Odd.");
//     }
// }

// DONE...............!

// Program # 18 :
// Write a program to calculate the product of the odd integers from 1 to 7.

// Solution :
// Prove : 1 to 7 = 105

// for (var i = 1; i <= 7; i = i + 2) {
//     console.log(i);
// }

// var proveEquation = 1 * 3 * 5 * 7;
// console.log(proveEquation);

// DONE...............!

// Note : Right now i ma skipping question no 19 and 20.

// All Programs Completed...!