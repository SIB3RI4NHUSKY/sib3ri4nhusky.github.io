function nikki() {
	document.getElementById("timer-digits").innerHTML = "XX:XX";
}

function startWork() {
	clearInterval(interval);
	calculateTime(10, startPause);
	currentTimerTask = startPause;
	document.getElementById('control-panel').style.height = '0px';
}

