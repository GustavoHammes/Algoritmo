entradas = [9, 2, 4, 5, 8]
saidas = [3, 5, 2, 7, 4]
i = 0
soma = 0
while (i < entradas.length && i < saidas.length) {
  if(entradas[i] > saidas[i]){
    console.log(i,":",entradas[i])  
  } else{
    console.log(i, ":", saidas[i])
  }
  i = i + 1
}

