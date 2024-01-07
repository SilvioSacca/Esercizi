function doubleArray(arr, callback) {
    const newArray = arr.map(callback);
    return newArray;
  }
  
  function doubleValue(num) {
    return num * 2;
  }
  
  const numbers = [1, 2, 3, 4, 5];
  const doubledNumbers = doubleArray(numbers, doubleValue);
  console.log(doubledNumbers);
  