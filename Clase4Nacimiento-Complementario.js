// Calculo de IVA

const porcentaje = 21;

function ingresarPrecio() {
	let precio = Number(prompt("Ingrese el precio a calcular IVA"));
	return precio;
}

function impuesto(precio, porcentaje) {
	alert(
		`El iva es de = $${
			(precio * porcentaje) / 100
		} \ny el valor final es = $${precio + (precio * porcentaje) / 100}`
	);
}

impuesto(ingresarPrecio(), porcentaje);
let confirmar = confirm("Confirme si quiere seguir operando");

while (confirmar) {
	impuesto(ingresarPrecio(), porcentaje);
	confirmar = confirm("Confirme si quiere seguir operando");
}

if (!confirmar) {
	alert("Gracias por usar nuestro sistema");
}
