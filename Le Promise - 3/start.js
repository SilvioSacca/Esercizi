function delayPromise() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Promise solved after 2 seconds");
    }, 2000);
  });
}

delayPromise()
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error("An error occurred:", error);
  });
