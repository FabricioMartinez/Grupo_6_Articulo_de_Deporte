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
            type: dataTypes.INTEGER
        },
        email: {
            type: dataTypes.INTEGER
        },
        password: {
            type: dataTypes.INTEGER
        },
        phone: {
            type: dataTypes.INTEGER
        }
    };
    let config = {
        tableName: 'usuarios',
        timestamps: false
    };
    const user = sequelize.define(alias, colum, config)

    return user
}