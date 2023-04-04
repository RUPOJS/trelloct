import { useState } from "react";
import Modal from "./Modal";

const AddList = (props) => {
  const { todoList, setTodoList, setShowAddListModal } = props;
  const [validationObj, setValidationObj] = useState({});
  const [title, setTitle] = useState("");

  const handleCreateList = () => {
    if (title) {
      const initialCardObj = {
        name: title,
        cards: [],
      };
      setTodoList([...todoList, initialCardObj]);
      setShowAddListModal(false);
    }
    setValidationObj({ title: !title });
  };

  return (
    <Modal
      onClose={() => setShowAddListModal(false)}
      heading="Add a new list type"
    >
      <label htmlFor="title">List Title</label>
      <input
        name="title"
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
          setValidationObj({ title: false });
        }}
        className={validationObj.title ? "error" : ""}
      />
      <button onClick={handleCreateList}>Create List</button>
    </Modal>
  );
};

export default AddList;
