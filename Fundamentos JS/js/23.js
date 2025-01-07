//Manupular Elementos HTML con java script

const heading = document.querySelector('.heading')



heading.textContent="Nuevo heading"

console.log(heading.textContent)

const inputNombre = document.querySelector("#nombre")

inputNombre.value= "Un valor por defaul"


const enlances = document.querySelectorAll(".navegacion a")

enlances.forEach( enlace => enlace.textContent = "Nuevo Enlace" )
