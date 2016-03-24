// console.log("Testing, One, Two")
var speed = 650;
var round = 1; // doubles as sequence length!

// create clickable dom elements for 4 buttons
var redEl    = document.getElementById('red')
var blueEl   = document.getElementById('blue')
var yellowEl = document.getElementById('yellow')
var pinkEl   = document.getElementById('pink')
var startButton = document.getElementById('start')
var resetButton = document.getElementById('reset')

// click handlers
redEl.addEventListener("click", press)
blueEl.addEventListener("click", press)
yellowEl.addEventListener("click", press)
pinkEl.addEventListener("click", press)
startButton.addEventListener("click", startGame)
resetButton.addEventListener("click", resetGame)

//computerMove == array[totalRounds]
var computerMove = []
var playerMove = []
var correctSeq = []

// moves = ["red", "yellow", "blue", "pink"]
// elements = {
//   "red": redEl,
//   "blue": blueEl,
//   "yellow": yellowEl,
//   "pink": pinkEl,
// }

// start game
function startGame() {
   var boxEl = randomMove();
   lightUpSequence(boxEl);
  computerMove.push(boxEl);
  console.log(computerMove);
}

// for loop for round numbers
for (var i = 0; i >= round.length; i++) {
  computerMove[i];
  console.log(computerMove)
}

function lightUpSequence(sequence) {
  sequence.forEach(function (box, i) {
    setTimeout(function() {
      console.log(box)
      flashBox(box);
    }, speed * i)
  })
}
// has to be called with a sequence
// var seq = [blueEl, pinkEl, yellowEl]
// undefined
// lightUpSequence(seq)

// make sequence
function makeSeq() {
  if(correctSeq.length !== round) {
    correctSeq.push(randomMove());
  }
}

function play () {
  if(!win()) {
    if(turn % 2 == 0) {
      computerMove();
    } else {
      userMove();
    }
  }
  else {alert("DYSIODFSJSDL:KFJ:OSIDFJ YOU WIN!")}
}

function checkLose() {

}

function winRound() {

}

function winGame() {

}

// turn switch logic (no longer necessary)
// var turn = 0;
// if (turn % 2 == 0) {
//   currentTurn = computerTurn;
// } else {
//   currentTurn = playerTurn;
// }

function flashBox(box) {
  box.classList.add("lit-up");
  box.classList.add("meow");
  setTimeout(function() {
    box.classList.remove("lit-up")
    box.classList.remove("meow")
  }, speed);
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



