const { Sequelize } = require('sequelize')
const db= require('../../dataBase/models')


module.exports = {
    list: async (req,res)=>{
        const data= await db.Products.findAll({
            include:['categoria'],
            offset: 0,
        })

        res.json({
            code: 200,
            total: data.length,
            product: data,
        })
    },
    busqueda: async (req, res) => {
        const data = await db.Products.findAll({
            where: {
                name: {
                    [Sequelize.Op.like]: `%${req.query.name}%`
                }
            }
        });
    
        if (data.length === 0) {
            console.log('No se encontraron resultados en la base de datos.');
            fetch(`https://www.omdbapi.com/?apikey=d4e35e92&t=${req.query.name}`)
                .then(response => response.json())
                .then(newData => console.log(newData));
        }
        res.json({
            code: 200,
            total: data.length,
            product: data,
        });
    }
    
}