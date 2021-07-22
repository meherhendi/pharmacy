const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const reserSchema = new Schema({
    patientName: {type: String, required: true},
    patientPhone: {type: String, required: true},
    patientEmail: {type: String, required: true},
    pharmacyId: {type: String, required: true},
    chosenVaccin: {type: String, required: true},
},{
    timestamps: true
});
const app = mongoose.model('reservation', reserSchema);

module.exports = app;