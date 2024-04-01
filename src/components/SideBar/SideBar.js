import "./SideBar.css";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import { useContext } from "react";

const SideBar = ({ editProfile, logout }) => {
  const currentUser = useContext(CurrentUserContext);

  return (
    <section className="side__section">
      <div className="side__profile-container">
        {currentUser.avatar.length > 20 ? (
          <img
            className="side__logo"
            src={currentUser?.avatar}
            placeholder={currentUser?.name}
            alt="Avatar"
          />
        ) : (
          <div className="side__span-container">
            <span className="side__span">
              {currentUser.name.toUpperCase().charAt(0) || ""}
            </span>
          </div>
        )}
        <h2 className="side__title">{currentUser?.name}</h2>
      </div>
      <div className="side__options-container">
        <button type="button" className="side__button" onClick={editProfile}>
          Change profile data
        </button>
        <button type="button" className="side__button" onClick={logout}>
          Log out
        </button>
      </div>
    </section>
  );
};

export default SideBar;
