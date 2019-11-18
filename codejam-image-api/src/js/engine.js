window.onload = function codejam() {
  // Initial
  let isDrawing;
  let color = '#000000';
  let prevColor = '#000000';
  let currentTool = 1;
  let unsplashDrawUrl;
  // Styling
  const bodyStyle = document.getElementById('body');
  const pencilStyle = document.getElementById('pencil');
  const eraseStyle = document.getElementById('erase');
  const bucketStyle = document.getElementById('bucket');
  const pickerToolStyle = document.getElementById('pickerTool');
  const minSizeStyle = document.getElementById('minSize');
  const medSizeStyle = document.getElementById('medSize');
  const maxSizeStyle = document.getElementById('maxSize');
  const actualColorStyle = document.getElementById('actualColor');
  const prevColorStyle = document.getElementById('prev-color');

  // Additional Colors
  const firstColor = '#790604';
  const secondColor = '#00BFFF';
  // Coordinats
  let x;
  let y;

  function cherryLips() {
    prevColor = color;
    color = firstColor;
    actualColorStyle.style.background = color;
    prevColorStyle.style.background = prevColor;
  }

  function coldSiberia() {
    prevColor = color;
    color = secondColor;
    actualColorStyle.style.background = color;
    prevColorStyle.style.background = prevColor;
  }

  const canvas = document.getElementById('canvas');
  const context = canvas.getContext('2d');
  bodyStyle.style.cursor = "url('images/pencil.png'), auto"; // According to the task, pencil is initially selected
  pencilStyle.classList.add('active');
  canvas.width = 512; // Set the canvas width
  canvas.height = 512; // Set the canvas height
  actualColorStyle.style.background = color;

  function startDrawing(e) {
    if (currentTool === 1) context.strokeStyle = color;
    // context.strokeStyle = color;
    if (currentTool === 3) context.strokeStyle = '#ffffff';

    document.getElementById('canvas').style.background = '#ffffff';
    isDrawing = true;
    context.beginPath();
    context.moveTo(e.pageX - canvas.offsetLeft, e.pageY - canvas.offsetTop);
  }

  function stopDrawing() {
    isDrawing = false;
  }

  function draw(e) {
    if (isDrawing === true) {
      x = e.pageX - canvas.offsetLeft;
      y = e.pageY - canvas.offsetTop;
      context.lineTo(x, y);
      context.stroke();
    }
  }

  function fillall() {
    context.fillStyle = color;
    context.fillRect(0, 0, canvas.width, canvas.height);
  }

  function getColor(e) {
    x = e.pageX - canvas.offsetLeft;
    y = e.pageY - canvas.offsetTop;
    context.getImageData(x, y, 1, 1);
    // alert(context.getImageData(x,y,1,1).data) ;
    const temp = `rgba(${context.getImageData(x, y, 1, 1).data})`;
    // document.getElementById("status").style.background =temp;
    actualColorStyle.style.background = temp;
    color = temp;
  }

  function changeTool() { // Chnage active tool
    if ((currentTool === 1) || (currentTool === 3)) { // for Pencil or Erase
      canvas.onmousedown = startDrawing;
      canvas.onmouseup = stopDrawing;
      canvas.onmouseout = stopDrawing;
      canvas.onmousemove = draw;
    }

    if (currentTool === 2) { // for Bucket
      canvas.onmousedown = fillall;
    }

    if (currentTool === 4) { // for Color Picker
      canvas.onmousedown = getColor;
      canvas.onmouseup = null;
      canvas.onmouseout = null;
      canvas.onmousemove = null;
    }
  }
  changeTool();

  function bucket() {
    currentTool = 2;
    changeTool();
    bodyStyle.style.cursor = "url('images/bucket.png'), auto";
    pencilStyle.classList.remove('active');
    eraseStyle.classList.remove('active');
    pickerToolStyle.classList.remove('active');
    bucketStyle.classList.add('active');
  }

  function pencil() {
    currentTool = 1;
    changeTool();
    bodyStyle.style.cursor = "url('images/pencil.png'), auto";
    pencilStyle.classList.add('active');
    eraseStyle.classList.remove('active');
    bucketStyle.classList.remove('active');
    pickerToolStyle.classList.remove('active');
  }

  function eraseIt() {
    currentTool = 3;
    changeTool();
    bodyStyle.style.cursor = "url('images/erase.png'), auto";
    pencilStyle.classList.remove('active');
    eraseStyle.classList.add('active');
    bucketStyle.classList.remove('active');
    pickerToolStyle.classList.remove('active');
  }

  function pickerTool() {
    currentTool = 4;
    changeTool();
    bodyStyle.style.cursor = "url('images/eye-dropper.png'), auto";
    pencilStyle.classList.remove('active');
    eraseStyle.classList.remove('active');
    bucketStyle.classList.remove('active');
    pickerToolStyle.classList.add('active');
  }

  function changeSize(size) { // change size of line
    context.lineWidth = size;
    if (size === 1) {
      minSizeStyle.classList.add('active');
      medSizeStyle.classList.remove('active');
      maxSizeStyle.classList.remove('active');
    }
    if (size === 5) {
      minSizeStyle.classList.remove('active');
      medSizeStyle.classList.add('active');
      maxSizeStyle.classList.remove('active');
    }
    if (size === 15) {
      minSizeStyle.classList.remove('active');
      medSizeStyle.classList.remove('active');
      maxSizeStyle.classList.add('active');
    }
  }

  function changeColor() {
    document.getElementById('color').click();
  }

  function change() {
    prevColor = color;
    prevColorStyle.style.background = prevColor;
    color = this.value;
    actualColorStyle.style.background = color;
  }

  document.getElementById('color').onchange = change;

  function setColorToPrev() {
    color = prevColor;
  }

  function redraw() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    document.getElementById('canvas').style.background = 'rgba( 240, 243, 244 , 0.9)';
  }

  document.addEventListener('keydown', (event) => {
    switch (event.keyCode) {
      case 80:
        pencil();
        break;
      case 66:
        bucket();
        break;
      case 73:
        document.getElementById('color').click();
        break;
      case 67:
        pickerTool();
        break;
      case 69:
        eraseIt();
        break;
      default:
        break;
    }
  });

  async function getLinkToImage() {
    const visitorCity = document.getElementById('city').value;
    const url = `https://api.unsplash.com/photos/random?query=town,${visitorCity}&client_id=9161e949213aef46ad705500b1cddcbb11ed87c9f569ca1c461f5dcaa9869762`;
    await fetch(url)
      .then((res) => res.json())
      .then((data) => {
        unsplashDrawUrl = data.urls.small;
      });
    return unsplashDrawUrl;
  }

  function fitImageOn (myImg) {
    const imageAspectRatio = myImg.width / myImg.height;
    const canvasAspectRatio = canvas.width / canvas.height;
    let renderableHeight;
    let renderableWidth;
    let xStart;
    let yStart;

    if (imageAspectRatio < canvasAspectRatio) {
      renderableHeight = canvas.height;
      renderableWidth = myImg.width * (renderableHeight / myImg.height);
      xStart = (canvas.width - renderableWidth) / 2;
      yStart = 0;
    } else if (imageAspectRatio > canvasAspectRatio) {
      renderableWidth = canvas.width;
      renderableHeight = myImg.height * (renderableWidth / myImg.width);
      xStart = 0;
      yStart = (canvas.height - renderableHeight) / 2;
    } else {
      renderableHeight = canvas.height;
      renderableWidth = canvas.width;
      xStart = 0;
      yStart = 0;
    }
    context.drawImage(myImg, xStart, yStart, renderableWidth, renderableHeight);
  }

  async function importImage() {
    redraw();
    const myImg = new Image();
    myImg.crossOrigin = 'anonymous'; // This enables CORS

    myImg.onload = function importFit() {
      fitImageOn(myImg);
    };

    myImg.src = await getLinkToImage();
  }

  function blackAndWhite() {
    const myImg = new Image();
    myImg.crossOrigin = 'anonymous'; // This enables CORS

    myImg.onload = function toBlackAndWhite() {
      // set the canvas' size
      fitImageOn(myImg);
      // get the image data
      const imgData = context.getImageData(0, 0, canvas.width, canvas.height);
      const d = imgData.data;
      // loop through all pixels
      // each pixel is decomposed in its 4 rgba values
      for (let i = 0; i < d.length; i += 4) {
        // get the medium of the 3 first values ( (r+g+b)/3 )
        const med = (d[i] + d[i + 1] + d[i + 2]) / 3;
        // set it to each value (r = g = b = med)
        d[i + 2] = med;
        d[i + 1] = d[i + 2];
        d[i] = d[i + 1];
        // we don't touch the alpha
      }
      // redraw the new computed image
      context.putImageData(imgData, 0, 0);
    };
    myImg.src = unsplashDrawUrl;
  }

  function load() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    const dataURL = localStorage.getItem('canvas');
    const img = new Image();
    img.src = dataURL;
    img.onload = function loadFromLocalStorage() {
      context.drawImage(img, 0, 0);
    };
  }

  function save() {
    localStorage.setItem('canvas', canvas.toDataURL());
  }

  eraseStyle.onclick = eraseIt;
  pencilStyle.onclick = pencil;
  bucketStyle.onclick = bucket;
  pickerToolStyle.onclick = pickerTool;
  minSizeStyle.onclick = () => changeSize(1);
  medSizeStyle.onclick = () => changeSize(5);
  maxSizeStyle.onclick = () => changeSize(15);
  document.getElementById('changeColor').onclick = changeColor;
  document.getElementById('setColorToPrev').onclick = setColorToPrev;
  document.getElementById('cherryLips').onclick = cherryLips;
  document.getElementById('coldSiberia').onclick = coldSiberia;
  document.getElementById('importImage').onclick = importImage;
  document.getElementById('blackAndWhite').onclick = blackAndWhite;
  document.getElementById('loadLS').onclick = load;
  document.getElementById('saveLS').onclick = save;
  document.getElementById('redraw').onclick = redraw;
};
