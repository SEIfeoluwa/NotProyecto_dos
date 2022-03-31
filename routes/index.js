const { Router } = require('express');
const controllers = require('../controllers/Controller1');
const router = Router();

router.get('/posts', controllers.getAllPosts);

router.get('/users', controllers.getAllUsers)

router.post('/createPosts', controllers.createPost);

router.delete('/deletePost', controllers.deletePost);

router.put('/updatePost/:id', controllers.updatePost);

module.exports = router;