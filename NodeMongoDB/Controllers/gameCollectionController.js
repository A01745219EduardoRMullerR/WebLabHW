'use strict'; 
 
const MongoClient = require('mongodb').MongoClient; 
const url = "mongodb://127.0.0.1:27017"; 
const dbName = 'videojuegos'; 
 
exports.obtener_juegos = function (req, res) { 
    MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, function (err, mdbclient) { 
        if (err) { 
            throw err; 
        } 
 
        const database = mdbclient.db(dbName); 
 
        // Referencia a la coleccion 
        const juegos = database.collection("videogames"); 
 
        // Consulta sin filtros 
        const query = {}; 
 
        const options = { 
            // Indicamos las columnas que queremos obtener en el resultado 
            projection: { nombre_juego: 1, _id: 1 }, 
        }; 
 
        // Hacemos la consulta 
        const cursor = juegos.find(query, options); 
 
        cursor.toArray().then((data) => { 
            console.log("Resultados Obtenidos: " + data.length); 
            res.end(JSON.stringify(data)); 
        });         
    }); 
}; 
 
exports.obtener_juegos = function (req, res) { 
    MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, async function (err, mdbclient) { 
        if (err) { 
            throw err; 
        } 
 
        const database = mdbclient.db(dbName); 
 
        // Referencia a la coleccion 
        const juegos = database.collection("juegos"); 
 
        // Recuperamos el valor del parametro 
        var idJuego = req.params._id; 
 
        // Declaramos los filtros 
        const query = { _id: idJuego }; 
 
        // Hacemos la consulta 
        const juego = await juegos.findOne(query); 
 
        console.log("Consulta ejecutada..."); 
 
        res.end(JSON.stringify(juego)); 
    }); 
}; 
/*
exports.agregar_estudiante = function (req, res) {
    MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, async function (err, mdbclient) { 
        if (err) { 
            throw err; 
        } 
 
        const database = mdbclient.db(dbName); 
 
        // Referencia a la coleccion 
        const alumnos = database.collection("alumnos"); 
 
        var nuevoAlumno = req.body; 
 
        const result = await alumnos.insertOne(nuevoAlumno); 
 
        console.log(`Registro creado: ${result.insertedId}`); 
 
        res.end(); 
    }); 
}; 
*/