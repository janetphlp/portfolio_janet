var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // passing dynamic parameters
  res.render('index', { title: 'Express' });
});

/* GET About Me page. */
router.get('/about', function(req, res, next) {
  // passing dynamic parameters
  res.render('about', { title: 'Janet Philip' });
});

/* GET Project page. */
router.get('/projects', function(req, res, next) {
  //passing dynamic parameters
  res.render('projects', { title: 'Project Details' });
});

/* GET Contacts page. */
router.get('/contact', function(req, res, next) {
  // pass dynamic data
  res.render('contact', { title: 'Get In Touch' });
});

module.exports = router;
