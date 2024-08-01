const Sequelize = require('sequelize');

class View extends Sequelize.Model{
    static init(sequelize) {
        super.init({
            viewedAt: {
                type: Sequelize.DATE,
                defaultValue: Sequelize.NOW,
            }
        }, {
            sequelize,
            timestamps: false,
            underscored: false,
            modelName: 'View',
            tableName: 'views',
            paranoid: false,
            charset: 'utf8',
            collate: 'utf8_general_ci',
        })
    }
    static associate(db){
        db.View.belongsTo(db.PlantDetail, {foreignKey : 'contentNumber'});
        db.View.belongsTo(db.User, {foreignKey : 'user_id'})
    }
}

module.exports = View;