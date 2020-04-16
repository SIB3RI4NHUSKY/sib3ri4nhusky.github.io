function startPause() {
	clearInterval(interval);
	currentTimerTask = startWork;
	calculateTime(20, startWork)
}