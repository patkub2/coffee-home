const router = require("express").Router();
let Product = require("../models/product.model");

router.route("/").get((req, res) => {
  Product.find()
    .then((product) => res.json(product))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const name = req.body.name;
  const description = req.body.description;
  const category = req.body.category;
  const value = Number(req.body.value);
  const img = req.body.img;
  const date = Date.parse(req.body.date);

  const newProduct = new Product({
    name,
    description,
    category,
    value,
    img,
    date,
  });

  newProduct
    .save()
    .then(() => res.json("Procdut added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
