//AND, OR , NOT
//AND = &&

// CASO DE AND(&&)
/*
let email = 'vini@gmail.com'
let password = '1234'

if(email === 'vini@gmail.com' && password === '1234'){
    console.log('Acesso autorizado')
} else {
    console.log('Acesso negado')
}
*/

//CASO DE OR
//OR = ||

/*
let age = 18
let sex = 'M'

if (age >= 18||sex ==='M'){
    console.log('entrada liberada')
} else {
    console.log('entrada proibida')
}
*/

//CASO DE NOT
//NOT = !variável

/*
let sex = 'M'
if (!sex ==='F'){
    console.log('entrada liberada')
} else {
    console.log('entrada barrada')
}
*/

//Exemplo 2 NOT

let isActive = false
isActive = !isActive

console.log(isActive)