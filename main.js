var score = 0;
var bigNumber;

function gameOver() {
  alert("game over\nscore: " + score.toString());
  location.reload();
}

function bigNumberToStr() {
  var bigNumberStr = bigNumber.toString();
  if (bigNumberStr.length == 2) bigNumberStr = "0" + bigNumberStr;
  else if (bigNumberStr.length == 1) bigNumberStr = "00" + bigNumberStr;
  return bigNumberStr;
}

function assignNumber() {
  bigNumber = Math.floor(Math.random() * 999 + 1);
  for (var i = 0; i < buttons.length; i++) {
    if (buttons[i].innerHTML != "&nbsp;") {
      var numInBut = parseInt(buttons[i].innerHTML);
      if (numInBut === bigNumber) {
        assignNumber();
        return;
      }
    }
  }
  document.getElementById("number").innerHTML = bigNumberToStr();
}

function handleButton(num) {
  var buttons = document.getElementById("buttons").querySelectorAll("button");
  for (var i = 0; i < buttons.length; i++) {
    if (i < num) {
      if (buttons[i].innerHTML != "&nbsp;") {
        var numInBut = parseInt(buttons[i].innerHTML);
        if (numInBut < bigNumber) {
          gameOver();
          return;
        }
      }
    } else if (i > num) {
      if (buttons[i].innerHTML != "&nbsp;") {
        var numInBut = parseInt(buttons[i].innerHTML);
        if (numInBut > bigNumber) {
          gameOver();
          return;
        }
      }
    } else {
		if (buttons[i].innerHTML != "&nbsp;") {
			gameOver();
			return;
		}
	}
  }
  buttons[num].innerHTML = bigNumberToStr();
  score++;
  assignNumber();
}
