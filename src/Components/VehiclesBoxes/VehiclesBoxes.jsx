import "./VehiclesBoxes.css"
import reservationStore from "../../store/reservationStore";

const VehiclesBoxes = ({ id, image, type, model, handleShow }) => {
  const store = reservationStore();
  const setVehicle = (model, id) => {
    store.setVehicleModel(model);
    handleShow(id)
  }
  return (
    <div className="boxes">
      <div className="vehicle-image">
        <img src={image} alt="car" />
      </div>
      <div className="about-vehicle">
        <p>{model}</p>
        <p>{type}</p>
      </div>
      <button onClick={() => setVehicle(model, id)}>Pick</button>
    </div>
  );
}

export default VehiclesBoxes