const jwt = require("jsonwebtoken");

// Middleware to verify token
const verifyToken = (req, res, next) => {
    const authHeader = req.headers.token;
    if (authHeader) {
        const token = authHeader.split(" ")[1];
        jwt.verify(token, process.env.JWT_SEC, (err, user) => {
            if (err) return res.status(401).json("Token is not valid");
            req.user = user;  // Ensure user is set
            next();
        });
    } else {
        return res.status(401).json("You are not authenticated");
    }
};

// Middleware to verify token and authorization
const verifyTokenAndAuthorization = (req, res, next) => {
    verifyToken(req, res, () => {
        if (req.user && (req.user.id === req.params.id || req.user.isAdmin)) {
            next();
        } else {
            return res.status(403).json("You are not allowed to do that");
        }
    });
};

// Middleware to verify token and admin rights
const verifyTokenAndAdmin = (req, res, next) => {
    verifyToken(req, res, () => {
        if (req.user && req.user.isAdmin) {  // Ensure req.user exists
            next();
        } else {
            return res.status(403).json("You are not allowed to do that");
        }
    });
};

module.exports = { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin };
