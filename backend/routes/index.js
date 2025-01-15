const express = require("express");
const userSignupController = require("../controller/user/userSignup.js");
const userSigninController = require("../controller/user/userSignin.js");
const userDetailsController = require("../controller/user/userDetails.js");
const authToken = require("../middleware/authToken.js");
const userLogout = require("../controller/user/userLogout.js");
const allUsers = require("../controller/user/allUsers.js");
const updateUser = require("../controller/user/updateuser.js");
const uploadProductController = require("../controller/product/uploadProduct.js");
const getProductController = require("../controller/product/getProduct.js");
const updateProductController = require("../controller/product/updateProduct.js");
const getCategoryProductOne = require("../controller/product/getCategoryProductOne.js");
const getCategoryWiseProduct = require("../controller/product/getCategoryWiseProduct.js");
const getProductDetails = require("../controller/product/getProductDetails.js");
const addToCartController = require("../controller/user/addToCartController.js");
const countAddToCartProduct = require("../controller/user/countAddToCartProduct.js");
const addToCartViewProduct = require("../controller/user/addToCartViewProduct.js");

const router = express.Router();

router.post("/signup", userSignupController);
router.post("/signin", userSigninController);
router.get("/user-details", authToken, userDetailsController);
router.get("/userLogout", userLogout);

//admin-panel
router.get("/all-users", authToken, allUsers);
router.post("/update-user", authToken, updateUser);

//product
router.post("/upload-product", authToken, uploadProductController);
router.get("/get-product", getProductController);
//update product
router.post("/update-product", authToken, updateProductController);
router.get("/get-categoryProduct", getCategoryProductOne);
router.post("/category-product", getCategoryWiseProduct);
router.post("/product-details", getProductDetails);

//user add to cart
router.post("/addtocart", authToken, addToCartController)
router.get("/countAddToCartProduct", authToken, countAddToCartProduct)
router.get("/view-card-product", authToken, addToCartViewProduct)

module.exports = router;
