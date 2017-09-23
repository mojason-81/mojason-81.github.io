var collectibles =
  {
    'blueGem': {
      'path':  'images/Gem\ Blue.png',
      'score': 20
    },
    'greenGem': {
      'path':  'images/Gem\ Green.png',
      'score': 30
    },
    'orangeGem': {
      'path':  'images/Gem\ Orange.png',
      'score': 40
    },
    'heart': {
      'path':  'images/Heart.png',
      'score': 50
    },
    'key': {
      'path':  'images/Key.png',
      'score': 60
    },
    'rock': {
      'path':  'images/Rock.png',
      'score': 5
    },
    'star': {
      'path':  'images/Star.png',
      'score': 75
    }
  };

// Generate a random starting point on the Y axis for player and enemies
var randomY = function() {
  var positionY = [73, 156, 239];
  return (positionY[Math.floor(Math.random() * positionY.length)]);
};

// Generate a random X position for the collectibles
var randomX = function () {
  var positionX = [0, 100, 200, 300, 400];
  return (positionX[Math.floor(Math.random() * positionX.length)]);
};

// Generate a random speed for the enemies to move across screen
var randomSpeed = function() {
  var speed = [75, 101, 150, 202];
  return (speed[Math.floor(Math.random() * speed.length)]);
};

// Generate random collectibles to be rendered on game board
var randomCollectible = function() {
  var collectibleKeys = Object.keys(collectibles);
  var randomKey = collectibleKeys[Math.floor(Math.random() * collectibleKeys.length)];
  return [collectibles[randomKey].path, collectibles[randomKey].score];
};

// Define collectible
var Collectible = function() {
  var currentCollectible = this;
  this.y = randomY();
  this.x = randomX();

  /* TODO: ######################################################
  ## randomCollectible() returns an array containing the path to the
  ## sprite image and the score of the collectible.  Calling
  ## setSpriteAndScore() allows you to grab the path and score of a
  ## single collectible object.  In order to abstract this
  ## functionality, I need to figure out how to map those two properties
  ## to the two array items returned by randomCollectible() without
  ## calling randomCollectible() twice.
  ## ########################################################## */

  var setSpriteAndScore = function(currentCollectible, spriteAndScore) {
    currentCollectible.sprite = spriteAndScore[0];
    currentCollectible.score = spriteAndScore[1];
  };
  setSpriteAndScore(currentCollectible, randomCollectible());
};

// Render collectibles on game board
Collectible.prototype.render = function() {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};


// Updates gameData by watching for collisions with collectibles
// TODO: This can probably be refactored into gameData.update()
Collectible.prototype.update = function() {
  if (this.x === player.x && this.y === player.y) {
    this.xPos = this.x;
    this.x = 600;
    gameData.score += this.score;
  }
};

// Enemies our player must avoid
var Enemy = function() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    this.speed = randomSpeed();
    this.x = -100;
    this.y = randomY();
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
  // You should multiply any movement by the dt parameter
  // which will ensure the game runs at the same speed for
  // all computers.
  this.x += this.speed * dt;
  // Check if enemy has fully crossed the board
  if (this.x > 600) {
    // Reset enemy position the left side of board
    this.x = -100;
    this.y = randomY(this);
    this.speed = randomSpeed(this);
  }
  collision();
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

var Player = function() {
  this.lives = 3;
  // Starting X and Y position for player
  this.x = 200;
  this.y = 405;
  this.sprite = 'images/char-boy.png';
  this.score = 0;
};

Player.prototype.update = function() {
  if (this.y === -10) {
    this.reachWater();
    //TODO: Would like to put a delay in before calling .startOver()
    this.startOver();
  }
};

Player.prototype.reachWater = function() {
  allCollectibles.forEach(function(collectible) {
    var setSpriteAndScore = function(currentCollectible, spriteAndScore) {
      currentCollectible.sprite = spriteAndScore[0];
      currentCollectible.score = spriteAndScore[1];
    };
    setSpriteAndScore(collectible, randomCollectible());
    collectible.x = randomX();
    collectible.render();
  });
  gameData.score += 20;
  this.score = gameData.score;
};

