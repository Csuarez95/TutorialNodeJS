var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/cool/', function(req, res, next) {
  //res.send('Eres genial');
  res.render('user', { title: 'Eres genial' });
});

module.exports = router;
