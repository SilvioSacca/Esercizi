const student = {
    info: { name: "Bob", age: 25 },
    grades: { math: 95, science: 89 }
  };


const { info: { name: Nome, age: Età }, grades: { math, science } } = student

console.log(Nome);
console.log("Età:", Età);
console.log("Voto di Matematica:", math);
console.log("Voto di Scienze:", science);