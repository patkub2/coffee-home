const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  createdProducts: [
    {
      type: Schema.Types.ObjectId,
      ref: "Product",
      autopopulate: true,
    },
  ],
});
userSchema.plugin(require("mongoose-autopopulate"));
module.exports = mongoose.model("User", userSchema);
