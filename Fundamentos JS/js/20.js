// Ternarios
const autenticado = true

autenticado ? 
    console.log("usuario autenticado") 
    : console.log("Usuario no autenticado")


//Doble ternario

const saldo= 600
const pagar= 800
const tarjeta= false

saldo > pagar ? 
    console.log("puedes pagar") : 
    tarjeta ? 
        console.log("Puedes pagar con tarjeta") :
        console.log("No puedes pagar")