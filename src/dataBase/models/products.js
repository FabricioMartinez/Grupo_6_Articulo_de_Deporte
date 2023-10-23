module.exports = (sequelize, dataTypes) => {
    let alias = 'Products';
    let colum = {
        id_productos: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: dataTypes.STRING
        },
        price: {
            type: dataTypes.INTEGER
        },
        description: {
            type: dataTypes.INTEGER
        },
        id_categoria: {
            type: dataTypes.INTEGER
        },
        id_color: {
            type: dataTypes.INTEGER
        }
    };
    let config = {
        tableName: 'productos',
        timestamps: false
    };
    const productos = sequelize.define(alias, colum, config)

    return productos
}