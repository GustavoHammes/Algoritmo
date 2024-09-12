matriz = [
  [9, 2, 4],
  [6, 5, 7],
  [2, 1, 3],
]
i = 0
soma = 0
while(i < matriz.length){
  ii = 0
  while(ii < matriz[i].length){
    soma = soma + matriz[i][ii]
    ii = ii + 1
  }
  i = i + 1
}
console.log("Somatória:", soma)