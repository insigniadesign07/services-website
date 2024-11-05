// controllers/adminController.js
const User = require('../models/userModel');

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({ success: true, users });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

exports.assignTaskToSubAdmin = async (req, res) => {
  try {
    const { subAdminId, task } = req.body;
    const subAdmin = await User.findById(subAdminId);
    if (!subAdmin || subAdmin.role !== 'sub-admin') {
      return res.status(404).json({ success: false, message: 'Sub-admin not found' });
    }
    subAdmin.tasks.push(task);
    await subAdmin.save();
    res.status(200).json({ success: true, subAdmin });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};
