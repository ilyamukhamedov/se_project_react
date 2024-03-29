import "./SideBar.css";
// import avatarDefault from "../../images/Avatar.svg";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useContext, React } from "react";

const SideBar = ({ editProfile, logout }) => {
  const currentUser = useContext(CurrentUserContext);

  return (
    <section className="side__section">
      <div className="side__profile-container">
        <img
          className="side__logo"
          src={currentUser?.avatar}
          placeholder={currentUser?.name}
          alt="Avatar"
        />
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
