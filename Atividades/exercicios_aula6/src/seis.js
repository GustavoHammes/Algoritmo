function somatoria(numeros) {
  nro = 0
  soma = 0
  while (nro < numeros.length) {
    soma = soma + numeros[nro]
    nro = nro + 1
  }
  return soma
}

numeros = [8, 3, 4, 7, 5]
s = somatoria(numeros)
console.log("Somatória: ", s)

numeros = [5, 4, 3]
s = somatoria(numeros)
console.log("Somatória: ", s)
