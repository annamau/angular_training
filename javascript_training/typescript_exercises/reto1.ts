
class Persona 
{
    dni;
    nombre;
    sexo;
    peso;
    altura;

    constructor(dni: string, nombre :string, sexo: "h" | "m", peso :Number, altura :Number )
    {
        this.dni = dni;
        this.nombre = nombre;
        this.sexo = sexo;
        this.peso = peso;
        this.altura = altura;
    }

    getInfo(){
        return "dni: " + this.dni + ", \n" +
               "nombre: " + this.nombre + ", \n" +
               "sexo: " + this.sexo + ", \n" +
               "peso: " + this.peso + ", \n" +
               "altura: " + this.altura;
    }
}

function main(){
    let persona = new Persona("573535w", "andres", "h", 82, 180)
    console.log(persona.getInfo())
}

main()