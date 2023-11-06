const db= require('../dataBase/models')
const productControllers= {
    //creacion 1
    getcreat: function (req, res) {
        res.render("Crear-producto")
    },
    crear: function (req, res){
        const newproducto= req.body
        console.log(newproducto)
    },
    
    showHome:(req, res)=>{
        db.Products.findAll({raw: true}).then((result) =>
            res.render("index",{producto: result}));
    },
    /*getAllproduct:(req, res)=>{
        db.Products.findAll({raw: true}).then((result) =>
            res.render("prueba",{producto: result}));
    },
    getOneproduct: (req,res) =>{
        const id= req.params.id
        db.Products.findByPk(id,{raw: true}).then(result => {res.render('prueba2', {producto: result});});
    }*/
}

module.exports= productControllers