var express = require('express');
var router = express.Router();

/* GET Contacts page. */
router.get('/', function(req, res, next) {
  res.render('contact', { title: 'Get In Touch' });
});

module.exports = router;