import { create } from "zustand";

const reservationStore = create((set) => ({
  reservationDetails: {
    name: "",
    pickupLocation: "",
    pickupDate: "",
    pickupTime: "",
    returnDate: "",
    returnTime: "",
    vehicleModel: "",
  },

  setVehicleModel: (vehicleModel) => {
    set((state) => ({
      reservationDetails: {
        ...state.reservationDetails,
        vehicleModel: vehicleModel,
      },
    }));
    console.log(reservationStore.getState().reservationDetails);
  },

  setReservationDetails: (e) => {
    const { name, value } = e.target;
    set((state) => ({
      reservationDetails: {
        ...state.reservationDetails,
        [name]: value,
        },
    }));
    },
}));

export default reservationStore;
