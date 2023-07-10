document.addEventListener("keypress", (e) => {
 
    if (!document.getElementById("audio" + e.keyCode)) return
    const playAudio = document.getElementById("audio" + e.keyCode);
    playAudio.play();
    playAudio.currentTime = 0
    const teclaCodigo = "tecla " + e.keyCode;
    const elemento = document.getElementsByClassName(teclaCodigo);

    elemento[0].classList.add('active');
    elemento[0].addEventListener('transitionend', (event) => {
        elemento[0].classList.remove('active');
  
    });

})