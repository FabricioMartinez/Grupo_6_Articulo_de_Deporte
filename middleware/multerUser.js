const path = require("path");
const multer= require("multer");

const storage= multer.diskStorage({
    fileFilter: (req, file, cb) => {
        //que tipo de extensiones de archivo están permitidas
        const allowedExtensions = ['.jpg', '.jpeg', '.png'];
        const fileExtension = path.extname(file.originalname).toLowerCase();
    
        if (allowedExtensions.includes(fileExtension)) {
          cb(null, true); //acepta archivo con extensiones permitidas
        } else {
          cb(new Error('El archivo debe tener una extensión .jpg, .jpeg o .png'));
        }
      },
    destination: (req, file, cb)=>{
        cb(null, "./public/images/Home/main")
    },
    filename: (req, file,cb)=>{
        const nameFile= `products_${Date.now()}${path.extname(file.originalname)}`;
        cb(null, nameFile );
    },
});

const uploadFile = multer({ storage }).single("foto")


module.exports=uploadFile