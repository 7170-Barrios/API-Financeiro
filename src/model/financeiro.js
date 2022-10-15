const mongoose = require("mongoose");

const SchemaFinance = new mongoose.Schema({
    idusuario:{ type: String, required: true},
    nomebanco:{ type: String,required:true},
    tipoconta:{ type: String, required:true},
    nometitular:{ type: String, required:true},
    limitecartao:{type: Number, required:true}
});
module.exports = mongoose.model("financeiro", SchemaFinance);