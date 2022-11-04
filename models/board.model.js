const { DataTypes, Model } = require('sequelize')
//Db object Created in the db folder 
const db = require('../db/db')

class Board extends Model{}

//Creating the board structure likewise all the others too within the models directory 
Board.init({
    type: {
        type: DataTypes.STRING
    },

    description: {
        type: DataTypes.STRING
    },

    rating: {
        number: DataTypes.INTEGER
    }


},
{
    sequelize: db
})

module.exports = Board