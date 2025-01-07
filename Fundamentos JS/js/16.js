//MAS ARRAY METHODS

const tecnologias= ["JAVA","C#","Phyton","REACT","SQL"]
const numeros = [10,20,30]

let numeroArray


//comprobar si un elemento exite en el array
// const resultado= tecnologias.includes('C#')

//Comprobar si algun elemento cumple la condicion
// const resultado= numeros.some(numero => numero>15)

//Find - Devulve el primer elemento que cumpla la condicion
// const resultado= numeros.find(numero => numero>15)

//Every true o false si todos cumplen la condicion
// const resultado = numeros.every(numero => numero >10)

//Reduce Acumila en el total
// const resultado= numeros.reduce((total, numero) => numero + total, 0 )

//Filter Crea un array en base a un condicion
// const nuevoArreglo= tecnologias.filter(tech => tech !== "SQL")
// const resultado= numeros.filter(numero => numero>15)

//Foreach -- ACCEDER A CADA ELEMENTO DEL ARREGLO
tecnologias.forEach((valor,index) =>console.log(index))

//Te permite crear un nuevo arreglo
const resultado=tecnologias.map(valor => valor)


console.log(resultado)
