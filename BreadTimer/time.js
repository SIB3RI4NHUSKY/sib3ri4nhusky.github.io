let isRefreshed = false;
let theInterval;
let manuallyInterval;

let manuallySetHours = undefined;
let manuallySetMinutes = undefined;

function refresh() {
	isRefreshed = !isRefreshed;
	if (isRefreshed) {
		document.getElementById('refresh').style.transform = "rotate(360deg)";	
	}
	if (!isRefreshed) {
		document.getElementById('refresh').style.transform = "rotate(0deg)";
	}
	document.getElementById("time").style.width = "0px"; 
	document.getElementById("time").style.paddingLeft = "0px";
	document.getElementById("time").style.paddingRight = "0px";
	document.getElementById("manually-set-time").style.height = "0px";
	clearInterval(theInterval);
	clearInterval(manuallyInterval);
	calculateTime()
	setTimeout(function () {
		document.getElementById("time").style.width = "240px";
		document.getElementById("time").style.paddingLeft = "10px";
		document.getElementById("time").style.paddingRight = "10px";
	}, 1000)
	if (initialMoreMode) {
		initialMore();
	}
}

function calculateTime() {
    var tomorrow = new Date();
    tomorrow.setDate(new Date().getDate() + 1);
    tomorrow.setHours(6);
    tomorrow.setMinutes(15);
    tomorrow.setMilliseconds(0);

    // Update the count down every 1 second
    theInterval = setInterval(function() {

        // Get today's date and time
        var now = new Date().getTime();

        // Find the distance between now and the count down date
        var distance = tomorrow - now;

        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display the result in the element with id="demo"
        document.getElementById("time").innerHTML = hours + ":" +
            minutes + ":" + seconds;

        // If the count down is finished, write some text
        if (distance < 0) {
            clearInterval(theInterval);
            document.getElementById("time").innerHTML = "EXPIRED";
        }
    }, 1000);
}

calculateTime();

function setTime() {
	document.getElementById('refresh').style.height = "0px";
	document.getElementById('recipes-btn').style.height = "0px";
	document.getElementById('setTime-btn').style.height = "0px";
}

function closeAddTime() {	
	document.getElementById('refresh').style.height = "226px";
	document.getElementById('recipes-btn').style.height = "61px";
	document.getElementById('setTime-btn').style.height = "61px";	
}

function saveAddTime() {
	document.getElementById('refresh').style.height = "226px";
	document.getElementById('recipes-btn').style.height = "61px";
	document.getElementById('setTime-btn').style.height = "61px";	
	manuallySetHours = document.getElementById("settingHours").options[document.getElementById("settingHours").selectedIndex].text;
	manuallySetMinutes = document.getElementById("settingMinutes").options[document.getElementById("settingMinutes").selectedIndex].text;
	
	clearInterval(manuallyInterval);
	var tomorrow = new Date();
    tomorrow.setDate(new Date().getDate() + 1);
    tomorrow.setHours(manuallySetHours);
    tomorrow.setMinutes(manuallySetMinutes);
    tomorrow.setMilliseconds(0);

    // Update the count down every 1 second
    manuallyInterval = setInterval(function() {

        // Get today's date and time
        var now = new Date().getTime();

        // Find the distance between now and the count down date
        var distance = tomorrow - now;

        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display the result in the element with id="demo"
        document.getElementById("manually-set-time").innerHTML = hours + ":" +
            minutes + ":" + seconds;

        // If the count down is finished, write some text
        if (distance < 0) {
            clearInterval(manuallyInterval);
            document.getElementById("time").innerHTML = "EXPIRED";
        }
    }, 1000);

    setTimeout(function () {
    	document.getElementById("manually-set-time").style.height = "69px";	
    }, 1000)    
}

