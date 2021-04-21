module.exports = function(sequelize, dataTypes){
    let alias = 'Characters';
    let cols = {

        id: {
            type: dataTypes.INTEGER,
            notNull: true,
            primaryKey: true,
            autoIncrement: true,
            unsigned: true
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
        movies_id: {
            type: dataTypes.INTEGER,
            notNull: false,
            unsigned: true
        },

        series_id: {
            type: dataTypes.INTEGER,
            notNull: false,
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

        }

        let config = {
            tableName: 'characters',
            timestamps: true, 
            underscored: true,
            createdAt: "created_at",
            updatedAt: "updated_at"
        }

        const Character = sequelize.define(alias, cols, config);

            Character.associate= function(models) {
                Character.hasMany(models.Movies, {
                as: 'movie',
                foreignKey: 'fk_movie_id'
         })
     
                Character.hasMany(models.Series, {
                as: 'serie',
                foreignKey: 'fk_serie_id'
 })
}
    return Character;
        }

        