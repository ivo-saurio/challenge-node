module.exports = function(sequelize, dataTypes){
    let alias = 'Characters';
    let cols = {

        id: {
            type: dataTypes.INTEGER.UNSIGNED,
            notNull: true,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: dataTypes.STRING,
            notNull: true

        },
        age: {
            type: dataTypes.INTEGER,
            notNull: true
        },
        image: {
          type: dataTypes.STRING,
          notNull: true  
        },

        history: {
            type: dataTypes.STRING,
            notNull: true
        },

        created_at: {
            type: dataTypes.DATE
        },

        updated_at: {
            type: dataTypes.DATE
        },

        deleted_at: {
            type: dataTypes.DATE
        },
        

        }

        let config = {
            tableName: 'characters',
            timestamps: true, 
            underscored: true,
            createdAt: "created_at",
            updatedAt: "updated_at"
        }

        const Character = sequelize.define(alias, cols, config);


        Character.associate = function(models){

            Character.belongsToMany(models.Movies, {
                as: "movies_characters",
                through: "character_movie",
                foreignKey: "character_id",
                otherKey: "movie_id",
                timestamps: true
            })

            Character.belongsToMany(models.Series, {
                as: "series_characters",
                through: "character_serie",
                foreignKey: "serie_id",
                otherKey: "character_id",
                timestamps: true
            })

        }



            return Character;
        }

        