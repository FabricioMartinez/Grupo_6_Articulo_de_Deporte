/**
 * 
 * @param {import('sequelize').Sequelize} sequelize 
 * @param {import('sequelize/types').DataTypes} dataTypes 
 * @returns 
 */

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
            type: dataTypes.STRING
        },
        id_categoria: {
            type: dataTypes.INTEGER,

        },
        id_color: {
            type: dataTypes.INTEGER,

        },
        id_tallas:{
            type:dataTypes.INTEGER,

        }
    };
    let config = {
        tableName: 'productos',
        timestamps: false,
    };
    const productos = sequelize.define(alias, colum, config)

    //categoria
    productos.associate = (models) => {
        productos.belongsTo(models.categoria, {
            as: "categoria",
            foreignKey: "id_categoria"
        });
        productos.belongsTo(models.color, {
            as: "color",
            foreignKey: "id_color"
        });
        productos.belongsTo(models.tallas, {
            as: "tallas",
            foreignKey: "id_tallas"
        });
    }
    
    
    return productos
}