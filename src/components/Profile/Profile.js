import "./Profile.css";
import SideBar from "../SideBar/SideBar";
import ClothesSection from "../ClothesSection/ClothesSection";

const Profile = ({
  onSelectCard,
  onCreateModal,
  clothingItems,
  logout,
  editProfile,
  isloggedIn,
  handleCardLike,
}) => (
  <section className="profile__content">
    <SideBar logout={logout} editProfile={editProfile} />
    <ClothesSection
      onSelectCard={onSelectCard}
      onCreateModal={onCreateModal}
      clothingItems={clothingItems}
      isloggedIn={isloggedIn}
      handleCardLike={handleCardLike}
    />
  </section>
);

export default Profile;
