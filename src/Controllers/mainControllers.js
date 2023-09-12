const fs= require("fs")
const path = require ("path");
const productsFilePath = path.join(__dirname, '../data/productDatos.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const mainController={
    showHome:(req, res)=>{
        res.render("index",{products});
    },
    showRegister: (req, res)=>{
    res.render("formulario-de-register");
    },


    showCart: (req, res)=>{
    res.render("carrito",  {products ,título: "Productos para comprar"});
    },


    showDetails: (req, res) =>{
        const id= req.params.id;
		const product = products.find((item) => item.id == id);
		res.render("detalles", {product, toThousand})
    },


    showLogin: (req,res)=>{
    res.render("login");
    },


    showConfirmation: (req,res)=>{
        res.render("admin-confirm");
    },

    //Crear producto:
    showCrear: (req, res)=>{
    res.render("Crear-Producto")
    },
    article:(req, res)=>{
        const data= req.body;
        console.log(req.file);
        const index= products[products.length -1].id;
        const NuevoProducto ={
            id: index +1,
            name: data.name,
            price: data.price,
            discount: data.discount,
            category: data.category,
            description: data.description,
            image: req.file.filename,
        };
        products.push(NuevoProducto);
		fs.writeFileSync(productsFilePath,JSON.stringify (products));
        res.redirect("/");
    },


    showEdit: (req,res)=>{
        res.render('edit')
    },


    showSeleccion: (req, res)=>{
        res.render("Seleccion")
    },

    showproduct: (req, res)=>{
        res.render("product",{products})
    }

};

module.exports = mainController;

