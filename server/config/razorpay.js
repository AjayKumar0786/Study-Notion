const Razorpay = require("razorpay");

const key_id = "rzp_test_fUIZAI25WMgGwi"

const key_secret = "o7TBIxOogcPsNQa9pTzsAoYf"

exports.instance = new Razorpay({
    key_id: process.env.RAZORPAY_KEY,
    key_secret: process.env.RAZORPAY_SECRET,
});
