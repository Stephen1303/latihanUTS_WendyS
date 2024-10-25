const mongoose = require("mongoose");

const pembayaranSchema = new mongoose.Schema({
    transaksi_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Transaksi', //ambil dari tabel kategori
        require: true
    },
    metode_pembayaran :{
        type: String,
    },
    jumlah: {
        type: Number,
    },
    tanggal_pembayaran: {
        type: Date,
    },
    status: {
        type: String,
    },
});

const Pembayaran = mongoose.model('Pembayaran', pembayaranSchema);
module.exports = Pembayaran;