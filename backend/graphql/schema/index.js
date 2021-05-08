const { buildSchema } = require("graphql");

module.exports = buildSchema(`

type Cart {
  _id: ID!
  user: User!
  product: Product!
  createdAt: String!
  updatedAt: String!
}

type Product {
  _id: ID!
  title: String!
  description: String!
  price: Float!
  category: String!
  creator: User!
}

type User {
  _id: ID!
  email: String!
  password: String
  createdProducts: [Product!]
}
type AuthData {
  userId: ID!
  token: String!
  tokenExpiration: Int!
  username: String!
}

input ProductInput {
  title: String!
  description: String!
  price: Float!
  category: String!
}

input UserInput {
  username: String!
  email: String!
  password: String!
}

type RootQuery {
    products: [Product!]!
    cart: [Cart!]!
    login(email: String!, password: String!): AuthData!
    getProducts(category: String!, priceMin: Float!, priceMax: Float! ): [Product!]!
}

type RootMutation {
    createProduct(productInput: ProductInput): Product
    createUser(userInput: UserInput): User
    AddToCart(productId: ID!): Cart!
    RemoveFromCart(cartId: ID!): Cart!
    
}

schema {
    query: RootQuery
    mutation: RootMutation
}
`);
