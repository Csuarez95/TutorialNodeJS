/**
 * Ruta para mostrar el mensaje modificado de "Eres genial"
 * @author Cristian Suárez Acosta
 */

/**
 * Atributos definidos para acceder.
 */
var express = require('express');
var router = express.Router();

/* GET users listing. */
/**
 * Se agrega la ruta en la cual se va a ingresar en el navegador con la URL
 * http://localhost:3000/users/cool/ para mostrar el mensaje definido 
 * "Eres genial"
 */
router.get('/cool/', function(req, res, next) {
  //res.send('Eres genial');
  res.render('user', { title: 'Eres genial' });
});

module.exports = router;
