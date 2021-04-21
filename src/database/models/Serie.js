module.exports = function(sequelize, dataTypes){
    let alias = 'Series';
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

        release_date: {
            type: dataTypes.DATE,
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

        end_date: {
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
            tableName: 'series',
            timestamps: true, 
            underscored: true,
            createdAt: "created_at",
            updatedAt: "updated_at"
        }

        const Serie = sequelize.define(alias, cols, config);

        Serie.associate= function(models) {
            Serie.hasMany(models.Characters, {
            as: 'character',
            foreignKey: 'fk_character_serie_id'
     })
 
        Serie.belongsTo(models.Genres, {
            as: 'genre',
            foreignKey: 'fk_genre_serie_id'
})
}

    return Serie;
        }

        