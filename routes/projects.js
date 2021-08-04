var express = require('express');
var router = express.Router();

/* GET Project page. */
router.get('/', function(req, res, next) {
  res.render('projects', { title: 'Project Details' });
});

module.exports = router;