//escopo global

function showCar(){
    //escopo local
    let car = 'BMW'
    console.log(car)
}

//escopo global

showCar()
console.log(car)