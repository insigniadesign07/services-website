// Controller function for sub-admin dashboard
exports.getSubAdminDashboard = (req, res) => {
    console.log("Subadmin Dashboard Accessed"); // Add this to check if the route handler is accessed
  
    res.status(200).json({
      success: true,
      message: 'Welcome to the Sub Admin Dashboard',
      user: req.user, // Attach the user information if needed
    });
  };
  