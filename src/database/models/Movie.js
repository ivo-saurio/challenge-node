module.exports = function(sequelize, dataTypes){
    let alias = 'Movies';
    let cols = {

        id: {
            type: dataTypes.INTEGER,
            notNull: true,
            primaryKey: true,
            autoIncrement: true,
            unsigned: true
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
        
        created_at: {
            type: dataTypes.DATE
        },
        
        updated_at: {
            type: dataTypes.DATE
        },
        
        deleted_at: {
            type: dataTypes.DATE
        },

        genre_id: {
            type: dataTypes.INTEGER,
            notNull: false,
            unsigned: true
        },

        character_id: {
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

            Movie.associate= function(models) {
                Movie.hasMany(models.Characters, {
                as: 'character',
                foreignKey: 'fk_character_id'
         })
     
                Movie.belongsTo(models.Genres, {
                as: 'genre',
                foreignKey: 'fk_genre_id'
 })
}

    return Movie;
        }

        