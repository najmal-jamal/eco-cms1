const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../sequalize/dbConnection')

const sq = sequelize.sequelize;

const Pages = sq.define('Pages', {
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    bgimage: {
        type: DataTypes.STRING,
        allowNull: false
    },
    subtitle: {
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
});
// Pages.sync({alter:true});
module.exports=Pages;