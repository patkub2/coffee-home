const router = require("express").Router();
let Booking = require("../models/user.model");

router.route("/").get((req, res) => {
  Booking.find()
    .then((booking) => res.json(booking))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  const newBooking = new Booking({ username, password });

  newBooking
    .save()
    .then(() => res.json("Booking added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
