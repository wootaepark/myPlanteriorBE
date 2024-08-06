const Sequelize = require("sequelize");

class User extends Sequelize.Model{
    static init(sequelize) {
        super.init({
            user_id : {
                type : Sequelize.STRING,
                allowNull : false,
                primaryKey : true,
            },
            name: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            email: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            source: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            accessToken : {
                type : Sequelize.STRING,
                
            }
        }, {
            sequelize,
            timestamps: false,
            underscored: false,
            modelName: 'User',
            tableName: 'users',
            paranoid: false,
            charset: 'utf8',
            collate: 'utf8_general_ci',
        })
    }
    static associate(db){
        db.User.hasMany(db.View, {foreignKye : 'user_id'});
        
    }
}

module.exports = User
// 유저 정보 (google, kakao Oauth 를 이용한 access 토큰 업데이트 및 저장을 위한 테이블, 추후 추가 예정)