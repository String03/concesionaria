var vehiculos = [
    {
        Marca: "Peugeot", Modelo: "206", Puertas: 4, Precio: 200000, Auto: true
    },
    {
        Marca: "Honda", Modelo: "Titan", Clindrada: "125cc", Precio: 60000, Auto: false
    },
    {
        Marca: "Peugeot", Modelo: "208", Puertas: 5, Precio: 250000, Auto: true
    },
    {
        Marca: "Yamaha", Modelo: "YBR", Clindrada: "160cc", Precio: 80500.50, Auto: false
    }

];

function ImprimirVehiculos(vehiculos){
    for(var i in vehiculos){
        console.log(DetalleVehiculo(vehiculos[i]));
    }
}

function DetallePuerta(vehiculo){
    if(vehiculo.Auto){
        return " // Puertas: " + vehiculo.Puertas
    }
    else{
        return " // Cilindrada: " + vehiculo.Clindrada
    }
}

function DetalleVehiculo(vehiculo){
    return "Marca: " + vehiculo.Marca + " // Modelo: " + vehiculo.Modelo  + DetallePuerta(vehiculo)+ " // Precio: " + DetallePrecio(vehiculo.Precio);  
}

function DetallePrecio(precio){
    return new Intl.NumberFormat('es-AR', {currency: 'ARS', style: 'currency'}).format(precio);
}

function CompararPrecioAscendente(precioA, precioB){
    return precioA.Precio - precioB.Precio;
}

function CompararPrecioDescendiente(precioA,precioB){
    return precioB.Precio - precioA.Precio;
}

function ImprimirVehiculoMasCaro(vehiculos){
    var vehiculoCaro = vehiculos.sort(CompararPrecioDescendiente)[0];
    console.log("Vehículo más caro: "+ vehiculoCaro.Marca + " " + vehiculoCaro.Modelo);
}

function ImprimirVehiculoMasBarato(vehiculos){
    var vehiculoBarato = vehiculos.sort(CompararPrecioAscendente)[0];
    console.log("Vehículo más barato: "+ vehiculoBarato.Marca + " " + vehiculoBarato.Modelo);
}


function CompararVehiculoY(vehiculo){
    return vehiculo.Modelo.includes('Y');
}

function ImprimirVehiculoY(vehiculos){
    var vehiculoConY = vehiculos.filter(CompararVehiculoY)[0]; 
    console.log("Vehículo que contiene en el modelo la letra ‘Y’: " + vehiculoConY.Marca + " " + vehiculoConY.Modelo + " " + DetallePrecio(vehiculoConY.Precio));
}


function ImprimirVehiculosOrdenados(vehiculos){
    var vehiculosOrdenados = vehiculos.sort(CompararPrecioDescendiente);
    console.log("Vehículos ordenados por precio de mayor a menor:");
    for(var i in vehiculosOrdenados){
        console.log(vehiculosOrdenados[i].Marca + " " + vehiculosOrdenados[i].Modelo);
    }
}

function ImprimirIgual(){
    return console.log("=============================");
}


ImprimirVehiculos(vehiculos);
ImprimirIgual();
ImprimirVehiculoMasCaro(vehiculos);
ImprimirVehiculoMasBarato(vehiculos);
ImprimirVehiculoY(vehiculos);
ImprimirIgual();
ImprimirVehiculosOrdenados(vehiculos);

