'use strict'
// question1
var answer1 = prompt('Hello! Is my name Gabe?').toUpperCase();
if (answer1 === "YES" || answer1 === "Y") {
  alert('That is correct my name is Gabe!');
  console.log('The user answered ' + answer1 + ' to whether my name was Gabe.')
}
else {
  alert('Sorry that is incorrect');
  console.log('The user answered ' + answer1 + ' to whether my name was Gabe.')
}
// question2
var answer2 = prompt('Am I 18 years old?').toUpperCase();
if (answer2 === "NO" || answer2 === "N") {
  alert('That is correct I am not 18. I am actually 19 years old!');
  console.log('the user answered ' + answer2 + ' to whether I am 18 years old.')
}
else {
  alert('Sorry that is incorrect');
  console.log('The user answered ' + answer2 + ' to whether I am 18 years old.')
}
// question3
var answer3 = prompt('Am I from Brier, Washington?').toUpperCase();
if (answer3 === "YES" || answer3 === "Y") {
  alert('That is correct I am from Brier, Washington!');
  console.log('the user answered ' + answer3 + ' to whether I am from Brier, Washington.')
}
else {
  alert('Sorry that is incorrect');
  console.log('The user answered ' + answer3 + ' to whether I am 18 years old.')
}
// question4
var answer2 = prompt('Are my first two hobbies listed, that I love to shoot hoops and play my guitar?').toUpperCase();
if (answer2 === "YES" || answer2 === "Y") {
  alert('That is correct! I do love to shoot hoops, as well as, play my guitar!');
  console.log('The user answered ' + answer2 + ' to whether my first two hobbies were that I love to shoot hoops and play my guitar.')
}
else {
  alert('Sorry that is incorrect');
  console.log('The user answered ' + answer2 + ' to whether my first two hobbies were that I love to shoot hoops and play my guitar.')
}
// question5
var answer2 = prompt('Is my last hobby listed, that I love to go fishing?').toUpperCase();
if (answer2 === "NO" || answer2 === "N") {
  alert('That is correct! I actually prefer hanging out with friends, rather than going fishing');
  console.log('The user answered ' + answer2 + ' to whether my last hobby was that I love to go fishing.')
}
else {
  alert('Sorry that is incorrect');
  console.log('The user answered ' + answer2 + ' to whether my last hobby was that I love to go fishing.')
}
// question6

var numGuesses = 0;
var correctAnswer = 6;
while (numGuesses < 4){
  var userGuess = prompt('Can you guess how to times I have broken my nose? You have 4 guesses. Goodluck!').toUpperCase();
  if (userGuess < 6){
    alert('Sorry your guess is too low. Try a higher number.');
    console.log('The user guessed' + userGuess + 'which is too low')
    numGuesses++;
  } else if (userGuess > 6) {
    alert('Sorry you guess is to high. Try a lower number.')
    console.log('The user guessed' + userGuess + 'which is too high')
    numGuesses++;
  }
  if(userGuess == 6) {
    alert('Correct!');
    console.log('The user guessed' + userGuess + 'which is the correct answer.')
    numGuesses = 4;
    break;
  }
  if (numGuesses === 4) {
    alert('Sorry you are out of tries.')
    console.log('The user guessed ' + userGuess + ' and is now out of guesses.')
  }
}
// question7
var cities = ['SPOKANE', 'BELLINGHAM', 'MADISON']
var numberGuesses = 0;
while (numberGuesses < 6) {
  var answer7 = prompt('What states have I lived in besides Seattle? You have 6 guesses. Goodluck!').toUpperCase();

  for (var i = 0; i < cities.length; i++) {
    if (answer7 === cities[i]) {
      alert('Correct! Way to go!');
      console.log('The user answered ' + answer7 + ' to whether my name was Gabe.')
      numberGuesses = 7;
      break;
    }
}
    if (numberGuesses < 6){
      numberGuesses++;
      alert('Sorry that is incorrect. You have ' + (6 - numberGuesses) + ' guessesd left.');
      console.log('The user answered' + answer7 + 'which was incorrect')
    }

    if (numberGuesses === 0) {
      alert('Sorry you are out of guesses. Better luck next time');
      console.log('The user answered ' + answer7 + ' to whether my name was Gabe.')
    }
}
