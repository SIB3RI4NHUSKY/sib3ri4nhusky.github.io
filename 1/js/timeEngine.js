let interval; 
let distance;
let currentTimerTask;

function calculateTime(time, task) {       
    // Set the date we're counting down to
    let countDownDate = new Date().setSeconds(new Date().getSeconds() + time);
    let now = new Date().getTime();
    distance = countDownDate - now;
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);
    document.getElementById("timer-digits").innerHTML = minutes + ":" + seconds;
    console.log(distance)

    // Update the count down every 1 second
    interval = setInterval(function() {        
        console.log(interval)
        console.log(distance)
        // Get today's date and time
        now = new Date().getTime();

        // Find the distance between now and the count down date
        distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds  
        minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display the result in the element with id="demo"
        document.getElementById("timer-digits").innerHTML = minutes + ":" + seconds;

        // If the count down is finished, write some text
        if (distance < 0) {
            clearInterval(interval);
            //document.getElementById("timer-digits").innerHTML = "XX:XX";
            task();
        }
    }, 1000);
}