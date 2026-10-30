
const jwt = require("jsonwebtoken");

const protect = (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;

        // Check whether the Authorization header exists
        if (!authHeader || !authHeader.startsWith("Bearer ")) {
            return res.status(401).json({
                message: "Access denied. Token required."
            });
        }

        // Extract the token from "Bearer <token>"
        const token = authHeader.split(" ")[1];

        // Verify the token's signature and expiry
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // Make the token payload available to later handlers
        req.user = decoded;

        // Continue to the requested route
        next();

    } catch (error) {
        return res.status(401).json({
            message: "Invalid or expired token"
        });
    }
};

module.exports = { protect };
