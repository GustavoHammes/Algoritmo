numeros = [8, 3, 4, 7, 5, 6, 4]
nro = 0
somatoria = 0
while (nro < numeros.length) {
  somatoria = numeros[nro]
  if (somatoria%2 == 1)
    console.log("Impar",somatoria)
    nro = nro + 1
}
