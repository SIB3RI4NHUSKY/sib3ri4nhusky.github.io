let isPanelOpen = true;

function switchPanelDialog() {
	if (isPanelOpen) {
		document.getElementById('control-panel').style.height = '0px';
		isPanelOpen = !isPanelOpen;
		console.log("dialog's panel is open")
	}
	else if (!isPanelOpen) {
		document.getElementById('control-panel').style.height = '75px';
		isPanelOpen = !isPanelOpen;
		console.log("dialog's panel is closed")
	}
}