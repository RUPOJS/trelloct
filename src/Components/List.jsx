import { useState } from "react";
import AddCard from "./AddCard";
import Card from "./Card";

const List = (props) => {
  const {
    name,
    cards,
    handleAddCard,
    handleRemoveList,
    handleRmoveCard,
    listIndex,
  } = props;
  const [showAddCardModal, setShowAddCardModal] = useState(false);

  const handleDrop = (e) => {
    e.preventDefault();
    const cardData = JSON.parse(e.dataTransfer.getData("card"));
    handleAddCard(cardData.index, listIndex, cardData.prevListIndex);
    handleRmoveCard(cardData.index, cardData.prevListIndex);
  };

  const handleDropOver = (e) => {
    e.preventDefault();
  };

  const handleCardDrag = (e, index) => {
    e.dataTransfer.setData(
      "card",
      JSON.stringify({ prevListIndex: listIndex, index })
    );
  };

  return (
    <div className="list" onDrop={handleDrop} onDragOver={handleDropOver}>
      <div className="list-name">
        <h3>{name}</h3>
        <hr />
        <span className="cross-btn" onClick={() => handleRemoveList(listIndex)}>
          X
        </span>
      </div>
      <div>
        {cards.map((item, index) => (
          <Card
            {...item}
            key={index}
            handleRmoveCard={() => handleRmoveCard(index, listIndex)}
            handleCardDrag={(e) => handleCardDrag(e, index)}
          />
        ))}
      </div>
      <div className="add-card-btn" onClick={() => setShowAddCardModal(true)}>
        +
      </div>
      {showAddCardModal && (
        <AddCard
          setShowAddCardModal={setShowAddCardModal}
          handleAddCard={(card) => handleAddCard(card, listIndex)}
        />
      )}
    </div>
  );
};

export default List;
