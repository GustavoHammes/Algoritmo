pesos = [0.4, 0.2, 0.1, 0.3]
notas = [8.2, 5.0, 10.0, 9.1]
soma = 0
soma1 = 0
multi = 0
i = 0
while (i < pesos.length && i < notas.length){
  soma = pesos[i]
  soma1 = notas[i]
  multi = soma * soma1
  console.log(soma, "*", soma1,"=",multi)
  i = i + 1
}