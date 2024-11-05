const express = require('express');
const { protect, authorize } = require('../middleware/auth');
const router = express.Router();

// Protected route for Users
router.get('/user-data', protect, authorize('user'), (req, res) => {
  res.status(200).json({
    success: true,
    message: 'This is user-specific data.',
    user: req.user
  });
});

// Protected route for Admins
router.get('/admin-dashboard', protect, authorize('admin'), (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Welcome, Admin! You have access to this dashboard.'
  });
});

// Protected route for Subadmins
router.get('/subadmin-dashboard', protect, authorize('subadmin'), (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Welcome, Subadmin! You have access to this dashboard.'
  });
});

module.exports = router;
