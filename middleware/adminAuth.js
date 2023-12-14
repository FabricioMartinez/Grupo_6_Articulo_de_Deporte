// isAdmin.js

exports.isAdmin = (req, res, next) => {
    if (req.session.userLogged && req.session.userLogged.rol && req.session.userLogged.rol === 'admin') {
        return next();
    }
    console.log('Usuario no autorizado o estructura de sesión no válida:', req.session.userLogged);
    return next(); // Continúa al controlador y deja que maneje la redirección
};
