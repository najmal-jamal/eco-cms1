const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../sequalize/dbConnection')

const sq = sequelize.sequelize;

exports.Authors = sq.define('Author', {
    author_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    image: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: false
    }
})
// Authors.sync({alter:true});