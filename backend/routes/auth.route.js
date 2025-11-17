const {signup,login,logout} = require('../controllers/auth.controller');
const auth = require("../middlewares/auth.middleware");
const express = require('express');
const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);
router.post('/logout', logout);
router.get("/me", auth, (req, res) => {
    res.json({ user: req.user });
});

module.exports = router;