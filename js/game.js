var Zombie = require('./zombie.js');
var Brain = require('./brain.js');
var Trap = require('./trap.js');

function Game() {
  this.board = document.querySelectorAll('#board div');
  this.zombie = new Zombie();
  this.brain = new Brain();
  this.trap = new Trap();
  this.trap2 = new Trap();
  this.trap3 = new Trap();
  this.trap4 = new Trap();
  this.trap5 = new Trap();
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
    //this.board[this.index(this.brain.x, this.brain.y)].classList.add('brain');

    if(this.brain.x === this.trap.x && this.brain.y === this.trap.y) {
      this.board[this.index(this.brain.x, this.brain.y)].classList.add('brain');
    } else {
      this.board[this.index(this.brain.x, this.brain.y)].classList.add('brain');
      this.board[this.index(this.trap.x, this.trap.y)].classList.add('trap');
    }

    if(this.brain.x === this.trap2.x && this.brain.y === this.trap2.y) {
      this.board[this.index(this.brain.x, this.brain.y)].classList.add('brain');
    } else {
      this.board[this.index(this.brain.x, this.brain.y)].classList.add('brain');
      this.board[this.index(this.trap2.x, this.trap2.y)].classList.add('trap');
    }

    if(this.brain.x === this.trap3.x && this.brain.y === this.trap3.y) {
      this.board[this.index(this.brain.x, this.brain.y)].classList.add('brain');
    } else {
      this.board[this.index(this.brain.x, this.brain.y)].classList.add('brain');
      this.board[this.index(this.trap3.x, this.trap3.y)].classList.add('trap');
    }

    if(this.brain.x === this.trap4.x && this.brain.y === this.trap4.y) {
      this.board[this.index(this.brain.x, this.brain.y)].classList.add('brain');
    } else {
      this.board[this.index(this.brain.x, this.brain.y)].classList.add('brain');
      this.board[this.index(this.trap4.x, this.trap4.y)].classList.add('trap');
    }

    if(this.brain.x === this.trap5.x && this.brain.y === this.trap5.y) {
      this.board[this.index(this.brain.x, this.brain.y)].classList.add('brain');
    } else {
      this.board[this.index(this.brain.x, this.brain.y)].classList.add('brain');
      this.board[this.index(this.trap5.x, this.trap5.y)].classList.add('trap');
    }


    // this.board[this.index(this.trap2.x, this.trap2.y)].classList.add('trap');
    // this.board[this.index(this.trap3.x, this.trap3.y)].classList.add('trap');
    // this.board[this.index(this.trap4.x, this.trap4.y)].classList.add('trap');
    // this.board[this.index(this.trap5.x, this.trap5.y)].classList.add('trap');

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
      document.querySelectorAll('.trap').forEach(e => e.classList.remove('trap'));
      document.querySelector('.eat').play();
      this.score++
      document.querySelector('#score strong').innerText = this.score;
      this.brain = new Brain();
      this.trap = new Trap();
      this.trap2 = new Trap();
      this.trap3 = new Trap();
      this.trap4 = new Trap();
      this.trap5 = new Trap();
      this.showBrain();
    }
  }


  this.gameOver = function() {
    if ((this.zombie.x < 0 || this.zombie.x > 9 || this.zombie.y < 0 || this.zombie.y > 9) ||
        (this.zombie.x === this.trap.x && this.zombie.y === this.trap.y) ||
        (this.zombie.x === this.trap2.x && this.zombie.y === this.trap2.y) ||
        (this.zombie.x === this.trap3.x && this.zombie.y === this.trap3.y) ||
        (this.zombie.x === this.trap4.x && this.zombie.y === this.trap4.y) ||
        (this.zombie.x === this.trap5.x && this.zombie.y === this.trap5.y)) {
      document.querySelector('.dead').play();
      clearInterval(this.idSetInterval);
      document.querySelector('.brain').classList.remove('brain');
      document.querySelectorAll('.trap').forEach(e => e.classList.remove('trap'));
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
    }, 500);
  }
}

module.exports = Game;
