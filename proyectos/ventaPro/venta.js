
// Variales de la venta
const priceProduct = document.getElementById('priceProduct');
const quantityProduct = document.getElementById('quantityProduct');
const nameProduct = document.getElementById('nameProduct');
const addSale = document.getElementById('addSale');
const venta = document.getElementById('venta')

//Variables de Agregacion de Productos
let priceProduct2 = document.getElementById('priceProductA');
let quantityProduct2 = document.getElementById('quantityProductA');
let nameProduct2 = document.getElementById('nameProductA');
const addProduct = document.getElementById('addProduct');

//Mostrar Productos
let tablaProduct1 = document.getElementById('tablaProduct');
let rowss1= document.createElement('tr');

let searchProduct = document.getElementById('searchProduct');

//let deleteVent = document.getElementById('eliminarVenta');

//Array de alamacenamiento
let productos = [];
let totales = [];

//Array con objetos productos
productos = [
    {
        nombreProducto: 'Queso',
        presioC: 23,
        presioV: 25,
        cantidadP: 10   
    },
    {
        nombreProducto: 'Tomate',
        presioC: 26,
        presioV: 28,
        cantidadP: 15
    },
    {
        nombreProducto: 'Arroz',
        presioC: 17,
        presioV: 19,
        cantidadP: 20
    },
    {
        nombreProducto: 'Chile',
        presioC: 14,
        presioV: 16,
        cantidadP: 30
    },
    {
        nombreProducto: 'Cebolla',
        presioC: 22,
        presioV: 24,
        cantidadP: 10
    }
];
//Imprimir array en la tabla
productos.forEach(function(element){
    let tablaProduct1 = document.getElementById('tablaProduct');
    let rowss1= document.createElement('tr');
    rowss1.innerHTML = `<td>${element.nombreProducto}</td><td>${element.presioC}</td><td>${element.presioV}</td><td>${element.cantidadP}</td><td><button class="btn btn-danger">E</button></td>`;
    tablaProduct1.appendChild(rowss1)
});
//Funcion de calsular pago
function totalApagar(){

    let presio = parseInt(priceProduct.value);
    let cantidad = parseInt(quantityProduct.value);
    let totalP = presio * cantidad;
    totales.push(totalP)
    
    let total = 0;
    totales.forEach(function(a){
        total += a;
    });
    //console.log(total);
    return total;
}

//Evento de agregar Productos
addProduct.addEventListener('click', function(){
    let productosA = {
        nombreProducto: nameProduct2.value,
        presioC: parseInt(priceProduct2.value),
        presioV: parseInt(priceProduct2.value) + 2,
        cantidadP: quantityProduct2.value
    }
    let tablaProduct = document.getElementById('tablaProduct');
    let rowss= document.createElement('tr');
        productos.push(productosA);
        console.log(productos);

        //Recorrer arreglo con productos
        productos.forEach(function(element){
            rowss.innerHTML = `<td>${element.nombreProducto}</td><td>${element.presioC}</td><td>${element.presioV}</td><td>${element.cantidadP}</td></td><td><button class="btn btn-danger">E</button></td>`;
            tablaProduct.appendChild(rowss)
        });
    
        document.getElementById('priceProductA').value = "";
        document.getElementById('quantityProductA').value = "";
        document.getElementById('nameProductA').value = "";
    
});


//Eventos de ventas
addSale.addEventListener('click', function(){

    let name = nameProduct.value;
    let price = parseFloat(priceProduct.value);
    let quantity = parseInt(quantityProduct.value);
    let priceCantidad = price * quantity;

    let tabla = document.getElementById('tabla');
    let rows = document.createElement('tr');
    let final = document.getElementById('canttotal');

    rows.innerHTML = `<td>${name}</td><td>${price}</td><td>${quantity}</td><td>${priceCantidad}</td>`;
    final.textContent = totalApagar();

    tabla.appendChild(rows);
    //tablatotal.appendChild(rows2);

    
    document.getElementById('quantityProduct').value = "";
    document.getElementById('nameProduct').value = "";
    document.getElementById('priceProduct').value = "";
    console.log(price, quantity, name, priceCantidad);
    //totalApagar(priceCantidad);
});


//Buscar Productos
searchProduct.addEventListener('click', function(){
    let nombreBuscar = nameProduct.value;
    const productB = productos.find(producto => producto.nombreProducto == nombreBuscar );
    if(productB){
        document.getElementById('priceProduct').value = productB.presioV;
    }else{
        alert('Producto no Encontrado')
    }
   
    //console.log(filtrar(nombreBuscar));
});
/*
function eliminar(){
    let tabla = document.getElementById('tabla');
    let rows = document.createElement('tr');
    tabla.removeChild(rows);
};
*/






