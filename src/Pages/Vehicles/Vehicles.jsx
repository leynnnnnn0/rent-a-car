import "./Vehicles.css";
import Nav from "../../Components/Navigation/Nav";
import vehiclesStore from "../../store/vehiclesStore";
import { useEffect, useState } from "react";
import VehiclesBoxes from "../../Components/VehiclesBoxes/VehiclesBoxes";
// import function to register Swiper custom elements
import { register } from "swiper/element/bundle";
import ConfirmationForm from "../../Components/ConfirmationForm/ConfirmationForm";
// register Swiper custom elements
register();

const Vehicles = () => {
  const store = vehiclesStore();
  const vehicles = store.vehicles;

  const [show, setShow] = useState(false);
  const handleShow = (id) => {
    store.setVehicleId(id);
    setShow(!show);
  }

  useEffect(() => {
    store.fetchVehiclesData();
  }, []);

  const displayVehicles = vehicles.map((car) => {
    return (
      <VehiclesBoxes
        handleShow={handleShow}
            id={car._id}
        key={car.id}
        image={car.image}
        type={car.type}
        model={car.model}
      />
    );
  });

  return (
    <div className="vehicles-section">
      {
        show && <ConfirmationForm handleShow={handleShow} />
      }
      <div className="navigation-section">
        <Nav />
      </div>
      <div className="vehicles-list">{vehicles && displayVehicles}</div>
    </div>
  );
};

export default Vehicles;
