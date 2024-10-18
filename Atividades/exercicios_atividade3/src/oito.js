function somatorio(nro) {
    let soma = 0;
    for (i = 0; i <= 2; i++) {
        soma+=nro;
    }
    return soma;
}
let r = somatorio(5);
console.log("Somatório:", r);