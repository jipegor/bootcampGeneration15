// PARTE 1: DATOS DEL CLIENTE
const nombreCliente = "Jimmy";
const ciudad = "Bogotá";
const esPrimeCliente = true;

console.log("Hola " + nombreCliente + ", tu pedido a domicilio en " + ciudad + ".");

// PARTE 2: PRODUCTOS DEL PEDIDO
let productos = ["Hamburguesa", "Papas", "Gaseosa"];

console.log(" Lista de productos:");
console.log(productos);

console.log(" Primer producto:");
console.log(productos[0]);

productos.push("Postre");
console.log(" Lista actualizada con Postre:");
console.log(productos);

productos.pop();
console.log(" Lista después de quitar el último:");
console.log(productos);

console.log(" Total de productos:", productos.length);

// PARTE 3: EL PEDIDO COMPLETO
let pedido = {
  cliente: nombreCliente,
  ciudad: ciudad,
  productos: productos,
  estado: "En preparación"
};

console.log(" Pedido completo:");
console.log(pedido);

console.log(" Nombre del cliente desde el pedido:");
console.log(pedido.cliente);

pedido.estado = "En camino";
console.log(" Pedido actualizado:");
console.log(pedido);

console.log(" Primer producto del pedido:");
console.log(pedido.productos[0]);

// PARTE 4: EL COBRO
let subtotal = 20000;
let domicilio = 3500;
const porcentajePropina = 0.10;

let total = subtotal + domicilio;

console.log("Subtotal:", subtotal);
console.log(" Domicilio:", domicilio);
console.log(" Total:", total);

console.log("RECIBO FINAL:");
console.log("Total a pagar por el pedido de " + nombreCliente + ": $" + total);