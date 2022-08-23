class Calculadora{
    constructor(){
        this.operacion = null;
    }
    suma(a, b, c = 1){
        this.operacion = "suma";
        let result = (a + b) * c;
    }
    resta(a, b, c = 1){
        this.operacion = "resta";
        let result (a - b) * c;
    }
    multiplicacion(a, b, c = 1){
        this.operacion = "multiplicacion"
        let result = a * b * c;
    }
    division(a, b, c = 1){
        this.operacion = division;
        let result = a / b * c;
    }
}

function main(){
    let calc1 = new Calculadora();
    
}