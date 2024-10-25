//Controller Index
const index = (req, res) => {
    res.render("index", {title : "Express MVC"});
}

//Controller Produk
const produk = (req, res) => {
    res.render("produk", {title : "Ini Halaman Produk"});
}
module.exports = {index, produk}; //setiap membuat controller, harus meng-EXPORTS agar dapat digunakan oleh routes