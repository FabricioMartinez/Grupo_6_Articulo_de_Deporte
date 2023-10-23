module.exports = (sequelize, dataTypes) => {
    let alias = 'tallas';
    let colum = {
        id_tallas: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        talles: {
            type: dataTypes.STRING
        }
    };
    let config = {
        tableName: 'tallas',
        timestamps: false
    };
    const tallas = sequelize.define(alias, colum, config)

    return tallas
}