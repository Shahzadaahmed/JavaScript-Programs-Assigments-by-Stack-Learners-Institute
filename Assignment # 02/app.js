// Assignment # 02 : "ARRAY" , "OBJECT" and "FUNCTIONS".

// Program # 01 :
// Declare a variable name cities and assign it an empty array and console it.

// Solution :
// var cities = [];
// console.log(cities);

// DONE..................!

// Program # 02 :
// Use variable of the previous question and assign it value from 0 to 5th index and console it.

// Solution :
// var cities = [];
// cities[0] = "Shahzada";
// cities[1] = "Ahmed";
// cities[2] = 1996;
// cities[3] = true;
// cities[4] = undefined;
// cities[5] = false;

// console.log(cities);

// DONE..................!

// Program # 03 :
// Ask user his 3 favourite movies and put them in an array

// Solution :
// var movies = [];
// movies[0] = prompt("What is your most favourite movie ?").toUpperCase();
// movies[1] = prompt("What is your second most favourite movie ?").toUpperCase();
// movies[2] = prompt("What is your third most favourite movie ?").toUpperCase();

// console.log("My Favourite Movies :");
// console.log(movies);

// DONE..................!

// Program # 04 :
// Declare 3 variables city1, city2 and city3. Each should have an object with following
// information: name, population, province name, is it capital or not ?
// Once you have created all 3 variables, put them in an array and console the array and objects individually

// Solution :
// var city1 = {
//     name: "Karachi",
//     population: 12000,
//     provinceName: "Sindh",
//     isCapital: false
// }

// var city2 = {
//     name: "Islamabad",
//     population: 20000,
//     provinceName: "Punjab",
//     isCapital: true
// }

// var city3 = {
//     name: "Lahore",
//     population: 17000,
//     provinceName: "Punjab",
//     isCapital: false
// }

// var cities = [];
// cities[0] = city1;
// cities[1] = city2;
// cities[2] = city3;

// console.log(city1);
// console.log(city2);
// console.log(city3);
// console.log(cities);

// DONE..................!

// Program # 05 :
// Make following data for 5 students using arrays and objects Name, roll number, father’s name, subjects, DOB.
// Once you have created data for all 5 students and put them in array, console it.

// Solution :
// var student1 = {
//     name: "Shahzada Muhammad Ahmed Rana",
//     fatherName: "Munawar Ahmed Rana",
//     rollNumber: "88101",
//     dateOfBirth: "8th July 1996",
//     subjects: ["Computer Science", "Math", "Physics", "Chemistry", "Islamiat"]
// }

// var student2 = {
//     name: "Muhammad Yousuf",
//     fatherName: "Munawar Ahmed Rana",
//     rollNumber: "88102",
//     dateOfBirth: "1st Jan 1997",
//     subjects: ["Computer Science", "Math", "Physics", "Chemistry", "Islamiat"]
// }

// var student3 = {
//     name: "Muhammad Akbar",
//     fatherName: "Munawar Ahmed Rana",
//     rollNumber: "88103",
//     dateOfBirth: "2nd Jan 1999",
//     subjects: ["Computer Science", "Math", "Physics", "Chemistry", "Islamiat"]
// }

// var student4 = {
//     name: "Muhammad Asghar",
//     fatherName: "Munawar Ahmed Rana",
//     rollNumber: "88104",
//     dateOfBirth: "3rd Jan 2002",
//     subjects: ["Computer Science", "Math", "Physics", "Chemistry", "Islamiat"]
// }

// var student5 = {
//     name: "Syed Shaheryar Shah",
//     fatherName: "Syed Wasim Ahmed Shah",
//     rollNumber: "88105",
//     dateOfBirth: "4th Jan 1995",
//     subjects: ["Computer Science", "Math", "Physics", "Chemistry", "Islamiat"]
// }

// var studentsData = [];
// studentsData[0] = student1;
// studentsData[1] = student2;
// studentsData[2] = student3;
// studentsData[3] = student4;
// studentsData[4] = student5;

// console.log(studentsData);

// DONE..................!

// Program # 06 :
// Make a function that will greet user as “Hello Sir” and call it twice.

// Solution :
// function greetUser(msg) {
//     return msg;
// }

// var message = "Hello Sir! Welcome to JavaScript World";
// var result = greetUser(message);
// console.log(result);
// console.log(result);

// DONE..................!

// Program # 07 :
// Make a function that will take first and last name of user and will greet user like: “Hello Firstname Lastname”. 
// Take user first and last name via prompt, pass them to function and call it.

// Solution :
// function fullName(name1, name2) {
//     return "Hello " + name1 + " " + name2;
// }

// var firstName = prompt("Enter Your First Name!");
// var lastName = prompt("Enter Your last Name!");
// var result = fullName(firstName, lastName)
// console.log(result);

// DONE..................!

