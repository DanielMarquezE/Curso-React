//Enventos del DOM - SUBMIT

const formulario= document.querySelector("#formulario")
formulario.addEventListener('submit', e => {
    e.preventDefault()

    const nombre= document.querySelector(".nombre").value
    const password= document.querySelector(".password").value

    if(nombre === '' || password === ''){
        console.log("TODOS LOS CAMPOS SON OBLIGATORIOS")
    }else{
        console.log("TODO BIEN VALIDANDO")
    }

})