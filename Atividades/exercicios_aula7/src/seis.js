nros = "8,2,5,3,9"//prompt("Insira números separados por vírgula: ");
nro = nros.split(",");

for(i=0;i < nros.length;i++){
    if( parseInt(nro[i])%2 == 0){
        console.log(nro[i])    
    }
}