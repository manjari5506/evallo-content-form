const Content = require('../models/Content');

exports.submitContent = async (req, res) => {
    try {
        const { title, description, file } = req.body;
        const newContent = new Content({ title, description, file });
        await newContent.save();
        res.json({ message: 'Content submitted successfully!' });
    } catch (err) {
        console.error('Error submitting content:', err);
        res.status(500).json({ message: 'An error occurred while submitting content.' });
    }
};
