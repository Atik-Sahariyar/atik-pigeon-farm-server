const { default: mongoose } = require("mongoose");


const CartsSchema = new mongoose.Schema({
    customer_name: {
       type: String,
       required: true
    },
    customer_email: {
        type: String,
        required: true
    },
    owner_email: {
        type: String,
        // required: true
    },
     product_id: {
        type: String,
        required: true
    },
    unit_price: {
        type: Number,
        required: true
    },
    total_price: {
        type: Number,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    product_image: [String],
    stock_limit: Number,
    title: String,
});


const Carts = mongoose.model("Carts", CartsSchema);

module.exports = Carts;
