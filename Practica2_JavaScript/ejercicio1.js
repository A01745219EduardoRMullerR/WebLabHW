class Calculadora{
    constructor(){
        this.operacion = null;
    }
    suma(a, b, c = 1){
        this.operacion = "suma";
        let result = (a + b) * c;
        if(c === 1){
            console.log("La operacion " + this.operacion + " de " + a + " y " + b + " resulta en " + result);
        }else{
            console.log("La operacion " + this.operacion + " de " + a + " y " + b + " resulta en " + this.suma(a, b) + " y multiplicado por "
            + c + " es igual a " + result);
        }
    }
    resta(a, b, c = 1){
        this.operacion = "resta";
        let result = (a - b) * c;
        if(c === 1){
            console.log("La operacion " + this.operacion + " de " + a + " y " + b + " resulta en " + result);
        }else{
            console.log("La operacion " + this.operacion + " de " + a + " y " + b + " resulta en " + this.resta(a, b) + " y multiplicado por "
            + c + " es igual a " + result);
        }
    }
    multiplicacion(a, b, c = 1){
        this.operacion = "multiplicacion"
        let result = a * b * c;
        if(c === 1){
            console.log("La operacion " + this.operacion + " de " + a + " y " + b + " resulta en " + result);
        }else{
            console.log("La operacion " + this.operacion + " de " + a + " y " + b + " resulta en " + this.multiplicacion(a, b) + " y multiplicado por "
            + c + " es igual a " + result);
        }
    }
    division(a, b, c = 1){
        this.operacion = "division";
        let result = a / b * c;
        if(c === 1){
            console.log("La operacion " + this.operacion + " de " + a + " y " + b + " resulta en " + result);
        }else{
            console.log("La operacion " + this.operacion + " de " + a + " y " + b + " resulta en " + this.division(a, b) + " y multiplicado por "
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