!function(t){var i={};function e(r){if(i[r])return i[r].exports;var s=i[r]={i:r,l:!1,exports:{}};return t[r].call(s.exports,s,s.exports,e),s.l=!0,s.exports}e.m=t,e.c=i,e.d=function(t,i,r){e.o(t,i)||Object.defineProperty(t,i,{enumerable:!0,get:r})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,i){if(1&i&&(t=e(t)),8&i)return t;if(4&i&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&i&&"string"!=typeof t)for(var s in t)e.d(r,s,function(i){return t[i]}.bind(null,s));return r},e.n=function(t){var i=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(i,"a",i),i},e.o=function(t,i){return Object.prototype.hasOwnProperty.call(t,i)},e.p="",e(e.s=0)}([function(t,i,e){var r=e(1);document.querySelector(".start button").addEventListener("click",function(){var t=new r;t.showZombie(),t.showBrain(),t.startGame(),document.querySelector(".brains").play(),document.querySelector(".start").classList.add("invisible")}),document.querySelector("#over button").addEventListener("click",function(){document.querySelector("#score strong").innerText=0;var t=new r;t.showZombie(),t.showBrain(),t.startGame(),document.querySelector(".brains").play(),document.querySelector("#over").classList.add("invisible")})},function(t,i,e){var r=e(2),s=e(3),n=e(4);t.exports=function(){this.board=document.querySelectorAll("#board div"),this.zombie=new r,this.brain=new s,this.trap=new n,this.trap2=new n,this.trap3=new n,this.trap4=new n,this.trap5=new n,this.score=0,this.index=function(t,i){return t+10*i},this.showZombie=function(){this.board[this.index(this.zombie.x,this.zombie.y)].classList.add("zombie")},this.hideVisibleZombie=function(){document.querySelector(".zombie").classList.remove("zombie")},this.showBrain=function(){this.board[this.index(this.brain.x,this.brain.y)].classList.add("brain"),this.brain.x===this.trap.x&&this.brain.y===this.trap.y||this.board[this.index(this.trap.x,this.trap.y)].classList.add("trap"),this.brain.x===this.trap2.x&&this.brain.y===this.trap2.y||this.board[this.index(this.trap2.x,this.trap2.y)].classList.add("trap"),this.brain.x===this.trap3.x&&this.brain.y===this.trap3.y||this.board[this.index(this.trap3.x,this.trap3.y)].classList.add("trap"),this.brain.x===this.trap4.x&&this.brain.y===this.trap4.y||this.board[this.index(this.trap4.x,this.trap4.y)].classList.add("trap"),this.brain.x===this.trap5.x&&this.brain.y===this.trap5.y||this.board[this.index(this.trap5.x,this.trap5.y)].classList.add("trap")},this.moveZombie=function(){this.hideVisibleZombie(),"right"===this.zombie.direction?this.zombie.x+=1:"left"===this.zombie.direction?this.zombie.x-=1:"up"===this.zombie.direction?this.zombie.y-=1:"down"===this.zombie.direction&&(this.zombie.y+=1),this.gameOver()||(this.showZombie(),this.checkBrainCollision())},this.turnZombie=function(t){switch(t.which){case 37:this.zombie.direction="left";break;case 38:this.zombie.direction="up";break;case 39:this.zombie.direction="right";break;case 40:this.zombie.direction="down"}},this.checkBrainCollision=function(){this.zombie.x===this.brain.x&&this.zombie.y===this.brain.y&&(document.querySelector(".brain").classList.remove("brain"),document.querySelectorAll(".trap").forEach(t=>t.classList.remove("trap")),document.querySelector(".eat").play(),this.score++,document.querySelector("#score strong").innerText=this.score,this.brain=new s,this.trap=new n,this.trap2=new n,this.trap3=new n,this.trap4=new n,this.trap5=new n,this.showBrain())},this.gameOver=function(){return(this.zombie.x<0||this.zombie.x>9||this.zombie.y<0||this.zombie.y>9||this.zombie.x===this.trap.x&&this.zombie.y===this.trap.y&&(this.brain.x!==this.trap.x||this.brain.y!==this.trap.y)||this.zombie.x===this.trap2.x&&this.zombie.y===this.trap2.y&&(this.brain.x!==this.trap2.x||this.brain.y!==this.trap2.y)||this.zombie.x===this.trap3.x&&this.zombie.y===this.trap3.y&&(this.brain.x!==this.trap3.x||this.brain.y!==this.trap3.y)||this.zombie.x===this.trap4.x&&this.zombie.y===this.trap4.y&&(this.brain.x!==this.trap4.x||this.brain.y!==this.trap4.y)||this.zombie.x===this.trap5.x&&this.zombie.y===this.trap5.y&&(this.brain.x!==this.trap5.x||this.brain.y!==this.trap5.y))&&(document.querySelector(".dead").play(),clearInterval(this.idSetInterval),document.querySelector(".brain").classList.remove("brain"),document.querySelectorAll(".trap").forEach(t=>t.classList.remove("trap")),document.querySelector("#over").classList.remove("invisible"),document.querySelector("#over").classList.remove("none"),document.querySelector("p span").innerText=this.score,!0)};var t=this;document.addEventListener("keydown",function(i){t.turnZombie(i)}),this.startGame=function(){this.idSetInterval=setInterval(function(){t.moveZombie()},350)}}},function(t,i){t.exports=function(){this.x=0,this.y=0,this.direction="right"}},function(t,i){t.exports=function(){this.x=Math.floor(9*Math.random()),this.y=Math.floor(9*Math.random())}},function(t,i){t.exports=function(){this.x=Math.floor(8*Math.random())+1,this.y=Math.floor(8*Math.random())+1}}]);