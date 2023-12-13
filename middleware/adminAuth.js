const db = require('../src/dataBase/models');


const adminAuth = async (req, res, next) => {
    console.log(req.query);

    const usernameToCheck = req.query.user;

    try {
        // Utiliza el método findByField proporcionado por Sequelize para buscar un administrador
        const adminUser = await db.administradores.findByField('name', usernameToCheck);
        console.log(adminUser);
        if (adminUser) {
            res.send('Hola admin: ' + adminUser.name);
            next();
        } else {
            res.send("Sin privilegios");
        }
    } catch (error) {
        console.error('Error al buscar el administrador:', error);
        res.status(500).json({ error: 'Error interno del servidor.' });
    }
};

module.exports = adminAuth;
