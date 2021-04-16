const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../sequalize/dbConnection')

const sq = sequelize.sequelize;

exports.Categories = sq.define('Categories', {
    category_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    image: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    }
})