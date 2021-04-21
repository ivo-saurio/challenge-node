module.exports = function(sequelize, dataTypes){
    let alias = 'Characters_series';
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

        characterserie_id: {
            type: dataTypes.INTEGER,
            notNull: true,
            unsigned: true
        },

        serie_id: {
            type: dataTypes.INTEGER,
            notNull: true,
            unsigned: true
        },


        }

        let config = {
            tableName: 'characters_series',
            timestamps: true, 
            underscored: true,
            createdAt: "created_at",
            updatedAt: "updated_at"
        }

        const CharacterSerie = sequelize.define(alias, cols, config);

            CharacterSerie.associate= function(models) {
                CharacterSerie.belongsToMany(models.Series, {
                as: 'characterSerie',
                foreignKey: 'fk_characters_serie_id'
     })
 
                CharacterSerie.belongsToMany(models.Characters, {
                as: 'serieCharacter',
                foreignKey: 'fk_serie_character_id'
})
}

    return CharacterSerie;
        }
