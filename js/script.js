// console.log("Testing, One, Two")
var speed = 650;
var round = 1; // doubles as sequence length!
var turn = 0;
var computerMove = [];
var playerMove = [];
var playerSeq = [];
var correctSeq = [];
var lightSeq = [];

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

// moves = ["red", "yellow", "blue", "pink"]
// elements = {
//   "red": redEl,
//   "blue": blueEl,
//   "yellow": yellowEl,
//   "pink": pinkEl,
// }

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

// start game
function startGame() {
   var boxEl = randomMove();
  correctSeq.push(boxEl.id);
  lightSeq.push(boxEl)
  console.log(boxEl);  // sub from computerMove
  lightUpSequence(lightSeq);
  turn = turn + 1;
}

// for loop for round numbers
for (var i = 0; i >= round.length; i++) {
  computerMove[i];
  console.log(computerMove)
}

function lightUpSequence(correctSeq) { //sub for sequence
  correctSeq.forEach(function (box, i) {  //sub for sequence.forEach
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

// add to sequence
function addSeq() {
  if(correctSeq.length !== round) {
    correctSeq.push(randomMove());
  }
}

// playerSeq
function playerTurn() {
  if(playerSeq == correctSeq && playerSeq.length == correctSeq) {
    turn = turn +1
  } else if (playerSeq == correctSeq && playerSeq.length != correctSeq) {
    // wait?
  } else {
    alert("You LOSE, You get NOTHING!");
    round = 0;
  }
}

// function for user button press
function press(boxEl) {
  playerSeq.push(boxEl.target.id);
  console.log(boxEl);
  flashBox(document.getElementById(boxEl.target.id));
  turn++;
}

if(playerSeq.join == correctSeq.join && playerSeq.length != 0) {
  startGame();
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

// reset game
function resetGame() {
  console.log('one day this will reset the game.')
  round = 0
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
