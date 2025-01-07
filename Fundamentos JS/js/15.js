//Arrow function y Array methods


const tecnologias= ["JAVA","C#","Phyton","REACT","SQL"]

// const nuevoArreglo= tecnologias.map( tech => {
//     if(tech==="JAVA"){
//         return "HTML"
//     }else{
//         return tech
//     }
// })

const nuevoArreglo2= tecnologias.filter(tech => tech !== "SQL")


console.log(nuevoArreglo2)
