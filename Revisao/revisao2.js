//Exercício 1
//s = 0;
//for(i = 0; i < 10; i+=2){
// s += i;
//}
//console.log(s); //Impressão: 20

//Exercício 2
//palavra = "Boas festas";
//for(i = 0; i < palavra.length; i++){
// if( i%2 == 1 ){
// console.log(palavra[i]); //Impressão: osfsa
// }
//}

//Exercício 3
//nome = "Maria";
//for(i = nome.length-1; i >= 0; i--){
// console.log(nome[i]); //Impressão: airaM
//}

//Exercício 4
//function exer(a, b) {
//    return a + b;
//}
//r = exer(2, exer(3, 4));
//console.log(r);// Impressão: 9

//Exercício 5
//function exer(entrada) {
//    return entrada[1];
//}
//r = exer("Pedro");
//console.log(r); //Impressão: e

//Exercício 6
//function exer(entrada) {
//    for (i = 0; i < entrada.length; i++) {
//        if (entrada[i] % 2 == 1) {
//            console.log(entrada[i]); //Impressão: 593
//        }
//    }
//}
//exer([5, 2, 9, 4, 8, 3]);

//Exercício 7
//obj = {
//    nome: "Pedro",
//    idade: 22,
//    endereco: {
//        logradouro: "Av. São João, 100",
//        cidade: "São José dos Campos"
//    }
//};
//console.log(obj.idade);

//Exercício 8
//obj = {
//    nome: "Pedro",
//    idade: 22,
//    endereco: {
//        logradouro: "Av. São João, 100",
//        cidade: "São José dos Campos"
//    }
//};
//console.log(obj.endereco.cidade);

//Exercício 9
//const obj = {
//    nome: "Pedro",
//    idade: 22,
//    endereco: {
//        logradouro: "Av. São João, 100",
//        cidade: "São José dos Campos"
//    }
//};
//const {endereco:{cidade}} = obj;
//console.log(cidade);

//Exercício 10
//const obj = [
//    "Pedro",
//    22,
//    "Av. São João, 100",
//    "São José dos Campos"
//];
//const [nome,idade, , ] = obj;
//console.log(nome, idade);

//Exercício 11
//const nome = "Pedro";
//const idade = 22;
//const peso = 70;
//const pessoa = {nome,idade,peso};
//console.log(pessoa)

//Exercício 12
//const nome = "Pedro";
//const idade = 22;
//const peso = 70;
//const pessoa = [nome,idade,peso];
//console.log(pessoa)