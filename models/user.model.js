const { DataTypes, Model } = require('sequelize')
const db = require('../db/db')

class User extends Model {}

User.init({
    name: {
        type: DataTypes.STRING
    },

    email: {
        type: DataTypes.STRING
    }
},
{
    sequelize: db
})

module.exports = User