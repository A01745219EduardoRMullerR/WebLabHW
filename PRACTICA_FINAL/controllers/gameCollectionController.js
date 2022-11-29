'use strict';
const { json } = require('express');

 
 
const MongoClient = require('mongodb').MongoClient; 
const url = "mongodb://127.0.0.1:27017"; 
const dbName = 'portalVideojuegos'; 
 
exports.obtener_juegos = function (req, res) { 
    MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, function (err, mdbclient) { 
        if (err) { 
            throw err; 
        } 
 
        const database = mdbclient.db(dbName); 
 
        // Referencia a la coleccion 
        const juegos = database.collection("videojuegos"); 
 
        // Consulta sin filtros 
        const query = {}; 
 
        const options = { 
            // Indicamos las columnas que queremos obtener en el resultado 
            projection: { nombre_juego: 1}, 
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
        const juegos = database.collection("videojuegos"); 
 
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

exports.agregar_juegos = function (req, res) { 
    MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, async function (err, mdbclient) { 
    if (err) { 
        throw err; 
    } 

    const database = mdbclient.db(dbName); 

    // Referencia a la coleccion 
    const juego = database.collection("videojuegos"); 

    var nuevoJuego = req.body; 

    const result = await juego.insertOne(nuevoJuego); 

    console.log(`Registro creado: ${result.insertedId}`); 

    res.end(); 
}); 
}; 


exports.obtener_usuario = function (req, res) { 
    MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, async function (err, mdbclient) { 
        if (err) { 
            throw err; 
        } 
 
        const database = mdbclient.db(dbName); 
 
        // Referencia a la coleccion 
        const users = database.collection("users"); 

        var correoElectronico = req.body.correo;
 
        // Consulta sin filtros 
        const query = {email: correoElectronico}; 
 
 
        // Hacemos la consulta 
       const user = await users.findOne(query);
       console.log("Consulta por correo");
       res.end(JSON.stringify(user))
    }); 

    
};

exports.autenticar = function (req, res) { 
    MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, async function (err, mdbclient) { 
        if (err) { 
            throw err; 
        } 
 
        const database = mdbclient.db(dbName); 
 
        // Referencia a la coleccion 
        const users = database.collection("users"); 

        var correoElectronico = req.body.correo;
        var contraseña = req.body.password;
 
        // Consulta sin filtros 
        const query = {email: correoElectronico, password: contraseña}; 
 
 
        // Hacemos la consulta 
       const user = await users.findOne(query);
       console.log("Consulta por correo");
       res.end(JSON.stringify(user))
    }); 

    
};

exports.obtenerJuego_usuario = function (req, res) { 
    MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, async function (err, mdbclient) { 
        if (err) { 
            throw err; 
        } 
 
        const database = mdbclient.db(dbName); 
 
        // Referencia a la coleccion 
        const users = database.collection("videojuegos"); 

        var usuario = req.body.user;
        var juego = req.body.game;
 
        // Consulta sin filtros 
        const query = {username: usuario, nombre_juego: new RegExp(juego,"i")}; 
 
 
        // Hacemos la consulta 
       const user = await users.find(query);
       user.toArray().then((data) => { 
        console.log("Resultados Obtenidos: " + data.length); 
        res.end(JSON.stringify(data)); 
    });

    }); 
    
};

exports.obtenerConsola_usuario = function (req, res) { 
    MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, async function (err, mdbclient) { 
        if (err) { 
            throw err; 
        } 
 
        const database = mdbclient.db(dbName); 
 
        // Referencia a la coleccion 
        const users = database.collection("videojuegos"); 

        var usuario = req.body.user;
        var juego = req.body.game;
 
        // Consulta sin filtros 
        const query = {username: usuario, nombre_juego: new RegExp(juego,"i")}; 
 
 
        // Hacemos la consulta 
       const user = await users.find(query);
       user.toArray().then((data) => { 
        console.log("Resultados Obtenidos: " + data.length); 
        res.end(JSON.stringify(data)); 
    });

    }); 
    
};

exports.agregar_log = function (req, res) { 
    MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, async function (err, mdbclient) { 
    if (err) { 
        throw err; 
    } 

    const database = mdbclient.db(dbName); 

    // Referencia a la coleccion 
    const juego = database.collection("logs"); 

    var nuevoLog = req.body; 

    const result = await juego.insertOne(nuevoLog); 

    console.log(`Registro creado: ${result.insertedId}`); 

    res.end(); 
}); 
}; 


exports.obtenerLog_usuario = function (req, res) { 
    MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, async function (err, mdbclient) { 
        if (err) { 
            throw err; 
        } 
 
        const database = mdbclient.db(dbName); 
 
        // Referencia a la coleccion 
        const users = database.collection("logs"); 

        var usuario = req.body.user;
        var reg = req.body.log;
 
        // Consulta sin filtros 
        const query = {username: usuario}; 
 
 
        // Hacemos la consulta 
       const user = await users.find(query);
       user.toArray().then((data) => { 
        console.log("Resultados Obtenidos: " + data.length); 
        res.end(JSON.stringify(data)); 
    });

    }); 
    
};

exports.obtenerLog_usuario_evento = function (req, res) { 
    MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, async function (err, mdbclient) { 
        if (err) { 
            throw err; 
        } 
 
        const database = mdbclient.db(dbName); 
 
        // Referencia a la coleccion 
        const users = database.collection("logs"); 

        var usuario = req.body.user;
        var evento = req.body.event;
 
        // Consulta sin filtros 
        const query = {username: usuario, evento: new RegExp(evento,"i")}; 
 
 
        // Hacemos la consulta 
       const user = await users.find(query);
       user.toArray().then((data) => { 
        console.log("Resultados Obtenidos: " + data.length); 
        res.end(JSON.stringify(data)); 
    });

    }); 
    
};









