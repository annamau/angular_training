var Persona = /** @class */ (function () {
    function Persona(dni, nombre, sexo, peso, altura) {
        this.dni = dni;
        this.nombre = nombre;
        this.sexo = sexo;
        this.peso = peso;
        this.altura = altura;
    }
    Persona.prototype.getInfo = function () {
        return "dni: " + this.dni + ", \n" +
            "nombre: " + this.nombre + ", \n" +
            "sexo: " + this.sexo + ", \n" +
            "peso: " + this.peso + ", \n" +
            "altura: " + this.altura;
    };
    return Persona;
}());

function main() {
    var persona = new Persona("573535w", "andres", "h", 82, 180);
    var persona = new Persona("573affa535w", "wdqd", "m", 34, 150);
    var persona = new Persona("57353sfasfs5w", "lara", "m", 60, 170);
    console.log(persona.getInfo());
}

main()