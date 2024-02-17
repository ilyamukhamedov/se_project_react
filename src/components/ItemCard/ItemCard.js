import "./ItemCard.css";

const ItemCard = ({ card, onSelectCard }) => {
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
        {/* <button className="card__like-button" /> */}
      </div>
    </div>
  );
};

export default ItemCard;
