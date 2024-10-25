const express = require("express");
const router = express.Router();

const produkController = require("../controllers/ControllerProduk");

//Fungsi dan Rute Index
//Untuk memanggil semua data dalam database MonggoDB
router.get("/produk", produkController.Index); 
router.post("/produk/insert", produkController.insert); 
module.exports = router;