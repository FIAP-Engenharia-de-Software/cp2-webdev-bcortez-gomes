// Classificador de Nota (1 ponto)

// **Enunciado:**

// Implemente a função classificarNota, que receba uma nota e:
// - Retorna `"Aprovado"` se nota ≥ 6;
// - Retorna `"Reprovado"` se nota < 6;
// - Retorna `"Nota inválida"` se for um valor fora de 0 a 10 ou não numérico.

function classificarNota(nota) {
  nota = prompt("Qual a sua nota? ")
  if (nota >= 6){
    console.log("Aprovado")
  } 
  else if (nota < 6) {
    console.log("Reprovado")
  } 
  else if (nota !== Number){
    console.log("Nota inválida")
  } 
  else if (nota < 0){
    console.log("Nota inválida")
  } 
  else if (nota > 10){
    console.log("Nota inválida")
  }
}

//NÃO REMOVA O CÓDIGO ABAIXO
module.exports = { classificarNota };