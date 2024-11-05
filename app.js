// app.js
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const adminRoutes = require('./routes/adminRoutes');
const userRoutes = require('./routes/userRoutes');
const subAdminRoutes = require('./routes/userRoutes');
//const subadminRoutes = require('/routes/subadminRoutes')
require('dotenv').config();
const path = require('path');
const protectedRoutes = require('./routes/protectedRoutes');



const app = express();  // This creates the app object
connectDB();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true })); 

app.use(express.static(path.join(__dirname, 'public')));  // Serve static files

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});
app.get('/signup', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'signup.html'));
  });
  
  app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'login.html'));
  });

app.get('/', (req, res) => {
    res.send('Welcome to the Advanced Auth System API');
  });
  
// Routes
app.use('/api', userRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/user', userRoutes);
app.use('/api', subAdminRoutes);
//app.use('/api/sub-admin' , subadminRoutes);
app.use('/api/protected', protectedRoutes);

module.exports = app;  // This exports the app object
