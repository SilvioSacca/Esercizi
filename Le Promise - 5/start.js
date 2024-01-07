function promiseBasedFunction(arg1, arg2) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const result = arg1 + arg2;
      if (result % 2 !== 0) {
        resolve(result);
      } else {
        reject(new Error("Il risultato non è dispari!"));
      }
    }, 1000);
  });
}

promiseBasedFunction(3, 5)
  .then((result) => {
    console.log("Risultato:", result);
  })
  .catch((error) => {
    console.error("Errore:", error.message);
  });
