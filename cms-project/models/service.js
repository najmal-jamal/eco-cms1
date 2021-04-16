const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../sequalize/dbConnection')

const sq = sequelize.sequelize;

const Services = sq.define('Services', {
    title: {
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
    },
    meta_tags: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    meta_title: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    meta_description: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    extra_meta: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
})
// Services.sync({alter:true});
module.exports=Services;