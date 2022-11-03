'use strict'; 
 
var fs = require("fs"); //FileSystem lib
 
module.exports.obtener_juegos = function (req, res) { 
    fs.readFile(__dirname + "/" + "juegos.json", 'utf8', function (err, data) { //callback function para que no crasheen los errores
        console.log(err); 
        console.log(data); 
        res.end(data); 
    }); 
}; 
 
module.exports.agregar_juego = function (req, res) { 
    fs.readFile(__dirname + "/" + "juegos.json", 'utf8', function (err, data) { 
        const array = JSON.parse(data); 
        console.log(err); 
        console.log(data); 
 
        const nuevo = req.body; 
        array.push(nuevo); 
 
        fs.writeFile(__dirname + "/" + "juegos.json", JSON.stringify(array), 'utf8', function (err, data) { 
            console.log(data);
            console.log(err); 
            res.end(err); 
        }); 
 
        res.end(JSON.stringify(array)); 
    }); 
}; 
 
module.exports.obtener_juego = function (req, res) { 
    fs.readFile(__dirname + "/" + "juegos.json", 'utf8', function (err, data) { 
        const juegos = JSON.parse(data); 
        const juego = juegos[req.params.gameIndex] 
        console.log(juego); 
        res.end(JSON.stringify(juego)); 
    }); 
}; 

module.exports.eliminar_juego = function (req, res){
    fs.readFile(__dirname + "/" + "juegos.json", 'utf8', function (err, data) { 
        const array = JSON.parse(data);
        console.log(err);
        const elim = req.body.id;
        console.log(elim);
        let counter = 0
        for(let i=0; i<array.length; i++){
            let juego_id = array[i].id;
            if(juego_id == elim){
                //console.log("deleted" + array[i])
                array.pop(array[i]);
                counter ++;
            }
        }

        if(counter > 0){

            fs.writeFile(__dirname + "/" + "juegos.json", JSON.stringify(array), "utf-8", function (err, data){
                console.log(data);
                console.log(err);
            })

        } else {console.log("not in data")}
        
        res.end(JSON.stringify(array))

        
    
    });
}