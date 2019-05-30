var db = require("../../models");

// Routes
// =============================================================
module.exports = function(app) {

 // GET route for getting all of the places
 app.get("/api/favorite/", function(req, res) {
   db.savedSearch.findAll({})
     .then(function(brewsandbarks) {
       res.json(brewsandbarks);
     });
 });


 // POST route for saving a new place
 app.post("/api/favorite/", function(req, res) {
   console.log(req.body);
   db.savedSearch.create({
     name: req.body.name,
     address: req.body.vicinity,
     rating: req.body.rating,
     userID: req.body.userID
    })
     .then(function(brewsandbarks) {
       res.json(brewsandbarks);
     });
 });

 // DELETE route for deleting places
 app.delete("/api/favorite/", function(req, res) {
   db.savedSearch.destroy({
     where: {
       id: req.body.id
     }
   })
     .then(function(brewsandbarks) {
       res.json(brewsandbarks);
     });
 });
};