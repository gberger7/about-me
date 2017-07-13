'use strict';

// function that asks each question
function question(i) {

  var ans = prompt(questionArray[i]).toUpperCase();

  if(ans === correctAnswer[i]) {
    alert(c[i]);
    console.log('got it right')
  } else {
    alert(d[i]);
    console.log('got it wrong');
  }

}

// variables to input into each iteration of the function
var questionArray = ['Hello! Is my name Gabe?', 'Am I 18 years old?', 'Am I from Brier, Washington?', 'Are my first two hobbies listed, that I love to shoot hoops and play my guitar?', 'Is my last hobby listed, that I love to go fishing?'];
var correctAnswer = ['YES', 'NO', 'YES', 'Yes', 'NO'];
var c = ['That is correct my name is Gabe!', 'That is correct I am not 18. I am actually 19 years old!', 'That is correct I am from Brier, Washington!', 'That is correct! I do love to shoot hoops, as well as, play my guitar!', 'That is correct! I actually prefer hanging out with friends, rather than going fishing'];
var d = ['Sorry that is incorrect', 'Sorry that is incorrect', 'Sorry that is incorrect', 'Sorry that is incorrect', 'Sorry that is incorrect']

// calling function for each question
question(0);
question(1);
question(2);
question(3);
question(4);

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
var states = ['Tennesee', 'Washington']
var numberGuesses = 0;
while (numberGuesses < 6) {

  var answer7 = prompt('What states have I lived in? You have 6 guesses. Goodluck!').toUpperCase();
  for (var i = 0; i < states.length; i++) {
    if (userGuess === states.toUpperCase())
    {
      alert('Correct! Pretty much every piece of clothing in my whole wardrobe is red!');
      console.log('The user answered ' + answer7 + ' to whether my name was Gabe.')
      break;
    }

    if (answer1 === states[i]) {
      alert('Sorry that is incorrect. You have 5 guessesd left');
      console.log('The user answered' + answer7 + 'which was incorrect')
    }

    else {
      alert('Sorry that is incorrect. You have 3 guesses left.');
      console.log('The user answered ' + answer7 + ' to whether my name was Gabe.')
    }
  }
}
