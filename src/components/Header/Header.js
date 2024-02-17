import "./Header.css";
import avatarDefault from "../../images/Avatar.svg";
import logo from "../../images/Logo.svg";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const currentDate = new Date().toLocaleString("default", {
  month: "long",
  day: "numeric",
});

const Header = ({ onCreateModal, cityName }) => {
  const username = "Terrence Tegegne";

  return (
    <header className="header">
      <div className="header__main">
        <Link to="/">
          <img className="header__logo" src={logo} alt="avatar" />
        </Link>
        <div className="header__date">
          {currentDate}, {cityName}
        </div>
      </div>
      <div className="header__profile">
        <ToggleSwitch />
        <div>
          <button
            className="header__add-button"
            type="text"
            onClick={onCreateModal}
          >
            + Add clothes
          </button>
        </div>
        <Link to="/profile" className="header__profile-name">
          {username}
        </Link>
        <div>
          {avatarDefault ? (
            <img
              className="header__profile-image"
              src={avatarDefault}
              alt="Avatar logo"
            />
          ) : (
            <div className="header__span-container">
              <span className="header__span">
                {username?.toUpperCase().charAt(0) || ""}
              </span>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
