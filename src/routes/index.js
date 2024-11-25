const express = require('express');
const userController = require('../controllers/userController');
const taskController = require('../controllers/taskController');
const authMiddleware = require('../middlewares/auth');

const router = express.Router();

// User routes
router.post('/register', userController.registerUser);
router.post('/login', userController.loginUser);

// Task routes
router.post('/tasks', authMiddleware, taskController.createTask);
router.get('/tasks', authMiddleware, taskController.getTasks);
router.put('/tasks/:taskId', authMiddleware, taskController.updateTask);
router.delete('/tasks/:taskId', authMiddleware, taskController.deleteTask);

module.exports = router;
