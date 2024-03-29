import "./ItemCard.css";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useContext } from "react";

const ItemCard = ({ card, onSelectCard, handleCardLike }) => {
  const currentUser = useContext(CurrentUserContext);
  const id = card._id;
  const isLiked = card.likes.some((user) => {
    return user.includes(currentUser?._id);
  });
  const likeButtonClass = `card__like-button ${
    isLiked ? "card__like-button_liked" : ""
  }`;

  const handleLike = () => {
    handleCardLike(id, isLiked);
  };

  return (
    <div className="card__container">
      <div>
        <img
          className="card__image"
          src={card.imageUrl}
          alt={card.name}
          onClick={() => onSelectCard(card)}
        />
      </div>
      <div className="card__name">
        {card.name}
        <button
          className={likeButtonClass}
          type="button"
          onClick={handleLike}
        />
      </div>
    </div>
  );
};

export default ItemCard;
