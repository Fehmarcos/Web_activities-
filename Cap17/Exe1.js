function zebra(el) {
  let impar = true;
  el.querySelectorAll('tr').forEach((linha) => {
    if (impar) {
      linha.classList.add('LInpar');
    } else {
      linha.classList.add('LPar');
    }

    impar = !impar;
  });
}

function zebratab() {
  document.querySelectorAll('.zebra').forEach(zebra);
}

zebratab();
