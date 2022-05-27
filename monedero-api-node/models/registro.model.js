let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let objetoSchema = new Schema({
    nombre: { type: String, required: true },
    tipo: { type: String, required: true }, //I:ingreseo, E:egreso
    monto: { type: Number, required: true },
    fecha_registro: { type: Date, default: Date.now() }
});
module.exports = mongoose.model('registro',objetoSchema);