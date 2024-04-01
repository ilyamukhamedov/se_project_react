import "./Header.css";
// import avatarDefault from "../../images/Avatar.svg";
import logo from "../../images/Logo.svg";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";

const currentDate = new Date().toLocaleString("default", {
  month: "long",
  day: "numeric",
});

const Header = ({
  onCreateModal,
  cityName,
  onLogInModal,
  onRegisterModal,
  loggedIn,
  isOpen
}) => {
  const currentUser = useContext(CurrentUserContext);

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
        <ToggleSwitch isOpen={isOpen} />
        {loggedIn ? (
          <>
            <div>
              <button
                className="header__button"
                type="text"
                onClick={onCreateModal}
              >
                + Add clothes
              </button>
            </div>
            <Link to="/profile" className="header__profile-name">
              {currentUser.name}
            </Link>
            <div>
              {currentUser ? (
                <img
                  className="header__profile-image"
                  src={currentUser.avatar}
                  alt="Avatar logo"
                />
              ) : (
                <div className="header__span-container">
                  <span className="header__span">
                    {currentUser.name.toUpperCase().charAt(0) || ""}
                  </span>
                </div>
              )}
            </div>
          </>
        ) : (
          <>
            <button
              type="button"
              onClick={onRegisterModal}
              className="header__button"
            >
              Sign Up
            </button>
            <button
              type="button"
              onClick={onLogInModal}
              className="header__button"
            >
              Log In
            </button>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
