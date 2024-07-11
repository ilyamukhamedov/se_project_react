import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import { useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";

const Nav = ({
  onCreateModal,
  onRegisterModal,
  onLogInModal,
  loggedIn,
  onClose,
}) => {
  const currentUser = useContext(CurrentUserContext);

  return (
    <>
      <ToggleSwitch />

      {loggedIn ? (
        <>
          <button className="nav__button" type="text" onClick={onCreateModal}>
            + Add clothes
          </button>

          <Link to="/profile" className="nav__profile" onClick={onClose}>
            <p className="nav__profile-name">{currentUser.name}</p>

            {currentUser.avatar.length > 20 ? (
              <img
                className="nav__profile-image"
                src={currentUser.avatar}
                alt="Avatar logo"
              />
            ) : (
              <div className="nav__span-container">
                <span className="nav__span">
                  {currentUser.name.toUpperCase().charAt(0) || ""}
                </span>
              </div>
            )}
          </Link>
        </>
      ) : (
        <>
          <button
            type="button"
            onClick={onRegisterModal}
            className="nav__button"
          >
            Sign Up
          </button>
          <button type="button" onClick={onLogInModal} className="nav__button">
            Log In
          </button>
        </>
      )}
    </>
  );
};

export default Nav;
