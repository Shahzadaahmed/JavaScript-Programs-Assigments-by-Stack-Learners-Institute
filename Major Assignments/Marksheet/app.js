// Student Marksheet App...!

let firstContainer = document.getElementById("container-box");
let secondContainer = document.getElementById("second-container");

// Getting subjects data...!
let subjectOne = document.getElementById("sub-one");
let subjectTwo = document.getElementById("sub-two");
let subjectThree = document.getElementById("sub-three");
let subjectFour = document.getElementById("sub-four");
let subjectFive = document.getElementById("sub-five");

// Getting subjects marks...!
let marksOne = document.getElementById("marks-one");
let marksTwo = document.getElementById("marks-two");
let marksThree = document.getElementById("marks-three");
let marksFour = document.getElementById("marks-four");
let marksFive = document.getElementById("marks-five");

// DOM Subjects Area...!
let postSubOne = document.getElementById("get-subject-one");
let postSubTwo = document.getElementById("get-subject-two");
let postSubThree = document.getElementById("get-subject-three");
let postSubFour = document.getElementById("get-subject-four");
let postSubFive = document.getElementById("get-subject-five");

// DOM Marks Obtained Area...!
let postMarksOne = document.getElementById("get-marks-one");
let postMarksTwo = document.getElementById("get-marks-two");
let postMarksThree = document.getElementById("get-marks-three");
let postMarksFour = document.getElementById("get-marks-four");
let postMarksFive = document.getElementById("get-marks-five");

// Result Area...!
let marksObtained = document.getElementById("MarksObtained");
let getPercentage = document.getElementById("Percentage");
let getGrade = document.getElementById("Grade");
let getRemarks = document.getElementById("Remarks");

const studentsData = () => {
    // Security for characters...!
    let regexForCharacters = /^[A-Za-z]+$/;

    // Object of students subjects...!
    let obj = {
        subject1: subjectOne.value.toUpperCase(),
        subject2: subjectTwo.value.toUpperCase(),
        subject3: subjectThree.value.toUpperCase(),
        subject4: subjectFour.value.toUpperCase(),
        subject5: subjectFive.value.toUpperCase(),
    }

    // Object of students marks obtained...!
    let marksObj = {
        marks1: marksOne.value,
        marks2: marksTwo.value,
        marks3: marksThree.value,
        marks4: marksFour.value,
        marks5: marksFive.value,
    }

    // Result Calculation Area...!
    let totalMarks = 500;
    let obtainedMarks = Number(marksObj.marks1) + Number(marksObj.marks2) + Number(marksObj.marks3) + Number(marksObj.marks4) + Number(marksObj.marks5);
    let percentage = obtainedMarks * 100 / totalMarks;

    // Required Conditions...!
    if (obj.subject1.match(regexForCharacters) &&
        obj.subject2.match(regexForCharacters) &&
        obj.subject3.match(regexForCharacters) &&
        obj.subject4.match(regexForCharacters) &&
        obj.subject5.match(regexForCharacters) &&
        marksObj.marks1 >= 1 && marksObj.marks1 <= 100 &&
        marksObj.marks2 >= 1 && marksObj.marks2 <= 100 &&
        marksObj.marks3 >= 1 && marksObj.marks3 <= 100 &&
        marksObj.marks4 >= 1 && marksObj.marks4 <= 100 &&
        marksObj.marks5 >= 1 && marksObj.marks5 <= 100
    ) {
        alert("Your Information has submitted successfully!\nMarksheet created successfully!");
        firstContainer.style.display = "none";
        secondContainer.style.display = "block";
        document.getElementById("sub-one").value = "";
        document.getElementById("sub-two").value = "";
        document.getElementById("sub-three").value = "";
        document.getElementById("sub-four").value = "";
        document.getElementById("sub-five").value = "";
        document.getElementById("marks-one").value = "";
        document.getElementById("marks-two").value = "";
        document.getElementById("marks-three").value = "";
        document.getElementById("marks-four").value = "";
        document.getElementById("marks-five").value = "";
        postSubOne.innerHTML = obj.subject1;
        postSubTwo.innerHTML = obj.subject2;
        postSubThree.innerHTML = obj.subject3;
        postSubFour.innerHTML = obj.subject4;
        postSubFive.innerHTML = obj.subject5;
        postMarksOne.innerHTML = marksObj.marks1;
        postMarksTwo.innerHTML = marksObj.marks2;
        postMarksThree.innerHTML = marksObj.marks3;
        postMarksFour.innerHTML = marksObj.marks4;
        postMarksFive.innerHTML = marksObj.marks5;
        marksObtained.innerHTML = obtainedMarks;
        getPercentage.innerHTML = percentage + "%";
    }

    else {
        alert("Numbers and Special characters are Invalid in subjects area!\nEmpty or any space will not be accepted!\nMarks value which is less than 1 or greater than 100 will not be acceptable!!!");
        document.getElementById("sub-one").focus();
        document.getElementById("sub-one").value = "";
        document.getElementById("sub-two").value = "";
        document.getElementById("sub-three").value = "";
        document.getElementById("sub-four").value = "";
        document.getElementById("sub-five").value = "";
        document.getElementById("marks-one").value = "";
        document.getElementById("marks-two").value = "";
        document.getElementById("marks-three").value = "";
        document.getElementById("marks-four").value = "";
        document.getElementById("marks-five").value = "";
    }

    // Condition to check grade or remarks...!
    if (percentage >= 80 && percentage <= 100) {
        getGrade.innerHTML = "A+1";
        getRemarks.innerHTML = "Excellent";
    }

    else if (percentage >= 70 && percentage <= 79) {
        getGrade.innerHTML = "A";
        getRemarks.innerHTML = "Best";
    }

    else if (percentage >= 60 && percentage <= 69) {
        getGrade.innerHTML = "B";
        getRemarks.innerHTML = "Good";
    }

    else if (percentage >= 50 && percentage <= 59) {
        getGrade.innerHTML = "C";
        getRemarks.innerHTML = "Satisfactory";
    }

    else if (percentage >= 40 && percentage <= 49) {
        getGrade.innerHTML = "D";
        getRemarks.innerHTML = "Weak";
    }

    else if (percentage >= 33 && percentage <= 39) {
        getGrade.innerHTML = "E";
        getRemarks.innerHTML = "Too Weak";
    }

    else if (percentage < 33) {
        getGrade.innerHTML = "F";
        getRemarks.innerHTML = "Poor";
    }
}

// App completed successfully...!