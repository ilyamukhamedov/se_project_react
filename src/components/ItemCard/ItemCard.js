import "./ItemCard.css";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import { useContext } from "react";

const ItemCard = ({ card, onSelectCard, handleCardLike, isLoggedIn }) => {
  const currentUser = useContext(CurrentUserContext);
  const id = card._id;
  const isLiked = card.likes.some((user) => user === currentUser?._id);
  const likeButtonClass = `card__like-button ${
    isLiked ? "card__like-button_liked" : ""
  }`;

  const handleLike = () => {
    handleCardLike(id, isLiked);
  };

  return (
    <li className="card__container">
      <div className="card__header">
        <h1 className="card__name"> {card.name}</h1>
        {isLoggedIn && (
          <button
            className={likeButtonClass}
            type="button"
            onClick={handleLike}
          />
        )}
      </div>
      <img
        className="card__image"
        src={card.imageUrl}
        alt={card.name}
        onClick={() => onSelectCard(card)}
      />
    </li>
  );
};

export default ItemCard;
