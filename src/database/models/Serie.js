module.exports = function(sequelize, dataTypes){
    let alias = 'Series';
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

        release_date: {
            type: dataTypes.DATE,
            notNull: true
        },

        history: {
            type:dataTypes.STRING,
            notNull: true
        },

        rating: {
            type:dataTypes.FLOAT,
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
                
                Serie.belongsTo(models.Genres, {
                    as: 'seriesgenre',
                    foreignKey: 'genre_id'
     })
                Serie.belongsToMany(models.Characters, {
                    as: "characters_series",
                    through:"character_serie",
                    foreignKey: "serie_id",
                    otherKey: "character_id",
                    timestamps: true
                })
}

    return Serie;
        }

        