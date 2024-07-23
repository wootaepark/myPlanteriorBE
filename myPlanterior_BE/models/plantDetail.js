// 식물 상세 정보 테이블

const Sequelize = require('sequelize');

class PlantDetail extends Sequelize.Model{ 
    static initiate(sequelize){
        PlantDetail.init({
            contentNumber : {
                type : Sequelize.INTEGER,
                allowNull : false,
                primaryKey : true,
            }, // 식물 고유 번호 1

            plntbneName : {
                type : Sequelize.TEXT,
                allowNull : true,

            },// 식물학명 2
            plntzrName : {
                type : Sequelize.TEXT,
                allowNull : true,

            },// 식물영명 3
            plantName : {
                type : Sequelize.TEXT,
                allowNull : true,
            },// 식물 유통명 (식물 명) 4
            fmlCode : {
                type : Sequelize.INTEGER,
                allowNull : true,
            }, // 식물의 과 코드 5
            fmlCodeName : {
                type : Sequelize.TEXT,
                allowNull : true,
            }, // 식물의 과 코드명 6
            orgplceInfo : {
                type : Sequelize.TEXT,
                allowNull : true,
            }, // 원산지 정보 7
            adviseInfo : {
                type : Sequelize.TEXT,
                allowNull : true,
            }, // 조언 정보 8
            growthHgInfo : {
                type : Sequelize.INTEGER,
                allowNull : true,
            }, // 성장 높이 정보 9
            growthAraInfo : {
                type : Sequelize.INTEGER,
                allowNull : true,
            }, // 성장 너비 정보 10
            lefStleInfo : {
                type : Sequelize.TEXT,
                allowNull : true,
            }, // 잎형태 정보 11
            smellCode : {
                type : Sequelize.INTEGER,
                allowNull : true,
            }, // 향기 코드 12
            smellCodeName : {
                type : Sequelize.TEXT,
                allowNull : true,
            }, // 향기 코드명 13
            toxctyInfo : {
                type : Sequelize.TEXT,
                allowNull : true,
            }, // 독성 정보 14
            prpgtEraInfo : {
                type : Sequelize.TEXT,
                allowNull : true,
            }, // 번식 시기 정보 15
            etcEraInfo : {
                type : Sequelize.TEXT,
                allowNull : true,
            }, // 기타 시기 정보 16
            managelevelCode : {
                type : Sequelize.INTEGER,
                allowNull : true,
            }, // 관리수준 코드 17
            managelevelCodeName : {
                type : Sequelize.TEXT,
                allowNull : true,
            }, // 관리수준 코드명 18
            grwtveCode : {
                type : Sequelize.INTEGER,
                allowNull : true,
            }, // 성장속도 코드 19
            grwtveCodeName : {
                type : Sequelize.TEXT,
                allowNull : true,
            }, // 성장속도 코드명 20 
            grwhTpCode : {
                type : Sequelize.INTEGER,
                allowNull : true,
            }, // 생육온도 코드 21
            grwhTpCodeName : {
                type : Sequelize.TEXT,
                allowNull : true,
            }, // 생육온도 코드명 22 
            winterLwetTpCode: {
                type : Sequelize.INTEGER,
                allowNull : true,
            }, // 겨울최저온도 코드 23 
            winterLwetTpCodeName : {
                type : Sequelize.TEXT,
                allowNull : true,
            }, // 겨울최저온도 코드명 24
            hdCode : {
                type : Sequelize.INTEGER,
                allowNull : true,
            }, // 습도 코드 25
            hdCodeName : {
                type : Sequelize.TEXT,
                allowNull : true,
            }, // 습도 코드명 26
            frtlzrInfo : {
                type : Sequelize.TEXT,
                allowNull : true,
            }, // 비료 정보 27
            soilInfo : {
                type : Sequelize.TEXT,
                allowNull : true,
            }, // 토양 정보 28
            watercycleSprngCode : {
                type : Sequelize.INTEGER,
                allowNull : true,
            }, // 물주기 봄 코드 29
            watercycleSprngCodeName : {
                type : Sequelize.TEXT,
                allowNull : true,
            }, // 물주기 봄 코드명 30
            watercycleSummerCode : {
                type : Sequelize.INTEGER,
                allowNull : true,
            }, // 물주기 여름 코드 33
            watercycleSummerCodeName : {
                type : Sequelize.TEXT,
                allowNull : true,
            }, // 물주기 여름 코드명 34
            watercycleAutumnCode : {
                type : Sequelize.INTEGER,
                allowNull : true,
            }, // 물주기 가을 코드 35
            watercycleAutumnCodeName : {
                type : Sequelize.TEXT,
                allowNull : true,
            }, // 물주기 가을 코드명 36
            watercycleWinterCode : {
                type : Sequelize.INTEGER,
                allowNull : true,
            }, // 물주기 겨울 코드 37
            watercycleWinterCodeName : {
                type : Sequelize.TEXT,
                allowNull : true,
            }, // 물주기 겨울 코드명 38
            dlthtsManageInfo : {
                type : Sequelize.TEXT,
                allowNull : true,
            }, // 병충해 관리 정보 39
            speclmanageInfo : {
                type : Sequelize.TEXT,
                allowNull : true,
            }, // 특별 관리 정보 40
            fncltyInfo : {
                type : Sequelize.TEXT,
                allowNull : true,
            }, // 기능성 정보 41
            managedemanddoCode : {
                type : Sequelize.INTEGER,
                allowNull : true,
            }, // 관리요구도 코드 42
            managedemanddoCodeNm : {
                type : Sequelize.TEXT,
                allowNull : true,
            }, // 관리요구 코드 명 43
            clCode_1 : {
                type : Sequelize.INTEGER,
                allowNull : true,
            }, // 분류 코드 _1 44
            clCode_2 : {
                type : Sequelize.INTEGER,
                allowNull : true,
            }, // 분류 코드 _2 45
            clCodeName_1 : {
                type : Sequelize.TEXT,
                allowNull : true,
            }, // 분류 코드명 _1 46
            clCodeName_2 : {
                type : Sequelize.TEXT,
                allowNull : true,
            }, // 분류 코드명 _2 47
            grwhstleCode_1 : {
                type : Sequelize.INTEGER,
                allowNull : true,
            }, // 생육행태 코드 _1 48
            grwhstleCode_2 : {
                type : Sequelize.INTEGER,
                allowNull : true,
            }, // 생육행태 코드 _2 49
            grwhstleCode_3 : {
                type : Sequelize.INTEGER,
                allowNull : true,
            }, // 생육행태 코드 _3 50
            grwhstleCodeName_1 : {
                type : Sequelize.TEXT,
                allowNull : true,
            }, // 생육행태 코드명 _1 51
            grwhstleCodeName_2 : {
                type : Sequelize.TEXT,
                allowNull : true,
            }, // 생육행태 코드명 _2 52
            grwhstleCodeName_3 : {
                type : Sequelize.TEXT,
                allowNull : true,
            }, // 생육행태 코드명 _3 53
            indoorpsncpacompositionCode_1 : {
                type : Sequelize.INTEGER,
                allowNull : true,
            }, // 실내정원구성 코드 _1 54
            indoorpsncpacompositionCode_2 : {
                type : Sequelize.INTEGER,
                allowNull : true,
            }, // 실내정원구성 코드 _2 55
            indoorpsncpacompositionCode_3 : {
                type : Sequelize.INTEGER,
                allowNull : true,
            }, // 실내정원구성 코드 _3 56
            indoorpsncpacompositionCodeName_1 : {
                type : Sequelize.TEXT,
                allowNull : true,
            }, // 실내정원구성 코드명 _1 57
            indoorpsncpacompositionCodeName_2 : {
                type : Sequelize.TEXT,
                allowNull : true,
            }, // 실내정원구성 코드명 _2 58
            indoorpsncpacompositionCodeName_3 : {
                type : Sequelize.TEXT,
                allowNull : true,
            }, // 실내정원구성 코드명 _3 59
            eclgyCode_1 : {
                type : Sequelize.INTEGER,
                allowNull : true,
            }, // 생태 코드 _1 60
            eclgyCode_2 : {
                type : Sequelize.INTEGER,
                allowNull : true,
            }, // 생태 코드 _2 61
            eclgyCodeName_1 : {
                type : Sequelize.TEXT,
                allowNull : true,
            }, // 생태 코드명 _1 62
            eclgyCodeName_2 : {
                type : Sequelize.TEXT,
                allowNull : true,
            }, // 생태 코드명 _2 63
            lefmrkCode_1 : {
                type : Sequelize.INTEGER,
                allowNull : true,
            }, // 잎마크 코드 _1 64
            lefmrkCode_2 : {
                type : Sequelize.INTEGER,
                allowNull : true,
            }, // 잎마크 코드 _2 65
            lefmrkCode_3 : {
                type : Sequelize.INTEGER,
                allowNull : true,
            }, // 잎마크 코드 _3 66
            lefmrkCodeName_1 : {
                type : Sequelize.TEXT,
                allowNull : true,
            }, // 잎마크 코드명 _1 67
            lefmrkCodeName_2 : {
                type : Sequelize.TEXT,
                allowNull : true,
            }, // 잎마크 코드명 _2 68
            lefmrkCodeName_3 : {
                type : Sequelize.TEXT,
                allowNull : true,
            }, // 잎마크 코드명 _3 69
            lefcolrCode_1 : {
                type : Sequelize.INTEGER,
                allowNull : true,
            }, // 잎색 코드 _1 70
            lefcolrCode_2 : {
                type : Sequelize.INTEGER,
                allowNull : true,
            }, // 잎색 코드 _2 71
            lefcolrCode_3 : {
                type : Sequelize.INTEGER,
                allowNull : true,
            }, // 잎색 코드 _3 72
            lefcolrCode_4 : {
                type : Sequelize.INTEGER,
                allowNull : true,
            }, // 잎색 코드 _4 73
            lefcolrCodeName_1 : {
                type : Sequelize.TEXT,
                allowNull : true,
            }, // 잎색 코드명 _1 74
            lefcolrCodeName_2 : {
                type : Sequelize.TEXT,
                allowNull : true,
            }, // 잎색 코드명 _2 75
            lefcolrCodeName_3 : {
                type : Sequelize.TEXT,
                allowNull : true,
            }, // 잎색 코드명 _3 76
            lefcolrCodeName_4 : {
                type : Sequelize.TEXT,
                allowNull : true,
            }, // 잎색 코드명 _4 77
            ignSeasonCode_1 : {
                type : Sequelize.INTEGER,
                allowNull : true,
            }, // 발화 계절 코드 _1 78
            ignSeasonCode_2 : {
                type : Sequelize.INTEGER,
                allowNull : true,
            }, // 발화 계절 코드 _2 79
            ignSeasonCode_3 : {
                type : Sequelize.INTEGER,
                allowNull : true,
            }, // 발화 계절 코드 _3 80
            ignSeasonCode_4 : {
                type : Sequelize.INTEGER,
                allowNull : true,
            }, // 발화 계절 코드 _4 81
            ignSeasonCodeName_1 : {
                type : Sequelize.TEXT,
                allowNull : true,
            }, // 발화 계절 코드명 _1 82
            ignSeasonCodeName_2 : {
                type : Sequelize.TEXT,
                allowNull : true,
            }, // 발화 계절 코드명 _2 83
            ignSeasonCodeName_3 : {
                type : Sequelize.TEXT,
                allowNull : true,
            }, // 발화 계절 코드명 _3 84
            ignSeasonCodeName_4 : {
                type : Sequelize.TEXT,
                allowNull : true,
            }, // 발화 계절 코드명 _4 85
            flclrCode_1 : {
                type : Sequelize.INTEGER,
                allowNull : true,
            }, // 꽃 색 코드 _1 86
            flclrCode_2 : {
                type : Sequelize.INTEGER,
                allowNull : true,
            }, // 꽃 색 코드 _2 87
            flclrCode_3 : {
                type : Sequelize.INTEGER,
                allowNull : true,
            }, // 꽃 색 코드 _3 88
            flclrCode_4 : {
                type : Sequelize.INTEGER,
                allowNull : true,
            }, // 꽃 색 코드 _4 89
            flclrCode_5 : {
                type : Sequelize.INTEGER,
                allowNull : true,
            }, // 꽃 색 코드 _5 90
            flclrCode_6 : {
                type : Sequelize.INTEGER,
                allowNull : true,
            }, // 꽃 색 코드 _6 91
            flclrCode_7 : {
                type : Sequelize.INTEGER,
                allowNull : true,
            }, // 꽃 색 코드 _7 92
            flclrCodeName_1 : {
                type : Sequelize.TEXT,
                allowNull : true,
            }, // 꽃 색 코드명 _1 93
            flclrCodeName_2 : {
                type : Sequelize.TEXT,
                allowNull : true,
            }, // 꽃 색 코드명 _2 94
            flclrCodeName_3 : {
                type : Sequelize.TEXT,
                allowNull : true,
            }, // 꽃 색 코드명 _3 95
            flclrCodeName_4 : {
                type : Sequelize.TEXT,
                allowNull : true,
            }, // 꽃 색 코드명 _4 96
            flclrCodeName_5 : {
                type : Sequelize.TEXT,
                allowNull : true,
            }, // 꽃 색 코드명 _5 97
            flclrCodeName_6 : {
                type : Sequelize.TEXT,
                allowNull : true,
            }, // 꽃 색 코드명 _6 98
            flclrCodeName_7 : {
                type : Sequelize.TEXT,
                allowNull : true,
            }, // 꽃 색 코드명 _7 99
            fmldeSeasonCode_1 :{
                type : Sequelize.INTEGER,
                allowNull : true,
            }, // 과일 계절 코드 _1 100
            fmldeSeasonCode_2 :{
                type : Sequelize.INTEGER,
                allowNull : true,
            }, // 과일 계절 코드 _2 101
            fmldeSeasonCode_3 :{
                type : Sequelize.INTEGER,
                allowNull : true,
            }, // 과일 계절 코드 _3 102
            fmldeSeasonCodeName_1 :{
                type : Sequelize.TEXT,
                allowNull : true,
            }, // 과일 계절 코드명 _1 103
            fmldeSeasonCodeName_2 :{
                type : Sequelize.TEXT,
                allowNull : true,
            }, // 과일 계절 코드명 _2 104
            fmldeSeasonCodeName_3 :{
                type : Sequelize.TEXT,
                allowNull : true,
            }, // 과일 계절 코드명 _3 105
            fmldecolrCode_1 : {
                type : Sequelize.INTEGER,
                allowNull : true,
            }, // 과일 색 코드 _1 106
            fmldecolrCode_2 : {
                type : Sequelize.INTEGER,
                allowNull : true,
            }, // 과일 색 코드 _2 107
            fmldecolrCode_3 : {
                type : Sequelize.INTEGER,
                allowNull : true,
            }, // 과일 색 코드 _3 108
            fmldecolrCodeName_1 : {
                type : Sequelize.TEXT,
                allowNull : true,
            }, // 과일 색 코드명 _1 109
            fmldecolrCodeName_2 : {
                type : Sequelize.TEXT,
                allowNull : true,
            }, // 과일 색 코드명 _2 110
            fmldecolrCodeName_3 : {
                type : Sequelize.TEXT,
                allowNull : true,
            }, // 과일 색 코드명 _3 111 
            prpgtmthCode_1 : {
                type : Sequelize.INTEGER,
                allowNull : true,
            }, // 번식 방법 코드 _1 112
            prpgtmthCode_2 : {
                type : Sequelize.INTEGER,
                allowNull : true,
            }, // 번식 방법 코드 _2 113
            prpgtmthCode_3 : {
                type : Sequelize.INTEGER,
                allowNull : true,
            }, // 번식 방법 코드 _3 114
            prpgtmthCodeName_1 : {
                type : Sequelize.TEXT,
                allowNull : true,
            }, // 번식 방법 코드명 _1 115
            prpgtmthCodeName_2 : {
                type : Sequelize.TEXT,
                allowNull : true,
            }, // 번식 방법 코드명 _2 116
            prpgtmthCodeName_3 : {
                type : Sequelize.TEXT,
                allowNull : true,
            }, // 번식 방법 코드명 _3 117
            lighttdemanddoCode_1 : {
                type : Sequelize.INTEGER,
                allowNull : true,
            }, // 광요구도 코드_1 118
            lighttdemanddoCode_2 : {
                type : Sequelize.INTEGER,
                allowNull : true,
            }, // 광요구도 코드_2 119
            lighttdemanddoCode_3 : {
                type : Sequelize.INTEGER,
                allowNull : true,
            }, // 광요구도 코드_3 120
            lighttdemanddoCodeName_1 : {
                type : Sequelize.TEXT,
                allowNull : true,
            }, // 광요구도 코드명_1 121
            lighttdemanddoCodeName_2 : {
                type : Sequelize.TEXT,
                allowNull : true,
            }, // 광요구도 코드명_2 122
            lighttdemanddoCodeName_3 : {
                type : Sequelize.TEXT,
                allowNull : true,
            }, // 광요구도 코드명_3 123
            postngplaceCode_1 : {
                type : Sequelize.INTEGER,
                allowNull : true,
            }, // 배치장소 코드_1 124
            postngplaceCode_2 : {
                type : Sequelize.INTEGER,
                allowNull : true,
            }, // 배치장소 코드_2 125
            postngplaceCode_3 : {
                type : Sequelize.INTEGER,
                allowNull : true,
            }, // 배치장소 코드_3 126
            postngplaceCode_4 : {
                type : Sequelize.INTEGER,
                allowNull : true,
            }, // 배치장소 코드_4 127
            postngplaceCode_5 : {
                type : Sequelize.INTEGER,
                allowNull : true,
            }, // 배치장소 코드_5 128
            postngplaceCodeName_1 : {
                type : Sequelize.TEXT,
                allowNull : true,
            }, // 배치장소 코드명_1 129
            postngplaceCodeName_2 : {
                type : Sequelize.TEXT,
                allowNull : true,
            }, // 배치장소 코드명_2 130
            postngplaceCodeName_3 : {
                type : Sequelize.TEXT,
                allowNull : true,
            }, // 배치장소 코드명_3 131
            postngplaceCodeName_4 : {
                type : Sequelize.TEXT,
                allowNull : true,
            }, // 배치장소 코드명_4 132
            postngplaceCodeName_5 : {
                type : Sequelize.TEXT,
                allowNull : true,
            }, // 배치장소 코드명_5 133
            dlthtsCode_1 : {
                type : Sequelize.INTEGER,
                allowNull : true,
            }, // 병충해 코드 _1 134
            dlthtsCode_2 : {
                type : Sequelize.INTEGER,
                allowNull : true,
            }, // 병충해 코드 _2 135
            dlthtsCode_3 : {
                type : Sequelize.INTEGER,
                allowNull : true,
            }, // 병충해 코드 _3 136
            dlthtsCode_4 : {
                type : Sequelize.INTEGER,
                allowNull : true,
            }, // 병충해 코드 _4 137
            dlthtsCodeName_1 : {
                type : Sequelize.TEXT,
                allowNull : true,
            }, // 병충해 코드명 _1 138
            dlthtsCodeName_2 : {
                type : Sequelize.TEXT,
                allowNull : true,
            }, // 병충해 코드명 _2 139
            dlthtsCodeName_3 : {
                type : Sequelize.TEXT,
                allowNull : true,
            }, // 병충해 코드명 _3 140
            dlthtsCodeName_4 : {
                type : Sequelize.TEXT,
                allowNull : true,
            }, // 병충해 코드명 _4 139



            hmdImprove : {
                type : Sequelize.STRING,
                allowNull : true,
            }, // 습도 개선 정도

            sickHouseSyndrome : {
                type : Sequelize.STRING,
                allowNull : true,
            }, // 새집증후군 효과 정도

            fromaldehydeRemoval : {
                type : Sequelize.INTEGER,
                allowNull : true,
            }, // 프롬알데히드 제거량 (점수)
            tolueneRemoval : {
                type : Sequelize.INTEGER,
                allowNull : true,
            }, // 톨루엔 제거량 (점수)
            negativeIonGen : {
                type : Sequelize.INTEGER,
                allowNull : true,
            }, // 음이온 발생량 (점수)


            relHumidityIncrease : {
                type : Sequelize.INTEGER,
                allowNull : true,
            },
            // 상대습도 증가량 (점수)

            co2Reduction : {
                type : Sequelize.INTEGER,
                allowNull : true,
            },
            // 이산화탄소 감소량 (점수)

            xyleneRemoval : {
                type : Sequelize.INTEGER,
                allowNull : true,
            },
            // 자일렌 제거량 (점수)

            coReduction : {
                type : Sequelize.INTEGER,
                allowNull : true,
            },
            // 일산화탄소 제거량 (점수)

            limoninIngredient: {
                type : Sequelize.INTEGER,
                allowNull : true,
            },
            // 리모닌성분함량 (점수)

            additionalPlace : {
                type : Sequelize.STRING,
                allowNull : true,
            },
            // 추가배치 장소 
            selectedCount : {
                type : Sequelize.INTEGER,
                defaultValue : 0,
            }, // 추천해준 횟수 카운트






            

        },
    {
        sequelize,
        timestamps : false,
        underscored : false,
        modelName : 'plantDetail',
        tableName : 'plantDetails',
        paranoid : false,
        charset : 'utf8mb4',
        collate : 'utf8mb4_general_ci',

    }
        )
    }



    
    static associate(db){
       
        db.PlantDetail.hasMany(db.PlantImage,{foreignKey : 'contentNumber', sourceKey : 'contentNumber'});
        
    }
}
module.exports = PlantDetail;