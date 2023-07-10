document.addEventListener("keypress", (e) => {
  if (!document.getElementById("audio " + e.key)) return;
  usarTecla(e.key);
});

function usarTecla(tecla) {
  console.log(tecla);
  const playAudio = document.getElementById("audio " + tecla);
  playAudio.play();
  playAudio.currentTime = 0;
  const teclaCodigo = "tecla " + tecla;
  const elemento = document.getElementsByClassName(teclaCodigo);

  elemento[0].classList.add("active");
  elemento[0].addEventListener("transitionend", (event) => {
    elemento[0].classList.remove("active");
  });
}
