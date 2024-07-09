import "./ClothesSection.css";
import ItemCard from "../ItemCard/ItemCard";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import { useContext, React } from "react";

const ClothesSection = ({
  onSelectCard,
  onCreateModal,
  clothingItems,
  handleCardLike,
}) => {
  const currentUser = useContext(CurrentUserContext);
  return (
    <div className="clothes__section">
      <div className="clothes__header">
        <h2 className="clothes__header-title">Your Items</h2>
        <button className="clothes__header-button" onClick={onCreateModal}>
          + Add New
        </button>
      </div>

      <ul className="main__items">
        {clothingItems.map((item) => {
          const isOwn = item.owner === currentUser?._id;
          if (isOwn) {
            return (
              <ItemCard
                key={item._id}
                card={item}
                onSelectCard={onSelectCard}
                handleCardLike={handleCardLike}
              />
            );
          } else {
            return null;
          }
        })}
      </ul>
    </div>
  );
};

export default ClothesSection;
