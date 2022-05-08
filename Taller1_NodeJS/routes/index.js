/**
 * Ruta para mostrar el mensaje inicial cuando se accede al servidor.
 * @author Cristian Suárez Acosta
 */

/**
 * Declaración de atributos
 */
var express = require('express');
var router = express.Router();

/* GET home page. */
/**
 * Función para obtener el mensaje de la página principal al ingresar
 * a la URL http://localhost:3000/
 */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
