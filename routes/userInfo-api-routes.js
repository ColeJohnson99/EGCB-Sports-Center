var db = require("../models");

//POST route for saving new user info
module.exports = function(app) {
    app.post("api/userInfo", function(req, res) {
        db.userInfo.create(req.body).then(function(dbuserInfo) {
            res.json(dbuserInfo)
        });
    });
}