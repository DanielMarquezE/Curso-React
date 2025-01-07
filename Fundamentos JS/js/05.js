//Objetos Manipulacion

const producto={
    nombre : "Table",
    precio : 300,
    disponible : true
}

// Object.freeze(producto)
Object.seal(producto)

//Reescribir un valor
producto.nombre="Monitor curvo"

//añadir un valor
producto.imagen="imagen.jpg"

//Eliminar
delete producto.disponible

console.table(producto)