let varA = 'A'; // B
let varB = 'B'; // C
let varC = 'C'; // A

//Meu jeito de ter feito:
//const a = varA;
//const b = varB;
//const c = varC;
//varA = b;
//varB = c;
//varC = a;

//Modo ideal:
[varA, varB, varC] = [varB, varC, varA];

console.log(varA, varB, varC);