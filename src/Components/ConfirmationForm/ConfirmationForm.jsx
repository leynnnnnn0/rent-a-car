import "./ConfirmationForm.css";
import reservationStore from "../../store/reservationStore";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import vehiclesStore from "../../store/vehiclesStore";


const ConfirmationForm = ({handleShow}) => {
    const store = reservationStore();
    const store2 = vehiclesStore();

    const filteredData = store2.vehicles.find(car => car._id === store2.vehicleId);

    const details = store.reservationDetails;
    const pickupDate = new Date(details.pickupDate)
      .toISOString()
        .split("T")[0];
    const returnDate = new Date(details.returnDate).toISOString().split("T")[0];
  return (
    <div className="confirmation-container">
      <div className="confirmation-form">
        <IoArrowBackCircleOutline
          className="exit-button"
          onClick={() => handleShow()}
        />
        <div className="car-details">
          <div>
            <div className="about-car">
              <span>
                {filteredData.type} ({filteredData.model})
              </span>
              <br />
              <span>{filteredData.seats} seats</span>
              <br />
              <span>${filteredData.price.toFixed(2)}/day</span>
            </div>
            <img src={filteredData.image} alt="car" />
          </div>
        </div>
        <form className="details-confirmation">
          <div className="location-confirmation">
            <p>Pickup and return location</p>
            <input
              type="text"
              value={details.pickupLocation}
              name="pickupDate"
              onChange={store.setReservationDetails}
            />
          </div>
          <div className="time-and-date-confirmation">
            <div className="pick-up-confirmation">
              <p>Pick-up time and date</p>
              <input
                type="date"
                className="date-confirmation"
                value={pickupDate}
                onChange={store.setReservationDetails}
              />
              <input
                type="time"
                className="time-confirmation"
                value={details.pickupTime}
                onChange={store.setReservationDetails}
              />
            </div>
            <div className="return-confirmation">
              <p>Return time and date</p>
              <input
                type="date"
                className="date-confirmation"
                value={returnDate}
                onChange={store.setReservationDetails}
              />
              <input
                type="time"
                className="time-confirmation"
                value={details.returnTime}
                onChange={store.setReservationDetails}
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ConfirmationForm;
