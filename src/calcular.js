// ### Calculadora Simples (2 pontos)

// **Enunciado:**

// Crie uma função chamada Calcular, que recebe dois números e uma operação matemática (`+`, `-`, `*`, `/`). A função deve:

// - Retornar `"Erro: parâmetros inválidos"` se `a` ou `b` não forem números.
// - Retornar `"Erro: divisão por zero"` se tentar dividir por zero;
// - Retornar `"Erro: operação inválida"` se for passado um operador desconhecido;
// - Executar a operação correta e retornar o resultado;

function calcular(num1, num2, operador) {
  let num1 = int(prompt("Insira o primeiro número: "))
  let num2 = int(prompt("Insira o segundo número: "))
  let operacao = promt("Qual operação deseja realizar? + | - | * | /")

  if (operacao == "+"){
    let resultado = num1 + num2
    console.log("O resultado é:")
    console.log(resultado)
  }
  else if(operacao == "-"){
    let resultado = num1 - num2
    console.log("O resultado é:")
    console.log(resultado)
  }
  else if(operacao == "*"){
    let resultado = num1 * num2
    console.log("O resultado é:")
    console.log(resultado)
  }
  else if(operacao == "/"){
    let resultado = num1 / num2
    console.log("O resultado é:")
    console.log(resultado)
  }
  else{
    console.log("Erro: operação inválida")
  }

  if (num1 != int){
    console.log("Erro: parâmetros inválidos")
  }
  else if(num1 / num2 <= 0){
    console.log("Erro: divisão por zero")
  }
}


//NÃO REMOVA O CÓDIGO ABAIXO
module.exports = { calcular };