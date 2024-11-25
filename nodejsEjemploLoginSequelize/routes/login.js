const express = require('express');
const router = express.Router();
const sequelize = require('../sequelize');
const bcrypt = require('bcrypt');

router.get('/', function(req, res, next) {
  res.render('login', {user: req.session.user});
});

router.post('/', async (req, res) => {
  const username = req.body.user;
  const user = await sequelize.models.user.findOne({where: {username}});
  if(user){
    bcrypt.compare(req.body.pass, user.password, function(err, result){
      if (result){//Login y pass correcto
        req.session.user = {username: user.username};
        req.session.message = "¡Login correcto!"
        res.redirect("/restricted");
      } else {
        req.session.error = "Incorrect username or password.";
        res.redirect("/login");
      }
    });
  } else {
    req.session.error = "Incorrect username or password.";
    res.redirect("login");
  }
});

module.exports = router;
