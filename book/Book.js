const mongoose = require('mongoose');
const BookSchema = new mongoose.Schema({
    titulo:String,
    precio:number
});

mongoose.model('Book',BookSchema);

module.exports = mongoose.model('Book');