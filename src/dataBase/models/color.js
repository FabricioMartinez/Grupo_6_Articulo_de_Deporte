/**
 * 
 * @param {import('sequelize').Sequelize} sequelize 
 * @param {import('sequelize/types').DataTypes} dataTypes 
 * @returns 
 */

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

    color.associate = (models) => {
        color.hasMany(models.Products, {
            as: "productos",
            foreignKey: "id_color"
        });
    }

    return color
}