import { useEffect, useState } from "react";
import ListContainer from "./ListContainer";
import AddList from "../Components/AddList";
const BoardContainer = () => {
  const [todoList, setTodoList] = useState([]);
  const [showAddListModal, setShowAddListModal] = useState(false);

  useEffect(() => {
    if (window.localStorage) {
      const temp = localStorage.getItem("todoList");
      temp && setTodoList(JSON.parse(temp));
    }
  }, []);

  useEffect(() => {
    if (window.localStorage) {
      localStorage.setItem("todoList", JSON.stringify(todoList));
    }
  }, [todoList]);

  return (
    <div className="boardContainer">
      <ListContainer todoList={todoList} setTodoList={setTodoList} />
      <button
        className="add-list-btn"
        onClick={() => setShowAddListModal(true)}
      >
        Add list
      </button>
      {showAddListModal && (
        <AddList
          todoList={todoList}
          setTodoList={setTodoList}
          setShowAddListModal={setShowAddListModal}
        />
      )}
    </div>
  );
};
export default BoardContainer;
