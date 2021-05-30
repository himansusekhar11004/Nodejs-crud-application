const jwt = require('jsonwebtoken');
const config = require('../../config');
VerifyToken = (req, res, next) => {
    const token = req.headers['x-access-token'];
    if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
    jwt.verify(token, config.secret, (err, decode) => {
        if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
        req.userId = decode.id;
        next();
    });
}

module.exports = VerifyToken;
