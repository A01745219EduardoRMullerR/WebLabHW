class Calculadora{
    constructor(){
        this.operacion = null;
    }
    suma(a, b, c){
        this.operacion = "suma";
        let suma = a + b
        if(c){
            let result = suma * c;
            console.log("La operacion " + this.operacion + " de " + a + " y " + b + " resulta en " + suma + " y multiplicado por "
            + c + " es igual a " + result);
            
        }else{
            console.log("La operacion " + this.operacion + " de " + a + " y " + b + " resulta en " + suma);
        }
    }
    resta(a, b, c){
        this.operacion = "resta";
        let resta = a - b;
        if(c){
            let result = resta * c;
            console.log("La operacion " + this.operacion + " de " + a + " y " + b + " resulta en " + resta + " y multiplicado por "
            + c + " es igual a " + result);
            
        }else{
            console.log("La operacion " + this.operacion + " de " + a + " y " + b + " resulta en " + resta);
        }
    }
    multiplicacion(a, b, c){
        this.operacion = "multiplicacion"
        let multi = a * b;
        if(c){
            let result = multi * c;
            console.log("La operacion " + this.operacion + " de " + a + " y " + b + " resulta en " + multi + " y multiplicado por "
            + c + " es igual a " + result);
            
        }else{
            console.log("La operacion " + this.operacion + " de " + a + " y " + b + " resulta en " + multi);
        }
    }
    division(a, b, c){
        this.operacion = "division";
        let div = a/b;
        if(c){
            let result = div * c;
            console.log("La operacion " + this.operacion + " de " + a + " y " + b + " resulta en " + div + " y multiplicado por "
            + c + " es igual a " + result);
            
        }else{
            console.log("La operacion " + this.operacion + " de " + a + " y " + b + " resulta en " + div);
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