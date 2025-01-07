//Objetos Manipulacion

const producto={
    nombre : "Table",
    precio : 300,
    disponible : true
}

const cliente= {
    nombre: "Daniel",
    premium : true
}


const {nombre, precio, disponible} = producto

const {nombre : nombreCliente, premium} = cliente

console.log(nombre,precio,disponible)
console.log(nombreCliente,premium)