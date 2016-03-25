// console.log("Testing, One, Two")
var speed = 300; //300
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
  lightUpSequence(lightSeq);
}

function lightUpSequence(correctSeq) { //sub for sequence
  correctSeq.forEach(function (box, i) {  //sub for sequence.forEach
    setTimeout(function() {
      console.log(box)
      flashBox(box);
    }, 600 * i) //800
  })
}

// function for user button press
function press(boxEl) {
  playerSeq.push(boxEl.target.id);
  console.log(boxEl);
  flashBox(document.getElementById(boxEl.target.id));

  console.log("inside press");
  console.log("player sequence: ", playerSeq);
  console.log("correct sequence: ", correctSeq);

  if(compareArrays(playerSeq, correctSeq)){
    if(playerSeq.length === correctSeq.length){
      goToNextRound();
    }
  }
  else{
    alert("youre a loser");
    // youLose();
  }
}

// function youLose() {
//   $(".cat").hide();
//   $("#tears").fadeIn('400', 0.5);
// }

//compare the user sequence and the correct sequence
function compareArrays(plSeq, corrSeq) {
    for(var x=0; x< plSeq.length ; x ++){
        if(plSeq[x] !== corrSeq[x]){
          return false;
        }
    }
    return true;
}

function goToNextRound(){
    console.log("goToNextRound");
    if(round === 4){
      alert("WINNING! You Won 4 Rounds!");
      resetGame();
    }

    round++;
    playerSeq = [];
    setTimeout(function() {
       startGame();
     }, 800); //1000
}

function flashBox(box) {
  box.classList.add("lit-up");
  box.classList.add("meow");
  // var audio = document.getElementById("audio");
  // audio.play();
  setTimeout(function() {
    box.classList.remove("lit-up")
    box.classList.remove("meow")
  }, speed);
}

// reset game
function resetGame() {
  console.log('one day this will reset the game.')
  round = 0;
  correctSeq = [];
  playerSeq = [];
  lightSeq = [];
}


// questionable code starts here!
// user clicks corresponding button

// if player clicks are less than sequence length for round computer
// waits.

// function checkWinner(playerMove, computerMove) {
//   if (playerMove===computerMove) {
//     //proceed to next round.
//   }
// }

// computer adds the first button to the sequence [Array?] and picks
// a new random button for the next round.(wrong)

// computer pregenerates random sequence of buttons at beginning of the
// game and then shows those moves as the round count goes up.

// moves = ["red", "yellow", "blue", "pink"]
// elements = {
//   "red": redEl,
//   "blue": blueEl,
//   "yellow": yellowEl,
//   "pink": pinkEl,
// }

// for loop for round numbers
// for (var i = 0; i >= round.length; i++) {
//   computerMove[i];
//   console.log(computerMove)
// }

// has to be called with a sequence
// var seq = [blueEl, pinkEl, yellowEl]
// undefined
// lightUpSequence(seq)

// add to sequence
// function addSeq() {
//   if(correctSeq.length !== round) {
//      startGame();
//   }
// }

// playerSeq
// function playerTurn() {
//   if(playerSeq == correctSeq && playerSeq.length == correctSeq) {
//     turn = turn +1
//   } else if (playerSeq == correctSeq && playerSeq.length != correctSeq) {
//     // wait?
//   } else {
//     alert("You LOSE, You get NOTHING!");
//     round = 0;
//   }
// }

// winRound
// function winRound() {
  // if(playerSeq.join('') == correctSeq.join('')) {
    // if(round ==10) {
      // you win!
    // }
    // playerSeq.length = 0;
    // setTimeout(function() {
      // startGame();
    // }, 1000);
  // } else {
    // alert("you're a loser!");
    // resetGame();
  // }
// }

// function play () {
//   if(!win()) {
//     if(turn % 2 == 0) {
//       computerMove();
//     } else {
//       userMove();
//     }
//   }
//   else {alert("DYSIODFSJSDL:KFJ:OSIDFJ YOU WIN!")}
// }

// turn switch logic (no longer necessary)
// var turn = 0;
// if (turn % 2 == 0) {
//   currentTurn = computerTurn;
// } else {
//   currentTurn = playerTurn;
// }
