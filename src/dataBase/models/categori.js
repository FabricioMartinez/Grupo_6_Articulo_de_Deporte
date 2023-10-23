module.exports = (sequelize, dataTypes) => {
    let alias = 'categoria';
    let colum = {
        id_categoria: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        opciones: {
            type: dataTypes.STRING
        }
    };
    let config = {
        tableName: 'categorias',
        timestamps: false
    };
    const categoria = sequelize.define(alias, colum, config)

    return categoria
}