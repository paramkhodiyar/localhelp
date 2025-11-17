const express = require("express");
const router = express.Router();

router.use("/auth", require("./auth.route"));
router.use("/become-provider", require("./becomeProvider.route"));
router.use("/categories", require("./category.route"));

module.exports = router;
