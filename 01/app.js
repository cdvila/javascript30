document.addEventListener("keypress", (e)=>{
    const tecla = document.getElementById("teclaPresionada");
    tecla.innerHTML = e.key + " codigo: " + e.keyCode;
    if(!document.getElementById("audio"+e.keyCode)) return
        const playAudio = document.getElementById("audio"+e.keyCode);
        playAudio.play();
        playAudio.currentTime = 0
        const teclaCodigo = "tecla " + e.keyCode;
        const elemento = document.getElementsByClassName(teclaCodigo)     ;
        console.log(elemento[0]);
        elemento[0].classList.add('active');


    console.log(e)
})