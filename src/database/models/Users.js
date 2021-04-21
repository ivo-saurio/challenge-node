module.exports = function(sequelize, dataTypes){
    let alias = 'Users';
    let cols = {

        id: {
            type: dataTypes.INTEGER,
            notNull: true,
            primaryKey: true,
            autoIncrement: true,
            unsigned: true
        },
        first_name: {
            type: dataTypes.STRING,
            notNull: true

        },
        user_name: {
            type: dataTypes.STRING,
            notNull: true
        },

        email: {
            type: dataTypes.STRING,
            notNull: true
        },

        password: {
            type: dataTypes.STRING,
            notNull: true
        },

        created_at: {
            type: dataTypes.DATE
        },
        updated_at: {
            type: dataTypes.DATE
        },

        }

        let config = {
            tableName: 'users',
            timestamps: true, 
            underscored: true,
            createdAt: "created_at",
            updatedAt: "updated_at"
        }

        const User = sequelize.define(alias, cols, config);

    

    return User;
        }
