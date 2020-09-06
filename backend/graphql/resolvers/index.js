const authResolver = require("./auth");
const cartResolver = require("./cart");
const productsResolver = require("./products");

const rootResolver = {
  ...authResolver,
  ...cartResolver,
  ...productsResolver,
};
module.exports = rootResolver;
