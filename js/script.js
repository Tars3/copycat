console.log("Testing, One, Two")

// create clickable dom elements for 4 buttons

var red = document.getElementById('redBox')
var blue = document.getElementById('blueBox')
var yellow = document.getElementById('yellowBox')
var pink = document.getElementById('pinkBox')
var start = document.getElementById('start')
var reset = document.getElementById('reset')

// set click handlers
red.addEventListener("click", press)
blue.addEventListener("click", press)
yellow.addEventListener("click", press)
pink.addEventListener("click", press)
start.addEventListener("click", startGame)
reset.addEventListener("click", resetGame)

// function for user button press
function press() {
  console.log(this.innerHTML)
}

// start game
function startGame() {
  lightUpBox();
}

function lightUpBox() {
  console.log("lighting up box");
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
    return red; //indicate selection
  } else if (randomNumber < .50) {
    return blue;
  } else if (randomNumber < .75) {
    return yellow;
  } else {
    return pink;
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



