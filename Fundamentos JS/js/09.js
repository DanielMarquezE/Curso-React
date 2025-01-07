// Operaciones en arreglos

const tecnologias= ["JAVA","C#","Phyton","REACT","SQL"]


//añadir elementos al array

//ESTO NO ES RECOMENTADO 
// tecnologias.push("JAVASCRITP")
// tecnologias.unshift("SQL")

//RECOMENDADO
// const nuevoArreglo= [...tecnologias,"SQL"]


//Eliminar elementos del array

// tecnologias.pop() //Elimina del final
// tecnologias.shift() //Elimina del inicio

// tecnologias.splice(1,2) //Elimina de una posicion en especifica

// const nuevoArreglo= tecnologias.filter( function(tech){
//     return tech !== "SQL"
// })

//Remplazar del array
//NO
// tecnologias[0]="ORACLE"

// const nuevoArreglo= tecnologias.map(function(tech){
//     if(tech==="JAVA"){
//         return "HTML"
//     }else{
//         return tech
//     }
// })


console.table(tecnologias)
console.table(nuevoArreglo)