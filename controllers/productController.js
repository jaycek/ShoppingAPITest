const Product = require("../models/Product")


const getAllProducts = async (req, res) => {
try {
    const products = await Product.find()
    res.status(200).json(products);
} catch (error) {
    res.status(500).json({ error: error.message });
}
   
  }

//Save a product

const createProduct = async (req, res) => {

    const {name,price,description,image} = req.body

    try {
        const newProduct = new Product({name,price,description,image})
        await newProduct.save()
        res.status(201).json(newProduct);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
       
    }

const getProductById = async (req, res) => {
try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: 'Product not found' });
    res.json(product);
} catch (error) {
    res.status(500).json({ error: error.message });
}
};

//update
const updateProduct = async (req, res) => {
    try {
      const updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!updatedProduct) return res.status(404).json({ message: 'Product not found' });
      res.json(updatedProduct);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  //delete
  const deleteProduct = async (req, res) => {
    try {
      const deletedProduct = await Product.findByIdAndDelete(req.params.id);
      if (!deletedProduct) return res.status(404).json({ message: 'Product not found' });
      res.json({ message: 'Product deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
module.exports={getAllProducts,createProduct,getProductById,updateProduct,deleteProduct}