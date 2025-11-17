const express = require("express");
const router = express.Router();

const authMiddleware = require("../middlewares/auth.middleware");
const checkRole = require("../middlewares/role.middleware");
const { becomeProvider } = require("../controllers/provider.controller");

router.post(
    "/",
    authMiddleware,
    checkRole("CUSTOMER"),
    becomeProvider
);

module.exports = router;
