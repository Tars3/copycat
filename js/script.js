console.log("Testing, One, Two")

var speed = 650;
var round = 1; // doubles as sequence length!

// create clickable dom elements for 4 buttons

var redEl    = document.getElementById('redBox')
var blueEl   = document.getElementById('blueBox')
var yellowEl = document.getElementById('yellowBox')
var pinkEl   = document.getElementById('pinkBox')
var startButton = document.getElementById('start')
var resetButton = document.getElementById('reset')

// set click handlers
redEl.addEventListener("click", press)
blueEl.addEventListener("click", press)
yellowEl.addEventListener("click", press)
pinkEl.addEventListener("click", press)
startButton.addEventListener("click", startGame)
resetButton.addEventListener("click", resetGame)

// function for user button press
function press() {
  console.log(this.innerHTML)
}

// start game
function startGame() {
  var boxEl = randomMove();
  lightUpBox(boxEl);
}

function lightUpBox(box) {
  console.log("lighting up box");
  box.classList.add("lit-up");
  box.classList.add("meow");

  setTimeout(function() {
    dimBox(box);
  }, speed);
}

function dimBox(box) {
  box.classList.remove("lit-up")
  box.classList.remove("meow")
}

// reset game
function resetGame() {
  console.log('one day this will reset the game.')
}

// function for computer generate random number. Indicate which
// button was "selected".
function randomMove(move) {
  var randomNumber = Math.random();
  if (randomNumber < .25) {
    return redEl; //indicate selection
  } else if (randomNumber < .50) {
    return blueEl;
  } else if (randomNumber < .75) {
    return yellowEl;
  } else {
    return pinkEl;
  }
}

// questionable code starts here!
// user clicks corresponding button
function getPlayerMove(move) {
  var move = move || getInput();
  return move;
}

function checkWinner(playerMove, computerMove) {
  if (playerMove===computerMove) {
    //proceed to next round.
  }
}


// computer adds the first button to the sequence [Array?] and picks
// a new random button for the next round.



