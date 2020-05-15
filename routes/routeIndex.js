const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const blogsController = require('../controllers/blogsController');

router.post('/register', userController.registerUser);
router.post('/login', userController.loginUser);
router.post('/newBlog', blogsController.createBlog);
router.get('/showBlogs', blogsController.showBlogs);
router.post('/like',blogsController.likeBlog);
router.post('/disLike',blogsController.disLikeBlog);

module.exports = router;

