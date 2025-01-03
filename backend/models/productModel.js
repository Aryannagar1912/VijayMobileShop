const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
  {
    productName: String,
    brandName: String,
    category: String,
    model: String,
    productImage: [],
    description: String,
    price: Number,
    sellingPrice: Number,
  },
  {
    Timestamps: true,
  }
);

const productModel = mongoose.model("product", productSchema);

module.exports = productModel;
