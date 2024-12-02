const express = require('express');
const router = express.Router();
const database = require('../database');

router.get('/', function(req, res, next) {
  res.render('login', {user: req.session.user, title:"Embutidos León"});
});

router.post('/', async (req, res) => {
  const user = req.body.user;
  if(await database.user.isLoginRight(user, req.body.pass)){
    req.session.user = {username: user};
    req.session.message = "¡Login correcto!"
    res.redirect("restricted");
  } else {
    req.session.error = "Incorrect username or password.";
    res.redirect("login");
  }
});

module.exports = router;
