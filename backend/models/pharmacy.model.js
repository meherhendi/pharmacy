const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const pharSchema = new Schema({
    name: {type: String, required: true},
    adress: {type: String, required: true},
    phone: {type: String, required: true},
    Email: {type: String, required: true},
    Vaccin: {type: Array, required: true},
},{
    timestamps: true
});
const app = mongoose.model('pharmacy', pharSchema);

module.exports = app;