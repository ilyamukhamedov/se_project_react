import "./ClothesSection.css";
import ItemCard from "../ItemCard/ItemCard";
import React from "react";

const ClothesSection = ({ onSelectCard, onCreateModal, clothingItems }) => {
  return (
    <div className="clothes__section">
      <div className="clothes__header">
        <h2 className="clothes__header-title">Your Items</h2>
        <button className="clothes__header-button" onClick={onCreateModal}>
          + Add New
        </button>
      </div>

      <ul className="clothes__cards-list">
        {clothingItems.map((item) => {
          return (
            <ItemCard key={item._id} card={item} onSelectCard={onSelectCard} />
          );
        })}
      </ul>
    </div>
  );
};

export default ClothesSection;
