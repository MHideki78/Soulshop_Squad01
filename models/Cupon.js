const { model, Schema } = require("mongoose");

const Cupon = model(
    "Cupon",
    new Schema({
        codigo: { type: String, required: true},
        valor: { type: Number, required: true},
        validade: { type: String, required: true},        
    })
);

module.exports = Cupon;