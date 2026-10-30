
const express = require("express");
const router = express.Router();

const { protect } = require("../middleware/authMiddleware");

router.get("/private", protect, (req, res) => {
    res.status(200).json({
        message: "Welcome! You accessed a protected route.",
        userId: req.user.userId
    });
});

module.exports = router;
