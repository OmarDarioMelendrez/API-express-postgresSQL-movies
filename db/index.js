const { Sequelize } = require('sequelize');
const config = require('../config')

// const sequelize = new Sequelize(config.DB_HOST, {logging: false})

const sequelize = new Sequelize(`postgres://${config.DB_USER}:${config.DB_PASSWORD}@${config.DB_HOST}:5432/${config.DB_NAME}`, {logging: false, dialect:"postgres"})


module.exports = sequelize