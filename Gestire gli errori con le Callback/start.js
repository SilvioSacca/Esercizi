function performOperation(a, b, callback) {
  try {
    const result = a + b;
    callback(undefined, result);
  } catch (error) {
    console.error("Errore:", error);
    callback(error);
  }
}

function displayResult(error, result) {
  if (error) {
    console.log("Si è verificato un errore:", error);
  } else {
    console.log("Il risultato è:", result);
  }
}

performOperation(5, 3, displayResult);
