"use strict";
var Examents = /** @class */ (function () {
    function Examents() {
    }
    Examents.prototype.saludo = function (hola) {
        alert("¡Hola mundo!");
    };
    Examents.prototype.Hola = function (hola) {
        hola = "¡Hola Mundo!";
        alert(hola);
        return hola;
    };
    Examents.prototype.nombre = function (nombre) {
        nombre = prompt("INGRESA TU NOMBRE");
        nombre = alert("Hola " + nombre);
        return nombre;
    };
    Examents.prototype.numeronombre = function (nombre, numero) {
        nombre = prompt("INGRESA TU NOMBRE");
        numero = prompt("INGRESA TU NUMERO");
        numero = parseFloat(numero);
        for (var i = 0; i < numero; i++) {
            document.write(nombre + "<br>");
        }
    };
    Examents.prototype.nombredos = function (nombre) {
        nombre = prompt("INGRESA TU NOMBRE COMPLETO");
        document.write(nombre.toLowerCase() + "<br>");
        document.write(nombre.toUpperCase() + "<br>");
        document.write(nombre.replace(/\b[a-z]/g, function (c) { return c.toUpperCase(); }));
    };
    Examents.prototype.Edad = function (edad) {
        edad = prompt("INGRESA TU EDAD");
        if (edad >= 18) {
            alert("ERES MAYOR DE EDAD");
        }
        else {
            alert("ERES MENOR DE EDAD");
        }
    };
    Examents.prototype.password = function (pass, contrasena) {
        contrasena = "contraseña";
        pass = prompt("INGRESA LA CONTRASEÑA");
        pass = pass.toLowerCase();
        if (contrasena == pass) {
            alert("LA CONTRASEÑA ES CORRECTA");
        }
        else {
            alert("LA CONTRASEÑA ES IMCORRECTA");
        }
    };
    Examents.prototype.palabra = function (numero) {
        numero = prompt("INGRESE UNA PALABRA");
        for (var i = 0; i < 10; i++) {
            document.write(numero + "<br>");
        }
    };
    Examents.prototype.años = function (cumple) {
        cumple = prompt("INGRASA CUANTOS AÑOS TIENES");
        for (var i = 0; i < cumple; i++) {
            document.write((i + 1) + " Años " + "<br>");
        }
    };
    Examents.prototype.invertir = function (invertir, interes, anos) {
        invertir = prompt("INGRESA LA CANTIDAD PARA INVERTIR");
        invertir = parseFloat(invertir);
        interes = prompt("INGRESE EL INTERES ANUAL");
        interes = parseFloat(interes);
        anos = prompt("INGRESE EL NUMERO DE AÑOS");
        for (var i = 0; i < anos; i++) {
            invertir *= 1 + interes / 100;
            document.write("CAPITAL  " + (i + 1) + " AÑOS: " + invertir);
        }
    };
    Examents.prototype.ejecutar = function () {
        var hola;
        var nombre;
        var numero;
        var edad;
        var pass;
        var cumple;
        var contrasena;
        var invertir;
        var interes;
        var anos;
        var opcion = prompt("Elige la opcion: \n                                    1. \u00A1Hola Mundo!  \n                                    2. \u00A1Hola Mundo! con variable\n                                    3. Saludo a usuario\n                                    4. Nombre del usuario\n                                    5. Nombre completo del usuario \n                                    6. Mayor o Menor\n                                    7. Contrase\u00F1a\n                                    8. Palabra\n                                    9. Edad cumplida\n                                    10. Invertir\n                                    ");
        opcion = parseInt(opcion);
        switch (opcion) {
            case 1:
                this.saludo(hola);
                break;
            case 2:
                this.Hola(hola);
                break;
            case 3:
                this.nombre(nombre);
                break;
            case 4:
                this.numeronombre(nombre, numero);
                break;
            case 5:
                this.nombredos(nombre);
                break;
            case 6:
                this.Edad(edad);
                break;
            case 7:
                this.password(pass, contrasena);
                break;
            case 8:
                this.palabra(numero);
                break;
            case 9:
                this.años(cumple);
                break;
            case 10:
                this.invertir(interes, invertir, anos);
                break;
        }
    };
    return Examents;
}());
var ExamenTS = new Examents();
ExamenTS.ejecutar();
