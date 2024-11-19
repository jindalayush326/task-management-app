const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const connectDB = require('./db');
const taskRoutes = require('./routes/tasks');

dotenv.config();
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Database connection
connectDB();

// Routes
app.use('/api/tasks', taskRoutes);

// Error handling
app.use((err, req, res, next) => {
    res.status(err.status || 500).json({ error: err.message });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
