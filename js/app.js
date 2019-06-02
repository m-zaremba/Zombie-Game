  var Game = require('./game.js');

  var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  if (isMobile) {
    document.querySelector('.mobile-controller').classList.toggle('invisible');
  }

  document.querySelector('.start button').addEventListener('click', function() {
    var newGame = new Game();
    newGame.showZombie();
    newGame.showBrain();
    newGame.startGame();
    document.querySelector('.brains').play();
    document.querySelector('.start').classList.add('invisible');
  });

  document.querySelector('#over button').addEventListener('click', function() {
    document.querySelector('#score strong').innerText = 0;
    var newGame = new Game();
    newGame.showZombie();
    newGame.showBrain();
    newGame.startGame();
    document.querySelector('.brains').play();
    document.querySelector('#over').classList.add('invisible');
  });
