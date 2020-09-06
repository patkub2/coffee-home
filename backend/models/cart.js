const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const cartSchema = new mongoose.Schema(
  {
    product: {
      type: Schema.Types.ObjectId,
      ref: "Product",
      autopopulate: true,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      autopopulate: true,
    },
  },
  { timestamps: true }
);

cartSchema.plugin(require("mongoose-autopopulate"));

module.exports = mongoose.model("Cart", cartSchema);
