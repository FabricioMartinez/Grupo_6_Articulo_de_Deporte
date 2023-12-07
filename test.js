const db= require('./src/dataBase/models')

// console.log(db.Products.findAll()); 

//db.Products.findAll({raw: true}).then(result =>console.log(result));

//db.categoria.findAll({raw: true}).then(result =>console.log(result));

// db.color.findAll({raw: true}).then(result =>console.log(result));

// db.tallas.findAll({raw: true}).then(result =>console.log(result));

// db.usuarios.findAll({raw: true}).then(result =>console.log(result));

//  db.Products.create({
//      name:'Camiseta Argentina 2022',
//      price:12000,
//      description:'pal futbol',
//      id_categoria:2,
//      id_color:6,
//      id_tallas:2
//  }).then(result=>console.log(result))

const bcryptjs= require('bcryptjs')

let hashPassword= bcryptjs.hashSync('123456', 10)
console.log(hashPassword);


const user={
    name: 'pepe',
    mail:'pepito@gmail.com',
    passwosr: '$2a$10$vFg2lP84X1cCbIlG.7okZuvo2.7GvHT/cbGMF5lIYKvGEfwaauEfy'
}


console.log(bcryptjs.compareSync("123456", '$2a$10$vFg2lP84X1cCbIlG.7okZuvo2.7GvHT/cbGMF5lIYKvGEfwaauEfy'));