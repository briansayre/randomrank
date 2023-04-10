var score = 0;
var bigNumber

function randomIntFromInterval(min, max) { // min and max included 
	return Math.floor(Math.random() * (max - min + 1) + min)
}

function gameOver() {
	alert("GAME OVER\nScore: " + score.toString());
	location.reload()
}

function assignNumber() {
	bigNumber = randomIntFromInterval(0, 1000);
	document.getElementById("number").innerHTML = bigNumber;
}

function handleButton(num) {
	if (document.getElementById("b"+num.toString()).innerHTML != '') {
		gameOver();
		return
	}
	var buttons = document.getElementById("buttons").querySelectorAll("button");
	for (var i = num+1; i < buttons.length; i++) {
		if (buttons[i].innerHTML != '') {
			var numInBut = parseInt(buttons[i].innerHTML)
			if (numInBut > bigNumber) {
				gameOver();
				return
			}
		}
	}
	for (var i = num-1; i >= 0; i--) {
		if (buttons[i].innerHTML != '') {
			var numInBut = parseInt(buttons[i].innerHTML)
			if (numInBut < bigNumber) {
				gameOver();
				return
			}
		}
	}
	document.getElementById("b"+num.toString()).innerHTML = bigNumber;
	score++;
	assignNumber();
}
