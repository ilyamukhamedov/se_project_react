import "./SideBar.css";
import avatarDefault from "../../images/Avatar.svg";

const SideBar = () => {
  const username = "Terrence Tegegne";

  return (
    <section className="side__section">
      <img className="side__logo" src={avatarDefault} alt="avatar" />
      <h2 className="side__title">{username}</h2>
    </section>
  );
};

export default SideBar;
