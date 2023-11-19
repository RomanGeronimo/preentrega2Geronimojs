class Compra {
    constructor(carritoDeCompras){
        this.carrito = carritoDeCompras
    }
    obtenerSubtotal(){
        if (this.carrito.lenght > 0){
            return this.carrito.reduce((acumulador, masitas)=> acumulador + masitas.precio, 0)
        }
    }
}