const express = require('express');
const router = express.Router();
const sequelize = require('../sequelize');
const bcrypt = require('bcrypt');

router.get('/', function(req, res, next) {
  res.render('register', {user: req.session.user});
});

router.post('/', async (req, res) => {
  const username = req.body.user;
  const pass = req.body.pass;
  const user = await sequelize.models.user.findOne({where: {username}});
  if(!user){
    const password = await bcrypt.hash(pass, 10);
    const newUser = await sequelize.models.user.create({username, password});
    req.session.user = {username: user};
    req.session.message = "Registro correcto!"
    res.redirect("/restricted");
  } else {
    req.session.error = "Ya existe ese username";
    res.redirect("/register");
  }
});

module.exports = router;
