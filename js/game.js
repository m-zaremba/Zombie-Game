var Zombie = require('./zombie.js');
var Brain = require('./brain.js');

function Game() {
  this.board = document.querySelectorAll('#board div');
  this.zombie = new Zombie();
  this.brain = new Brain();
  this.score = 0;
  this.index = function(x, y) {
    return x + (y * 10);
  }

  this.showZombie = function() {
    this.board[this.index(this.zombie.x, this.zombie.y)].classList.add('zombie');
  }

  this.hideVisibleZombie = function() {
    document.querySelector('.zombie').classList.remove('zombie');
  }

  this.showBrain = function() {
    this.board[this.index(this.brain.x, this.brain.y)].classList.add('brain');
  }


  this.moveZombie = function() {
    this.hideVisibleZombie();
    if (this.zombie.direction === "right") {
      this.zombie.x += 1;
    } else if (this.zombie.direction === "left") {
      this.zombie.x -= 1;
    } else if (this.zombie.direction === "up") {
      this.zombie.y -= 1;
    } else if (this.zombie.direction === "down") {
      this.zombie.y += 1;
    }

    if (this.gameOver()) {
      this.checkBrainCollision();
    } else {
      this.showZombie();
      this.checkBrainCollision();
    }
  }


  this.turnZombie = function(event) {
    switch (event.which) {
      case 37:
        this.zombie.direction = 'left';
        break;
      case 38:
        this.zombie.direction = 'up';
        break;
      case 39:
        this.zombie.direction = 'right';
        break;
      case 40:
        this.zombie.direction = 'down'
        break;
    }
  }


  this.checkBrainCollision = function() {
    if (this.zombie.x === this.brain.x && this.zombie.y === this.brain.y) {
      document.querySelector('.brain').classList.remove('brain');
      document.querySelector('.eat').play();
      this.score++
      document.querySelector('#score strong').innerText = this.score;
      this.brain = new Brain();
      this.showBrain();
    }
  }

  this.gameOver = function() {
    if (this.zombie.x < 0 || this.zombie.x > 9 || this.zombie.y < 0 || this.zombie.y > 9) {
      document.querySelector('.dead').play();
      clearInterval(this.idSetInterval);
      document.querySelector('.brain').classList.remove('brain');
      document.querySelector('#over').classList.remove('invisible');
      document.querySelector('#over').classList.remove('none');
      document.querySelector('p span').innerText = this.score;
      return true;
    }
    return false;
  }
  var self = this;

  document.addEventListener('keydown', function(event) {
    self.turnZombie(event);
  });

  this.startGame = function() {
    this.idSetInterval = setInterval(function() {
      self.moveZombie()
    }, 250);
  }
}

module.exports = Game;