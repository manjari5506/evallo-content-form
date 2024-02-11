const User = require('../models/User');

exports.signup = async (req, res) => {
    try {
        const { username, password } = req.body;
        const newUser = new User({ username, password });
        await newUser.save();
        res.json({ message: 'User signed up successfully!' });
    } catch (err) {
        console.error('Error signing up:', err);
        res.status(500).json({ message: 'An error occurred while signing up.' });
    }
};

exports.login = async (req, res) => {
    // Your login logic here
};
