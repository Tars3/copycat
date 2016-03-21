console.log("Testing, One, Two")

// create clickable dom elements for 4 buttons

var red = document.getElementById('redBox')
var blue = document.getElementById('blueBox')
var yellow = document.getElementById('yellowBox')
var pink = document.getElementById('pinkBox')

// set click handlers
red.addEventListener("click", press)
blue.addEventListener("click", press)
yellow.addEventListener("click", press)
pink.addEventListener("click", press)

// function for user button press
function press() {
  console.log(this.innerHTML)
}

// function for computer generate random number. Indicate which
// button was "selected".
function randomMove(move) {
  var randomNumber = Math.random();
  if (randomNumber < .25) {
    return red;
  } else if (randomNumber < .50) {
    return blue;
  } else if (randomNumber < .75) {
    return yellow;
  } else {
    return pink;
  }
}

// user clicks corresponding button



// computer adds the first button to the sequence [Array?] and picks
// a new random button for the next round.



