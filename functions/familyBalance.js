/* ### SISTEMA DE GASTOS FAMILIAR

  Crie um objeto que possuirá 2 propriedades, ambas do tipo array: 
    * receitas: []
    * despesas: []
  
  Agora, crie uma função que irá calcular o total de receitas e despesas e irá 
  mostrar uma mensagem se a família está com saldo positivo ou negativo,
  seguindo do valor do saldo 
*/

let family = {
  incomes: [2500, 5000, 350.25, 420.47],
  expanses: [340.70, 400.25, 200, 300]
}

const sum = function(array) {
  let total = 0;

  for(let value of array) {
    total += value;
  }
  
  return total;
}

const familyBalance = function(incomesTotal, expansesTotal, finalTotal) {
  incomesTotal = sum(family.incomes);
  expansesTotal = sum(family.expanses);
  finalTotal = incomesTotal - expansesTotal;

  if(finalTotal >= 0) {
    console.log('Saldo positivo');
  } else {
    console.log('Saldo negativo')
  }

  return finalTotal.toFixed(2);
}

console.log(familyBalance())