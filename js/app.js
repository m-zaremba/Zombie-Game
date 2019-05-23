  var Game = require('./game.js');

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
