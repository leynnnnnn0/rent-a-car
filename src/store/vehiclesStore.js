import { create } from "zustand";
import axios from "axios";

const vehiclesStore = create((set) => ({
    vehicles: [],
    vehicleId: "",

    setVehicleId: (vehicleId) => {
        set({ vehicleId });
    },
    
    fetchVehiclesData: async () => {
        try {
            const vehicles = await axios.get("http://localhost:5000/get");
            set({vehicles: vehicles.data})
        } catch (err) {
            console.log(err);
        }
    }
}));


export default vehiclesStore;