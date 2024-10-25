const mongoose = require("mongoose");

const pesananSchema = new mongoose.Schema({
    penguna_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Pengguna', //ambil dari tabel kategori
        require: true
    },
    produk_id :{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Produk', //ambil dari tabel kategori
        require: true
    },
    jumlah: {
        type: Number,
    },
    status: {
        type: String,
    },
    tanggal_pesanan: {
        type: Date,
    }
});

const Pesanan = mongoose.model('Pesanan', pesananSchema);
module.exports = Pesanan;