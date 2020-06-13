// Registration and LogIn Form...!

// This data is only for sign up or registration user...!
// Getting user information
let userName = document.getElementById("name");
let userRollNum = document.getElementById("roll-no");
let userContact = document.getElementById("contact-num");
let userEmail = document.getElementById("email");
let userPassword = document.getElementById("password");
let userArray = [];
let allEmails = [];
let errorBox = document.getElementById("custom-alert");

// This data is only for login user...!
let userLogInEmail = document.getElementById("login-email");
let userLogInPassword = document.getElementById("login-password");

// Sign Up and LogIn Container
let signUpContainer = document.getElementById("main-container");
let logInContainer = document.getElementById("login-container");

// User Registration Function...!
const registerUser = () => {
    let duplicate = checkDuplication(userEmail.value);
    let validationEmail = /^[\w\-\.\+]+\@[a-zA-Z0-9\. \-]+\.[a-zA-z0-9]{2,4}$/;

    let userObj = {
        name: userName.value,
        rollNum: userRollNum.value,
        contact: userContact.value,
        email: userEmail.value,
        password: userPassword.value
    }

    if (userObj.name != 0 &&
        userObj.rollNum != 0 &&
        userObj.contact != 0 &&
        userObj.email.match(validationEmail) &&
        userObj.password.length >= 8
    ) {
        if (duplicate) {
            swal({
                title: "The email you entered is already exist in the database!",
                text: "Authorized Email!",
                icon: "warning",
                button: "OK!",
            });
            document.getElementById("name").value = "";
            document.getElementById("roll-no").value = "";
            document.getElementById("contact-num").value = "";
            document.getElementById("email").value = "";
            document.getElementById("password").value = "";
            document.getElementById("name").focus();
        }

        else {
            userArray.push(userObj);
            allEmails.push(userObj.email);
            swal({
                title: "Registered Successfully!",
                text: "Your information has saved!",
                icon: "success",
                button: "OK!",
            });
            document.getElementById("name").focus();
            document.getElementById("name").value = "";
            document.getElementById("roll-no").value = "";
            document.getElementById("contact-num").value = "";
            document.getElementById("email").value = "";
            document.getElementById("password").value = "";
        }
    }

    else {
        swal({
            title: "Empty Field is Invalid!\nPassword must start with alphabets and must be more than 6 numbers will be accepted otherwise not!\nInvalid email format will not be accepted!",
            text: "Invalid Information!",
            icon: "error",
            button: "OK!",
        });
        document.getElementById("name").focus();
        document.getElementById("name").value = "";
        document.getElementById("roll-no").value = "";
        document.getElementById("contact-num").value = "";
        document.getElementById("email").value = "";
        document.getElementById("password").value = "";
    }
}

// Function to check duplicate email...!
const checkDuplication = (email) => {
    let isDuplicated = false;

    for (let i = 0; i < allEmails.length; i++) {
        if (allEmails[i] === email) {
            isDuplicated = true;
        }
    }
    return isDuplicated;
}

// User LogIn Function...!
const logIn = () => {
    let myEmail = userLogInEmail.value;
    let myPassword = userLogInPassword.value;
    let message = "";

    if (!myEmail && !myPassword) {
        swal({
            title: "Empty field is Invalid!",
            text: "Invalid Information",
            icon: "error",
            button: "OK!",
        });
    }

    else {
        for (let i = 0; i < userArray.length; i++) {
            let myObj = userArray[i];

            if (myObj.email === myEmail && myObj.password === myPassword) {
                message = "Authorized User!!!";
                break;
            }

            else if (myObj.email === myEmail && myObj.password != myPassword) {
                message = "Email is correct but password is not correct!!!";
                break;
            }

            else if (myObj.email != myEmail && myObj.password != myPassword) {
                message = "User does not exist!!!";
            }
        }
        errorBox.style.display = "block";
        errorBox.innerHTML = message;
        setTimeout(function () {
            errorBox.style.display = "none";
        }, 3000);
        document.getElementById("login-email").value = "";
        document.getElementById("login-password").value = "";
        document.getElementById("login-email").focus();
    }
}

// Move to Log In Page...!
const connectLogInPage = () => {
    signUpContainer.style.display = "none";
    logInContainer.style.display = "block";
}

// Move to Sign Up Page...!
const connectSignUpPage = () => {
    logInContainer.style.display = "none";
    signUpContainer.style.display = "block";
}

// Completed successfully...!