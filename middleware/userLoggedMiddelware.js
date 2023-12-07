const user= require('../src/dataBase/models/user')
const userLoggerMiddelware=(req,res,next)=>{
    res.locals.isLogged = false
    if(req.cookies && req.cookies.name){
        const userFound= user.findByField('name', req.cookies.name)
        if(userFound){
            req.session.userLogged = userFound
        }
    }
    if(req.session.userLogged){
        res.locals.isLogged= true
        res.locals.userLogged= req.session.userLogged
    }
    next()
}

module.exports=userLoggerMiddelware