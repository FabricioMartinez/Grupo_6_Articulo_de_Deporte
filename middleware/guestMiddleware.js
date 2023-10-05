//Middleware para rutas accesibles solo sin login
const guestMiddleware = (req, res, next) => {
  if (req.session.userLogged) {
    return res.redirect("/user/profile"); // Redirige al perfil si el usuario está logueado
  }
  next();
};

// Middleware para rutas accesibles solo con login
const authMiddleware = (req, res, next) => {
  if (!req.session.userLogged) {
    return res.redirect("/user/login"); // Redirige al login si el usuario no está logueado
  }
  next();
};