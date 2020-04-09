var db = require("../models");

//POST route for saving new user info
module.exports = function(app) {
    app.post("api/userInfo", function(req, res) {
        db.userInfo.create(req.body).then(function(dbuserInfo) {
            res.json(dbuserInfo)
        });
    });

    /*

    // Get route for retrieving a single post
  app.get("/api/userInfo/:id", function(req, res) {
    // Here we add an "include" property to our options in our findOne query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Author
    db.userInfo.findOne({
      where: {
        id: req.params.id
      },
      include: [db.Username]
    }).then(function(dbuserInfo) {
      res.json(dbuserInfo);
    });
  });
  */

}