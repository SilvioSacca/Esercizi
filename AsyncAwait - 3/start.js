function caricaModulo(modulo) {
  return new Promise((resolve, reject) => {
    const tempoCaricamento = Math.random() * 3000;
    setTimeout(() => {
      if (tempoCaricamento < 1500) {
        resolve(`Il modulo ${modulo} è stato caricato.`);
      } else {
        reject(`Errore durante il caricamento del modulo ${modulo}.`);
      }
    }, tempoCaricamento);
  });
}

async function lanciaVeicoloSpaziale() {
  try {
    console.log("Inizio del caricamento dei moduli.");

    const moduloA = await caricaModulo("A");
    console.log(moduloA);

    const moduloB = await caricaModulo("B");
    console.log(moduloB);

    const moduloC = await caricaModulo("C");
    console.log(moduloC);

    console.log("Veicolo spaziale pronto per il lancio!");
  } catch (errore) {
    console.error(
      "Impossibile lanciare il veicolo spaziale a causa di errori nei moduli."
    );
  }
}

lanciaVeicoloSpaziale();
