const mongoose = require("mongoose");

const transaksiSchema = new mongoose.Schema({
    produk_id :{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Produk', //ambil dari tabel kategori
        require: true
    },
    penguna_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Pengguna', //ambil dari tabel kategori
        require: true
    },
    jumlah: {
        type: Number,
    },
    total_harga: {
        type: Number,
    },
    tanggal_transaksi: {
        type: Date,
    }
});

const Transaksi = mongoose.model('Transaksi', transaksiSchema);
module.exports = Transaksi;