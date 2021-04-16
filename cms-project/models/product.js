const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../sequalize/dbConnection');
const {Categories} = require('./category');

const sq = sequelize.sequelize;

const Products = sq.define('Products', {
    product_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    image: {
        type: DataTypes.STRING,
        allowNull: false
    },
    price: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    rating: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    category_id: {
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
Products.belongsTo(Categories,{onDelete:"CASCADE",
    foreignKey:'category_id'});
Categories.hasMany(Products);
// Products.sync({alter:true});

module.exports=Products;