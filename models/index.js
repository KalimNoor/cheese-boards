//A place where we can export all models centralised location 
const User = require ('./board.model')
const Cheese = require('./cheese.model')
const Board = require('./board.model')

//One to many 
User.hasMany(Board)
Board.belongsTo(User)

//Many to many 
Board.belongsToMany(Cheese, {through: 'Board_Cheese'})
Cheese.belongsToMany(Board, {through: 'Board_Cheese'})


module.exports = { User, Cheese, Board }