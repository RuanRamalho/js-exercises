// 1. Declare uma variável de nome weight
let weight;

// 2. Que tipo de dado é a variável acima?
console.log(typeof weight);

/* 
  3. Declare uma variável e atribua valores para cada um dos dados: 
    * name: String
    * age: Number (integer)
    * stars: Number (float)
    * isSubscribed: Boolean
*/
let name = 'ruan';
let age = 21;
let stars = 10.0;
let isSubscribed = true;

/*
  4. A variável student abaixo é de que tipo de dados?
  R: Object

  4.1 Atribua a ela as mesmas propriedades e valores do exercício 3.
  
  4.2 Mostre no console a seguinte mensagem: 
    <name> de idade <age> pesa <weight> kg.

    Atenção, substitua <name> <age> e <weight> pelos valores de cada propriedade do objeto.
*/
let student = {
  name: 'ruan',
  age: 21,
  weight: 60.0,
  stars: 10.0,
  isSubscribed: true
};

// console.log(`${student.name} de idade ${student.age} pesa ${student.weight}kg`);

/*
  5. Declare uma variável do tipo Array, de nome students e atribua a ela nenhum valor, ou seja, somento o Array vazio
*/
let students = [];

/*
  6. Reatribua valor para a variável acima, colocando dentro dela o objeto student da questão 4. (Não copiar e colar o objeto, mas usar o objeto criado e inserir ele no Array)
*/
students = [
  student
]

/*
  7. Colqque no console o valor da posição zero do Array acima
*/
// console.log(students[0]);

/*
  8. Crie um novo student e coloque na posição 1 do Array students
*/
let student2 = {
  name: 'Dário',
  age: 20,
  weight: 68.0,
  stars: 10.0,
  isSubscribed: true
}

students[1] = student2;

console.log(students[1]);

/*
  9. Sem rodar o código responda qual é a resposta do código abaixo e por que? Após a sua resposta, rode o código e veja se você acertou.

  console.log(a);
  var a = 1;

  R: O resultado será Undefined, por que a variável declarada foi do tipo Var que é uma variável global, acontece que ela foi declarada após o console.log ser escrito, então por baixo dos panos o javascript a declara em cima do console.log e após o console.log ele atribiu o valor a variável. 
*/

console.log(a);
var a = 1;