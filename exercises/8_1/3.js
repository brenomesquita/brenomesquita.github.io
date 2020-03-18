let contador = 0
document.getElementById("clique").addEventListener("click", () => {
  contador++;
  document.getElementsByTagName("h1")[0].innerHTML =`voce clicou ${contador}`;
})
