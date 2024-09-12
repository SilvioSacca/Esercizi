let tempoRimanente = 10;
let intervalId = setInterval(contoAllaRovescia, 1000);

function contoAllaRovescia() {
  if (tempoRimanente > 0) {
    console.log(
      "Conto alla rovescia in corso... Tempo rimanente: " + tempoRimanente
    );
    tempoRimanente--;
  } else {
    console.log("Il conto alla rovescia è terminato!");
    clearInterval(intervalId);
  }
}
  