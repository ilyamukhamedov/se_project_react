import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import { useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";

const Nav = ({ onCreateModal, onRegisterModal, onLogInModal, loggedIn }) => {
  const currentUser = useContext(CurrentUserContext);

  return (
    <>
      <ToggleSwitch />

      {loggedIn ? (
        <>
          <div>
            <button className="nav__button" type="text" onClick={onCreateModal}>
              + Add clothes
            </button>
          </div>
          <Link to="/profile" className="nav__profile-name">
            {currentUser.name}
          </Link>
          <div>
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
          </div>
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
