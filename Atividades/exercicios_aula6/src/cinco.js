function inverte(r) {
  i = 0;
  saida ="";
  while( i < r.length){
    saida = r[i] + saida;
    i = i + 1;
  }
  return saida 
}

r = inverte("Pedro");
console.log("Invertido: ", r);

r = inverte("Mariana");
console.log("Invertido: ", r);