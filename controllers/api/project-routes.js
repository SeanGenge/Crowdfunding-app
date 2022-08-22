const router = require('express').Router();
const { Project } = require('../../models');

router.get('/', (req, res) => {
    let dbProjects = Project.findAll();
    
    res.json(dbProjects);
  });

module.exports = router;
