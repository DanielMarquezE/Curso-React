//Funciones  -  Fuction declaration


// function sumar(numero, numero2 = 0) {
//    return numero+numero2
// }

// const resu=sumar(20,40)


// function arreglo(numero1,numero2){
//     return [numero1+numero2,"Daniel"]
// }

function Objecto(numero1,numero2){

    return {
        resultado:numero1+numero2,
        mensaje: "Daniel HOLA"
    }

}

const {resultado,mensaje}=Objecto(40,50)
console.log(resultado)
console.log(mensaje)




