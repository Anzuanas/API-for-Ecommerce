const express = require("express");
const Stripe = require("stripe"); // No need for curly braces
const dotenv = require("dotenv");
const router = express.Router();

dotenv.config();
const stripe = new Stripe(process.env.STRIPE_KEY);

router.post("/payment", (req, res) => {
  stripe.charges.create(
    {     
      source: req.body.tokenId,
      amount: req.body.amount,
      currency: "usd",
    },
    (stripeErr, stripeRes) => {
      if (stripeErr) {
        console.log(stripeErr);
        res.status(500).json(stripeErr);
      } else {
        console.log(stripeRes);
        res.status(200).json(stripeRes);
      }
    }
  );
});

module.exports = router;