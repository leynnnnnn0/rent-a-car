import "./Nav.css"
import Logo from "../../Images/Logo.png"
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="navigation-bar flex-space-between">
        <img src={Logo} alt="logo" />
      <div>
        <Link to="/home">Home</Link>
        <a href="test">Reservation</a>
        <a href="test">About</a>
        <a href="test">Contact</a>
          </div>
          <div className="be-a-member">
              <button>Be A Member</button>
          </div>
    </nav>
  );
}

export default Nav