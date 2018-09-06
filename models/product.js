var mongodb = require('mongodb');
var Schema = mongodb.Schema;

var ProductSchema = Schema({
    name: String, 
    price: Number
});


// Export the model
module.exports = mongodb.model('Product', ProductSchema);