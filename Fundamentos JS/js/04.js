// const nombre = "table"
// const precio = 300
// const disponible = true

const producto={
    nombre : "Table",
    precio : 300,
    disponible : true
}

console.log(producto)
console.table(producto)

console.log(producto.nombre)


//Destructuring
const {nombre, precio, disponible} = producto

console.log(nombre)
console.log(precio)
console.log(disponible)

const autenticado="Daniel"
const usuriario="Marquez"

const nuevoObjeto= {
    autenticado,
    usuriario
}

console.table(nuevoObjeto)
