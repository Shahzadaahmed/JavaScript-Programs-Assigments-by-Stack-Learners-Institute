// Card Assignment...!

var message = document.getElementById("heading");
var clickedCard = document.getElementById("card-num");
var randomValue = document.getElementById("random-num");

var img1 = document.getElementById("img-tag1");
var img2 = document.getElementById("img-tag2");
var img3 = document.getElementById("img-tag3");
var isPlaying = false;

function cardGame(cardNum) {
    var randomNumber = Math.floor(Math.random() * 3) + 1;

    if (isPlaying === false) {
        if (randomNumber === 1) {
            img1.src = "Images/King.png";
            img2.src = "Images/Queen.png";
            img3.src = "Images/Queen.png";
        }

        else if (randomNumber === 2) {
            img2.src = "Images/King.png";
            img1.src = "Images/Queen.png";
            img3.src = "Images/Queen.png";
        }

        else if (randomNumber === 3) {
            img3.src = "Images/King.png";
            img1.src = "Images/Queen.png";
            img2.src = "Images/Queen.png";
        }

        // Condition if random number and clicked card matched...!
        if (randomNumber === cardNum) {
            message.innerHTML = "Congratulation! You Won the Game! You clicked the King Card.";
            clickedCard.innerHTML = "You clicked the card # " + cardNum + "."
            randomValue.innerHTML = "Random number is " + randomNumber + ".";
        }

        else {
            message.innerHTML = "Sorry! You Lost the Game!";
            clickedCard.innerHTML = "You clicked the card # " + cardNum + "."
            randomValue.innerHTML = "Random number is " + randomNumber + ".";
        }
        // Match Stopped...!
        isPlaying = true;
    }
}

// Reset game function...!
function resetGame() {
    img1.src = "Images/Backside.png";
    img2.src = "Images/Backside.png";
    img3.src = "Images/Backside.png";
    isPlaying = false;
    message.innerHTML = "";
    clickedCard.innerHTML = "";
    randomValue.innerHTML = "";
}

// App completed Successfully...!