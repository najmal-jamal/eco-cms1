const { Sequelize } = require('sequelize');
require('dotenv').config();

exports.sequelize = new Sequelize('cms_db', process.env.DB_USER, process.env.DB_PASS, {
    host: 'database-1.cdzqkemlwxzf.ap-south-1.rds.amazonaws.com',
    dialect: 'mysql',
    port:3306,
    logging: false
});