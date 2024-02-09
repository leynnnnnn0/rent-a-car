import mongoose from "mongoose";

const vehicleSchema = new mongoose.Schema({
    image: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    model: {
        type: String,
        required: true
    }, 
    price: {
        type: Number,
        required: true
    },
    available: {
        type: Boolean,
        required: true
    },
    electric: {
        type: Boolean,
        required: true
    },
    seats: {
        type: Number,
        required: true
    }

})

const Vehicle = mongoose.model("vehicles", vehicleSchema);

export { Vehicle };