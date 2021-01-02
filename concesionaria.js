class Vehiculo
{
    constructor(vehiculo){
        this.Marca = vehiculo.Marca;
        this.Modelo = vehiculo.Modelo;
        this.Puertas = vehiculo.Puertas;
        this.Clindrada = vehiculo.Clindrada;
        this.Precio = vehiculo.Precio;
    }
}

let vehiculos = [
    
    new Vehiculo( {
        Marca: "Peugeot", Modelo: "206", Puertas: 4, Precio: 200000, Auto: true
    }),
   
    new Vehiculo( {
        Marca: "Honda", Modelo: "Titan", Clindrada: "125cc", Precio: 60000, Auto: false
    }),
   
    new Vehiculo(  {
        Marca: "Peugeot", Modelo: "208", Puertas: 5, Precio: 250000, Auto: true
    }),
  
    new Vehiculo( {
        Marca: "Yamaha", Modelo: "YBR", Clindrada: "160cc", Precio: 80500.50, Auto: false
    })
   

];

class VehiculoService
{
    ImprimirVehiculos(vehiculos){
    for(var i in vehiculos){
        console.log(this.DetalleVehiculo(vehiculos[i]));
    }
}

DetallePuerta(vehiculo){
    if(vehiculo.Auto){
        return " // Puertas: " + vehiculo.Puertas
    }
    else{
        return " // Cilindrada: " + vehiculo.Clindrada
    }
}

DetalleVehiculo(vehiculo){
    return "Marca: " + vehiculo.Marca + " // Modelo: " + vehiculo.Modelo  + this.DetallePuerta(vehiculo)+ " // Precio: " + this.DetallePrecio(vehiculo.Precio);  
}

DetallePrecio(precio){
    return new Intl.NumberFormat('es-AR', {currency: 'ARS', style: 'currency'}).format(precio);
}

CompararPrecioAscendente(precioA, precioB){
    return precioA.Precio - precioB.Precio;
}

CompararPrecioDescendiente(precioA,precioB){
    return precioB.Precio - precioA.Precio;
}

ImprimirVehiculoMasCaro(vehiculos){
    var vehiculoCaro = vehiculos.sort(this.CompararPrecioDescendiente)[0];
    console.log("Vehículo más caro: "+ vehiculoCaro.Marca + " " + vehiculoCaro.Modelo);
}

ImprimirVehiculoMasBarato(vehiculos){
    var vehiculoBarato = vehiculos.sort(this.CompararPrecioAscendente)[0];
    console.log("Vehículo más barato: "+ vehiculoBarato.Marca + " " + vehiculoBarato.Modelo);
}


CompararVehiculoY(vehiculo){
    return vehiculo.Modelo.includes('Y');
}

ImprimirVehiculoY(vehiculos){
    var vehiculoConY = vehiculos.filter(this.CompararVehiculoY)[0]; 
    console.log("Vehículo que contiene en el modelo la letra ‘Y’: " + vehiculoConY.Marca + " " + vehiculoConY.Modelo + " " + this.DetallePrecio(vehiculoConY.Precio));
}


ImprimirVehiculosOrdenados(vehiculos){
    var vehiculosOrdenados = vehiculos.sort(this.CompararPrecioDescendiente);
    console.log("Vehículos ordenados por precio de mayor a menor:");
    for(var i in vehiculosOrdenados){
        console.log(vehiculosOrdenados[i].Marca + " " + vehiculosOrdenados[i].Modelo);
    }
}

ImprimirIgual(){
    return console.log("=============================");
}

HacerTodo(vehiculos){
    this.ImprimirVehiculos(vehiculos);
    this.ImprimirIgual();
    this.ImprimirVehiculoMasCaro(vehiculos);
    this.ImprimirVehiculoMasBarato(vehiculos);
    this.ImprimirVehiculoY(vehiculos);
    this.ImprimirIgual();
    this.ImprimirVehiculosOrdenados(vehiculos);
}

}

let vehiculoService = new VehiculoService()

vehiculoService.HacerTodo(vehiculos);



