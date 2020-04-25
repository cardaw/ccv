document.getElementById('imageSelector').onchange = function(e) {
  const img = new Image();
  img.onload = draw;
  img.onerror = failed;
  img.src = URL.createObjectURL(this.files[0]);
};
function draw() {
  const canvas = document.getElementById('canvas1');
  const ctx = canvas.getContext('2d');
  // TODO: Resize any incoming image to fit in the canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(this, (canvas.width-this.width)/2, (canvas.height-this.height)/2);
}
function failed() {
  console.error("The provided file couldn't be loaded as an Image media");
}