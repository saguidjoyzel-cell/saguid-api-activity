// server.js
require('dotenv').config();
const express = require('express');
const app = express();

//Middlewre
app.use(express.json());

//Load Config
const PORT = process.env.PORT || 3000;
const BASE_URI = process.env.BASE_URI || '/api/v1';

// Import Routes
const apiRoutes = require('./src/routes/apiRoutes');
app.use(BASE_URI,apiRoutes);// This uses the /api/v1 from .env

app.listen(PORT, () => {
    console.log('Server running on port ${PORT}');
    console.log('Base URI: http//loclhost:${PORT}${BASE_URI}');
});