// Program # 08 :
// Make a functions that take 2 params and console the values after applying folloeing mathmetical operations: (+ - * / %).

// Part A : Addition +
// function mathmeticalOperations(val1, val2) {
//     return val1 + val2
// }

// Part B : Subtraction -
// function mathmeticalOperations(val1, val2) {
//     return val1 - val2
// }

// Part C : Multiplication *
// function mathmeticalOperations(val1, val2) {
//     return val1 * val2
// }

// Part D : Divide /
// function mathmeticalOperations(val1, val2) {
//     return val1 / val2
// }

// Part E : Modulus %
// function mathmeticalOperations(val1, val2) {
//     return val1 % val2
// }

// var value1 = parseInt(prompt("Enter any Number!"));
// var value2 = parseInt(prompt("Enter another Number!"));
// var result = mathmeticalOperations(value1, value2);
// console.log(result);

// DONE..................!

// Program # 09 :
// Make a function that will take a number and return its square.

// Solution :
// function squareValue(num) {
//     return num * num;
// }

// var result = squareValue(9);
// console.log(result);

// DONE..................!

// Program # 10 :
// Here is the formula for pythagoras theorem:
// H2 = B2 + P2
// Make a function that will take Base and Perpendicular and return square of hypotenuse.

// Solution :
// function squareValue(num) {
//     return num * num
// }

// function hypotenuse(base, perpendicular) {
//     var baseSquare = squareValue(base);
//     var perpendicularSquare = squareValue(perpendicular);
//     var hypotenuseSquare = baseSquare + perpendicularSquare
//     return hypotenuseSquare;
// }

// var result = hypotenuse(4, 6);
// console.log(result);

// DONE..................!

// Program # 11.
// Make a function that takes username, roll number and favourite subject name (only 1) and
// return an object having all 3 informations.

// Solution :
// function studentsData(stuName, stuRollNo, stuFavSub) {
//     var myObj = {};
//     myObj.name = stuName;
//     myObj.rollNumber = stuRollNo;
//     myObj.favouriteSubject = stuFavSub;

//     return myObj;
// }

// var studentName = prompt("Enter Your Name");
// var studentRollNo = prompt("Enter Your Roll Number");
// var studentFavSubject = prompt("Enter Your Favourite Subject");

// var result = studentsData(studentName, studentRollNo, studentFavSubject);
// console.log(result);

// DONE..................!

// Program # 12 :
// Make a function that will take username and return as greeting “Happy Birthday username”.

// Solution :
// function birthDayFunc(name) {
//     return "Happy Birthday " + name;
// }

// var userName = prompt("Enter Your Name!");
// var result = birthDayFunc(userName);
// console.log(result);

// DONE..................!

// Program # 13 :
// Formula is: (a - b)2 = (a2- 2ab + b2).
// Make a function that will take 2 params and console the solved value as per formula above.

// Solution :
// Equation = (a - b)2 = (a2 - 2ab + b2).
// function squareValue(num) {
//     return num * num;
// }

// function calculateEquation(a, b) {
//     var aSquare = squareValue(a);
//     var bSquare = squareValue(b);
//     var equation = aSquare - (2 * a * b) + bSquare;
//     return equation
// }

// var result = calculateEquation(6, 4);
// console.log(result);

// DONE..................!

// Program # 14 :
// Formula is: (a + b + c)2 = a2 + b2 + c2 + 2(ab + bc + ca)
// Make a function that will take 3 params and console the solved value as per formula above.

// Solution :
// Equation = (a + b + c)2 = a2 + b2 + c2 + 2(ab + bc + ca).
// function squareValue(num) {
//     return num * num;
// }

// function calculateEquation(a, b, c) {
//     var aSquare = squareValue(a);
//     var bSquare = squareValue(b);
//     var cSquare = squareValue(c);
//     var equation = aSquare + bSquare + cSquare + (2 * ((a * b) + (b * c) + (a * c)));
//     return equation;
// }

// var result = calculateEquation(6, 3, 7);
// console.log(result);

// DONE..................!

// Program # 15 :
// Make a function that finds area of a circle. Formula is: A = π r2
// Where π = 3.14

// Solution :
// Equation : A = π r2
// function squareValue(num) {
//     return num * num;
// }

// function calculateEquation(r) {
//     var pi = 3.14;
//     var rSquare = squareValue(r);
//     var equation = pi * rSquare;
//     return equation;
// }

// var result = calculateEquation(4);
// console.log(result);

// DONE..................!

// Program # 16 :
// Make a function that finds  the circumference of a circle. Formula is : C = 2 π r.
// Where : π = 3.14

// Solution :
// Equation : C = 2 π r

// function calculateEquation(r) {
//     var pi = 3.14;
//     var c = 2 * pi * r;
//     return c
// }

// var result = calculateEquation(6);
// console.log(result);

// DONE..................!

// All Programs Are Completed Successfully.