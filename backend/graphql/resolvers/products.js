const Product = require("../../models/product");
const User = require("../../models/user");
const Cart = require("../../models/cart");

module.exports = {
  products: async () => {
    try {
      const product = await Product.find();
      console.log(product);
      return product.map((product) => {
        return {
          ...product._doc,
          _id: product.id,
        };
      });
    } catch (err) {
      throw err;
    }
  },

  createProduct: async (args, req) => {
    if (!req.isAuth) {
      throw new Error("you have to log in");
    }
    const product = new Product({
      title: args.productInput.title,
      description: args.productInput.description,
      price: +args.productInput.price,
      category: args.productInput.category,
      creator: req.userId,
    });
    let createdProduct;
    try {
      const result = await product.save();
      createdProduct = {
        ...result._doc,
        _id: result._doc._id.toString(),
        category: product._doc.category,
      };
      const creator = await User.findById(req.userId);

      if (!creator) {
        throw new Error("User not found.");
      }
      creator.createdProducts.push(product);
      await creator.save();

      return createdProduct;
    } catch (err) {
      console.log(err);
      throw err;
    }
  },
};
