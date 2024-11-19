const express = require('express');
const router = express.Router();
const database = require('../database');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('login', { title: 'Express' , user: req.session.user});
});

router.post('/', async function(req, res, next) {
  const user = req.body.user;
  //Comprobación si el usuario es correcto
  if(await database.users.isLoginRight(user, req.body.pass)){
    console.log('Usuario correcto');
    req.session.user = {username: user};
    res.redirect('restricted');
  } else {
    res.redirect('login');
  }
});

module.exports = router;
