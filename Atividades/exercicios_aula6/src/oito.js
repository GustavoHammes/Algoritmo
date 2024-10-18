function matriz(numeros) {
  i = 0
  soma = 0
  while (i < numeros.length) {
    ii = 0
    while (ii < numeros[i].length) {
      soma = soma + numeros[i][ii]
      ii = ii + 1
    }
    i = i + 1
  }
  return soma
}

numeros = [
  [9, 2, 4],
  [6, 5, 7],
  [2, 1, 3],
]
s = matriz(numeros)
console.log("Somatória:", s)

numeros = [
  [5,8,3,4],
  [9,7,2]
]
s = matriz(numeros)
console.log("Somatória:", s)