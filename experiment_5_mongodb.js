const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/productdb');

const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  category: String
});

const Product = mongoose.model('Product', productSchema);

async function createProduct() {
  const product = new Product({ name: 'Laptop', price: 55000, category: 'Electronics' });
  await product.save();
  console.log('Product created');
}

async function readProducts() {
  const products = await Product.find();
  console.log(products);
}

async function updateProduct(id) {
  await Product.findByIdAndUpdate(id, { price: 60000 });
  console.log('Product updated');
}

async function deleteProduct(id) {
  await Product.findByIdAndDelete(id);
  console.log('Product deleted');
}

async function run() {
  await createProduct();
  await readProducts();
  const product = await Product.findOne();
  if (product) {
    await updateProduct(product._id);
    await deleteProduct(product._id);
  }
  mongoose.connection.close();
}

run();