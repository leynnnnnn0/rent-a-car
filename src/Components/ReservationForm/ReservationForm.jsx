import "./ReservationForm.css";
import reservationStore from "../../store/reservationStore";
import {useNavigate} from "react-router-dom";

const ReservationForm = () => {
  const navigate = useNavigate();
  const store = reservationStore();
  const details = store.reservationDetails;
  return (
    <form className="reservation-form flex-center">
      <div className="pick-up-container">
        <span>Pick-up & return</span>
        <input
          type="text"
          id="pick-up"
          name="pickupLocation"
          value={details.pickupLocation}
          onChange={store.setReservationDetails}
        />
      </div>
      <div className="time-info">
        <div className="pick-up-time">
          <span>Pick-up date</span>
          <div>
            <input
              type="date"
              id="pick-up-date"
              name="pickupDate"
              value={details.pickupDate}
              onChange={store.setReservationDetails}
            />
            <input
              type="time"
              id="pick-up-time"
              name="pickupTime"
              value={details.pickupTime}
              onChange={store.setReservationDetails}
            />
          </div>
        </div>
        <div className="return-time">
          <span>Return time</span>
          <div>
            <input
              type="date"
              id="return-date"
              name="returnDate"
              value={details.returnDate}
              onChange={store.setReservationDetails}
            />
            <input
              type="time"
              id="return-time"
              name="returnTime"
              value={details.returnTime}
              onChange={store.setReservationDetails}
            />
          </div>
        </div>
      </div>
      <div className="show-cars">
        <button onClick={() => navigate("/vehicles")}>Proceed</button>
      </div>
    </form>
  );
};

export default ReservationForm;
