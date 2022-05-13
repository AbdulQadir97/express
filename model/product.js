
const mongoose = require('mongoose');

const { Schema } = mongoose;

const productSchema = new Schema({
  title:  {type: String,  required: true}, // String is shorthand for {type: String}
  price: Number,
  ratings:   Number,
  inStock: Boolean

});
productSchema.static('findByTitle', function(title) { 
    return this.find({ title });
});
const Product = mongoose.model('Product', productSchema);

module.exports = Product;












// const { getDBConnect } = require("../dbConnection")
// class Product {
//     constructor(title) {
//         this.title = title;
//     }

//     async save() {
//         const products = getDBConnect().db().collection('products')
//         await products.insertOne({title: this.title});
//     }

//     static async fetchAll () {
//         const products = [];
//         const productsConnect = getDBConnect().db().collection("products");
//         const productsCursor = await productsConnect.find()
//         // return await productsConnect.find();
//         await productsCursor.forEach( product => {
//             console.log(product);
//             products.push(product);
//         });

//         return products
        
//     }
// }

// module.exports = Product;








