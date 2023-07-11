const segundero = document.querySelector(".segundos");
const minutero = document.querySelector(".minutos");
const horasMano = document.querySelector(".horas");

function setDate() {
  const horaActual = new Date();
  const segundos = horaActual.getSeconds();
  let gradosSegundos = (segundos / 60) * 360 + 90;
  if (segundos == 0) {
    segundero.style.transition = "all 0.0s";
    segundero.style.transform = `rotate(90deg)`;
  }
  segundero.style.transform = `rotate(${gradosSegundos}deg)`;

  const minutos = horaActual.getMinutes();
  if (minutos == 0) {
    minutero.style.transition = "all 0.0s";
    minutero.style.transform = `rotate(90deg)`;
  }
  const gradosMinutos = minutos * 6;
  minutero.style.transform = `rotate(${gradosMinutos + 90}deg)`;

  const horas = horaActual.getHours();
  if (horas == 0) {
    horasMano.style.transition = "all 0.0s";
    horasMano.style.transform = `rotate(90deg)`;
  }
  const gradosHoras = horas * 30;
  horasMano.style.transform = `rotate(${gradosHoras + 90}deg)`;
}

setInterval(() => {
  setDate();
}, 1000);
