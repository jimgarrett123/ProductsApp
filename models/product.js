var mongodb = require('mongodb');
var Schema = mongodb.Schema;

var ProductSchema = new Schema({
    name: {type: String, required: true, max: 100},
    price: {type: Number, required: true},
});


// Export the model
module.exports = mongodb.model('Product', ProductSchema);