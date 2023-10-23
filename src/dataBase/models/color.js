module.exports = (sequelize, dataTypes) => {
    let alias = 'color';
    let colum = {
        id_color: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        colores: {
            type: dataTypes.STRING
        }
    };
    let config = {
        tableName: 'color',
        timestamps: false
    };
    const color = sequelize.define(alias, colum, config)

    return color
}