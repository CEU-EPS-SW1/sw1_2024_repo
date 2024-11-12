var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('login', { title: 'Express' , user: req.session.user});
});

router.post('/', function(req, res, next) {
  const user = req.body.user;
  //Comprobación si el usuario es correcto
  if(user === "admin"){
    req.session.user = {username: user};
    res.redirect('restricted');
  } else {
    res.render('login', { title: 'Express' });
  }
});

module.exports = router;
