const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../sequalize/dbConnection')

const sq = sequelize.sequelize;

const Sliders = sq.define('Sliders', {
    tagline: {
        type: DataTypes.STRING,
        allowNull: false
    },
    image: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type:DataTypes.STRING,
        allowNull:false
    }
});
// Sliders.sync({alter:true});
module.exports=Sliders;