module.exports = function(sequelize, dataTypes){
    let alias = 'Character_movie';
    let cols = {

        id: {
            type: dataTypes.INTEGER.UNSIGNED,
            notNull: true,
            primaryKey: true,
            autoIncrement: true,
        },
        
        created_at: {
            type: dataTypes.DATE,
        },

        updated_at: {
            type: dataTypes.DATE,
        },

        deleted_at: {
            type: dataTypes.DATE,
        },

        character_id : {
            type: dataTypes.INTEGER,
            notNull: true,
        },

        movie_id : {
            type: dataTypes.INTEGER,
            notNull: true,

        },
        

        }

        let config = {
            tableName: 'character_movie',
            timestamps: true, 
            underscored: true,
            createdAt: "created_at",
            updatedAt: "updated_at"
        }

        const Character_Movie = sequelize.define(alias, cols, config);

            return Character_Movie;
        }

        