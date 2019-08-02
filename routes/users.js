const express = require('express');
const router = express.Router();

const { User } = require('../models/User');

router.get('/register', function(req, res) {
  res.render('register', {
    instructions: res.instructions,
    test: res.test,
    stat: res.stat,
  });

});

router.post('/addUser', async function(req, res, next) {
  const name = req.body.firstName;
  const surname = req.body.secondName;
  const email = req.body.email;
  
  const user = new User({
    firstName: name,
    secondName: surname,
    email: email
  });

  await user.save();
  req.session.name = user.email;
  

  res.json(name);
});

module.exports = router;
