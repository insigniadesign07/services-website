// server.js
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const userRoutes = require('./routes/userRoutes');

const app = require('./app');
const port = process.env.PORT || 5000;


app.listen(port, () => {
  
  console.log(`Server running on http://localhost:${port}`);
});
