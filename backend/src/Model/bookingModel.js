const mongoose = require("mongoose")
const {Schema} = mongoose

const bookingSchema = new Schema({
    from: {
      type: String,
      required: [true, "Your Picking point is required"],
    },

    to: {
      type: String,
      required: [true, "Your Destination is required"],
    },

    

})

const bookingModel = mongoose.model("book", bookingSchema);

module.exports = bookingModel;
