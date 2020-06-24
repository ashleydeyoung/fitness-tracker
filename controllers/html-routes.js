//require dependencies
var path = require("path");

//exports html routes
module.exports = function(app) {

  //get route for exercise html
  app.get("/exercise", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
  });

  //get route for stats html for dashboard
  app.get("/stats", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/stats.html"));
  });

};