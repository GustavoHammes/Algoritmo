nros = "8,2,5,3,9"//prompt("Insira números separados por vírgula: ");
nro = nros.split(",");
soma=0;
for(i=0;i < nro.length;i++){
    soma += parseInt(nro[i].trim());
}
console.log("Somatória: ",soma);