//Selectores DOM

// const heading = document.querySelector('.heading')

// // console.log(heading)
// // console.log(heading.textContent)
// // console.log(heading.tagName)
// // console.log(heading.className)


// const enlaces = document.querySelectorAll('.navegacion a')

// console.log(enlaces)


//Opcional cahining (?)

const alumno = {
    nombre: "Juan",
    clase: "programacion",
    aprobado: true,
    examenes:{
        examen1:90
    }
}

console.log(alumno.examenes?.examen1)

console.log("Despues de alumno")

//Nullish cooleciong operator (??)

const pagina=null ?? 1