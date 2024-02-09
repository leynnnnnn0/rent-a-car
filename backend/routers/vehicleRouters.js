import express from "express";
const route = express.Router();
import { Vehicle } from "../Model/vehicleModel.js";


route.get("/get", async (req, res) => {
    try {
        const result = await Vehicle.find({});
        res.send(result);
    } catch (err) {
        res.json({ message: "error" });
    }
})

route.post("/post", async (req, res) => {
    const { type, model, price, available, electric, seats } = req.body;
    try {
        const vehicle = new Vehicle({
            type: type,
            model: model,
            price: price,
            available: available,
            electric: electric,
            seats: seats
        })

        await vehicle.save();
        res.json({ message: "added" });
        
    } catch (err) {
        console.log(err);
    }
})

route.put('/put/:id', async (req, res) => {
    const { id } = req.params;
    const { image } = req.body;
    try {
        const result = await Vehicle.findByIdAndUpdate(
          id,
          { image: image },
          { new: true }
        );
        res.send(result);
    } catch (err) {
        console.log(err);
    }
})

export default route;
