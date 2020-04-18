/********************** ARRAY PROGRAMS ASSIGNMENTS ************************/

// Note : Right now i am skipping question 1 and 2.

// Program # 03 :
// Declare and initialize a strings array.

// Solution :
// var strArray = ["Ahmed", "Kashan", "Shahzaib", "Khurram", "Mehran"];
// console.log(strArray);

// Program # 04 :
// Declare and initialize a numbers array.

// Solution :
// var numArray = [2, 4, 6, 8, 10];
// console.log(numArray);

// Program  # 05 :
// Declare and initialize a boolean array.

// Solution :
// var booleanArray = [true, false];
// console.log(booleanArray);

// Program # 06 :
// Declare and initialize a mixed array.

// Solution :
// var mixedArray = ["Ahmed", 1996, true, "Lion", false, 786, undefined];
// console.log(mixedArray);

// Program # 07 :
// Declare and Initialize an array and store available mobile networks in Pakistan.

// Solution :
// var networks = ["Jazz", "Telenor", "Ufone", "Warid", "Zong"];
// console.log(networks);

// Program # 08 :
// Declare and Initialize an array and store available education qualifications in Pakistan 
// (e.g. SSC, HSC, B.CS, BS, B.COM, MS, M.Phil., PhD). Show the listed qualifications in your browser like:

// Solution :
// var qualifications = ["SSC", "HSC", "B.CS", "BS", "B.COM", "MS", "M.Phil", "PhD"];

// console.log("Qualifications :");
// console.log("1) " + qualifications[0]);
// console.log("2) " + qualifications[1]);
// console.log("3) " + qualifications[2]);
// console.log("4) " + qualifications[3]);
// console.log("5) " + qualifications[4]);
// console.log("6) " + qualifications[5]);
// console.log("7) " + qualifications[6]);
// console.log("8) " + qualifications[7]);

// Program # 09 :
// Declare and initialize an empty array to store top movies of 2015. Add movies one by one in an array. 
// Display the elements & length of array in your browser. (Use array’s length method).

// Solution :
// var movies = [];
// var movie1 = prompt("Enter your favourite movie ?");
// var movie2 = prompt("Enter your another favourite movie ?");
// var movie3 = prompt("Enter your most favourite movie ?");
// var movie4 = prompt("Enter your another most favourite movie ?");
// movies.push(movie1, movie2, movie3, movie4);

// console.log("Top movies of 2015");
// console.log("1) " + movies[0]);
// console.log("2) " + movies[1]);
// console.log("3) " + movies[2]);
// console.log("4) " + movies[3]);

// console.log("Length of an array : " + movies.length);

// Program # 10 :
// Declare and Initialize an array with your favorite cars. Show
// a. First index of the array.
// b. Car at first index of the array.
// c. Last index of the array.
// d. Car at last index of the array.

// Solution :
// var favCars = ["Cyber Truck", "Mercedes", "Land Cruiser", "Prado", "Corolla"];

// console.log("Favourite Cars");
// console.log("First index of the array : " + favCars.indexOf("Cyber Truck"));
// console.log("Car at the first index of the array : " + favCars[0]);
// console.log("Last index of the array : " + favCars.indexOf("Corolla"));
// console.log("Car at the last index of the array : " + favCars[4]);

// program # 11 :
// Write a program to store 3 student names in an array. Take another array to store score of these three students. 
// Assume that total marks are 500 for each student, display the scores & percentages of students like:

// Solution :
// Note : Precentage formula is : ( (marks obtained * 100) / total marks).
// var studentNames = ["Michael", "John", "Tony"];
// var studentScores = [320, 230, 480];
// var totalMarks = 500;

// console.log("Score of " + studentNames[0] + " is " + studentScores[0] + "." + " Percentage : " + ((studentScores[0] * 100) / totalMarks) + "%");
// console.log("Score of " + studentNames[1] + " is " + studentScores[1] + "." + " Percentage : " + ((studentScores[1] * 100) / totalMarks) + "%");
// console.log("Score of " + studentNames[2] + " is " + studentScores[2] + "." + " Percentage : " + ((studentScores[2] * 100) / totalMarks) + "%");

// Program # 12 :
// Initialize an array with color names. Display the array elements in your browser.

// Solution :
// var colorNames = ["White", "Black", "Red", "Blue", "Green"];
// console.log(colorNames);

// a. Ask the user what color he/she wants to add to the beginning & add that color to the beginning of the array.
// Display the updated array in your browser.

// var newColor1 = prompt("What color do you want to add to the beginning of an array ?");
// colorNames.unshift(newColor1);
// console.log(colorNames);

// b. Ask the user what color he/she wants to add to the end & add that color to the end of the array. 
// Display the updated array in your browser.

