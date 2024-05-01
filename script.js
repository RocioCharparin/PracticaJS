class Producto {
    constructor(marca, tamaño, tipo, precio) {
        this.marca = marca;
        this.tamaño = tamaño;
        this.tipo = tipo;
        this.precio = precio;
    }
}

const producto1 = new Producto("Coca-Cola", "500 ml", "Cola", 1500);
const producto2 = new Producto("Coca-Cola", "500 ml", "Cola sin azúcar", 1500);
const producto3 = new Producto("Coca-Cola", "1000 ml", "Cola", 2000);
const producto4 = new Producto("Coca-Cola", "1000 ml", "Cola sin azúcar", 2000);
const producto5 = new Producto("Café", "chico", "Latte", 900);
const producto6 = new Producto("Café", "chico", "Capuccino", 900);
const producto7 = new Producto("Café", "grande", "Latte", 1200);
const producto8 = new Producto("Café", "grande", "Capuccino", 1200);
const producto9 = new Producto("Tortitas", "estandar", "raspada", 200);
const producto10 = new Producto("Medialunas", "estandar", "Sacramento", 300);

const productos = [producto1, producto2, producto3, producto4, producto5, producto6, producto7, producto8, producto9,producto10]



let cantidad = 11
do {
    const producto11 = new Producto(prompt("Ingrese la marca"), prompt("Ingrese el tamaño"), prompt("Ingrese el tipo"), 
    parseInt(prompt("Ingrese el precio")))
    productos.push(producto11)
} while(productos.length != cantidad)

console.log(productos)


let respuesta
do {
    respuesta = prompt("Desea ingresar mas productos?")
    if (respuesta == "si") {
        const producto12 = new Producto(prompt("Ingrese la marca"), prompt("Ingrese el tamaño"), prompt("Ingrese el tipo"), 
        parseInt(prompt("Ingrese el precio")))
        productos.push(producto12)
    } else
        continue
} while (respuesta == "si")

console.table(productos)

/*
class Auto {
    constructor(marca, modelo, tipo, puertas){
        this.marca = marca
        this.modelo = modelo 
        this.tipo = tipo
        this.puertas = puertas
    }
}

const auto1 = new Auto("Chevrolet", "S10", "Pick Up", 4)
const auto2 = new Auto("Volkswagen", "Polo", "Sedan", 5)

const autos = [auto1, auto2]


let user 
let cantidad = 3
do {
    const auto3 = new Auto(prompt("Ingrese la marca"), prompt("Ingrese el modelo"), prompt("Ingrese el tipo"), 
    parseInt(prompt("Ingrese la cantidad de puertas")))
    autos.push(auto3)
} while(autos.length != cantidad)



let respuesta
do {
    respuesta = prompt("Desea ingresar mas autos?")
    if (respuesta == "si") {
        const auto4 = new Auto(prompt("Ingrese la marca"), prompt("Ingrese el modelo"), prompt("Ingrese el tipo"), 
        parseInt(prompt("Ingrese la cantidad de puertas")))
        autos.push(auto4)
    } else
        continue
} while (respuesta == "si")

console.table(autos)
*/
