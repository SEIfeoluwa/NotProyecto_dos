const { Router } = require('express');
const controllers = require('../controllers/Controller1');
const router = Router();

router.get('/posts', controllers.getAllPosts);

router.get('/users', controllers.getAllUsers)

router.post('/createPosts', controllers.createPost);

module.exports = router;