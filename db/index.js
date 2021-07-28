const { Sequelize } = require('sequelize');
const config = require('../config')

const sequelize = new Sequelize(config.DB_HOST, {logging: false})

module.exports = sequelize