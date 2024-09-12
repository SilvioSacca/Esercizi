function lanciaDadi() {
    console.log("Lancio dei dadi in corso...");
  
    const dado1 = Math.floor(Math.random() * 6) + 1;
    const dado2 = Math.floor(Math.random() * 6) + 1;
  

    setTimeout(function () {
      console.log(`Lancio dei dadi: Dado 1 = ${dado1}, Dado 2 = ${dado2}`);
    }, 2000);
  }
  
  lanciaDadi();