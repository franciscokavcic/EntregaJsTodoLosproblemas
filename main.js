function calcularValorViaje(distancia, costoPorKilometro, cantidadPersonas) {
    const valorSinIVA = distancia * costoPorKilometro * cantidadPersonas;
    const iva = valorSinIVA * 0.19; // Suponiendo un IVA del 19%
    const valorConIVA = valorSinIVA + iva;
  
    return valorConIVA;
  }

    // prompt para kilometros
  let distanciaViaje = parseFloat(prompt("Ingrese la distancia del viaje en kilómetros:"));

  while (isNaN(distanciaViaje) || distanciaViaje <= 0) {
    alert("La distancia debe ser escrita en números y ser mayor a cero.");
    distanciaViaje = parseFloat(prompt("Ingrese la distancia del viaje en kilómetros:"));
  }
  
  let cantidadPersonas = parseInt(prompt("Ingrese la cantidad de personas:"));
  // prompt para personas
  while (isNaN(cantidadPersonas) || cantidadPersonas <= 0) {
    alert("La cantidad de personas debe ser un número entero y ser mayor a cero.");
    cantidadPersonas = parseInt(prompt("Ingrese la cantidad de personas:"));
  }
  
  const costoPorKilometro = 10; // Costo por kilómetro en monedapesitos :(
  
  const valorTotal = calcularValorViaje(distanciaViaje, costoPorKilometro, cantidadPersonas);
  console.log("El valor total del viaje es: " + valorTotal); // resultado de la iteraccion

  // no use dowhile por que no en me encontre con la necesidad 