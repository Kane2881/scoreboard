let homeScoreEL = document.getElementById("home-score");
let guestScoreEL = document.getElementById("guest-score");

let homeScore = 0;
let guestScore = 0;

function homePlusOne() {
  homeScore += 1;
  homeScoreEL.textContent = homeScore;
}

function homePlusTwo() {
  homeScore += 2;
  homeScoreEL.textContent = homeScore;
}

function homePlusThree() {
  homeScore += 3;
  homeScoreEL.textContent = homeScore;
}

function guestPlusOne() {
  guestScore += 1;
  guestScoreEL.textContent = guestScore;
}
function guestPlusTwo() {
  guestScore += 2;
  guestScoreEL.textContent = guestScore;
}
function guestPlusThree() {
  guestScore += 3;
  guestScoreEL.textContent = guestScore;
}

function resetScore() {
  homeScore = 0;
  homeScoreEL.textContent = homeScore;
  guestScore = 0;
  guestScoreEL.textContent = guestScore;
}
