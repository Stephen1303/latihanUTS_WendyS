const Produk = require("../models/produk");

const Index = async(req, res) => {
    try{
        const produks = await Produk.find();
        res.status(200).json(produks); //200 : OK
        if(!produks){
            res.status(404).json({message: "Collection is Empty"});
        }
    } catch(error) {
        res.status(500).json({message : "Error retrieving users", error});
    }
};

const insert = (req, res, next) => {
    const produk = new Produk({
      nama: req.body.nama,
      deskripsi: req.body.deskripsi,
      harga: req.body.harga,
      stok: req.body.stok,
      kategori_id: req.body.kategori_id,
    });
  
    produk
      .save() //insert
      .then((result) => {
            const responseMessage = {
                code: 200,
                success: true,
                message: "Successfull",
                data: result //result dari yang di input (nama,npm, dsb)
            };
            res.status(200).json(responseMessage);
        })
        .catch((e) => {
            const responseMessage = {
                code: 400,
                success: false,
                message: "Bad request"
            };
            res.status(400).json(responseMessage);
        });
};
module.exports = {Index, insert};