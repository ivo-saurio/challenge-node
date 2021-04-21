module.exports = function(sequelize, dataTypes){
    let alias = 'Characters_movies';
    let cols = {

        id: {
            type: dataTypes.INTEGER,
            notNull: true,
            primaryKey: true,
            autoIncrement: true,
            unsigned: true
        },
       
        created_at: {
            type: dataTypes.DATE,
            notNull: false
        },

        updated_at: {
            type: dataTypes.DATE,
            notNull: false
        },

        deleted_at: {
            type: dataTypes.DATE,
            notNull: false
        },

        character_id: {
            type: dataTypes.INTEGER,
            notNull: true,
            unsigned: true
        },

        movie_id: {
            type: dataTypes.INTEGER,
            notNull: true,
            unsigned: true
        },


        }

        let config = {
            tableName: 'characters_movies',
            timestamps: true, 
            underscored: true,
            createdAt: "created_at",
            updatedAt: "updated_at"
        }

        const CharacterMovie = sequelize.define(alias, cols, config);

            CharacterMovie.associate= function(models) {
                CharacterMovie.belongsToMany(models.Movies, {
                    as: 'characterMovies',
                    foreignKey: 'fk_character_movie_id'
         })
     
                CharacterMovie.belongsToMany(models.Characters, {
                as: 'characterCh',
                foreignKey: 'fk_movie_character_id'
 })
}

    return CharacterMovie;
        }
