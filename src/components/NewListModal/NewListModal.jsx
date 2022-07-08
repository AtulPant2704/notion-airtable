import { useState } from "react";
import { useData } from "context";
import "./NewListModal.css";

const NewListModal = ({ setDisplayListModal }) => {
  const { state, dispatch } = useData();
  const [listName, setListName] = useState("");

  const addList = () => {
    const findList = state.some((list) => list.name === listName);
    if (listName && !findList) {
      dispatch({ type: "ADD_NEW_LIST", payload: { listName } });
    }
    setDisplayListModal(false);
  };

  return (
    <input
      className="list-input"
      placeholder="Enter name"
      autoFocus
      onBlur={addList}
      onKeyDown={(e) => (e.key === "Enter" ? addList() : null)}
      value={listName}
      onChange={(e) => setListName(e.target.value)}
    />
  );
};

export { NewListModal };
