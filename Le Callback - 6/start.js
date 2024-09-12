function fetchDataFromAPI(callback) {
  setTimeout(function () {
    const simulatedData = { name: "John", age: 30 };
    callback(simulatedData);
  }, 2000);
}

function handleData(data) {
  console.log("Dati gestiti:", data);
}

fetchDataFromAPI(handleData);
