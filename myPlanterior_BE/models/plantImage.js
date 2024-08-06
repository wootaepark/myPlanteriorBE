const Sequelize = require('sequelize');

class PlantImage extends Sequelize.Model{
    static initiate(sequelize){
        PlantImage.init({
            contentNumber : {
                type : Sequelize.INTEGER,
                allowNull : false,

            }, // 컨텐츠 번호
            plantName : {
                type : Sequelize.STRING,
                allowNull : false,
            }, // 식물 이름
            fileNumber : {
                type : Sequelize.INTEGER,
                allowNull : false,
            }, // 같은 식물이미지의 순번
            imageSource : {
                type : Sequelize.STRING,
                allowNull : true,
            },// 이미지 저장 url
            imageName : {
                type : Sequelize.STRING,
                allowNull : true,
            }, // 이미지 이름
            thumbnailName : {
                type : Sequelize.STRING,
                allowNull : true,
            }, // 썸네일 이름
            thumbnailSource : {
                type : Sequelize.STRING,
                allowNull : true
            }, // 썸네일 저장 url






        },
        {
            sequelize,
            timestamps : false,
            underscored : false,
            modelName : 'plantImage',
            tableName : 'plantImages',
            paranoid : false,
            charset : 'utf8mb4',
            collate : 'utf8mb4_general_ci',
    
        }
    
    )

    }

    static associate(db){
       
        db.PlantImage.belongsTo(db.PlantDetail,{foreignKey : 'contentNumber', sourceKey : 'contentNumber'});
        
    }




 }
 module.exports = PlantImage;
 // 식물 이미지 소스 (출처 : 농촌진흥원 , 트리인포 <https://www.treeinfo.net/>)