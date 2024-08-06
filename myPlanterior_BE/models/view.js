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
// 해당 유저가 과거에 추천 받은 식물 데이터 목록 (추후 개발 예정)