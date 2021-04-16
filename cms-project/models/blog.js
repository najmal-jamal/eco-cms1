const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../sequalize/dbConnection');
const { Authors } = require('./author');

const sq = sequelize.sequelize;

const Blogs = sq.define('Blogs', {

    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    image: {
        type: DataTypes.STRING,
        allowNull: false
    },
    content: {
        type: DataTypes.STRING,
        allowNull: false
    },
    author_id: {
        type: DataTypes.INTEGER,
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
Blogs.belongsTo(Authors,{onDelete:"CASCADE",
    foreignKey:'author_id'});
Authors.hasMany(Blogs);
// Blogs.sync({alter:true});
module.exports=Blogs;