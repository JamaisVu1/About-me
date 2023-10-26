"use strict";

let userName = prompt("What is your name");
userName = userName.toLowerCase();
//console.log(userName);
alert("Hello " + userName + " welcome to my site! I hope you like questions!");



let rightAnswers = 0;

function favoriteColor(){
let colorGuess = prompt("My favorite color is blue, yes or no?");
colorGuess = colorGuess.toLowerCase();

if (colorGuess === "yes" || colorGuess === "y") {
  //console.log('You got that right!');
  alert("Thats right " + userName + "!" + " That is my favorite color!");
  rightAnswers++;
} else if (colorGuess === "no" || colorGuess === "n") {
  //console.log('incorrect');
  alert("Sorry, that is wrong!");
} else {
  alert("Only yes/no or y/n answers only!");
}
}

favoriteColor();

function homeLocation(){
let cityGuess = prompt("Am I from Maryland?");
cityGuess = cityGuess.toLowerCase();

switch (cityGuess) {
  case "yes":
  case "y":
    //console.log('Old bay best bay');
    alert("Good Job!");
    rightAnswers++;
    break;
  case "no":
  case "n":
    //console.log('Almost made it');
    alert("Almost made it!");
    break;
}
}

homeLocation();

function petCat(){
let petGuess = prompt("Do I love cats?");
petGuess = petGuess.toLowerCase();

//chat gpt was used to establish how to do a switch.
switch (petGuess) {
  case "yes":
  case "y":
    //console.log('You got that right!');
    alert("You got that right!");
    rightAnswers++;
    break;

  case "no":
  case "n":
    //console.log('That is incorrect');
    alert("That is incorrect");
    break;
}
}

petCat();

function petDog(){
let dogGuess = prompt("Do I love dogs?");
dogGuess = dogGuess.toLowerCase();

switch (dogGuess) {
  case "yes":
  case "y":
    //console.log('You got that right!');
    alert("Sorry, that is wrong!");
    break;

  case "no":
  case "n":
    //console.log('Sorry, that is wrong!');
    alert("Correct!");
    rightAnswers++;
    break;
}
}

petDog();

function carpetGuess(){
let flooring = prompt("Do I hate carpet with a passion?");
flooring = flooring.toLowerCase();

switch (flooring) {
  case "yes":
  case "y":
    //console.log('Boy do I!');
    alert("Boy do I!");
    rightAnswers++;
    break;

  case "no":
  case "n": //console.log('Trust me I do!');
    alert("Trust me I do!");
    break;
}
}

carpetGuess();

function numberGuess(){
for (let i = 0; i < 4; i++) {
  let random = prompt("Whats my favorite number between 0 and 10?");
  random = Number(random);
  if (random === 7) {
    alert("Thats right!");
    rightAnswers++;
    break;
  } else if (random > 7) {
    alert("Too high!");
  } else {
    alert("Too low!");
  } if (i === 3) {
    alert("The right answer was 7!")
  }
}
}

numberGuess();

function colorGuess(){
let colors = ["blue", "purple", "green"];
let guesses = 6;
let correct = false;

while (!correct && guesses > 0) {
  let loopGuess = prompt("What is one of my favorite colors?");
  loopGuess = loopGuess.toLowerCase();
  if (colors.includes(loopGuess)) {
    alert("Thats right!");
    correct = true;
    rightAnswers++;
    break;
  } else {
    console.log(loopGuess);
    alert("Sorry, that isnt right!");
    guesses--;
  }
  if (guesses === 0) {
    alert("The correct answers were blue, purple, or green!")
  } alert("Thank you for playing " + userName + " ! You got " + rightAnswers + " correct!");
}
}

colorGuess();

alert("Thank you for playing " + userName + " ! You got " + rightAnswers + " correct!");


