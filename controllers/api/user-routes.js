const router = require('express').Router();
const { User } = require('../../models');

router.get('/', (req, res) => {
  let dbUsers = User.findAll();
    
    res.json(dbUsers);
});

module.exports = router;
