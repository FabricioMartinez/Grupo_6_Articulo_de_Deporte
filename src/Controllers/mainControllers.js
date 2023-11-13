const fs= require("fs")
const path = require ("path");
const productsFilePath = path.join(__dirname, '../data/productDatos.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
const {validationResult}= require("express-validator");

const mainController={
    showHome:(req, res)=>{
        res.render("index",{products});
    },

    showCart: (req, res)=>{
    res.render("carrito",  {products ,título: "Productos para comprar"});
    },

    showDetails: (req, res) =>{
        const id= req.params.id;
		const product = products.find((item) => item.id == id);
		res.render("detalles", {product, toThousand})
    },
    
  // Delete - Delete one product from DB
  destroy: (req, res) => {
    // Do the magic
    const id = req.params.id;

    const leftProducts = products.filter((product) => product.id != id);
    fs.writeFileSync(productsFilePath, JSON.stringify(leftProducts));

    res.redirect("/");
  },

    showLogin: (req,res)=>{
    res.render("login");
    const Data =req.body;
    console.log(Data);
    const resultValidation = validationResult(req) ;
    console.log(resultValidation);
    //validación de contraseña - probando
    const contraseña = "P@ssw0rd";
    if (validarContraseña(contraseña)) {
      console.log("Contraseña válida");
    } else {
      console.log("Contraseña no válida");
    }

    },


    showConfirmation: (req,res)=>{
        res.render("admin-confirm");
    },
    //Crear producto:
    showCrear: (req, res)=>{
    res.render("Crear-Producto")
    },
    article:(req, res)=>{
        //Realizar la validaciones
        const resultvalidation= validationResult(req);
        if(resultvalidation.errors.length>0){
            res.render("Crear-Producto",{
                errors: resultvalidation.mapped(),
                oldData:req.body
            })
        }else{
        const data= req.body;
        //console.log(data);
        const index= products[products.length -1].id;
        const NuevoProducto ={
            id: index +1,
            name: data.name ,
            price: data.price,
            discount: data.discount,
            category: data.category,
            description: data.description,
            image: req.file.filename,
        };
        products.push(NuevoProducto);
		fs.writeFileSync(productsFilePath,JSON.stringify (products));
        res.redirect("/");
    }
    },
    //Editar producto
    showEdit: (req,res)=>{
        
        const id = req.params.id;
        const product = products.find(product => product.id == id);
        res.render("edit", {  product : product });
    },
    edit: (req, res) => {
        const id = req.params.id;
        const product = products.find(product => product.id == id);
        res.render('edit', {  product : product });
    },
    update: (req, res) => {
		// Do the magic
		const id= req.params.id;
		const editProduct= req.body;
		const index = products.findIndex(product => product.id == id);
		products[index].name = editProduct.name
		products[index].price = editProduct.price
		products[index].discount = editProduct.discount
		products[index].category = !editProduct.category? products[index]:editProduct.category
		products[index].description = editProduct.description

		fs.writeFileSync(productsFilePath,JSON.stringify (products));
		res.redirect("/");
	},
    showSeleccion: (req, res)=>{
        res.render("Seleccion")
    },
    showproduct: (req, res)=>{
        res.render("product",{products})
    },

    profile: (req, res) => {
        console.log(req.cookies);
        return res.render("userProfile", {
          user: req.session.userLogged,
        });
      },
    
      logout: (req, res) => {
        res.clearCookie("userEmail");
        req.session.destroy(() => {
          res.redirect("/");
        });
      },
    };

module.exports = mainController;

