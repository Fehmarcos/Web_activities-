function passaimg(elment) {
  document.querySelector('#foco img').src = elment.src;
}

passaimg(document.querySelector('#lista img'));
