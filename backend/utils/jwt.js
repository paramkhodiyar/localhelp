const jwt = require('jsonwebtoken');
const SECRET_KEY = process.env.JWT_SECRET

function generateToken(payload) {
    const token = jwt.sign(payload, SECRET_KEY, { expiresIn: '1h' });
    return token;
}

function verifyToken(token) {
    try {
        const decoded = jwt.verify(token, SECRET_KEY);
        return decoded;
    } catch (err) {
        console.error('Token verification failed:', err)
        return null;
    }
}

module.exports = {
    generateToken,
    verifyToken
};