import "./Header.css"
import Nav from "../../Components/Navigation/Nav"
import ReservationForm from "../../Components/ReservationForm/ReservationForm"

const Header = () => {
  return (
    <header className="header-section">
      <div className="nav-content">
        <Nav />
      </div>
      <div className="main-content">
        <ReservationForm />
      </div>
    </header>
  );
}

export default Header