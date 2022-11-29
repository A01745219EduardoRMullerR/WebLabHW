'use strict'; 
 
module.exports = function(app) { 
  var gameCollectionController = require('../controllers/gameCollectionController'); 
 
  app.route('/games') 
    .get(gameCollectionController.obtener_juegos) 
    .post(gameCollectionController.agregar_juegos); 

    app.route('/users/')
    .get(gameCollectionController.obtener_usuario);
 
  app.route('/games/:id') 
    .get(gameCollectionController.obtener_juegos); 

    app.route('/userPass')
    .get(gameCollectionController.autenticar)

    app.route('/gamesUser/')
    .get(gameCollectionController.obtenerJuego_usuario)

    app.route('/gamesUserConsola/')
    .get(gameCollectionController.obtenerConsola_usuario)

    app.route('/logs') 
    .post(gameCollectionController.agregar_log);

    app.route('/logsUser/')
    .get(gameCollectionController.obtenerLog_usuario)

    app.route('/logsUserEvento/')
    .get(gameCollectionController.obtenerLog_usuario_evento)
    

};