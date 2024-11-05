// routes/adminRoutes.js
const express = require('express');
const { getAllUsers, assignTaskToSubAdmin } = require('../controllers/adminController');
const { protect } = require('../middlewares/authMiddleware');
const { authorizeRoles } = require('../middlewares/roleMiddleware');
const router = express.Router();

router.get('/users', protect, authorizeRoles('admin'), getAllUsers);
router.post('/assign-task', protect, authorizeRoles('admin'), assignTaskToSubAdmin);

module.exports = router;
