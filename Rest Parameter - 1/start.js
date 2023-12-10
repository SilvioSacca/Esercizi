function sum (...topics) {
    return topics.reduce((a, b) => a + b, 0);
}


const result = sum(1, 2, 3, 4, 5);
console.log("La somma è:", result);