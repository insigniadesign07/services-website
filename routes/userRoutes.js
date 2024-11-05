const express = require('express');
const { signup, login } = require('../controllers/authController');
const { protect, authorize } = require('../middleware/auth');
const { getUserData, getAdminDashboard} = require('../controllers/userController');
const { getSubAdminDashboard} = require('../controllers/subAdminController');
const router = express.Router();

// Protected route for Users
router.get('/user-data', protect, getUserData); // For regular users

// Protected admin route
router.get('/admin-dashboard', protect, authorize('admin'), getAdminDashboard);
// For admins
router.get('/subadmin-dashboard', protect, authorize('sub-admin'), getSubAdminDashboard);

// Add more routes for subadmin as needed
module.exports = router;
