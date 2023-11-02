/**
 * 
 * @param {import('sequelize').Sequelize} sequelize 
 * @param {import('sequelize/types').DataTypes} dataTypes 
 * @returns 
 */

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
    tallas.associate = (models) => {
        tallas.hasMany(models.Products, {
            as: "productos",
            foreignKey: "id_tallas"
        });
    }

    return tallas
}