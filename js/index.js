var player1 = (Math.floor(Math.random() * 6)) + 1;
var pic1 = "./images/dice" + player1 + ".png";
document.querySelector(".player1 .dice").setAttribute("src", pic1);

var player2 = (Math.floor(Math.random() * 6)) + 1;
var pic2 = "./images/dice" + player2 + ".png";
document.querySelector(".player2 .dice").setAttribute("src", pic2);

if (player1 > player2) {
    document.querySelector("h1").innerHTML = "🤛Player1 Wins";
} else if (player1 == player2) {
    document.querySelector("h1").innerHTML = "👊ITS A TIE👊";
} else {
    document.querySelector("h1").innerHTML = "Player2 Wins🤜";
}