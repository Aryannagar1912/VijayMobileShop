const stripe = require('../../config/stripe');
const userModel = require('../../models/userModel');

const paymentController = async(req, res) => {
    try {
        const { cartItems } = req.body

        const user = await userModel.findOne({ _id : req.userId })

        const params = {
            submit_type: 'pay',
            mode: "payment",
            payment_method_types: ['card'],
            billing_address_collection: 'auto',
            shipping_option: [
                {
                    shipping_rate : 'shr_1QzPXLFooVG8HRiU2lQnUo1M'
                },
            ],
            customer_email: user.email,
            line_items: cartItems.map((item, index) => {
                return {
                    price_data: {
                        currency: 'inr',
                        product_data: {
                            name: item.productId.productName,
                            images: item.productId.productImage,
                            metaData: {
                                productId : item.productId._id
                            }
                        },
                        unit_amount : item.productId.sellingPrice
                    },
                    adjustable_quantity: {
                        enabled: true,
                        minimum : 1
                    },
                    quantity : item.quantity 
                }
            }),

            success_url: `${process.env.FRONTEND_URL}/success`,
            cancel_url : `${process.env.FRONTEND_URL}/cancel`
        }

        const session = await stripe.checkout.sessions.create(params)

        res.status(303).json(session)

    } catch (error) {
        Response.json({
            message: error?.message || error,
            error: true,
            success : false
        })
    }
}



module.exports = paymentController;