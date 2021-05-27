/* Crie um algoritimo que transforme as notas do sistema numérico para sistema 
de notas em caracteres tipo A B C

* de 90 para cima - A
* entre 80 -89    - B 
* entre 70 - 79   - C
* entre 60 - 69   - D
* menor que 60    - F

*/
const studentyGrade = function(score) {
  let finalScore;
  let scoreA = score >= 90;
  let scoreB = score >= 80 && score <= 89;
  let scoreC = score >= 70 && score <= 79;
  let scoreD = score >= 60 && score <= 69;

  if(scoreA) {
    finalScore = 'A'
  } 
  else if(scoreB)  {
    finalScore = 'B'
  }
  else if(scoreC) {
    finalScore = 'C'
  }
  else if(scoreD) {
    finalScore = 'D'
  }
  else {
    finalScore = 'F'
  }

  return finalScore;
}

console.log(studentyGrade(60));