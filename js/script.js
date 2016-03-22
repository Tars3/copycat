console.log("Testing, One, Two")

var speed = 650;
var round = 1; // doubles as sequence length!
var turn

// create clickable dom elements for 4 buttons
var redEl    = document.getElementById('redBox')
var blueEl   = document.getElementById('blueBox')
var yellowEl = document.getElementById('yellowBox')
var pinkEl   = document.getElementById('pinkBox')
var startButton = document.getElementById('start')
var resetButton = document.getElementById('reset')

round = 1
//computerMove == array[totalRounds]

var computerMove = []

moves = ["red", "yellow", "blue", "pink"]
elements = {
  "red": redEl,
  "blue": blueEl,
  "yellow": yellowEl,
  "pink": pinkEl,
}

// elementIdMoves = {
//   "redBox": "red",

// }
// elementToLightUp = elements[move];
// getMoveFromElementId()

// set click handlers
redEl.addEventListener("click", press)
blueEl.addEventListener("click", press)
yellowEl.addEventListener("click", press)
pinkEl.addEventListener("click", press)
startButton.addEventListener("click", startGame)
resetButton.addEventListener("click", resetGame)

// start game
function startGame() {
   var boxEl = randomMove();
   lightUpBox(boxEl);
  computerMove.push(boxEl);
  console.log(computerMove)
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

// function for user button press
function press(box) {

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

// if player clicks are less than sequence length for round computer waits.

// function checkWinner(playerMove, computerMove) {
//   if (playerMove===computerMove) {
//     //proceed to next round.
//   }
// }


// computer adds the first button to the sequence [Array?] and picks
// a new random button for the next round.(wrong)

// computer pregenerates random sequence of buttons at beginning of the
// game and then shows those moves as the round count goes up.



