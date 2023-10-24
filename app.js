'use strict';

let userName = prompt ('What is your name');
userName = userName.toLowerCase ();
//console.log(userName);
alert ('Hello ' + userName + ' welcome to my site! I hope you like questions!');

let colorGuess = prompt ('My favorite color is blue, yes or no?');
colorGuess = colorGuess.toLowerCase();

if (colorGuess === 'yes' || colorGuess === 'y' ){
  //console.log('You got that right!');
  alert ('Thats right ' + userName + '!' + ' That is my favorite color!' );

} else if (colorGuess === 'no' || colorGuess === 'n') {
  //console.log('incorrect');
  alert('Sorry, that is wrong!');
} else {
  alert('Only yes/no or y/n answers only!');
}

let cityGuess = prompt ('Am I from Maryland?');
cityGuess = cityGuess.toLowerCase();

switch (cityGuess) {
case 'yes':
case 'y':
  //console.log('Old bay best bay');
  alert('Good Job!');
  break;
case 'no':
case 'n':
  //console.log('Almost made it');
  alert('Almost made it!');
  break;
}

let petGuess = prompt('Do I love cats?');
petGuess = petGuess.toLowerCase();

//chat gpt was used to establish how to do a switch.
switch (petGuess){
case 'yes':
case 'y':
  //console.log('You got that right!');
  alert('You got that right!');
  break;

case 'no':
case 'n':
  //console.log('That is incorrect');
  alert('That is incorrect');
  break;

}

let dogGuess = prompt('Do I love dogs?');
dogGuess = dogGuess.toLowerCase();

switch (dogGuess){
case 'yes':
case 'y':
  //console.log('You got that right!');
  alert('Sorry, that is wrong!');
  break;

case 'no':
case 'n':
  //console.log('Sorry, that is wrong!');
  alert('Correct!');
  break;
}

let flooring = prompt('Do I hate carpet with a passion?');
flooring = flooring.toLowerCase();

switch (flooring){
case 'yes':
case 'y':
  //console.log('Boy do I!');
  alert('Boy do I!');
  break;

case 'no':
case 'n':
  //console.log('Trust me I do!');
  alert('Trust me I do!');
  break;
}

alert('Thank you for playing '+ userName + ' !' );
