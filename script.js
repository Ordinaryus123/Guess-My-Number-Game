'use strict';

/*
 console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = 'Correct Number🎉';

document.querySelector('.number').textContent = '??';

document.querySelector('.score').textContent = 200;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;

let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  if (!guess) {
    // document.querySelector('.message').textContent = '⛔ No Number Provided';
    displayMessage('⛔ No Number Provided');
  } else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = 'Correct Number🎉';
    displayMessage('Correct Number🎉');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    console.log(secretNumber);
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      // guess > secretNumber ? 'Too High!' : 'Too Low!';
      displayMessage(guess > secretNumber ? 'Too High!' : 'Too Low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').textContent = 'YOU LOST';
      displayMessage('You Lost!');
      document.querySelector('.score').textContent = 0;
    }
  }
});

// document.querySelector('.again').addEventListener('click', function () {
//   let score = 20;
//   const secretNumber = Math.trunc(Math.random() * 20) + 1;
//   document.querySelector('.message').textContent = 'Start guessing...';
//   document.querySelector('.score').textContent = score;
//   document.querySelector('.number').style.width = '15rem';
//   document.querySelector('.number').textContent = secretNumber;
//   document.querySelector('body').style.backgroundColor = '#222';
//   document.querySelector('.guess').value = '';
//   document.querySelector('.number').textContent = '?';
// });

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  // document.querySelector('.message').textContent = 'Start Guessing';
  displayMessage('Start Guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
