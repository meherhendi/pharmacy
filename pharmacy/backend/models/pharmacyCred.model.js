const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const pharCredSchema = new Schema({
    username: {type: String, required: true, unique: true},
    password: {type: String, required: true},
},{
    timestamps: true
});
const app = mongoose.model('pharmacyCred', pharCredSchema);

module.exports = app;