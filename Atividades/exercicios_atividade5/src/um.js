function converter(teste) {
    let nro = [];
    let texto = teste.split(",");
    for (i = 0; i < texto.length; i++) {
        nro[i] = parseInt(texto[i]);
    }
    return nro;
}

const teste = "30,60,50,10,20,40";
const resposta = converter(teste);
console.log(resposta);
