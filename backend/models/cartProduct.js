const mongoose = require("mongoose");

const addToCart = mongoose.Schema(
  {
        productId: String,
        quantity: Number,
      userId : String,
  },
  {
    Timestamps: true,
  }
);

const addToCartModel = mongoose.model("addToCart", addToCart);

module.exports = addToCartModel;