const segundero = document.querySelector('.segundos')
const minutero = document.querySelector('.minutos')
const horasMano = document.querySelector('.horas')

function setDate() {
    const horaActual = new Date();
    const segundos = horaActual.getSeconds();
    let gradosSegundos = 0;
    if (segundos > 0) {
        gradosSegundos = segundos * 6;
    }
    segundero.style.transform = `rotate(${gradosSegundos + 90}deg)`
    console.log(segundos)
    console.log(gradosSegundos+90)

    const minutos = horaActual.getMinutes();
    const gradosMinutos = minutos * 6;
    minutero.style.transform = `rotate(${gradosMinutos + 90}deg)`

    const horas = horaActual.getHours();
    const gradosHoras = horas * 30;
    horasMano.style.transform = `rotate(${gradosHoras + 90}deg)`


}

setInterval(() => {
    setDate()
}, 1000); 