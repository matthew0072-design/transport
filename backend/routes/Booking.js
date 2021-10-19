var express = require("express")
var router = express.Router()
const Booking = require("../src/Model/bookingModel")
const User = require("../src/Model/userModel")


router.post("/booking", async(req, res) => {
    
        const user = await User.findById({})    
    try {
        const booking = await new Booking({
            from: req.body.from,
            to: req.body.to,
            owner: req.user._id
        }).save()
            await user.populate("books").execPopulate()
        res.status(201).json({})
        console.log(booking)
    } catch (e) {
        console.log(e)
    }
})



module.exports = router;