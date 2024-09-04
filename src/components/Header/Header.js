import "./Header.css";
import logo from "../../images/Logo.svg";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import Nav from "../Nav/Nav";
import BurgerIcon from "../../images/burgerButton.svg";

const currentDate = new Date().toLocaleString("default", {
  month: "long",
  day: "numeric",
});

const Header = ({
  onCreateModal,
  cityName,
  onLogInModal,
  onRegisterModal,
  onMobileModal,
  loggedIn,
}) => {
  return (
    <header className="header">
      <div className="header__main">
        <Link to="/">
          <img className="header__logo" src={logo} alt="avatar" />
        </Link>
        <div className="header__date">
          {currentDate}, {cityName || "Detecting..."}
        </div>
      </div>
      <div className="header__profile">
        <Nav
          onMobileModal={onMobileModal}
          loggedIn={loggedIn}
          onLogInModal={onLogInModal}
          onRegisterModal={onRegisterModal}
          onCreateModal={onCreateModal}
        />
      </div>
      <img
        className="header__hamburger"
        alt="menu icon"
        src={BurgerIcon}
        onClick={onMobileModal}
      />
    </header>
  );
};

export default Header;
