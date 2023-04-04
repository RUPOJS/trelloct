import { useState } from "react";
import Modal from "./Modal";

const AddCard = (props) => {
  const { handleAddCard, setShowAddCardModal } = props;
  const [validationObj, setValidationObj] = useState({});
  const [name, setName] = useState("");
  const [desc, setdesc] = useState("");

  const handleAddCardClick = () => {
    if (name && desc) {
      handleAddCard({ name, desc });
      setShowAddCardModal(false);
    }
    setValidationObj({ desc: !desc, name: !name });
  };

  return (
    <Modal
      onClose={() => setShowAddCardModal(false)}
      heading="Add a new list type"
    >
      <label htmlFor="name">Card name</label>
      <input
        name="name"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
          setValidationObj({ ...validationObj, name: false });
        }}
        className={validationObj.name ? "error" : ""}
      />
      <br />
      <label htmlFor="desc">Card Description</label>
      <textarea
        name="desc"
        value={desc}
        onChange={(e) => {
          setdesc(e.target.value);
          setValidationObj({ ...validationObj, desc: false });
        }}
        className={validationObj.desc ? "error" : ""}
      />
      <br />

      <button onClick={handleAddCardClick}>Create card</button>
    </Modal>
  );
};

export default AddCard;
