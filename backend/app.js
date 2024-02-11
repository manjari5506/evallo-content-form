const express = require('express');
const mongoose = require('mongoose');
const contentRoutes = require('./routes/contentRoutes');
const authRoutes = require('./routes/authRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/evallo', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Error connecting to MongoDB:', err));

// Routes
app.use('/auth', authRoutes); // Authentication routes
app.use('/content', contentRoutes); // Content routes

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
