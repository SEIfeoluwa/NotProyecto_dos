const { Router } = require('express');
const controllers = require('../controllers/Controller1');
const router = Router();

router.get('/posts', controllers.getAllPosts)

module.exports = router;