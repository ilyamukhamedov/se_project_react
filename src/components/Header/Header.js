import "./Header.css";
import avatarDefault from "../../images/Avatar.svg";
import logo from "../../images/Logo.svg";

const currentDate = new Date().toLocaleString("default", {
  month: "long",
  day: "numeric",
});

const Header = ({ onCreateModal, cityName }) => {
  const username = "Terrence Tegegne";

  return (
    <header className="header">
      <div className="header__main">
        <div>
          <img className="header__logo" src={logo} alt="avatar" />
        </div>
        <div className="header__date">
          {currentDate}, {cityName}
        </div>
      </div>
      <div className="header__profile">
        <div>
          <button
            className="header__add-button"
            type="text"
            onClick={onCreateModal}
          >
            + Add clothes
          </button>
        </div>
        <div className="header__profile-name">{username}</div>
        <div>
          {avatarDefault ? (
            <img
              className="header__profile-image"
              src={avatarDefault}
              alt="avatar"
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
