class Calculadora{
    constructor(){
        this.operacion = null;
    }
    suma(a, b, c = 1){
        this.operacion = "suma";
        let suma = a + b
        let result = (a + b) * c;
        if(c === 1){
            console.log("La operacion " + this.operacion + " de " + a + " y " + b + " resulta en " + result);
        }else{
            console.log("La operacion " + this.operacion + " de " + a + " y " + b + " resulta en " + suma + " y multiplicado por "
            + c + " es igual a " + result);
        }
    }
    resta(a, b, c = 1){
        this.operacion = "resta";
        let resta = a - b;
        let result = (a - b) * c;
        if(c === 1){
            console.log("La operacion " + this.operacion + " de " + a + " y " + b + " resulta en " + result);
        }else{
            console.log("La operacion " + this.operacion + " de " + a + " y " + b + " resulta en " + resta + " y multiplicado por "
            + c + " es igual a " + result);
        }
    }
    multiplicacion(a, b, c = 1){
        this.operacion = "multiplicacion"
        let multi = a * b;
        let result = a * b * c;
        if(c === 1){
            console.log("La operacion " + this.operacion + " de " + a + " y " + b + " resulta en " + result);
        }else{
            console.log("La operacion " + this.operacion + " de " + a + " y " + b + " resulta en " + multi + " y multiplicado por "
            + c + " es igual a " + result);
        }
    }
    division(a, b, c = 1){
        this.operacion = "division";
        let div = a/b;
        let result = a / b * c;
        if(c === 1){
            console.log("La operacion " + this.operacion + " de " + a + " y " + b + " resulta en " + result);
        }else{
            console.log("La operacion " + this.operacion + " de " + a + " y " + b + " resulta en " + div + " y multiplicado por "
            + c + " es igual a " + result);
        }
    }
}

function main(){
    let calc1 = new Calculadora();
    calc1.suma(8, 45);
    calc1.suma(44, 487, 2);
    calc1.resta(4444551, 4444550);
    calc1.resta(12345, 12333, 5);
    calc1.multiplicacion(1, 2, 3)
    calc1.multiplicacion(5, 5);
    calc1.division(45, 5);
    calc1.division(144, 12, 2);
}

main()