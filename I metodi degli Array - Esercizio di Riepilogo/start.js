const studenti = [
  { nome: "Alice", voto: 95 },
  { nome: "Bob", voto: 88 },
  { nome: "Carol", voto: 76 },
  { nome: "David", voto: 92 },
  { nome: "Eve", voto: 84 },
];

console.log("Nomi degli studenti:");
studenti.forEach((studente) => {
  console.log(studente.nome);
});

const studenteConVotoSuperioreA90 = studenti.find(
  (studente) => studente.voto > 90
);
console.log("Studente con voto superiore a 90:");
console.log(studenteConVotoSuperioreA90);

const mediaVoti =
  studenti.reduce((sum, studente) => sum + studente.voto, 0) / studenti.length;
console.log("\nMedia dei voti degli studenti:", mediaVoti);

const nomiMaiuscoli = studenti.map((studente) => studente.nome.toUpperCase());
console.log("\nNomi degli studenti in maiuscolo:");
console.log(nomiMaiuscoli);

const studentiConVotiSuperioriA85 = studenti.filter(
  (studente) => studente.voto > 85
);
console.log("\nStudenti con voti superiori a 85:");
console.log(studentiConVotiSuperioriA85);
