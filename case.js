var trafficLight = ''
var message = ''

//if(trafficLight == 'verde'){
//    message = 'pode passar'
//} else {
//    if(trafficLight == 'amarelo'){
//    message = 'cuidado!'
//    } else {
//        if(trafficLight == 'vermelho'){
//            message = 'pare imediatamente!'
//        } else{
//            message = 'valor inválido'
//        }
//    }
//}

switch(trafficLight){
    case 'verde':
        message = 'pode passar'
    break
    case 'amarelo':
        message = 'cuidado!'
    break
    case 'vermelho':
        message = 'pare!'
    break
    default:
        message = 'valor inválido'
}

console.log(message)