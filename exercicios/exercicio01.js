const name = 'Vinicius';
const lastName = 'Lazzeri';
const age = 24;
const weight = 83;
const height = 1.70;
let imc = weight/(height^2);
let health = ''
let birthYear = 2022 - age;
   
//console.log(name + ' ' + lastName + ' tem ' + age + ' anos, nascido em ' + birthYear + '. Pesa ' + weight + ' kgs e possui ' + height +'m de altura. Seu IMC foi calculado em: ' + imc.toFixed(1))

console.log(`${name} ${lastName} nasceu no ano de ${birthYear} e tem ${age} anos!`)
console.log(`Pesa ${weight} kgs e possui ${height.toFixed(2)}m de altura!`)
console.log(`Seu IMC (Índice de massa corporal) é de: ${imc.toFixed(1)}!`)
