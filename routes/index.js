const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api/api");
const saveRoutes = require("./api/api-routes");

// API Routes
router.use("/api", apiRoutes);
// router.use("/users", useroutes)
router.use("/save", saveRoutes)

// If no API routes are hit, send the React app
router.use(function (req, res) {
  res.sendFile(path.join(__dirname, "../client/public"));
});

module.exports = router;
