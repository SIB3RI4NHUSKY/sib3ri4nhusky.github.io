// Initial 
let canvas;            // Initial 
let context;           // Initial 
let isDrawing;         // Initial 
let color = "#000000"; // Initial 
let prevColor = "#000000";         // Initial 
let currentTool = 1;   // Initial 

// Styling
let bodyStyle = document.getElementById("body");       // Indicate active tool
let pencilStyle = document.getElementById("pencil");   // Indicate active tool
let eraseStyle = document.getElementById("erase");     // Indicate active tool
let bucketStyle = document.getElementById("bucket");   // Indicate active tool
let pickerToolStyle = document.getElementById("pickerTool");   // Indicate active tool
let minSizeStyle = document.getElementById("minSize"); // Indicate active tool
let medSizeStyle = document.getElementById("medSize"); // Indicate active tool
let maxSizeStyle = document.getElementById("maxSize"); // Indicate active tool
let actualColorStyle = document.getElementById("actualColor"); // Indicate active tool
let prevColorStyle = document.getElementById("prev-color"); // Indicate active tool


// Additional Colors
let firstColor = "#790604";
let secondColor = "#00BFFF";

function cherrylips() {
	prevColor = color;
	alert(prevColor)
	color = firstColor;
	actualColorStyle.style.background = color;
	prevColorStyle.style.background = prevColor;
}

function coldsiberia() {
	prevColor = color;
	alert(prevColor)
	color = secondColor;
	actualColorStyle.style.background = color;
	prevColorStyle.style.background = prevColor;
}

// Coordinats
let x;
let y;


canvas = document.getElementById("canvas");
context = canvas.getContext("2d"); 
bodyStyle.style.cursor = "url('images/pencil.png'), auto"; // According to the task, pencil is initially selected
pencilStyle.classList.add("active") 
	canvas.width = 512; // Set the canvas width
	canvas.height = 512; // Set the canvas height
	changeTool();
	actualColorStyle.style.background = color;

      function changeTool () { // Chnage active tool

      	if ((currentTool == 1) || (currentTool == 3) ) {   // for Pencil or Erase
      		canvas.onmousedown = startDrawing;
      		canvas.onmouseup = stopDrawing;
      		canvas.onmouseout = stopDrawing;
      		canvas.onmousemove = draw;
      		
      	}

      	if (currentTool == 2) {                            // for Bucket
      		canvas.onmousedown = fillall;
      	}  

      	if (currentTool == 4) {                           // for Color Picker
      		canvas.onmousedown = getColor;
      		canvas.onmouseup = null;
      		canvas.onmouseout = null;
      		canvas.onmousemove = null;
      	}      	
      }

      function bucket() { 
      	currentTool = 2;
      	changeTool();
      	bodyStyle.style.cursor = "url('images/bucket.png'), auto";
      	pencilStyle.classList.remove("active")
      	eraseStyle.classList.remove("active")
      	pickerToolStyle.classList.remove("active")
      	bucketStyle.classList.add("active")      	
      }

      function pencil() {
      	currentTool = 1;
      	changeTool();
      	bodyStyle.style.cursor = "url('images/pencil.png'), auto";
      	pencilStyle.classList.add("active")
      	eraseStyle.classList.remove("active")
      	bucketStyle.classList.remove("active") 
      	pickerToolStyle.classList.remove("active")       	     	
      }

      function eraseIt() {
      	currentTool = 3;
      	changeTool();
      	bodyStyle.style.cursor = "url('images/erase.png'), auto";
      	pencilStyle.classList.remove("active")
      	eraseStyle.classList.add("active")
      	bucketStyle.classList.remove("active")
      	pickerToolStyle.classList.remove("active")
      }

      function pickerTool() {
      	currentTool = 4;
      	changeTool(); 
      	bodyStyle.style.cursor = "url('images/eye-dropper.png'), auto";
      	pencilStyle.classList.remove("active")
      	eraseStyle.classList.remove("active")
      	bucketStyle.classList.remove("active")
      	pickerToolStyle.classList.add("active")     	
      }

      function changeSize(size) {  // change size of line
      	context.lineWidth = size;
      	if (size == 1) {
      		minSizeStyle.classList.add("active")
      		medSizeStyle.classList.remove("active")
      		maxSizeStyle.classList.remove("active")
      	}
      	if (size == 5) {
      		minSizeStyle.classList.remove("active")
      		medSizeStyle.classList.add("active")
      		maxSizeStyle.classList.remove("active")
      	}
      	if (size == 15) {
      		minSizeStyle.classList.remove("active")
      		medSizeStyle.classList.remove("active")
      		maxSizeStyle.classList.add("active")
      	}
      }

      function changeColor() {
      	document.getElementById("color").click();
      }

      function change(e){  	
      	prevColor = color;
      	alert(prevColor);
      	prevColorStyle.style.background = prevColor;
      	color = this.value;
      	actualColorStyle.style.background = color;      	
      }
      document.getElementById("color").onchange = change;

      function fillall(e) {
      	context.fillStyle = color;
      	context.fillRect(0, 0, canvas.width, canvas.height);
      }

      function setColorToPrev() {
      	color = prevColor;
      }

      function startDrawing(e) {
      	if (currentTool == 1) context.strokeStyle = color;
      	//context.strokeStyle = color;
      	if (currentTool == 3) context.strokeStyle = "#ffffff";

      	document.getElementById("canvas").style.background = "#ffffff";
      	isDrawing = true;	 
      	context.beginPath();	
      	context.moveTo(e.pageX - canvas.offsetLeft, e.pageY - canvas.offsetTop);
      }

      function draw(e) {
      	if (isDrawing == true)
      	{	  	
      		x = e.pageX - canvas.offsetLeft;
      		y = e.pageY - canvas.offsetTop;		
      		context.lineTo(x, y);
      		context.stroke();
      	}
      }

      function stopDrawing() {	
      	isDrawing = false;	
      }

      function redraw() {
      	context.clearRect(0, 0, canvas.width, canvas.height);
      	document.getElementById("canvas").style.background = "rgba( 240, 243, 244 , 0.9)";
      }

      document.addEventListener("keydown", event => {
      	if (event.keyCode === 80) {
      		pencil();
      	} 
      	else if (event.keyCode === 66) {
      		bucket();
      	}
      	else if (event.keyCode === 73) {
      		document.getElementById("color").click();
      	}
      	else if (event.keyCode === 67) {
      		pickerTool();
      	}
      	else if (event.keyCode === 69) {
      		eraseIt();
      	}
      });


      function getColor(e) {	
      	x = e.pageX - canvas.offsetLeft;
      	y = e.pageY - canvas.offsetTop;
      	context.getImageData(x,y,1,1);
	    //alert(context.getImageData(x,y,1,1).data) ;
	    let temp = "rgba("+context.getImageData(x,y,1,1).data+")"
	    //document.getElementById("status").style.background =temp; 
	    actualColorStyle.style.background = temp;
	    color = temp;  

	}

	function load() {
		context.clearRect(0, 0, canvas.width, canvas.height);
		let dataURL = localStorage.getItem(canvas);
		let img = new Image;
		img.src = dataURL;
		img.onload = function () {
			context.drawImage(img, 0, 0);
		};
	}

	function save() {
		localStorage.setItem(canvas, canvas.toDataURL());
	}
