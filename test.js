const db= require('./src/dataBase/models')

// console.log(db.Products.findAll()); 

db.Products.findAll({raw: true}).then(result =>console.log(result));

db.categoria.findAll({raw: true}).then(result =>console.log(result));

db.color.findAll({raw: true}).then(result =>console.log(result));

db.tallas.findAll({raw: true}).then(result =>console.log(result));

db.usuarios.findAll({raw: true}).then(result =>console.log(result));