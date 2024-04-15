// backend/server.js
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');

dotenv.config();


const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors()); // Add this line to enable CORS for all routes
app.use(express.json());
// console.log("tet", process.env.MONGODB_URI);

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/User', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

// Routes
app.use('/api/users', userRoutes);

// Home page route
app.get('/', (req, res) => {
  res.send('Welcome to the home page');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
