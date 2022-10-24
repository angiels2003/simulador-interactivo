//Simulador para calcular el monto total de tu compra
function calcularPrecio (precioLibro, cantidadLibro, porcentajeDescuento, costoEnvio) {
  //calculo los descuentos
  let descuento = (precioLibro * porcentajeDescuento) / 100;
  //se lo aplico al precio
  let precioConDescuento = precioLibro - descuento;
  //retorno el precio final con descuento y costo de envio, multiplicado por la cantidad de libros
  return (precioConDescuento * cantidadLibro) + costoEnvio;
}

const envio = 160; //valor aproximado del costo de envio promedio de mercadoLibre

//le pedimos al usuario el precio del libro, la cantidad y el porcentaje del descuento
let libro = parseFloat(prompt("Ingrese el precio del libro que desea comprar:"));
let cantidad = parseInt(prompt("Ingrese la cantidad de libros que desea comprar de esta prenda:"));
let descuento = parseInt(prompt("Ingresa tu cupón de descuento:"))

//llamamos a la funcion y luego mostramos el precio final por alert
let precioFinal = calcularPrecio(libro, cantidad, descuento, envio);
alert("El precio total de tu compra es $" + precioFinal);
alert("¡Que lo disfrutes!");