// ************ Require's ************
const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");

// ************ Controller Require ************
const mainControllers = require("../controllers/mainController");
// configuracion de multer

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./public/images/products");
  },
  filename: (req, file, cb) => {
    const nameFile = `products_${Date.now()}${path.extname(file.originalname)}`;
    cb(null, nameFile);
  },
});

const uploadFile = multer({ storage });

/*** GET ALL PRODUCTS ***/
router.get("/", mainControllers.index);

// /*** CREATE ONE PRODUCT ***/
router.get("/create", mainControllers.create);
router.post("/", uploadFile.single("productImage"), mainControllers.store);

/*** GET ONE PRODUCT ***/
router.get("/detail/:id", mainControllers.detail);

// /*** EDIT ONE PRODUCT ***/
router.get("/edit/:id", mainControllers.edit);
router.post("/edit/:id", mainControllers.update);

// /*** DELETE ONE PRODUCT***/
router.post("/delete/:id", mainControllers.destroy);

module.exports = router;
