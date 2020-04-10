var db = require("../models");

//POST route for saving new user info
module.exports = function(app) {
    app.post("/api/userInfo", function(req, res) {
      console.log(req)
        db.UserInfo.create({
          UserID: req.body.UserID,
          Email: req.body.Email,
          UserPassword: req.body.UserPassword
        }).then(function(dbuserInfo) {
          res.json(dbuserInfo)
        })
            
        });
        app.get("/api/login", function(req, res){
          console.log(req.query.UserID);
          db.UserInfo.findOne({
            where: {
              UserID: req.query.UserID,
              UserPassword: req.query.UserPassword
            },
          }).then(function(dbuserInfo) {
          console.log(dbuserInfo);
          });
        });

    
}
