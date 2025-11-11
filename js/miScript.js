class Conversor {
    constructor(cantidad, destino) {
        this.cantidad = cantidad; // el dinero en pesos
        this.destino = destino; // la moneda elegida para convertir
        // tasas de cambio simuladas hacia el peso mexicano (MXN)
        this.tasas = {
            EGP: 0.28,
            ITL: 125.00,
            ATS: 0.78,
            FRF: 0.27
        };
        // guarda el símbolo de cada moneda
        this.simbolos = {
            EGP: "₤E",
            ITL: "₤",
            ATS: "₢",
            FRF: "₣",
            MXN: "$"
        };
    }
    // MÉTODO DE CONVERSIÓN
    // calcula la conversión multiplicando la cantidad por la tasa correspondiente
    convertir() {
        const tasa = this.tasas[this.destino];
        const resultado = this.cantidad * tasa;
        return resultado.toFixed(2); // TOFIXED: redondea a 2 décimas
    }
    // MÉTODO PARA GENERAR EL RESUMEN
    // muestra la cantidad original y la convertida
    generarResumen() {
        // valores escritos en el formulario
        const convertido = this.convertir();
        const simboloDestino = this.simbolos[this.destino];
        const simboloOrigen = this.simbolos["MXN"];
        return `
            <strong>Cantidad original:</strong> ${simboloOrigen}${this.cantidad.toLocaleString()} MXN <br>
            <strong>Convertido a:</strong> ${simboloDestino} ${convertido.toLocaleString()} ${this.destino}`;
        // TOLOCALESTRING: permite puntos y comas
    }
}
// ESCUCHADOR DE EVENTO SUBMIT
document.getElementById("forma").addEventListener("submit", function (e) {
    e.preventDefault(); // evita que se recargue la página
    // PARSEFLOAT: convierte el texto del campo a número decimal
    const cantidad = parseFloat(document.getElementById("cantidad").value);
    const destino = document.getElementById("monedaDestino").value;
    // Instancia de la clase: pase de los datos capturados
    const objConversor = new Conversor(cantidad, destino);
    // mostrar resultado
    document.getElementById("resumen").innerHTML = objConversor.generarResumen();
});
