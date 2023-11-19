const masitas=[]

function agregarNuevoProducto(){
    let nombreProducto = prompt("ingrese el nombre del nuevo producto")
    let precioProducto = prompt("ingrese el precio del nuevo producto")
    
    let nuevoProducto = {

        nombre: nombreProducto,
        precio:parseInt(precioProducto) 
    }

    masitas.push(nuevoProducto)
    console.table(masitas)
}