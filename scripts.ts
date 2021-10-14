class Examents {
    public saludo(hola : string) : void  {
        alert("¡Hola mundo!");
    }
    public Hola(hola : string) : string {
        hola = "¡Hola Mundo!"
        alert(hola);
        return hola;
    }
    public nombre(nombre : any) : string {
        nombre = prompt("INGRESA TU NOMBRE");
        nombre = alert("Hola " + nombre)
        return nombre;
    }
    public numeronombre(nombre : any, numero : any) :any {
        nombre = prompt("INGRESA TU NOMBRE")
        numero = prompt("INGRESA TU NUMERO")
        numero = parseFloat(numero);
        for (let i = 0; i < numero; i++) {
            document.write(nombre + "<br>")
        }
    }
    public nombredos(nombre : any ) : any{
        nombre = prompt("INGRESA TU NOMBRE COMPLETO")
        document.write(nombre.toLowerCase() + "<br>")
        document.write(nombre.toUpperCase() + "<br>")
        document.write(nombre.replace(/\b[a-z]/g, (c: string)=>c.toUpperCase()));
        
    }
    public Edad(edad : any) : any{
        edad = prompt("INGRESA TU EDAD")
        if (edad >= 18) {
            alert("ERES MAYOR DE EDAD")
        } else {
            alert("ERES MENOR DE EDAD")
        }
    }
    public password(pass : any, contrasena : any) : any{
        contrasena = "contraseña";
        pass = prompt("INGRESA LA CONTRASEÑA")
        pass = pass.toLowerCase()
        if (contrasena == pass) {
            alert("LA CONTRASEÑA ES CORRECTA")
        } else {
            alert("LA CONTRASEÑA ES IMCORRECTA")
        }
    }
    public palabra(numero : any) : any{
        numero = prompt("INGRESE UNA PALABRA")
        for (let i = 0; i < 10; i++) {
            document.write(numero + "<br>")
            
        }
    }
    public años(cumple : any) : any{
        cumple = prompt("INGRASA CUANTOS AÑOS TIENES")
        for (let i = 0; i < cumple; i++) {
            document.write((i + 1) + " Años " + "<br>")
            
        }
    }
    public invertir(invertir: any, interes : any, anos : any ) : any{
        invertir = prompt("INGRESA LA CANTIDAD PARA INVERTIR")
        invertir = parseFloat(invertir);
        interes = prompt("INGRESE EL INTERES ANUAL")
        interes = parseFloat(interes);
        anos = prompt("INGRESE EL NUMERO DE AÑOS")
        for (let i = 0; i < anos; i++) {
            invertir *= 1 + interes / 100;
            document.write("CAPITAL  " + (i+1) + " AÑOS: " + invertir)
        }
    }
    public ejecutar() : void {
        let hola : any;
        let nombre: any;
        let numero: any;
        let edad: any;
        let pass: any;
        let cumple: any;
        let contrasena: any;
        let invertir : any;
        let interes : any;
        let anos : any;
        let opcion : any = prompt(`Elige la opcion: 
                                    1. ¡Hola Mundo!  
                                    2. ¡Hola Mundo! con variable
                                    3. Saludo a usuario
                                    4. Nombre del usuario
                                    5. Nombre completo del usuario 
                                    6. Mayor o Menor
                                    7. Contraseña
                                    8. Palabra
                                    9. Edad cumplida
                                    10. Invertir
                                    `);
        opcion = parseInt(opcion);
        switch(opcion) {
            case 1:
                this.saludo(hola)
                break;
            case 2:
                this.Hola(hola)
                break;
            case 3:
                this.nombre(nombre)
                break;
            case 4:
                this.numeronombre(nombre,numero)
                break;
            case 5:
                this.nombredos(nombre)
                break;
            case 6:
                this.Edad(edad)
                break;
            case 7:
                this.password(pass,contrasena)
                break;
            case 8:
                this.palabra(numero)
                break;
            case 9:
                this.años(cumple)
                break;
            case 10:
                this.invertir(interes,invertir,anos)
                break;
        }
        
    }
}
const ExamenTS = new Examents();
ExamenTS.ejecutar();
