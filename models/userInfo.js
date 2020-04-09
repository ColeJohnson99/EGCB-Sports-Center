// Couldnt remember the columns we wanted, started with Name, email, and favorite team, easy to change.

module.exports = function(sequelize, DataTypes) {
    var userInfo = sequelize.define("userInfo", {
       Username: {
           type: DataTypes.STRING,
           allowNull: false,
       },
       Email: {
           type: DataTypes.STRING,
           allowNull: false,
       },
       Favorite_Team: {
           type: DataTypes.STRING,
           allowNull: false,
       }

    });
    return userInfo;
}

