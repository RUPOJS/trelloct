const Card = (props) => {
  const { name, desc, handleRmoveCard, handleCardDrag } = props;
  return (
    <div className="card" onDragStart={handleCardDrag} draggable>
      <div className="card-name">
        <h4>{name}</h4>
        <span className="cross-btn" onClick={handleRmoveCard}>
          X
        </span>
      </div>
      <div className="card-desc">{desc}</div>
    </div>
  );
};

export default Card;
