const mongoose = require("mongoose");

const ulasanSchema = new mongoose.Schema({
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
    rating: {
        type: Number,
    },
    komentar: {
        type: String,
    },
    tanggal_ulasan: {
        type: Date,
    }
});

const Ulasan = mongoose.model('Ulasan', ulasanSchema);
module.exports = Ulasan;