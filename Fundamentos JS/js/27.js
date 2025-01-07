const formulario= document.querySelector("#formulario")
formulario.addEventListener('submit', e => {
    e.preventDefault()

    const nombre= document.querySelector(".nombre").value
    const password= document.querySelector(".password").value

    const alertaprevia= document.querySelector(".alerta")
        if(alertaprevia)alertaprevia.remove()
    

    const alerta= document.createElement('DIV')
    alerta.classList.add('alerta')

    if(nombre === '' || password === ''){
        alerta.textContent='Todos Los Campos Son Obligatorios'
        alerta.classList.add('error')
    }else{
        alerta.textContent='Todo Esta Correcto'
        alerta.classList.add('exito')
    }   

    formulario.appendChild(alerta)

})