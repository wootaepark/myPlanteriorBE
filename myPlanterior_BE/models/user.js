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