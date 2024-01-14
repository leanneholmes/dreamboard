function downloadURI(uri, name) {
  var link = document.createElement("a");
  link.download = name;
  link.href = uri;
  document.body.appendChild(link);
  link.click();
}

function downloadAsImage() {
  var bgColor = document.getElementById("bg-color-value").value;
  var bgPattern = document.getElementById("bg-pattern").value;
  var dreamboard = document.getElementById("canvas-3");
  dreamboard.style.backgroundColor = bgColor;
  dreamboard.insertAdjacentHTML("afterbegin", getPatternCode(bgPattern));
  html2canvas(dreamboard).then(function (canvas) {
    var myImage = canvas.toDataURL();
    downloadURI(myImage, "dreamboard.png");
  });
  dreamboard.style.backgroundColor = null;
  document.getElementById("temp-canvas").remove();
}
