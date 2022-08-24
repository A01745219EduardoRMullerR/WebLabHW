class CalculadoraPromise {
  
    suma(n1, n2, n3) {
      let prom = new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve();
          //reject();
        }, 5000);
      });
  
      console.log("Operacion 1");
  
      prom.then(function operacion() {
            if (n3) {
              console.log(`La suma de ${n1} con ${n2} restada por ${n3} es ${(n1 + n2) - n3}`);
            } else {
              console.log(`La suma de ${n1} con ${n2} es: ${n1 + n2}`);
            }
          },
          
          function error() {
            console.log("Ejecucion fallada");
          }
        )
        .catch((error) => {
          console.warn(error);
        })
        .finally(() => {
          console.log("Final de operacion");
        });
    }
  }
  
  function main(){
    let calcProm = new CalculadoraPromise();
    calcProm.suma(3,4,2);
    console.log("Suma")
  }

  main()