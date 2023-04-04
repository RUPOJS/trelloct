import List from "../Components/List";

const ListContainer = (props) => {
  const { todoList, setTodoList } = props;

  const handleAddCard = (card, listIndex, prevListIndex) => {
    const currentList = [...todoList];
    if (prevListIndex !== undefined) {
      const cardToAdd = currentList[prevListIndex].cards[card];
      currentList[listIndex].cards.unshift(cardToAdd);
    } else {
      currentList[listIndex].cards.push(card);
    }
    setTodoList(currentList);
  };

  const handleRemoveList = (listIndex) => {
    const currentList = [...todoList];
    currentList.splice(listIndex, 1);
    setTodoList(currentList);
  };

  const handleRmoveCard = (cardIndex, listIndex) => {
    const currentList = [...todoList];
    currentList[listIndex].cards.splice(cardIndex, 1);
    setTodoList(currentList);
  };

  return (
    <div className="listContainer">
      {todoList.map((item, index) => (
        <List
          {...item}
          key={index}
          handleAddCard={handleAddCard}
          handleRemoveList={handleRemoveList}
          handleRmoveCard={handleRmoveCard}
          listIndex={index}
        />
      ))}
    </div>
  );
};

export default ListContainer;
