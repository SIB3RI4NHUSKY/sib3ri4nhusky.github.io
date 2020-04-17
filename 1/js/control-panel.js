let isTurnOn = true;



function abortWorkTimer() {
	document.getElementById('control-panel').style.height = '75px';
	clearInterval(interval);
	document.getElementById("timer-digits").innerHTML = '25:00';
}

function pauseContinue() {
	if (isTurnOn) {
		console.log(distance)
		clearInterval(interval);
		document.getElementById("pause-continue").style.color = '#5DADE2';
		document.getElementById("timer-digits").style.color = '#5DADE2';
		isTurnOn = !isTurnOn;
	}
	else if (!isTurnOn) {
		document.getElementById("pause-continue").style.color = '#d5dbdb';
		document.getElementById("timer-digits").style.color = '#d5dbdb';
		calculateTime(Math.floor((distance % (1000 * 60)) / 1000), currentTimerTask);
		isTurnOn = !isTurnOn;
	}
}