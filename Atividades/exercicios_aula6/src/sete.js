function inverter(numeros) {
  nro = numeros.length - 1
  while (nro >= 0) {
    console.log(nro, ":", numeros[nro])
    nro = nro - 1
  }
}

console.log("\nLista:")
numeros = [8, 3, 4, 7, 5]
inverter(numeros)

console.log("\nLista:")
numeros = [5, 4, 3]
inverter(numeros)
