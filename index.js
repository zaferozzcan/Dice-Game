
// ---------------- Handling Imagage1--------------
var randomNumber1  = Math.floor(Math.random()*6)+1;// this line gives us a random number between1 and 6
var randomDiceImage1 = "images/dice" + randomNumber1 + ".png" // this line gives us between "images/dice1.png"-"images/dice6.png"
var image1 = document.querySelectorAll("img")[0]
image1.setAttribute("src", randomDiceImage1)

// ---------------- Handling Imagage2--------------
var randomNumber2  = Math.floor(Math.random()*6)+1;// this line gives us a random number between1 and 6
var randomDiceImage2 = "images/dice" + randomNumber2 + ".png" // this line gives us between "images/dice1.png"-"images/dice6.png"
var image1 = document.querySelectorAll("img")[1]
image1.setAttribute("src", randomDiceImage2)
