const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.js')[env];
const db = {};
const PlantDetail = require('./plantDetail');
const PlantImage = require('./plantImage');
const User = require("./user");
const View = require('./view');


const sequelize = new Sequelize(config.database, config.username, config.password, config);

db.sequelize = sequelize;
db.Sequelize = Sequelize;





db.PlantDetail = PlantDetail;
db.PlantImage = PlantImage;
db.User = User;
db.View = View;






PlantDetail.initiate(sequelize);
PlantImage.initiate(sequelize);
User.init(sequelize);
View.init(sequelize);





PlantDetail.associate(db);
PlantImage.associate(db);
User.associate(db);
View.associate(db);





module.exports = db;
