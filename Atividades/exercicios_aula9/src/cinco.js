const disciplina = {
    nome: "Algoritmos",
    carga: 80,
    notas: [
        {
            peso: 0.25,
            nota: 8.2
        },
        {
            peso: 0.35,
            nota: 7.5
        },
        {
            peso: 0.4,
            nota: 9
        }
    ]
};

const nota = 0;
for( i = 0; i < disciplina.notas.length; i++ ){
    nota += disciplina.notas[i].nota * disciplina.notas[i].peso
}
console.log("Nota final:", nota);

//const sum = disciplina.notas.reduce((acc, item) => acc + item.peso * item.nota, 0);
//console.log("Nota final:", sum);