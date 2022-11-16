'use strict'; 
 
const MongoClient = require('mongodb').MongoClient; 
const url = "mongodb://127.0.0.1:27017"; 
const dbName = 'alumnos_servicio_local'; 
 
exports.obtener_estudiantes = function (req, res) { 
    MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, function (err, mdbclient) { 
        if (err) { 
            throw err; 
        } 
 
        const database = mdbclient.db(dbName); 
 
        // Referencia a la coleccion 
        const alumnos = database.collection("alumnos"); 
 
        // Consulta sin filtros 
        const query = {}; 
 
        const options = { 
            // Indicamos las columnas que queremos obtener en el resultado 
            projection: { nombre: 1, matricula: 1 }, 
        }; 
 
        // Hacemos la consulta 
        const cursor = alumnos.find(query, options); 
 
        cursor.toArray().then((data) => { 
            console.log("Resultados Obtenidos: " + data.length); 
            res.end(JSON.stringify(data)); 
        });         
    }); 
}; 
 
exports.obtener_estudiante = function (req, res) { 
    MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, async function (err, mdbclient) { 
        if (err) { 
            throw err; 
        } 
 
        const database = mdbclient.db(dbName); 
 
        // Referencia a la coleccion 
        const alumnos = database.collection("alumnos"); 
 
        // Recuperamos el valor del parametro 
        var matriculaAlumno = req.params.matricula; 
 
        // Declaramos los filtros 
        const query = { matricula: matriculaAlumno }; 
 
        // Hacemos la consulta 
        const alumno = await alumnos.findOne(query); 
 
        console.log("Consulta ejecutada..."); 
 
        res.end(JSON.stringify(alumno)); 
    }); 
}; 
 
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

exports.buscar_palabra_clave = function (req, res) { 
    MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, function (err, mdbclient) { 
        if (err) { 
            throw err; 
        } 
 
        const database = mdbclient.db(dbName); 
 
        // Referencia a la coleccion 
        const alumnos = database.collection("alumnos"); 
 
        // Obtenemos el valor del parametro 
        var palabraClave = req.params.palabraClave; 
 
        // Declaramos los filtros 
        const query = { nombre: new RegExp(palabraClave, 'i') }; 
 
        // Hacemos la consulta 
        const cursor = alumnos.find(query); 
 
        cursor.toArray().then((data) => { 
            console.log("Resultados Obtenidos: " + data.length); 
            res.end(JSON.stringify(data)); 
        });         
    }); 
};

exports.obtener_materias_estudiante = function (req, res) { 
    MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, async function (err, mdbclient) { 
        if (err) { 
            throw err; 
        } 
 
        const database = mdbclient.db(dbName); 
 
        // Referencia a la coleccion 
        const alumnos = database.collection("alumnos"); 
 
        // Recuperamos el valor del parametro 
        var matriculaAlumno = req.params.matricula; 
 
        // Declaramos los filtros 
        const query = { matricula: matriculaAlumno }; 
 
        const options = { 
            // Indicamos las columnas que queremos obtener en el resultado 
            projection: { _id: 0, "materias.nombre": 1 }, 
        }; 
 
        // Hacemos la consulta 
        const materia = await alumnos.findOne(query, options); 
 
        console.log("Consulta ejecutada..."); 
 
        res.end(JSON.stringify(materia)); 
    }); 
}; 

exports.obtener_materias_aggregate = function (req, res) { 
    MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, function (err, mdbclient) { 
        if (err) { 
            throw err; 
        } 
 
        const database = mdbclient.db(dbName); 
 
        // Referencia a la coleccion 
        const alumnos = database.collection("alumnos"); 
 
        var palabraClave = req.params.palabraClave; 
 
        // Hacemos la consulta 
        const resultado = alumnos.aggregate([ 
            { $unwind: '$materias' }, 
            { $match: { 'materias.nombre': new RegExp(palabraClave, 'i') } }, 
            { $project: { _id: 0, nombre: '$materias.nombre' } } 
        ]); 
 
        resultado.toArray().then((data) => { 
            console.log("Resultados Obtenidos: " + data.length); 
            res.end(JSON.stringify(data)); 
        }); 
    }); 
}; 