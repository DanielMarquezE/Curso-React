//Unir dos objetos

const producto={
    nombre : "Table",
    precio : 300,
    disponible : true
}

const cliente= {
    nombre: "Daniel",
    premium : true
}

// const nuevoObjeto = Object.assign(producto,cliente) NO

// const nuevoObjeto = {...producto,...cliente}

const nuevoObjeto = {
    producto:{...producto},
    cliente:{...cliente}
}

console.log(nuevoObjeto)

console.log(cliente)

console.log(producto)