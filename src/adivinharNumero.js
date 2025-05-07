// ## Jogo de Adivinhação (1 ponto)

// **Enunciado:**

// Implemente a função adivinharNumero, que receba um número máximo e um palpite. A função deve gerar um número aleatório entre 0 e `max`. A função deve:

// - Retornar `"Acertou!"` se o número gerado for igual ao `palpite`;
// - Retornar `"Errou! Tente novamente!"` se o palpite estiver incorreto.



function adivinharNumero(max, palpite) {
  let  max = 10
  let  numeroAleatorio = max -3
  let  palpite = prompt("Diga um número de 0 a 10: ")
    if (palpite == numeroAleatorio){
      console.log("Acertou!")
    }
    else{
      console.log("Errou! Tente novamente!")
    }

}


// NÃO REMOVA O CÓDIGO ABAIXO
module.exports = { adivinharNumero };