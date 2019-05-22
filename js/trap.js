function Trap(){
  this.x = Math.floor(Math.random() * (8 - 1 + 1)) + 1;
  this.y = Math.floor(Math.random() * (8 - 1 + 1)) + 1;
}

module.exports = Trap;
