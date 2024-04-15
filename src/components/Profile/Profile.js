import "./Profile.css";
import SideBar from "../SideBar/SideBar";
import ClothesSection from "../ClothesSection/ClothesSection";

const Profile = ({
  onSelectCard,
  onCreateModal,
  clothingItems,
  logout,
  editProfile,
  handleCardLike,
}) => (
  <section className="profile__content">
    <SideBar logout={logout} editProfile={editProfile} />
    <ClothesSection
      onSelectCard={onSelectCard}
      onCreateModal={onCreateModal}
      clothingItems={clothingItems}
      handleCardLike={handleCardLike}
    />
  </section>
);

export default Profile;
