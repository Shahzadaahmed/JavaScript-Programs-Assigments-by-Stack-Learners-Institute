// Title Case Paragraph...!

let userInput = document.getElementById("user-text");
let showMessage = document.getElementById("message-area");

const titleCase = () => {
    if (!userInput.value) {
        alert("Error!!!\nPlease write some text!");
        userInput.value = "";
        document.getElementById("user-text").focus();
    }

    else {
        let convertStrToArr = userInput.value;
        convertStrToArr = convertStrToArr.split(" ");

        for (let i = 0; i < convertStrToArr.length; i++) {
            convertStrToArr[i] = convertStrToArr[i][0].toUpperCase() + convertStrToArr[i].slice(1).toLowerCase();
        }
        let convertArrToStr = convertStrToArr.join(" ");
        showMessage.innerHTML = convertArrToStr;
        userInput.value = "";
        document.getElementById("user-text").focus();
    }
}

// Project Completed Successfully...!