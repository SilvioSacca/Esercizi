function fetchDataFromAPI() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let success = true;

      if (success) {
        const simulatedData = { name: "John", age: 30 };
        resolve(simulatedData);
      } else {
        const errorMessage = "Errore nel recupero dei dati dall'API";
        reject(errorMessage);
      }
    }, 2000);
  });
}

fetchDataFromAPI()
  .then((data) => {
    console.log("Dati ricevuti:", data);
  })
  .catch((error) => {
    console.error("Errore:", error);
  });
