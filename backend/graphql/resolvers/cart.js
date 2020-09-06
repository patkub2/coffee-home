const Product = require("../../models/product");
const Cart = require("../../models/cart");

module.exports = {
  cart: async (args, req) => {
    if (!req.isAuth) {
      throw new Error("you have to log in");
    }
    try {
      const cart = await Cart.find();
      return cart.map((cart) => {
        return {
          ...cart._doc,
          _id: cart.id,
          // user: singleUser.bind(this, cart._doc.user),
          // product: singleProduct.bind(this, cart._doc.product),
          createdAt: new Date(cart._doc.createdAt).toISOString(),
          updatedAt: new Date(cart._doc.updatedAt).toISOString(),
        };
      });
    } catch (err) {
      throw err;
    }
  },

  AddToCart: async (args, req) => {
    if (!req.isAuth) {
      throw new Error("you have to log in");
    }
    try {
      const existingProduct = await Product.findOne({ _id: args.productId });
      const cart = new Cart({
        product: existingProduct,
        user: req.userId,
      });
      const result = await cart.save();

      return { ...result._doc, _id: result.id };
    } catch (err) {
      throw err;
    }
  },
  RemoveFromCart: async (args, req) => {
    if (!req.isAuth) {
      throw new Error("you have to log in");
    }
    try {
      const cart = await Cart.findById(args.cartId);
      //console.log(cart.product._doc);
      const products = {
        ...cart._doc,
        _id: cart.id,
      };

      await Cart.deleteOne({ _id: args.cartId });

      return products;
    } catch (err) {
      throw err;
    }
  },
};
