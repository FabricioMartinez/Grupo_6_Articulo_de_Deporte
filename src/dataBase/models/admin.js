/**
 * 
 * @param {import('sequelize').Sequelize} sequelize 
 * @param {import('sequelize/types').DataTypes} dataTypes 
 * @returns 
 */


module.exports = (sequelize, dataTypes) => {
    let alias = 'administradores';
    let colum = {
        id_admin: {
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
        tableName: 'administradores',
        timestamps: false
    };
    const admin = sequelize.define(alias, colum, config); 

    admin.findByField = async (field, value) => {
        try {
            const result = await admin.findOne({ where: { [field]: value } });
            return result;
        } catch (error) {
            throw error;
        }
    };
    return admin; 
};