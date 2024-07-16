const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.js')[env];
const db = {};
const PlantDetail = require('./plantDetail');


const sequelize = new Sequelize(config.database, config.username, config.password, config);

db.sequelize = sequelize;
db.Sequelize = Sequelize;



db.PlantDetail = PlantDetail;



PlantDetail.initiate(sequelize);


PlantDetail.associate(db);


module.exports = db;
