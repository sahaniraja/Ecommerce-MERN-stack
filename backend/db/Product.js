const mongoose = require('mongoose');

const prodSchema = new mongoose.Schema({
    prdname: String,
    prdprice: String,
    prdcat: String,
    userid: String,
    company: String    
});

module.exports = mongoose.model('products', prodSchema);
