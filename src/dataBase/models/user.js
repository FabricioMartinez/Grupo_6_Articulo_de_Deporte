/**
 * 
 * @param {import('sequelize').Sequelize} sequelize 
 * @param {import('sequelize/types').DataTypes} dataTypes 
 * @returns 
 */


module.exports = (sequelize, dataTypes) => {
    let alias = 'usuarios';
    let colum = {
        id_usuarios: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: dataTypes.STRING
        },
        last_name: {
            type: dataTypes.STRING
        },
        email: {
            type: dataTypes.STRING
        },
        foto:{
            type: dataTypes.STRING
        },
        password: {
            type: dataTypes.STRING
        },
        password_confirm:{
            type: dataTypes.STRING
        },
        phone: {
            type: dataTypes.INTEGER
        }
    };
    let config = {
        tableName: 'usuarios',
        timestamps: false
    };

    const Usuario = sequelize.define(alias, colum, config); 

    Usuario.findByField = async (field, value) => {
        try {
            const result = await Usuario.findOne({ where: { [field]: value } });
            return result;
        } catch (error) {
            throw error;
        }
    };

    return Usuario; 
};
