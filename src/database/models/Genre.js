module.exports = function(sequelize, dataTypes){
    let alias = 'Genres';
    let cols = {

        id: {
            type: dataTypes.INTEGER.UNSIGNED,
            notNull: true,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
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
        }

        }

        let config = {
            tableName: 'genres',
            timestamps: true, 
            underscored: true,
            createdAt: "created_at",
            updatedAt: "updated_at"
        }

        const Genre = sequelize.define(alias, cols, config);


    return Genre;
        }
