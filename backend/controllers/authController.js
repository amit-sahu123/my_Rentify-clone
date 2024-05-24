const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

// Register new user
exports.register = async (req, res) => {
    const { firstName, lastName, email, phoneNumber, password, role } = req.body;
    try {
        let user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ message: 'User already exists' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        user = new User({
            firstName,
            lastName,
            email,
            phoneNumber,
            password: hashedPassword,
            role,
        });

        await user.save();

        const payload = { userId: user.id };
        const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.status(201).json({ token, user });
    } catch (error) {
        console.error('Server error', error);
        res.status(500).json({ message: 'Server error' });
    }
};

// Login existing user
exports.login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        const payload = { userId: user.id };
        const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '5d' });

        res.status(200).json({ token, user });
    } catch (error) {
        console.error('Server error', error);
        res.status(500).json({ message: 'Server error' });
    }
};

// Logout user
exports.logout = async (req, res) => {
    // Implement token invalidation if using a token blacklist, or just return a success message
    res.status(200).json({ message: 'User logged out successfully' });
};
