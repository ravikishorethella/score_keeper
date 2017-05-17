// target the p1 and p2 buttons
var p1button = document.querySelector("#p1");
var p2button = document.getElementById("p2");

//working with the reset button
var resetButton = document.querySelector("#reset");

//selecting the span tag because the scores are in span tag 
// selecting the first span tag
var p1Display = document.querySelector("#p1Display");

// selecting the second span tag
var p2Display = document.querySelector("#p2Display"); 

//selecting the number input so that we can set the game for 10 points or 20 points or whatever
var numinput = document.querySelector("input[type='number']");

//selecting the p tag because we have our value to which we are playing
var paragraph = document.querySelector("p");

var winningScoreDisplay = document.querySelector("p span");

//we need to keep track of the player scores so we need to create a var to store the player score
// player 1 score
var p1Score = 0;
//player 2 score
var p2Score = 0;

// we need to keep track of the score that we are playing so we need to store the target score in var 
var winningScore = 5;

// keep track of the game over or not
var gameOver = false;

// add the event listener for the p1 button

p1button.addEventListener("click",function(){
    if(!gameOver){
        p1Score++;
        if(p1Score === winningScore){
            p1Display.classList.add("winner");
            gameOver = true;
        }
        p1Display.textContent = p1Score;
    }
   
});

p2button.addEventListener("click",function(){
   if(!gameOver){
        p2Score++;
        if(p2Score === winningScore){
            p2Display.classList.add("winner");
            gameOver = true;
        }
        p2Display.textContent = p2Score;
    }
});