Player.prototype.render = function() {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Move the player in response to arrow key presses
// Prevent player from going off the board with
//  checks of the X and Y positions
Player.prototype.handleInput = function(direction) {
  if (direction === 'up' && this.y > -10) {
    this.y -= 83;
  }
  else if (direction === 'down' && this.y < 405) {
    this.y += 83;
  }
  else if (direction === 'left' && this.x > 0) {
    this.x -= 100;
  }
  else if (direction === 'right' && this.x < 400) {
    this.x += 100;
  }
};

Player.prototype.gameover = function() { //TODO: Would like to actually add a GameOver screen
  alert('GAME OVER Fool!');
  gameData.reset();
};

Player.prototype.startOver = function() {
  if (enemyCollision === true) {
    gameData.score = this.score;
    gameData.lives -= 1;
    enemyCollision = false;
    allCollectibles.forEach(function(collectible) {
      collectible.x = collectible.xPos;
      collectible.render();
    });
  }

  if (gameData.lives > 0){
    this.x = 200;
    this.y = 405;
  }
  else {
    this.x = 200;
    this.y = 405;
    this.gameover();
  }
};

// Game data to be displayed on game board
var GameData = function() {
  this.lives = 3;
  this.score = 0;
  this.level = 0;
};

// Render game data on game board
GameData.prototype.render = function() {
  var livesText = 'Lives: ' + gameData.lives;
  var scoreText = 'Score: ' + gameData.score;
  // Dynamically set the width of the text box for game data
  var textBoxWidth = ctx.measureText(scoreText).width + 10;
  ctx.font = '22px sans-serif';
  switch(gameData.lives) {
    case 2:
      ctx.fillStyle = 'yellow';
      break;
    case 1:
      ctx.fillStyle = 'red';
      break;
    default:
      ctx.fillStyle = 'green';
  }
  // Render text on game board
  ctx.fillRect(5, 480, textBoxWidth, 50);
  ctx.textAlign = 'left';
  ctx.fillStyle = 'black';
  ctx.shadowColor = 'white';
  ctx.shadowOffsetX = '10px';
  ctx.shadowOffsetY = '10px';
  ctx.lineWidth = 0.5;
  ctx.fillText(livesText, 10, 500);
  ctx.strokeText(livesText, 10, 500);
  ctx.fillText(scoreText, 10, 525);
  ctx.strokeText(scoreText, 10, 525);
};

GameData.prototype.update = function() {
  // No op
};

// Reset game data on Game Over
GameData.prototype.reset = function() {
  this.lives = 3;
  this.score = 0;
  this.level = 0;
  player.score = this.score;
};

// Instantiate Collectibles
var allCollectibles = [];
for (i = 0; i < 2; i ++) {
  allCollectibles.push(new Collectible());
}

// Instantiate Enemies
var allEnemies = [];
for (i = 0; i < 5; i ++) {
  allEnemies.push(new Enemy());
}

// Instantiate Player
var player = new Player();

// Instantiate Collectibles
var allCollectibles = [];
for (i = 0; i < 2; i ++) {
  allCollectibles.push(new Collectible());
}

// Instantiate new gameData object to hold game data
var gameData = new GameData();

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
  var allowedKeys = {
    37: 'left',
    38: 'up',
    39: 'right',
    40: 'down'
  };
  player.handleInput(allowedKeys[e.keyCode]);
});

// Collision detection
var enemyCollision = false;
var collision = function(){
  allEnemies.forEach(function(enemy){
    if ((enemy.y - player.y < 30) && (enemy.x - player.x < 30)){
      if ((enemy.y - player.y > -30) && (enemy.x - player.x > -30)){
        enemyCollision = true;
        player.startOver();
      }
    }
  });
};
