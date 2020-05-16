// Bidding App...!

document.getElementById("diceImage").style.display = "none";
let diceText = document.getElementById("diceValue");
let bidNumText = document.getElementById("get-bidnum");
let userAmountText = document.getElementById("get-amount");

let initialCoins = 1000;
let amountArea = document.getElementById("coins");
let gameStatus = document.getElementById("message");
amountArea.innerHTML = initialCoins;

// Function for playing game...!
const playGame = () => {
    let userBid = parseInt(prompt("Please select a a number for bid between 1 to 6."));

    if (userBid >= 1 && userBid <= 6) {
        let userAmount = parseInt(prompt("Please enter an amount between 50 to 500."));

        if (userAmount >= 50 && userAmount <= 500) {
            bidNumText.innerHTML = "Your Bid Number is : " + userBid;
            userAmountText.innerHTML = "Your Bid Amount is : " + userAmount;
            document.getElementById("diceImage").style.display = "block";

            // Calling ranndomDice function...!
            let generatedNumber = randomDice();
            // Calling bidMatch function...!
            let isBidMatched = bidMatch(userBid, generatedNumber);
            // Calling finalFunc...!
            finalFunc(userAmount, isBidMatched);
        }

        else {
            alert("Amount which is less than 50 or greater than 500 will not be acceptable!!!");
        }
    }

    else {
        alert("Bid value which is less than 1 or greater than 6 will not be acceptable!!!");
    }
}

// Function for generating random number...!
const randomDice = () => {
    let randomNumber = Math.floor(Math.random() * 6) + 1;
    let generatedDice = "Images/Dice" + randomNumber + ".PNG";
    diceText.innerHTML = "Random dice is :";
    document.getElementById("diceImage").setAttribute("src", generatedDice);
    return randomNumber;
}

// Function if user bid or randomDice matched...!
const bidMatch = (userBidVal, generatedNumVal) => {
    let flag = false;

    if (userBidVal === generatedNumVal) {
        flag = true;
    }

    return flag;
}

// Function of game status...!
const finalFunc = (userAmountVal, conditionVal) => {
    if (conditionVal) {
        initialCoins = initialCoins + userAmountVal;
        amountArea.innerHTML = initialCoins;
        gameStatus.innerHTML = "Congralutations! You WON the bid. " + userAmountVal + " added in your account!";
    }

    else {
        initialCoins = initialCoins - userAmountVal;
        amountArea.innerHTML = initialCoins;
        gameStatus.innerHTML = "Sorry! You LOSS the bid. " + userAmountVal + " deducted from your account!";
    }
}

// App Completed Successfully...!