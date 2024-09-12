//While
senha = "abc"
entrada = ""
nro = 0
while (senha != entrada) {
  entrada = prompt("Insira a senha: ")
  if (senha == entrada) {
    console.log("Acesso liberado")
  } else {
    if (nro < 2 && entrada != senha.length) {
      console.log("Acesso negado")
      nro = nro + 1
    } else {
      console.log("Você excedeu as tentativas!!!")
      console.log("Dica de quantos digitos: ", senha.length)
      console.log("Dica do segundo digito: ",senha[1])
      break
    }
  }
}
