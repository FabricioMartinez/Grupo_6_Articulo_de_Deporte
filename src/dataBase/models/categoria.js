/**
 * 
 * @param {import('sequelize').Sequelize} sequelize 
 * @param {import('sequelize/types').DataTypes} dataTypes 
 * @returns 
 */


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
        timestamps: false,
    };
    const categoria = sequelize.define(alias, colum, config)

    categoria.associate = (models) => {
        categoria.hasMany(models.Products, {
            as: "productos",
            foreignKey: "id_categoria"
        });
    
    }
    
    

    return categoria
}