// var newColor2 = prompt("What color do you want to add to the end of an array ?");
// colorNames.push(newColor2);
// console.log(colorNames);

// c. Add two more color to the beginning of the array. Display the updated array in your browser.

// var color1 = prompt("Enter Color 1");
// var color2 = prompt("Enter Color 2");
// colorNames.unshift(color1, color2);
// console.log(colorNames);

// d. Delete the first color in the array. Display the updated array in your browser.

// colorNames.shift();
// console.log(colorNames);

// e. Delete the last color in the array. Display the updated array in your browser
// colorNames.pop();
// console.log(colorNames);

// Ask the user at which index he/she wants to add a color & color name. Then add the color to desired position/index. 
// Display the updated array in your browser.

// var userIndex = parseInt(prompt("At which index do you want to add a color ?"));
// var color = prompt("Enter the color name ?");
// colorNames.splice(userIndex, 0, color);
// console.log(colorNames);

// g. Ask the user at which index he/she wants to delete color(s) & how many colors he/she wants to delete. 
// Then remove the same number of color(s) from user-defined position/index. . Display the updated array in your browser.

// var userIndex = parseInt(prompt("At which index do you want to delete a color ?"));
// var deleteIndex = parseInt(prompt("How many colors do you want to delete ?"));
// colorNames.splice(userIndex, deleteIndex);
// console.log(colorNames);

// Program # 13 :
// Write a program to store student scores in an array & sort the array in ascending order using Array’s sort method.

// var scoreOfStudents = [320, 230, 480, 120];
// console.log("Scores of Students : " + scoreOfStudents);
// console.log("Ordered score of students : " + scoreOfStudents.sort());

// Program # 14 :
// Write a program to sort the below mentioned array:

// var fruits = ["strawberry", "apple", "orange", "banana"];
// console.log("Fruits List :");
// console.log(fruits);
// console.log("Ordered Fruits List :");
// console.log(fruits.sort());

// Program # 15 :
// Write a program to initialize an array with city names. Copy 3 array elements from cities array to selectedCities array.

// Solution :
// var citiesList = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
// console.log("Cities List :");
// console.log(citiesList);
// console.log("Selected cities list :");
// citiesList.splice(0, 2);
// citiesList.pop();
// console.log(citiesList);

// Program # 16 :
// Write a program to create a single string from the below mentioned array:
// var arr = [“This ”, “ is ”, “ my ”, “ cat”];
// (Use array’s join method)

// Solution :
// var arr = ["This", "is", "my", "cat"];
// console.log("Array\n" + arr);
// console.log("String\n" + arr.join(" "));

// Program # 17 :
// Create a new array. Store values one by one in such a way that you can access the values in the order in which they were stored. 
// (FIFO-First In First Out)

// Solution :
// var devices = [];
// devices.push("Keyboard", "Mouse", "Printer", "Monitor");
// console.log("Devices");
// console.log(devices);

// console.log("Out :\n" + devices.shift());
// console.log("Out :\n" + devices.shift());
// console.log("Out :\n" + devices.shift());
// console.log("Out :\n" + devices.shift());

// Program # 18 :
// Create a new array. Store values one by one in such a waythat you can access the values in reverse order. 
// (Last In-FirstOut)

// var devices = [];
// devices.push("Keyboard", "Mouse", "Printer", "Monitor");
// console.log("Devices");
// console.log(devices);

// console.log("Out :\n" + devices.pop());
// console.log("Out :\n" + devices.pop());
// console.log("Out :\n" + devices.pop());
// console.log("Out :\n" + devices.pop());

// Program # 19 :
// Write a program to store phone manufacturers (Apple, Samsung, Motorola, Nokia, Sony & Haier) in an array. 
// Display the following dropdown/select menu in your browser using document.write() method:

// Solution :
// var phone = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
// document.write("<select> <option> " + phone[0] + " </option> <option> " + phone[1] + " </option> <option> " + phone[2] + " </option> <option> " + phone[3] + " </option> <option> " + phone[4] + " </option> <option> " + phone[5] + " </option> </select>");

// Program # 20 :
// Declare and initialize an empty multidimensional array.
// (Array of arrays)

// Solution :
// console.log("Multidimensional Array");
// var multidimensionalArray = [[], [], []];
// console.log(multidimensionalArray);

// Program # 21 :
// Declare and initialize a multidimensional array representing the following matrix:

// var arr1 = [0, 1, 2, 3];
// var arr2 = [1, 0, 1, 2];
// var arr3 = [2, 1, 0, 1];
// var emptyArr = [arr1, arr2, arr3];
// console.log(emptyArr);

// All Programs Completed...!