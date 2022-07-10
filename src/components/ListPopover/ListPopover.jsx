import { useData } from "context";
import "./ListPopover.css";

const colors = ["Red", "Blue", "Green"];

const ListPopover = ({ listId }) => {
  const { dispatch } = useData();

  return (
    <div className="list-popover">
      <li
        className="color-item"
        onClick={() => dispatch({ type: "DELETE_LIST", payload: { listId } })}
      >
        Delete
      </li>
      <li className="color-item">Colors</li>
      {colors.map((color) => (
        <li
          key={color}
          className="color-item"
          onClick={() =>
            dispatch({ type: "CHANGE_LIST_COLOR", payload: { listId, color } })
          }
        >
          <span className={`color-box ${color}`}></span>
          {color}
        </li>
      ))}
    </div>
  );
};

export { ListPopover };
