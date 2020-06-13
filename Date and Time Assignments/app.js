// Date and Time Assignments...!

// Program # 01 :
// How many days have passed since your birthday. Solve this program using date methods.

// Solution :
// var today = new Date();
// var birthDay = new Date("July 08, 1995");

// // Converting both dates in miliseconds...!
// var convertToday = today.getTime();
// var convertBirthDay = birthDay.getTime();

// var calculateDaysInMiliSeconds = convertToday - convertBirthDay;
// var daysPassedForBirthDay = calculateDaysInMiliSeconds / (1000 * 60 * 60 * 24);
// daysPassedForBirthDay = Math.floor(daysPassedForBirthDay);
// console.log(daysPassedForBirthDay + " days have passed since your birthday!");

// Program # 02 :
// How many days have passed since your last birth date. Solve this program using date methods.

// Solution :
// var today = new Date();
// var lastBirthDay = new Date("July 08, 1995");

// // Converting dates in miliseconds...!
// var convertToday = today.getTime();
// var convertLastBirthDay = lastBirthDay.getTime();

// var calculateDaysInMiliSeconds = convertToday - convertLastBirthDay;
// var daysPassedForLastBirthDay = calculateDaysInMiliSeconds / (1000 * 60 * 60 * 24);
// daysPassedForLastBirthDay = Math.floor(daysPassedForLastBirthDay);
// console.log(daysPassedForLastBirthDay + " days have passed since your last birth date!");

// Program # 03 :
// How many days are left for your coming birth date. Solve this program using date methods.

// Solution :
// var today = new Date();
// var comingBirthDay = new Date("July 08, 2020");

// // Converting dates in miliseconds...!
// var convertToday = today.getTime();
// var convertComingBD = comingBirthDay.getTime();

// var calculateDaysInMiliSeconds = convertComingBD - convertToday;
// var daysLeftInComingBD = calculateDaysInMiliSeconds / (1000 * 60 * 60 * 24);
// daysLeftInComingBD = Math.floor(daysLeftInComingBD);
// console.log(daysLeftInComingBD + " days are left for your coming birth date.");

// Program # 04 :
// How much days left in eid-ul-fitr 2020.

// Solition :
// var today = new Date();
// var eidDate = new Date("May 25, 2020");

// // Converting dates in mili seconds...!
// var convertToday = today.getTime();
// var convertEidDate = eidDate.getTime();

// var leftDaysInEidInMiliSeconds = convertEidDate - convertToday;
// var leftDaysInEid = leftDaysInEidInMiliSeconds / (1000 * 60 * 60 * 24);
// leftDaysInEid = Math.floor(leftDaysInEid);
// console.log(leftDaysInEid + " days left in Eid-ul-Fitr.");

// Program # 05 :
// How many hours left in next class class.

// Solution :
// var today = new Date();
// var tomorrow = new Date("May 18, 2020 14:00:00");

// // Converting dates in miliseconds...!
// var convertToday = today.getTime();
// var convertTomorrow = tomorrow.getTime();

// var leftHoursInMiliSeconds = convertTomorrow - convertToday;
// var leftHours = leftHoursInMiliSeconds / (1000 * 60 * 60);
// leftHours = Math.floor(leftHours);
// console.log(leftHours + " hours left in tomorrow class.");

// All programs done...!