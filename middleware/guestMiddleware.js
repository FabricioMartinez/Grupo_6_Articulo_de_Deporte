//Middleware para rutas accesibles solo sin login
const guestMiddleware = (req, res, next) => {
  if (req.session.userLogged) {
    return res.redirect("/user/profile"); 
  }
  next();
};

// Middleware para rutas accesibles solo con login
const authMiddleware = (req, res, next) => {
  if (!req.session.userLogged) {
    return res.redirect("/user/login");
  }
   next();
 };