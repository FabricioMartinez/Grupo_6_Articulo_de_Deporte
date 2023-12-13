const express= require('express');
const apiControllerProduct = require('../../Controllers/apis/apiControllerProduct');
const router = express.Router();

router.get('/product', apiControllerProduct.list)

router.get('/buscar', apiControllerProduct.busqueda)

module.exports=router