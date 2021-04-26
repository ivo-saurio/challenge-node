module.exports = function(sequelize, dataTypes){
    let alias = 'Movies';
    let cols = {

        id: {
            type: dataTypes.INTEGER.UNSIGNED,
            notNull: true,
            primaryKey: true,
            autoIncrement: true,
        },
        
        title: {
            type: dataTypes.STRING,
            notNull: true

        },
        
        image: {
          type: dataTypes.STRING,
          notNull: true  
        },
        
        rating: {
            type: dataTypes.FLOAT,
            notNull: true,
            unsigned: true
            
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

        release_date : {
            type: dataTypes.DATE,
            notNull: true
        },

        genre_id: {
            type: dataTypes.INTEGER,
            notNull: false,
            unsigned: true
        },
        

        }

        let config = {
            tableName: 'movies',
            timestamps: true, 
            underscored: true,
            createdAt: "created_at",
            updatedAt: "updated_at"
        }

        const Movie = sequelize.define(alias, cols, config);

Movie.associate = function(models) {
    Movie.belongsToMany(models.Characters, {
        as: "characters_movies",
        through:"character_movie",
        foreignKey: "movie_id",
        otherKey: "character_id",
        timestamps: true
})

    Movie.belongsTo(models.Genres, {
        as: 'genremovie',
        foreignKey: 'genre_id'
    })
}
    return Movie;
        }

        