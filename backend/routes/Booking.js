var express = require("express")
var router = express.Router()
const Booking = require("../src/Model/bookingModel")
const Auth = require("../src/Middleware/auth");


router.post("/booking", Auth, async(req, res, next) => {
    

    try {
        const booking = await new Booking({
            from: req.body.from,
            to: req.body.to
        }).save()

        res.status(201).json(booking)
        console.log(booking)
    }catch (e) {
        console.log(e)
    }
})

module.exports = router;