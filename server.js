const express = require("express");
const routes = require("./routes");
const app = express();
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 4000;

const db = require("./models");

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ type: "application/json" }));
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
app.use(express.static("public"));
app.use(routes);

// Start the API server
db.sequelize.sync({ force: true }).then(function() {
app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
});
