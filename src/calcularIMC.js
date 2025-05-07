// ## Calculadora de IMC (1 ponto)

// **Enunciado:**

// Crie a função calcularIMC que receba peso e altura e retorne:

// - `"Abaixo do peso"` se < 18.5
// - `"Peso normal"` se entre 18.5 e 24.9
// - `"Sobrepeso"` se entre 25 e 29.9
// - `"Obesidade"` se ≥ 30
// - `"Erro"` para dados inválidos

// **Fórmula IMC**: peso / (altura * altura)

function calcularIMC(peso, altura) {
  peso = Number(prompt("Qual a sua altura? "))
  altura = Number(prompt("Qual o seu peso? "))

  imc = peso / altura

  if(imc < 18.5){
    console.log("Abaixo do peso")
  }
  else if((imc > 25) || (imc < 29.9)){
    console.log("Sobrepeso")
  }
  else if(peso > 29.9){
    console.log("Obesidade")
  }
  else{
    console.log("Erro")
  }
}

// NÃO REMOVA O CÓDIGO ABAIXO
module.exports = { calcularIMC };