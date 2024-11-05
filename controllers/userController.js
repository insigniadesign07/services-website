// controllers/userController.js
exports.getUserData = (req, res) => {
  res.status(200).json({
    success: true,
    data: {
      name: req.user.name,
      email: req.user.email,
      role: req.user.role,
      tasks: req.user.tasks,
    },
  });
};

exports.getAdminDashboard = (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Welcome to the Admin Dashboard',
    user: req.user.name,
  });
};

// controllers/userController.js

// Controller for sub-admin dashboard
exports.getSubAdminDashboard = (req, res, next) => {
  res.status(200).json({
    success: true,
    message: 'Welcome to the Sub-Admin Dashboard!',
  });
};


// Additional methods for subadmin can be added similarly
