import "./Profile.css";
import SideBar from "../SideBar/SideBar";
import ClothesSection from "../ClothesSection/ClothesSection";

const Profile = ({ onSelectCard, onCreateModal, clothingItems }) => (
  <section className="profile__content">
    <SideBar />
    <ClothesSection
      onSelectCard={onSelectCard}
      onCreateModal={onCreateModal}
      clothingItems={clothingItems}
    />
  </section>
);

export default Profile;
