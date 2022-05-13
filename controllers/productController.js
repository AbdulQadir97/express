const Product = require("../model/product");

const postAddProduct = async (req, res) => {
    const product = new Product({
        title: req.body.title,
        price: req.body.price,
        ratings: req.body.rating,
        inStock: true,
    });
    
    await product.save();
    res.send("Saved");
};
const getAddProduct = (req, res)=>{
    res.render('form')
}

const fetchAll = async (req, res)=>{

    const products = await Product.findByTitle('boxes');
    console.log(products);
    res.render("products", {products});
//   const products = await Product.fetchAll()
//   console.log(products);
//   res.render('product', {products})
}


 module.exports = {getAddProduct, postAddProduct, fetchAll}