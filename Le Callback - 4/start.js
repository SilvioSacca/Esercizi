function runCallbacks(callbacks) {
    callbacks.forEach(callback => {
      callback();
    });
  }
  
  function firstCallback() {
    console.log("Prima callback");
  }
  
  function secondCallback() {
    console.log("Seconda callback");
  }
  
  function thirdCallback() {
    console.log("Terza callback");
  }
  
  const callbackArray = [firstCallback, secondCallback, thirdCallback];
  runCallbacks(callbackArray);
  