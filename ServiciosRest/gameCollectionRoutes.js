//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode 
'use strict'; 
 
module.exports = function(app) { 
  const gameCollection = require('./gameCollectionController'); 
 
  app.route('/games') //http://localhost:8585/games --> POST agrega un juego con enviar un formato JSON y GET obtiene todos los juegos de juegos.json
    .get(gameCollection.obtener_juegos) //GET obtiene todos los juegos de juegos.json
    .post(gameCollection.agregar_juego) //POST agrega un juego con enviar un formato JSON
    .delete(gameCollection.eliminar_juego); //DELETE borra un juego en base a su ID
 
  app.route('/games/:gameIndex') 
    .get(gameCollection.obtener_juego);

  app.route('/games/search')
    .post(gameCollection.buscar_juego);

};